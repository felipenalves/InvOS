import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import {
  copyFileSync, existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const cliDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const kitMemory = join(cliDir, 'kit', '_memoria');
const templateMemory = join(cliDir, 'templates', 'memory');
const starterFiles = ['empresa.md', 'preferencias.md', 'estrategia.md'];

execFileSync(process.execPath, [join(cliDir, 'scripts', 'bundle-kit.mjs')], {
  stdio: 'ignore',
});

for (const file of starterFiles) {
  const bundled = readFileSync(join(kitMemory, file), 'utf8');
  const template = readFileSync(join(templateMemory, file), 'utf8');

  assert.ok(
    bundled.includes('<!-- Preenchido pelo /instalar -->'),
    `kit memory ${file} must be a blank /instalar placeholder`,
  );
  assert.equal(
    bundled,
    template,
    `kit memory ${file} must match its generic template and exclude maintainer data`,
  );
}

assert.deepEqual(
  readdirSync(kitMemory).sort(),
  [...starterFiles].sort(),
  'kit memory must contain only generic starter files',
);

const fixtureRoot = mkdtempSync(join(tmpdir(), 'invos-bundle-kit-test-'));
const fixtureCli = join(fixtureRoot, 'packages', 'cli');
const fixtureKitScript = join(fixtureCli, 'scripts', 'bundle-kit.mjs');
const fixtureTemplates = join(fixtureCli, 'templates', 'memory');

try {
  mkdirSync(join(fixtureCli, 'scripts'), { recursive: true });
  mkdirSync(fixtureTemplates, { recursive: true });
  mkdirSync(join(fixtureRoot, '_memoria'), { recursive: true });
  mkdirSync(join(fixtureRoot, 'dados'), { recursive: true });
  writeFileSync(join(fixtureRoot, '.gitignore'), 'dados/*\n!dados/README.md\n.env*\n*.log\n.vscode/\n');
  writeFileSync(join(fixtureRoot, 'INVOS.json'), '{"version":"2.0.7"}\n');
  writeFileSync(join(fixtureCli, 'package.json'), '{"version":"2.0.7"}\n');
  writeFileSync(join(fixtureRoot, 'dados', 'README.md'), 'Drop zone instructions.\n');
  writeFileSync(join(fixtureRoot, 'dados', 'private-tracked.csv'), 'tracked private customer records\n');
  writeFileSync(join(fixtureRoot, '_memoria', 'empresa.md'), 'PRIVATE MAINTAINER DATA\n');
  copyFileSync(join(cliDir, 'scripts', 'bundle-kit.mjs'), fixtureKitScript);
  for (const file of starterFiles) {
    copyFileSync(join(templateMemory, file), join(fixtureTemplates, file));
  }

  execFileSync('git', ['init', '--quiet'], { cwd: fixtureRoot });
  execFileSync('git', ['add', '--all'], { cwd: fixtureRoot });
  execFileSync('git', ['add', '--force', 'dados/private-tracked.csv'], { cwd: fixtureRoot });
  writeFileSync(join(fixtureRoot, 'dados', 'private.csv'), 'private customer records\n');
  writeFileSync(join(fixtureRoot, '.env.local'), 'SECRET=not-for-release\n');
  writeFileSync(join(fixtureRoot, 'debug.log'), 'local diagnostics\n');
  mkdirSync(join(fixtureRoot, '.vscode'), { recursive: true });
  writeFileSync(join(fixtureRoot, '.vscode', 'settings.json'), '{"local":"setting"}\n');

  execFileSync(process.execPath, [fixtureKitScript], { cwd: fixtureRoot, stdio: 'ignore' });

  const fixtureKit = join(fixtureCli, 'kit');
  assert.equal(
    readFileSync(join(fixtureKit, 'dados', 'README.md'), 'utf8'),
    'Drop zone instructions.\n',
    'kit must retain the tracked generic drop-zone instructions',
  );
  assert.deepEqual(
    readdirSync(join(fixtureKit, 'dados')),
    ['README.md'],
    'kit must exclude even explicitly tracked private files from the drop zone',
  );
  for (const path of [
    'dados/private-tracked.csv', 'dados/private.csv', '.env.local', 'debug.log', '.vscode/settings.json',
  ]) {
    assert.equal(existsSync(join(fixtureKit, path)), false, `kit must exclude local file ${path}`);
  }
  assert.equal(
    readFileSync(join(fixtureKit, '_memoria', 'empresa.md'), 'utf8'),
    readFileSync(join(fixtureTemplates, 'empresa.md'), 'utf8'),
    'kit must replace tracked maintainer memory with the generic template',
  );
} finally {
  rmSync(fixtureRoot, { recursive: true, force: true });
}

console.log('✓ kit excludes maintainer memory and untracked local data');
