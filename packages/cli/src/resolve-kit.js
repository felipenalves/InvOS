import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INVOS_KIT_ALLOWED_DIRS = ['.']; // Only current dir or explicit path from dev

function validateKitPath(p) {
  if (!p || typeof p !== 'string') return false;
  const resolved = resolve(p);
  if (!existsSync(resolved)) {
    console.error('INVOS_KIT_PATH directory does not exist:', resolved);
    return false;
  }
  if (!existsSync(resolve(resolved, 'INVOS.json'))) return false;
  return true;
}

/**
 * 1. INVOS_KIT_PATH
 * 2. packages/cli/kit (bundled — npm)
 * 3. parent InvOS.v2 root (dev)
 */
export function resolveKitRoot() {
  if (process.env.INVOS_KIT_PATH) {
    if (!validateKitPath(process.env.INVOS_KIT_PATH)) {
      console.error('INVOS_KIT_PATH points to invalid kit directory:', process.env.INVOS_KIT_PATH);
      process.exit(1);
    }
    const p = resolve(process.env.INVOS_KIT_PATH);
    return p;
  }

  const bundled = resolve(__dirname, '../kit');
  if (existsSync(resolve(bundled, 'INVOS.json'))) return bundled;

  // packages/cli → ../.. = InvOS.v2 root
  const v2 = resolve(__dirname, '../..');
  if (existsSync(resolve(v2, 'INVOS.json'))) return v2;

  console.error(`
Kit INVOS v2 não encontrado.
- Dev: rode a partir de InvOS.v2 (tem INVOS.json na raiz)
- Publish: npm run bundle-kit
- Override: export INVOS_KIT_PATH=/path/to/InvOS.v2
`);
  process.exit(1);
}
