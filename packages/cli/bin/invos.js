#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { init } from '../src/commands/init.js';
import { install } from '../src/commands/install.js';
import { update } from '../src/commands/update.js';
import { doctor } from '../src/commands/doctor.js';
import { loadManifest } from '../src/manifest.js';
import { resolveKitRoot } from '../src/resolve-kit.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const cmd = process.argv[2];
const args = process.argv.slice(3);

function extractDir(list) {
  const idx = list.indexOf('--dir');
  if (idx !== -1 && list[idx + 1]) {
    const dir = resolve(process.cwd(), list[idx + 1]);
    list.splice(idx, 2);
    return dir;
  }
  return null;
}

function help() {
  console.log(`
INVOS v2 CLI — npx invos <command>

  init [--name <slug>] [dir]   Novo projeto (kit completo)
  install [--dir <p>]          Instala no projeto atual
  update [--dir <p>]           Atualiza PRODUCT (preserva memória)
  doctor [--dir <p>] [--fix]  Valida instalação

Update: kit bundled no npm — sem token, sem GitHub.
  1) Você: npm run bundle-kit && npm publish
  2) Aluno: npx invos@latest update

  --help  --version  update --dry-run
`);
}

async function main() {
  if (!cmd || cmd === '--help' || cmd === '-h') {
    help();
    return;
  }
  if (cmd === '--version' || cmd === '-v') {
    const pkg = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf8'));
    console.log(pkg.version);
    return;
  }

  const kitRoot = resolveKitRoot();
  const kit = loadManifest(resolve(kitRoot, 'INVOS.json'));
  if (!kit) {
    console.error('INVOS.json missing in kit:', kitRoot);
    process.exit(1);
  }

  switch (cmd) {
    case 'init':
      await init(kit, kitRoot, args);
      break;
    case 'install':
      await install(kit, kitRoot, extractDir(args) || process.cwd(), args);
      break;
    case 'update':
      await update(kit, kitRoot, extractDir(args) || process.cwd(), args);
      break;
    case 'doctor':
      await doctor(kit, kitRoot, extractDir(args) || process.cwd(), args);
      break;
    default:
      console.error('Unknown:', cmd);
      help();
      process.exit(1);
  }
}

main().catch(e => {
  console.error(e.message || e);
  process.exit(1);
});
