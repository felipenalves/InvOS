import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadManifest } from '../manifest.js';
import { readLock } from '../lock.js';
import { checkClaudeSymlinks, syncClaudeSymlinks } from '../symlinks.js';

export async function doctor(kit, kitRoot, targetDir, args) {
  const fix = args.includes('--fix');
  let ok = true;
  const r = [];

  r.push('INVOS Doctor — ' + targetDir);

  for (const f of ['AGENTS.md', 'CLAUDE.md', 'INVOS.json']) {
    if (existsSync(resolve(targetDir, f))) r.push('  ✓ ' + f);
    else {
      r.push('  ✗ ' + f);
      ok = false;
    }
  }

  const mem = existsSync(resolve(targetDir, '_memoria')) || existsSync(resolve(targetDir, 'memoria'));
  if (mem) r.push('  ✓ _memoria|memoria');
  else {
    r.push('  ✗ memory dir');
    ok = false;
  }

  const skillsDir = resolve(targetDir, '.agents/skills');
  if (existsSync(skillsDir)) {
    const n = readdirSync(skillsDir).filter(e =>
      existsSync(resolve(skillsDir, e, 'SKILL.md')),
    ).length;
    r.push(`  ✓ skills: ${n}`);
    if (n < 5) ok = false;
  } else {
    r.push('  ✗ .agents/skills');
    ok = false;
  }

  const lock = readLock(targetDir);
  if (lock) r.push(`  ✓ lock v${lock.version}`);
  else {
    r.push('  ✗ INVOS-LOCK.json');
    ok = false;
  }

  if (fix) {
    syncClaudeSymlinks(kitRoot, targetDir);
    r.push('  --fix: symlinks');
  }

  const sym = checkClaudeSymlinks(targetDir);
  if (sym.ok) r.push('  ✓ .claude symlinks');
  else {
    r.push('  ✗ symlinks: ' + sym.errors.slice(0, 3).join('; '));
    ok = false;
  }

  const man = loadManifest(resolve(targetDir, 'INVOS.json'));
  r.push(`  kit ${man?.version || kit?.version || '?'}`);
  r.push('  update: npm package kit (npx invos@latest update)');

  console.log(r.join('\n'));
  if (!ok) {
    console.log('  Status: ⚠️');
    process.exitCode = 1;
  } else {
    console.log('  Status: ✓');
  }
}
