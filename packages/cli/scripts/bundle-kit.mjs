#!/usr/bin/env node
/**
 * Copia arquivos versionados da raiz InvOS.v2 → packages/cli/kit,
 * excluindo dados locais, packages/, .git e .claude.
 */
import {
  existsSync, mkdirSync, lstatSync, copyFileSync, rmSync, writeFileSync, readFileSync,
} from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CLI = resolve(__dirname, '..');
const KIT_SRC = resolve(CLI, '../..'); // InvOS.v2
const KIT_DST = resolve(CLI, 'kit');

const SKIP = new Set([
  'node_modules', '.git', '.DS_Store', 'packages', '.claude',
  'INVOS-LOCK.json', '.vercel', 'dist', 'downloads', 'dados',
  '_memoria',
  '.env', '.env.local', '.env.development', '.env.production',
]);
const MEMORY_FILES = ['empresa.md', 'preferencias.md', 'estrategia.md'];

if (!existsSync(join(KIT_SRC, 'INVOS.json'))) {
  console.error('INVOS.json missing at', KIT_SRC);
  process.exit(1);
}

console.log('bundle ←', KIT_SRC);
if (existsSync(KIT_DST)) rmSync(KIT_DST, { recursive: true, force: true });
mkdirSync(KIT_DST, { recursive: true });

const trackedPaths = execFileSync('git', ['ls-files', '-z'], {
  cwd: KIT_SRC,
  encoding: 'utf8',
}).split('\0').filter(Boolean);

for (const relativePath of trackedPaths) {
  const segments = relativePath.split('/');
  const isDropZoneReadme = relativePath === 'dados/README.md';
  if (segments.some(name => SKIP.has(name)) && !isDropZoneReadme) continue;
  if (segments[0].startsWith('.') && !['.agents', '.gitignore', '.env.example'].includes(segments[0])) continue;

  const source = join(KIT_SRC, relativePath);
  if (!existsSync(source)) continue;
  const info = lstatSync(source);
  if (info.isSymbolicLink() || !info.isFile()) continue;

  const destination = join(KIT_DST, relativePath);
  mkdirSync(dirname(destination), { recursive: true });
  copyFileSync(source, destination);
}

const memoryTemplates = join(CLI, 'templates', 'memory');
const kitMemory = join(KIT_DST, '_memoria');
mkdirSync(kitMemory, { recursive: true });
for (const name of MEMORY_FILES) {
  const template = join(memoryTemplates, name);
  if (!existsSync(template)) throw new Error(`memory template missing: ${template}`);
  copyFileSync(template, join(kitMemory, name));
}

const pkg = JSON.parse(readFileSync(join(CLI, 'package.json'), 'utf8'));
const invosPath = join(KIT_DST, 'INVOS.json');
const invos = JSON.parse(readFileSync(invosPath, 'utf8'));
invos.version = pkg.version;
writeFileSync(invosPath, JSON.stringify(invos, null, 2) + '\n');

console.log('✓ kit →', KIT_DST, `v${pkg.version}`);
