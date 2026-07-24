import { existsSync, readFileSync, writeFileSync, renameSync } from 'node:fs';
import { resolve } from 'node:path';
import { collectFiles, copyFileWithDirs, shouldOverwriteOnUpdate, sha256File, isDenylisted, isTemplatePlaceholder } from '../utils.js';
import { readLock, updateLockShipped, writeLock } from '../lock.js';
import { syncClaudeSymlinks } from '../symlinks.js';

export async function update(kit, kitRoot, targetDir, args) {
  const dryRun = args.includes('--dry-run');
  const lock = readLock(targetDir);

  if (!lock) {
    console.error('INVOS-LOCK.json not found. Run install first.');
    process.exit(1);
  }

  const files = collectFiles(kitRoot, '');
  let updated = 0;
  let skipped = 0;
  let agentsBackedUp = false;

  for (const f of files) {
    const dest = resolve(targetDir, f.relPath);
    const rel = f.relPath;

    // USER denylist check
    if (isDenylisted(rel)) {
      skipped++;
      continue;
    }

    // Special: AGENTS.md custom handling
    if (rel === 'AGENTS.md' && existsSync(dest)) {
      const shippedSha = sha256File(f.fullPath);
      const localSha = sha256File(dest);
      const customDecision = lock.custom?.['AGENTS.md'];

      if (localSha !== shippedSha) {
        if (customDecision === 'skip') {
          if (!dryRun) {
            const bakPath = resolve(targetDir, 'AGENTS.md.shipped.bak');
            writeFileSync(bakPath, readFileSync(f.fullPath));
            console.warn('⚠️  AGENTS.md custom — backup em AGENTS.md.shipped.bak (respecting skip lock)');
            agentsBackedUp = true;
          }
          skipped++;
          continue;
        }
        if (customDecision === 'replace' || !existsSync(dest)) {
          // Replace: just overwrite (handled below)
          if (!dryRun) {
            const bakPath = resolve(targetDir, 'AGENTS.md.shipped.bak');
            writeFileSync(bakPath, readFileSync(dest));
            console.warn('⚠️  AGENTS.md custom — backup em AGENTS.md.shipped.bak (replacing)');
            agentsBackedUp = true;
          }
        } else {
          // First time seeing divergence — warn and skip
          if (!dryRun) {
            const bakPath = resolve(targetDir, 'AGENTS.md.shipped.bak');
            writeFileSync(bakPath, readFileSync(f.fullPath));
            console.warn('⚠️  AGENTS.md custom — backup em AGENTS.md.shipped.bak');
            console.warn('  Next update will respect lock. Run again with --dry-run after setting:');
            console.warn('  "invos update" → replace | "invos update --skip-agents" → skip');

            // Write to lock: ask user decision
            lock.custom = lock.custom || {};
            lock.custom['AGENTS.md'] = 'skip'; // default skip after first backup
          }
          skipped++;
          continue;
        }
      }
    }

    // Skip if template placeholder only (for SEED files on UPDATE — e.g., marca/marca.md)
    if (existsSync(dest) && shouldSkipSeedPlaceholder(rel, dest)) {
      skipped++;
      continue;
    }

    // Overwrite PRODUCT files
    if (!existsSync(dest) || shouldOverwriteOnUpdate(rel, dest, lock)) {
      if (!dryRun) {
        copyFileWithDirs(f.fullPath, dest);
      }
      updated++;
    } else {
      skipped++;
    }
  }

  // Update lock
  if (!dryRun) {
    updateLockShipped(kitRoot, lock);
    writeLock(targetDir, lock);
    syncClaudeSymlinks(kitRoot, targetDir);
  }

  console.log(`✓ invos update${dryRun ? ' (dry-run)' : ''} — ${updated} files updated, ${skipped} skipped`);
  if (agentsBackedUp) console.log('  AGENTS.md backup created');
  if (dryRun) console.log('  Run without --dry-run to apply');
}

function shouldSkipSeedPlaceholder(rel, destPath) {
  // Only skip template files that are STILL placeholders
  const templateFiles = ['marca/marca.md', 'memoria/perfil.md', 'memoria/empresa.md'];
  if (!templateFiles.includes(rel)) return false;

  const content = readFileSync(destPath, 'utf-8');
  const templateMarkers = ['[o que', '[seu nome]', 'PREENCHA', 'primeira sessão'];
  const lower = content.toLowerCase();
  return !templateMarkers.some(m => lower.includes(m));
}
