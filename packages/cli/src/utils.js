import { existsSync, statSync, readdirSync, readFileSync, writeFileSync, mkdirSync, copyFileSync, symlinkSync, rmSync, unlinkSync } from 'node:fs';
import { resolve, relative, dirname, basename } from 'node:path';
import { createHash } from 'node:crypto';

function isSkippedDotfile(name) {
  // Skip hidden system files, keep essential dot dirs
  if (name === '.agents') return false;
  if (name === '.gitignore' || name === '.env.example') return false;
  if (name === '.gitkeep') return false;
  // .claude is managed via symlinks only, never copy
  if (name === '.claude') return true;
  return name.startsWith('.');
}

export function isDenylisted(relPath) {
  const parts = relPath.split('/');
  // .git is never copied
  if (parts[0] === '.git') return true;
  // USER denylist: never overwrite on update
  if (parts[0] === 'memoria') return true;
  if (parts[0] === 'clientes' && parts[1] !== '_template') return true;
  if (parts[0] === 'conteudo') return true;
  if (parts[0] === '.env') return true;
  if (parts[0] === 'INVOS-LOCK.json' || parts[0] === 'INVOS.json') return true;
  if (parts[0] === 'node_modules') return true;
  if (parts[0] === 'packages') return true;
  if (parts[0] === 'docs' && parts[1] === 'prd-invos-cli.md') return true;
  // .claude/skills is managed via symlinks only
  if (parts[0] === '.claude') return true;
  return false;
}

// Paths that belong to dev infrastructure, never to be installed into a user dir
export function isDevPath(relPath) {
  const parts = relPath.split('/');
  if (parts[0] === 'packages') return true;
  if (parts[0] === 'node_modules') return true;
  if (parts[0] === '.git') return true;
  if (parts[0] === '.claude') return true;
  if (parts[0] === 'docs' && parts[1] === 'prd-invos-cli.md') return true;
  return false;
}

export function isTemplatePlaceholder(content) {
  if (!content || content.trim().length === 0) return true;
  const lines = content.trim().split('\n').filter(l => l.trim());
  if (lines.length === 0) return true;
  // Check common template markers
  const templateMarkers = ['[o que', '[seu nome]', 'PREENCHA', 'primeira sessão'];
  const firstLines = lines.slice(0, 3).join(' ').toLowerCase();
  return templateMarkers.some(m => firstLines.includes(m));
}

export function shouldCopyOnInstall(destPath) {
  if (!existsSync(destPath)) return true;
  // If it's a directory, always copy contents (deep merge)
  if (statSync(destPath).isDirectory()) return true;
  return false;
}

export function shouldOverwriteOnUpdate(relPath, destPath, lock) {
  if (!existsSync(destPath)) return true;
  // Denylist never overwrites
  if (isDenylisted(relPath)) return false;
  return true;
}

export function collectFiles(sourceDir, prefix = '', skipDenylist = false) {
  const results = [];
  if (!existsSync(sourceDir)) return results;
  const entries = readdirSync(sourceDir);
  for (const entry of entries) {
    if (isSkippedDotfile(entry)) continue;
    const fullPath = resolve(sourceDir, entry);
    const relPath = prefix ? `${prefix}/${entry}` : entry;
    if (!skipDenylist && isDenylisted(relPath)) continue;
    if (statSync(fullPath).isDirectory()) {
      if (entry === 'node_modules') continue;
      results.push(...collectFiles(fullPath, relPath, skipDenylist));
    } else {
      results.push({ relPath, fullPath });
    }
  }
  return results;
}

export function copyFileWithDirs(src, dest) {
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
}

export function sha256File(filePath) {
  const data = readFileSync(filePath);
  return createHash('sha256').update(data).digest('hex');
}

export function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

export function removeIfExists(path) {
  if (!existsSync(path)) return;
  const s = statSync(path);
  if (s.isDirectory()) {
    rmSync(path, { recursive: true, force: true });
  } else {
    unlinkSync(path);
  }
}

export function isClaudeProject(root) {
  return existsSync(resolve(root, 'CLAUDE.md'));
}
