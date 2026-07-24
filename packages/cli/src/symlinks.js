import { existsSync, mkdirSync, symlinkSync, unlinkSync, readlinkSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const CLAUDE_SKILLS_RELPATH = '../../.agents/skills';

export function syncClaudeSymlinks(kitRoot, targetRoot) {
  const claudeDir = resolve(targetRoot, '.claude', 'skills');
  const agentsDir = resolve(targetRoot, '.agents', 'skills');

  if (!existsSync(agentsDir)) {
    mkdirSync(agentsDir, { recursive: true });
  }

  const manifestPath = resolve(kitRoot, 'INVOS.json');
  if (!existsSync(manifestPath)) return;
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
  const skills = manifest.seed?.skills || [];

  mkdirSync(claudeDir, { recursive: true });

  for (const skill of skills) {
    const target = resolve(agentsDir, skill);
    const linkPath = resolve(claudeDir, skill);

    if (!existsSync(target)) continue;

    if (existsSync(linkPath)) {
      try {
        const existing = readlinkSync(linkPath);
        if (existing === `${CLAUDE_SKILLS_RELPATH}/${skill}`) continue;
        unlinkSync(linkPath);
      } catch {
        unlinkSync(linkPath);
      }
    }

    symlinkSync(`${CLAUDE_SKILLS_RELPATH}/${skill}`, linkPath);
  }
}

export function checkClaudeSymlinks(targetRoot) {
  const claudeDir = resolve(targetRoot, '.claude', 'skills');
  if (!existsSync(claudeDir)) return { ok: false, errors: ['.claude/skills/ not found'] };

  const errors = [];
  let entries = [];
  try {
    entries = readdirSync(claudeDir);
  } catch { return { ok: false, errors: ['.claude/skills/ unreadable'] }; }

  for (const entry of entries) {
    const linkPath = resolve(claudeDir, entry);
    try {
      const target = readlinkSync(linkPath);
      const absTarget = resolve(dirname(linkPath), target);

      // Resolve target — must exist and be a dir with SKILL.md
      if (!existsSync(absTarget)) {
        errors.push(`${entry}: target missing (${target})`);
        continue;
      }
      const st = statSync(absTarget);
      if (!st.isDirectory()) {
        errors.push(`${entry}: target not a directory (${target})`);
        continue;
      }
      // Nested skills like apple-notes → ../../.agents/skills/apple/apple-notes
      // are valid if the resolved target has SKILL.md
      if (!existsSync(resolve(absTarget, 'SKILL.md'))) {
        errors.push(`${entry}: target has no SKILL.md (${target})`);
      }
    } catch {
      errors.push(`${entry}: not a symlink or unreadable`);
    }
  }

  return { ok: errors.length === 0, errors };
}
