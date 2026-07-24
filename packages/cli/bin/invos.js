#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { init } from '../src/commands/init.js';
import { install } from '../src/commands/install.js';
import { update } from '../src/commands/update.js';
import { doctor } from '../src/commands/doctor.js';
import { loadManifest } from '../src/manifest.js';
import { resolveKitRoot } from '../src/resolve-kit.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const cmd = process.argv[2];
const args = process.argv.slice(3);

function extractDir(args) {
  const idx = args.indexOf('--dir');
  if (idx !== -1 && args[idx + 1]) {
    const dir = resolve(process.cwd(), args[idx + 1]);
    args.splice(idx, 2);
    return dir;
  }
  return null;
}

function help() {
  console.log(`
INVOS CLI — npx invos <command>

Commands:
  init [dir]           Create new INVOS project from scratch
  install [--dir <p>]  Install INVOS into dir (default: cwd)
  update [--dir <p>]   Update shipped files, preserve user data
  doctor [--dir <p>]   Validate installation

Options:
  --help               Show this help
  --version            Show version
`);
}

async function main() {
  if (!cmd || cmd === '--help' || cmd === '-h') { help(); return; }
  if (cmd === '--version' || cmd === '-v') {
    const pkg = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf-8'));
    console.log(pkg.version);
    return;
  }

  const KIT_ROOT = resolveKitRoot();
  const kit = loadManifest(resolve(KIT_ROOT, 'INVOS.json'));
  if (!kit) {
    console.error('INVOS.json not found at', KIT_ROOT);
    process.exit(1);
  }

  switch (cmd) {
    case 'init':
      await init(kit, KIT_ROOT, args);
      break;
    case 'install':
      await install(kit, KIT_ROOT, extractDir(args) || process.cwd(), args);
      break;
    case 'update':
      await update(kit, KIT_ROOT, extractDir(args) || process.cwd(), args);
      break;
    case 'doctor':
      await doctor(kit, KIT_ROOT, extractDir(args) || process.cwd(), args);
      break;
    default:
      console.error('Unknown command:', cmd);
      help();
      process.exit(1);
  }
}

main().catch(err => { console.error(err.message); process.exit(1); });
