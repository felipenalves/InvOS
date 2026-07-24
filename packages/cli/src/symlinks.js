import { existsSync, mkdirSync, symlinkSync, unlinkSync, readlinkSync, readdirSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const CLAUDE_SKILLS_RELPATH = '../../.agents/skills';

export function syncClaudeSymlinks(kitRoot, targetRoot) {
  const claudeDir = resolve(targetRoot, '.claude', 'skills');
  const agentsDir = resolve(targetRoot, '.agents', 'skills');

  if (!existsSync(agentsDir)) {
    mkdirSync(agentsDir, { recursive: true });
  }

  // Read manifest to get seeded skills
  const manifestPath = resolve(kitRoot, 'INVOS.json');
  if (!existsSync(manifestPath)) return;
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
  const skills = manifest.seed?.skills || [];

  // Ensure .claude/skills exists
  mkdirSync(claudeDir, { recursive: true });

  for (const skill of skills) {
    const target = resolve(agentsDir, skill);
    const linkPath = resolve(claudeDir, skill);

    // Only create symlink if the agents skill dir exists
    if (!existsSync(target)) continue;

    // Remove existing if it's a broken symlink or wrong type
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
  const agentsDir = resolve(targetRoot, '.agents', 'skills');
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
      const expected = `${CLAUDE_SKILLS_RELPATH}/${entry}`;
      if (target !== expected) {
        errors.push(`${entry}: points to ${target}, expected ${expected}`);
      }
      // Verify target exists
      const absTarget = resolve(dirname(linkPath), target);
      if (!existsSync(absTarget)) {
        errors.push(`${entry}: target missing (${target})`);
      }
    } catch {
      errors.push(`${entry}: not a symlink or unreadable`);
    }
  }

  return { ok: errors.length === 0, errors };
}
