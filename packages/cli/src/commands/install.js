import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  collectFiles, copyFileWithDirs, shouldCopyOnInstall, isDevPath,
} from '../utils.js';
import { buildLock, readLock, writeLock } from '../lock.js';
import { syncClaudeSymlinks } from '../symlinks.js';

export async function install(kit, kitRoot, targetDir) {
  const files = collectFiles(kitRoot, '', true).filter(f => !isDevPath(f.relPath));
  let copied = 0;
  let skipped = 0;

  for (const f of files) {
    const dest = resolve(targetDir, f.relPath);
    if (shouldCopyOnInstall(dest) && !existsSync(dest)) {
      copyFileWithDirs(f.fullPath, dest);
      copied++;
    } else if (existsSync(dest) && !shouldCopyOnInstall(dest)) {
      skipped++;
    } else if (existsSync(dest)) {
      skipped++;
    } else {
      copyFileWithDirs(f.fullPath, dest);
      copied++;
    }
  }

  const existing = readLock(targetDir);
  const lock = buildLock(kitRoot, kit.version || '2.0.0', existing?.custom || {});
  if (existing?.installedAt) lock.installedAt = existing.installedAt;
  writeLock(targetDir, lock);
  syncClaudeSymlinks(kitRoot, targetDir);

  console.log(`✓ invos install — ${copied} new, ${skipped} kept`);
  console.log('  Run: npx invos doctor');
}
