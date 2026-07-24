import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { collectFiles, copyFileWithDirs, ensureDir } from '../utils.js';
import { buildLock, writeLock } from '../lock.js';
import { syncClaudeSymlinks } from '../symlinks.js';

export async function init(kit, kitRoot, args) {
  const idx = args.indexOf('--dir');
  let targetDir;
  if (idx !== -1 && args[idx + 1]) {
    targetDir = resolve(process.cwd(), args[idx + 1]);
  } else {
    targetDir = resolve(process.cwd(), args[0] || '.');
  }

  if (targetDir === '.' || !args[0]) {
    targetDir = process.cwd();
  }

  if (existsSync(targetDir) && targetDir !== process.cwd()) {
    console.error(`Directory ${targetDir} already exists. Use install for existing projects.`);
    process.exit(1);
  }

  ensureDir(targetDir);
  const files = collectFiles(kitRoot, '', true);

  let count = 0;
  for (const f of files) {
    const dest = resolve(targetDir, f.relPath);
    copyFileWithDirs(f.fullPath, dest);
    count++;
  }

  // Generate lock
  const lock = buildLock(kitRoot, targetDir);
  writeLock(targetDir, lock);

  // Symlinks
  syncClaudeSymlinks(kitRoot, targetDir);

  console.log(`✓ invos init complete — ${count} files in ${targetDir}`);
  console.log('  Run: cd ' + targetDir + ' && npx invos doctor');
}
