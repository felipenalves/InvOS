#!/usr/bin/env node
/**
 * Copia a raiz InvOS.v2 → packages/cli/kit (sem packages/, .git, .claude)
 */
import {
  existsSync, mkdirSync, readdirSync, statSync, copyFileSync, rmSync, writeFileSync, readFileSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CLI = resolve(__dirname, '..');
const KIT_SRC = resolve(CLI, '../..'); // InvOS.v2
const KIT_DST = resolve(CLI, 'kit');

const SKIP = new Set([
  'node_modules', '.git', '.DS_Store', 'packages', '.claude',
  'INVOS-LOCK.json', '.vercel', 'dist',
  '.env', '.env.local', '.env.development', '.env.production',
]);

function copyTree(src, dst) {
  if (statSync(src).isDirectory()) {
    mkdirSync(dst, { recursive: true });
    for (const name of readdirSync(src)) {
      if (name === 'node_modules' || name === '.git' || name === '.DS_Store' || name === '.claude') continue;
      copyTree(join(src, name), join(dst, name));
    }
    return;
  }
  mkdirSync(dirname(dst), { recursive: true });
  copyFileSync(src, dst);
}

if (!existsSync(join(KIT_SRC, 'INVOS.json'))) {
  console.error('INVOS.json missing at', KIT_SRC);
  process.exit(1);
}

console.log('bundle ←', KIT_SRC);
if (existsSync(KIT_DST)) rmSync(KIT_DST, { recursive: true, force: true });
mkdirSync(KIT_DST, { recursive: true });

for (const name of readdirSync(KIT_SRC)) {
  if (SKIP.has(name)) continue;
  if (name.startsWith('.') && !['.agents', '.gitignore', '.env.example'].includes(name)) continue;
  copyTree(join(KIT_SRC, name), join(KIT_DST, name));
}

const pkg = JSON.parse(readFileSync(join(CLI, 'package.json'), 'utf8'));
const invosPath = join(KIT_DST, 'INVOS.json');
const invos = JSON.parse(readFileSync(invosPath, 'utf8'));
invos.version = pkg.version;
writeFileSync(invosPath, JSON.stringify(invos, null, 2) + '\n');

console.log('✓ kit →', KIT_DST, `v${pkg.version}`);
