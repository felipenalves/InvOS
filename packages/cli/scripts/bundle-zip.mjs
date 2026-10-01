#!/usr/bin/env node
import {
  copyFileSync, cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync,
  renameSync, rmSync, writeFileSync,
} from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const cliDir = resolve(scriptDir, '..');
const repoRoot = resolve(cliDir, '../..');
const kitDir = join(cliDir, 'kit');
const pkg = JSON.parse(readFileSync(join(cliDir, 'package.json'), 'utf8'));
const archiveName = `INVOS-${pkg.version}.zip`;
const downloadsDir = join(repoRoot, 'downloads');
const tempDir = mkdtempSync(join(tmpdir(), `invos-zip-${pkg.version}-`));
const stageDir = join(tempDir, 'stage');
const stagedPackage = join(stageDir, 'package');

const guide = [
  '# Instalar o INVOS pelo ZIP',
  '',
  'Requisito: Node.js 18 ou superior.',
  '',
  '## Criar um projeto novo',
  '',
  'Abra o terminal na pasta extraída e rode:',
  '',
  '```bash',
  'node package/bin/invos.js init --name meu-negocio',
  'cd meu-negocio',
  '```',
  '',
  'Abra a pasta criada no seu agente de IA e rode /instalar.',
  '',
  '## Instalar em uma pasta existente',
  '',
  '```bash',
  'node package/bin/invos.js install --dir "/caminho/do/seu-projeto"',
  '```',
  '',
].join('\n');

try {
  if (!existsSync(join(kitDir, 'INVOS.json'))) {
    throw new Error('kit/ não encontrado; rode npm run bundle-kit antes.');
  }

  mkdirSync(stageDir, { recursive: true });
  mkdirSync(stagedPackage, { recursive: true });

  for (const entry of pkg.files || []) {
    const source = join(cliDir, entry);
    if (!existsSync(source)) throw new Error(`arquivo do pacote ausente: ${entry}`);
    cpSync(source, join(stagedPackage, entry), { recursive: true, force: true });
  }
  copyFileSync(join(cliDir, 'package.json'), join(stagedPackage, 'package.json'));
  writeFileSync(
    join(stagedPackage, 'README.md'),
    '# Pacote instalável do INVOS\n\nSiga as instruções em `../INSTALAR.md` para instalar o INVOS.\n',
  );
  writeFileSync(join(stageDir, 'INSTALAR.md'), guide);

  const stagedArchive = join(tempDir, archiveName);
  execFileSync('zip', ['-q', '-X', '-r', stagedArchive, 'package', 'INSTALAR.md'], {
    cwd: stageDir,
    stdio: 'inherit',
  });

  mkdirSync(downloadsDir, { recursive: true });
  const output = join(downloadsDir, archiveName);
  const pending = join(downloadsDir, `.${archiveName}.${process.pid}.tmp`);
  copyFileSync(stagedArchive, pending);
  renameSync(pending, output);
  console.log(`✓ ZIP → ${output} (v${pkg.version})`);
} catch (error) {
  console.error(`bundle-zip: ${error.message}`);
  process.exitCode = 1;
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
