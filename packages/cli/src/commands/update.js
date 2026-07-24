import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  collectFiles, copyFileWithDirs, shouldOverwriteOnUpdate,
  sha256File, isDenylisted, isDevPath,
} from '../utils.js';
import { readLock, updateLockShipped, writeLock } from '../lock.js';
import { syncClaudeSymlinks } from '../symlinks.js';

export async function update(kit, kitRoot, targetDir, args) {
  const dryRun = args.includes('--dry-run');
  const lock = readLock(targetDir);
  if (!lock) {
    console.error('INVOS-LOCK.json missing. Run: npx invos install');
    process.exit(1);
  }

  console.log(`  source: ${kitRoot} (bundled/local — no token)`);

  const files = collectFiles(kitRoot, '', true).filter(f => !isDevPath(f.relPath));
  let updated = 0;
  let skipped = 0;
  let agentsNote = false;

  for (const f of files) {
    const rel = f.relPath;
    const dest = resolve(targetDir, rel);

    if (isDenylisted(rel)) {
      skipped++;
      continue;
    }

    if (rel === 'AGENTS.md' && existsSync(dest)) {
      const a = sha256File(f.fullPath);
      const b = sha256File(dest);
      if (a !== b) {
        const decision = lock.custom?.['AGENTS.md'];
        if (decision === 'replace') {
          if (!dryRun) {
            writeFileSync(resolve(targetDir, 'AGENTS.md.local.bak'), readFileSync(dest));
            console.warn('⚠️  AGENTS.md → replace (local.bak)');
          }
        } else {
          if (!dryRun) {
            writeFileSync(resolve(targetDir, 'AGENTS.md.shipped.bak'), readFileSync(f.fullPath));
            lock.custom = lock.custom || {};
            lock.custom['AGENTS.md'] = 'skip';
            console.warn('⚠️  AGENTS.md custom — shipped.bak; skip (lock)');
            agentsNote = true;
          }
          skipped++;
          continue;
        }
      }
    }

    if (!existsSync(dest) || shouldOverwriteOnUpdate(rel, dest)) {
      if (!dryRun) copyFileWithDirs(f.fullPath, dest);
      updated++;
    } else {
      skipped++;
    }
  }

  if (!dryRun) {
    updateLockShipped(kitRoot, lock, kit.version);
    writeLock(targetDir, lock);
    syncClaudeSymlinks(kitRoot, targetDir);
  }

  console.log(`✓ invos update${dryRun ? ' (dry-run)' : ''} — ${updated} updated, ${skipped} skipped (USER ok)`);
  console.log(`  kit ${kit.version || '?'}`);
  if (agentsNote) console.log('  set INVOS-LOCK custom.AGENTS.md=replace to force AGENTS');
}
