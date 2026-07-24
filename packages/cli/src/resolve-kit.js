import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Kit source resolution (first hit wins):
 * 1. INVOS_KIT_PATH env
 * 2. Bundled kit next to package (npm install / npx)
 * 3. Monorepo layout: packages/cli → invos root
 */
export function resolveKitRoot() {
  if (process.env.INVOS_KIT_PATH) {
    const p = resolve(process.env.INVOS_KIT_PATH);
    if (existsSync(resolve(p, 'INVOS.json'))) return p;
    console.error('INVOS_KIT_PATH set but INVOS.json missing:', p);
    process.exit(1);
  }

  const bundled = resolve(__dirname, '../kit');
  if (existsSync(resolve(bundled, 'INVOS.json'))) return bundled;

  const monorepo = resolve(__dirname, '../../..');
  if (existsSync(resolve(monorepo, 'INVOS.json'))) return monorepo;

  console.error(`
INVOS kit not found.
- Reinstall: npm i -g invos@latest  (or npx invos@latest)
- Or set: export INVOS_KIT_PATH=/path/to/invos-kit
`);
  process.exit(1);
}
