import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { sha256File, collectFiles, isDenylisted } from './utils.js';
import { loadManifest } from './manifest.js';

export function readLock(targetDir) {
  const path = resolve(targetDir, 'INVOS-LOCK.json');
  if (!existsSync(path)) return null;
  try {
    return JSON.parse(readFileSync(path, 'utf-8'));
  } catch {
    return null;
  }
}

export function writeLock(targetDir, data) {
  const path = resolve(targetDir, 'INVOS-LOCK.json');
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
}

export function computeShippedSha(kitRoot) {
  const files = collectFiles(kitRoot, '', true);
  const shipped = {};
  // INVOS.json itself
  shipped['INVOS.json'] = sha256File(resolve(kitRoot, 'INVOS.json'));
  for (const f of files) {
    shipped[f.relPath] = sha256File(f.fullPath);
  }
  return shipped;
}

export function buildLock(kitRoot, targetDir, custom = {}) {
  const now = new Date().toISOString();
  return {
    version: '1.0.0',
    shippedSha: computeShippedSha(kitRoot),
    custom,
    installedAt: now,
    updatedAt: now,
  };
}

export function updateLockShipped(kitRoot, lock) {
  lock.shippedSha = computeShippedSha(kitRoot);
  lock.updatedAt = new Date().toISOString();
  return lock;
}
