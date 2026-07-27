import {
  existsSync, statSync, readdirSync, readFileSync,
  mkdirSync, copyFileSync, rmSync, unlinkSync,
} from 'node:fs';
import { resolve, dirname } from 'node:path';
import { createHash } from 'node:crypto';

function skipDot(name) {
  if (name === '.agents') return false;
  if (name === '.gitignore' || name === '.env.example' || name === '.gitkeep') return false;
  if (name === '.claude') return true;
  return name.startsWith('.');
}

/** USER — never overwrite on update */
export function isDenylisted(relPath) {
  const p = relPath.split('/');
  if (p[0] === '.git' || p[0] === 'node_modules' || p[0] === 'packages') return true;
  if (p[0] === 'INVOS-LOCK.json' || p[0] === '.env' || p[0] === '.claude') return true;
  if (p[0] === '_memoria' || p[0] === 'memoria') return true;
  if (p[0] === 'clientes') return true;
  if (p[0] === 'conteudo') return true;
  if (p[0] === 'marketing' && p.length > 1 && p[1] !== 'README.md') return true;
  if (p[0] === 'saidas' && p.length > 1 && p[1] !== 'README.md') return true;
  if (p[0] === 'dados' && p.length > 1 && p[1] !== 'README.md') return true;
  if (p[0] === 'marca' && p[1] && p[1] !== 'README.md') return true;
  return false;
}

export function isDevPath(relPath) {
  const p = relPath.split('/');
  if (p[0] === 'packages' || p[0] === 'node_modules' || p[0] === '.git') return true;
  if (p[0] === '.claude') return true;
  if (p[0] === 'kit') return true;
  return false;
}

export function shouldCopyOnInstall(destPath) {
  if (!existsSync(destPath)) return true;
  if (statSync(destPath).isDirectory()) return true;
  return false;
}

export function shouldOverwriteOnUpdate(relPath, destPath) {
  if (!existsSync(destPath)) return true;
  if (isDenylisted(relPath)) return false;
  return true;
}

export function collectFiles(sourceDir, prefix = '', skipDenylist = false) {
  const out = [];
  if (!existsSync(sourceDir)) return out;
  for (const entry of readdirSync(sourceDir)) {
    if (skipDot(entry)) continue;
    const full = resolve(sourceDir, entry);
    const rel = prefix ? `${prefix}/${entry}` : entry;
    if (!skipDenylist && isDenylisted(rel)) continue;
    if (statSync(full).isDirectory()) {
      if (entry === 'node_modules' || entry === 'packages' || entry === 'kit') continue;
      out.push(...collectFiles(full, rel, skipDenylist));
    } else {
      out.push({ relPath: rel, fullPath: full });
    }
  }
  return out;
}

export function copyFileWithDirs(src, dest) {
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
}

export function sha256File(filePath) {
  return createHash('sha256').update(readFileSync(filePath)).digest('hex');
}

export function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

export function removeIfExists(path) {
  try {
    if (!existsSync(path)) return;
    const s = statSync(path);
    if (s.isDirectory()) rmSync(path, { recursive: true });
    else unlinkSync(path);
  } catch (err) {
    console.error('removeIfExists: could not remove', path, err.message);
  }
}
