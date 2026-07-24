#!/usr/bin/env node
/**
 * Copia o kit INVOS (sem packages/, .git, etc.) para packages/cli/kit/
 * para o npm package ser auto-contido (npx invos em qualquer máquina).
 */
import {
  existsSync, mkdirSync, readdirSync, statSync, copyFileSync, rmSync, writeFileSync, readFileSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CLI_ROOT = resolve(__dirname, '..');
const KIT_SRC = resolve(CLI_ROOT, '../..'); // projetos/invos
const KIT_DST = resolve(CLI_ROOT, 'kit');

const SKIP_TOP = new Set([
  'node_modules', '.git', '.DS_Store', 'packages', '.claude',
  'INVOS-LOCK.json', '.vercel', 'dist', 'coverage',
]);

function copyTree(src, dst) {
  const st = statSync(src);
  if (st.isDirectory()) {
    mkdirSync(dst, { recursive: true });
    for (const name of readdirSync(src)) {
      if (name === 'node_modules' || name === '.git' || name === '.DS_Store') continue;
      if (name === '.claude') continue;
      copyTree(join(src, name), join(dst, name));
    }
    return;
  }
  mkdirSync(dirname(dst), { recursive: true });
  copyFileSync(src, dst);
}

if (!existsSync(join(KIT_SRC, 'INVOS.json'))) {
  console.error('INVOS.json not found at', KIT_SRC);
  process.exit(1);
}

if (existsSync(KIT_DST)) {
  rmSync(KIT_DST, { recursive: true, force: true });
}
mkdirSync(KIT_DST, { recursive: true });

for (const name of readdirSync(KIT_SRC)) {
  if (SKIP_TOP.has(name)) continue;
  if (name.startsWith('.') && !['.agents', '.gitignore', '.env.example'].includes(name)) continue;
  // skip heavy/internal docs optional
  if (name === 'docs') {
    // include docs/cli.md, hotmart, lab-user only? keep full docs for user
  }
  copyTree(join(KIT_SRC, name), join(KIT_DST, name));
}

const pkg = JSON.parse(readFileSync(join(CLI_ROOT, 'package.json'), 'utf8'));
const invosPath = join(KIT_DST, 'INVOS.json');
const invos = JSON.parse(readFileSync(invosPath, 'utf8'));
invos.version = pkg.version;
writeFileSync(invosPath, JSON.stringify(invos, null, 2) + '\n');

console.log('✓ kit bundled →', KIT_DST, `(v${pkg.version})`);
