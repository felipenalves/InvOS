import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { collectFiles, copyFileWithDirs, shouldCopyOnInstall, ensureDir, isDevPath } from '../utils.js';
import { buildLock, readLock, writeLock } from '../lock.js';
import { syncClaudeSymlinks } from '../symlinks.js';

export async function install(kit, kitRoot, targetDir, args) {
  // Collect ALL kit files (skip user-data denylist) then filter out dev infra
  const allFiles = collectFiles(kitRoot, '', true);
  const files = allFiles.filter(f => !isDevPath(f.relPath));
  let copied = 0;
  let skipped = 0;

  for (const f of files) {
    const dest = resolve(targetDir, f.relPath);
    if (shouldCopyOnInstall(dest)) {
      if (!existsSync(dest)) {
        ensureDir(dest.substring(0, dest.lastIndexOf('/')) || dest);
      }
      copyFileWithDirs(f.fullPath, dest);
      copied++;
    } else {
      skipped++;
    }
  }

  // Lock file (merge with existing)
  const existingLock = readLock(targetDir);
  const lock = buildLock(kitRoot, targetDir, existingLock?.custom || {});
  if (existingLock) {
    lock.installedAt = existingLock.installedAt;
    lock.custom = existingLock.custom || {};
  }
  writeLock(targetDir, lock);

  // Symlinks
  syncClaudeSymlinks(kitRoot, targetDir);

  console.log(`✓ invos install — ${copied} files copied, ${skipped} skipped (kept user data)`);
  console.log('  Run: npx invos doctor');
}
