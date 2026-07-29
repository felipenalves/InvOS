import {
  existsSync, mkdirSync, symlinkSync, unlinkSync, readlinkSync,
  readdirSync, statSync, copyFileSync, cpSync,
} from 'node:fs';
import { resolve, dirname } from 'node:path';

const REL = '../../.agents/skills';

function listSkills(agentsDir) {
  if (!existsSync(agentsDir)) return [];
  return readdirSync(agentsDir).filter(e => {
    const p = resolve(agentsDir, e);
    try {
      return statSync(p).isDirectory() && existsSync(resolve(p, 'SKILL.md'));
    } catch (err) {
      console.error('listSkills: skipping', e, err.message);
      return false;
    }
  });
}

export function syncClaudeSymlinks(_kitRoot, targetRoot) {
  const agentsDir = resolve(targetRoot, '.agents', 'skills');
  const claudeDir = resolve(targetRoot, '.claude', 'skills');
  mkdirSync(agentsDir, { recursive: true });
  mkdirSync(claudeDir, { recursive: true });

  for (const skill of listSkills(agentsDir)) {
    const linkPath = resolve(claudeDir, skill);
    const expectedTarget = resolve(agentsDir, skill);
    if (existsSync(linkPath)) {
      try {
        const currentTarget = resolve(dirname(linkPath), readlinkSync(linkPath));
        if (resolve(currentTarget) === resolve(expectedTarget)) continue;
        unlinkSync(linkPath);
      } catch (err) {
        console.error('syncClaudeSymlinks: failed to update', skill, err.message);
      }
    }
    try {
      symlinkSync(`${REL}/${skill}`, linkPath);
    } catch (err) {
      if (err.code === 'EPERM') {
        console.warn('syncClaudeSymlinks: symlink failed for', skill, '(EPERM), falling back to copy');
        cpSync(resolve(agentsDir, skill), linkPath, { recursive: true });
      } else {
        throw err;
      }
    }
  }

  if (existsSync(claudeDir)) {
    for (const entry of readdirSync(claudeDir)) {
      const linkPath = resolve(claudeDir, entry);
      try {
        const stat = statSync(linkPath);
        if (stat.isSymbolicLink()) {
          const target = resolve(dirname(linkPath), readlinkSync(linkPath));
          if (!existsSync(target)) {
            unlinkSync(linkPath);
          }
        }
      } catch {
        // ignore read errors
      }
    }
  }
}

export function checkClaudeSymlinks(targetRoot) {
  const agentsDir = resolve(targetRoot, '.agents', 'skills');
  const claudeDir = resolve(targetRoot, '.claude', 'skills');
  const expected = listSkills(agentsDir);
  if (!expected.length) return { ok: false, errors: ['.agents/skills empty'] };
  if (!existsSync(claudeDir)) return { ok: false, errors: ['.claude/skills missing'] };

  const errors = [];
  for (const s of expected) {
    const link = resolve(claudeDir, s);
    try {
      const t = readlinkSync(link);
      const abs = resolve(dirname(link), t);
      if (!existsSync(resolve(abs, 'SKILL.md'))) errors.push(`${s}: broken`);
    } catch {
      errors.push(`${s}: not a symlink`);
    }
  }
  return { ok: errors.length === 0, errors };
}
