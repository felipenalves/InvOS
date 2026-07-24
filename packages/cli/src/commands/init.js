import { existsSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import { collectFiles, copyFileWithDirs, ensureDir, isDevPath } from '../utils.js';
import { buildLock, writeLock } from '../lock.js';
import { syncClaudeSymlinks } from '../symlinks.js';

export async function init(kit, kitRoot, args) {
  let name = null;
  let targetDir = null;
  const rest = [...args];

  for (let i = 0; i < rest.length; i++) {
    if (rest[i] === '--name' && rest[i + 1]) {
      name = rest[i + 1];
      rest.splice(i, 2);
      i--;
    } else if (rest[i] === '--dir' && rest[i + 1]) {
      targetDir = resolve(process.cwd(), rest[i + 1]);
      rest.splice(i, 2);
      i--;
    }
  }

  if (!targetDir) {
    const slug = name || rest[0];
    targetDir = slug && slug !== '.'
      ? resolve(process.cwd(), slug)
      : process.cwd();
  }

  if (existsSync(resolve(targetDir, 'AGENTS.md')) && existsSync(resolve(targetDir, 'INVOS-LOCK.json'))) {
    console.error('Já parece INVOS. Use: npx invos install --dir', targetDir);
    process.exit(1);
  }

  ensureDir(targetDir);
  const files = collectFiles(kitRoot, '', true).filter(f => !isDevPath(f.relPath));
  let n = 0;
  for (const f of files) {
    const dest = resolve(targetDir, f.relPath);
    if (!existsSync(dest)) {
      copyFileWithDirs(f.fullPath, dest);
      n++;
    }
  }

  const lock = buildLock(kitRoot, kit.version || '2.0.0');
  writeLock(targetDir, lock);
  syncClaudeSymlinks(kitRoot, targetDir);

  console.log(`✓ invos init — ${n} files → ${targetDir}`);
  console.log(`  kit ${kit.version || '?'}`);
  console.log(`  Next: open folder → /instalar`);
  console.log(`  Doctor: npx invos doctor --dir ${basename(targetDir)}`);
}
