import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { sha256File, collectFiles } from './utils.js';

export function readLock(targetDir) {
  const path = resolve(targetDir, 'INVOS-LOCK.json');
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch {
    return null;
  }
}

export function writeLock(targetDir, data) {
  writeFileSync(resolve(targetDir, 'INVOS-LOCK.json'), JSON.stringify(data, null, 2) + '\n');
}

export function computeShippedSha(kitRoot) {
  const shipped = {};
  shipped['INVOS.json'] = sha256File(resolve(kitRoot, 'INVOS.json'));
  for (const f of collectFiles(kitRoot, '', true)) {
    if (f.relPath.startsWith('packages/')) continue;
    shipped[f.relPath] = sha256File(f.fullPath);
  }
  return shipped;
}

export function buildLock(kitRoot, kitVersion = '2.0.0', custom = {}) {
  const now = new Date().toISOString();
  return {
    version: kitVersion,
    shippedSha: computeShippedSha(kitRoot),
    custom,
    installedAt: now,
    updatedAt: now,
  };
}

export function updateLockShipped(kitRoot, lock, kitVersion) {
  lock.shippedSha = computeShippedSha(kitRoot);
  lock.updatedAt = new Date().toISOString();
  if (kitVersion) lock.version = kitVersion;
  return lock;
}
