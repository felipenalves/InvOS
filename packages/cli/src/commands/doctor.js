import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadManifest } from '../manifest.js';
import { readLock } from '../lock.js';
import { checkClaudeSymlinks } from '../symlinks.js';

const ESSENTIAL_FILES = [
  'AGENTS.md', 'MEMORY.md', 'SECURITY.md', '.env.example', 'COMECE-AQUI.md',
  'INVOS.json',
];

const ESSENTIAL_DIRS = [
  'memoria', 'marca', 'clientes', 'conteudo', 'scripts',
  '.agents/skills', '.agents/squads',
];

export async function doctor(kit, kitRoot, targetDir, args) {
  const fix = args.includes('--fix');
  let allOk = true;
  const report = [];

  report.push('INVOS Doctor — ' + targetDir);

  // 1. Essential files
  let filesOk = 0;
  for (const f of ESSENTIAL_FILES) {
    const p = resolve(targetDir, f);
    if (existsSync(p)) {
      filesOk++;
    } else {
      report.push('  ✗ ' + f + ' — missing');
      allOk = false;
    }
  }
  report.push('  Files: ' + filesOk + '/' + ESSENTIAL_FILES.length);

  // 2. Essential dirs
  let dirsOk = 0;
  for (const d of ESSENTIAL_DIRS) {
    const p = resolve(targetDir, d);
    if (existsSync(p)) {
      dirsOk++;
    } else {
      report.push('  ✗ ' + d + '/ — missing');
      allOk = false;
    }
  }
  report.push('  Dirs: ' + dirsOk + '/' + ESSENTIAL_DIRS.length);

  // 3. Skills vs manifest
  const man = loadManifest(resolve(targetDir, 'INVOS.json'));
  const agentsSkillsDir = resolve(targetDir, '.agents', 'skills');
  const manifestSkills = man?.seed?.skills || [];

  if (existsSync(agentsSkillsDir)) {
    const present = readdirSync(agentsSkillsDir).filter(e => {
      return existsSync(resolve(agentsSkillsDir, e, 'SKILL.md'));
    });
    const missing = manifestSkills.filter(s => {
      if (s === 'notion') {
        return !existsSync(resolve(targetDir, '.claude', 'skills', 'notion'));
      }
      return !present.includes(s);
    });
    if (missing.length > 0) {
      report.push('  Skills missing: ' + missing.join(', '));
      allOk = false;
    } else {
      report.push('  Skills: all ' + manifestSkills.length + ' present');
    }
  }

  // 4. Lock file
  const lock = readLock(targetDir);
  if (lock) {
    report.push('  Lock: ✓ (' + lock.version + ', installed ' + (lock.installedAt ? lock.installedAt.substring(0, 10) : '?') + ')');
  } else {
    report.push('  Lock: ✗ INVOS-LOCK.json missing');
    allOk = false;
  }

  // 5. Claude symlinks
  const symCheck = checkClaudeSymlinks(targetDir);
  if (symCheck.ok) {
    report.push('  Symlinks: ✓');
  } else {
    report.push('  Symlinks: ✗ ' + symCheck.errors.join('; '));
    allOk = false;
  }

  // 6. Version
  report.push('  Kit version: ' + (man?.version || 'unknown'));

  console.log(report.join('\n'));

  if (!allOk) {
    console.log('  Status: ⚠️  issues found');
    if (fix) console.log('  Run: invos install');
    else console.log('  Run: invos doctor --fix');
    return;
  }

  console.log('  Status: ✓ all checks passed');
}
