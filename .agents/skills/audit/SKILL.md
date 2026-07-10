---
name: audit
description: Use for AIOS audit — scores project against Four Cs, surfaces leverage-weighted top-3 gaps. Read-only. Run on Day 7, then weekly. Watch score climb.
---

## What this skill does

Runs the **Four Cs Audit** on the current project. Reads (never writes) the project's operating manual, memory, skills, agents, connections, decisions, and references. Scores each of the Four Cs out of 25. Surfaces strengths and the top 3 leverage-weighted gaps with concrete next-step commands.

**Scope is structural — "is the AIOS built right?"** It is NOT a capability planner. Capability gaps belong to `/level-up`.

First run is the baseline. Re-run weekly to watch the score climb.

## Today's context

- **Date:** `date +%Y-%m-%d`
- **Project root:** the current working directory

## The Four Cs (scored 25 each = 100 total)

| Layer | Test |
|---|---|
| **Context** | Knows the business — identity, team, voice, decisions, references |
| **Connections** | Reaches the user's stuff — MCPs, integrations, data sources |
| **Capabilities** | Knows how to do work — skills + agents |
| **Cadence** | Runs without being asked — schedules, hooks, recurring rituals |

## Execution

### Step 1: Discover the project shape

The audit looks for **patterns and intent**, not exact paths. Use Glob and Read to check:

**Operating manual:** `CLAUDE.md` (root), `CLAUDE.local.md` (gitignored).
**Memory:** `memoria/` folder.
**Skills:** `.agents/skills/*/SKILL.md` — count + frontmatter. Also check `.claude/skills/*/SKILL.md` (mirror surface).
**Agents:** `.claude/agents/*.md` — count + frontmatter.
**Connection mechanisms** (any of these = reachable):
- MCPs: `opencode.json` (mcpServers key), `.claude/settings.local.json` (mcpServers key), `.mcp.json` (root or subproject)
- API scripts: `scripts/*.py|.js|.ts` documented in CLAUDE.md
- Export pipelines: `data/`, `imports/`, `saidas/` with refresh script + last-run timestamp
- API keys + reference guide: `.env` entries + corresponding `references/{tool}-api.md`
- Vercel functions: `api/` directory

**Connections registry:** `connections.md` (root).
**Reference guides:** `references/` folder.
**Decisions:** `decisions/log.md` (root).
**SOPs:** `docs/` folder.
**Templates:** `conhecimento/templates/`, `templates/`.
**Hooks / scheduled jobs:** `.claude/hooks/` for session hooks; `.github/workflows/` for CI schedules.

Don't penalize for non-canonical names if equivalent intent is captured elsewhere.

### Step 2: Score each C (25 points each)

#### Context (25 pts)

| Criterion | Points | How to detect |
|---|---|---|
| Operating manual exists and is substantive (>200 words) | 5 | Read CLAUDE.md, count words |
| Identity / role / voice captured | 5 | CLAUDE.md mentions who the user is + role/mission, OR `memoria/perfil.md` exists |
| Persistent memory exists with multiple entries | 5 | `memoria/` has >3 files |
| Reference docs exist | 5 | `references/`, `docs/`, or `conhecimento/voice/` has >=1 file |
| Decisions captured | 5 | `decisions/log.md` or equivalent has >=1 entry |

#### Connections (25 pts) — domain-aware, mechanism-agnostic

A "reachable" connection counts via ANY mechanism: MCP, script, export pipeline, or `.env` key + `references/{tool}-api.md`.

**The 7 Tier-1 Universal Data Domains:**

| # | Domain | Examples |
|---|---|---|
| 1 | Revenue / Financials | Stripe, Skool, GoHighLevel, QuickBooks, Looker |
| 2 | Customer interactions | HubSpot, Salesforce, Gmail-as-CRM, Skool DMs |
| 3 | Calendar | Google Cal, Outlook, Calendly |
| 4 | Communication | Gmail, Outlook, Slack, Teams, Telegram, Discord |
| 5 | Project / task tracking | ClickUp, Asana, Linear, Notion DB, GitHub Issues |
| 6 | Meeting intelligence | Granola, Otter, Fireflies, Gong, Zoom |
| 7 | Knowledge / files | Notion, Drive, Dropbox, Confluence, GitHub repo |

**Tier-2 (bonus):** AI service API keys, decisions/history, content/publishing.

| Criterion | Points | How to detect |
|---|---|---|
| Tier-1 domain coverage | 10 | 1.4 pts per tier-1 domain reachable. Round to nearest 0.5. Cap 10. |
| Reference guide presence | 5 | -1 per connected tool with no `references/{tool}-api.md`. Floor 0. |
| Auth / pipeline freshness | 5 | -1 per connection in needs-auth/expired state, or script with no run within 30 days. Floor 0. |
| Documentation in `connections.md` | 3 | 0 if missing; 1 sparse; 2 most; 3 covers all reachable. |
| Read-AND-write balance | 2 | At least one connection can WRITE. 0 if all read-only. |

#### Capabilities (25 pts)

| Criterion | Points | How to detect |
|---|---|---|
| 3+ skills installed | 10 | Count `.agents/skills/*/SKILL.md` >= 3 |
| 1+ user-built skill | 10 | Skill names not in canonical list: `onboard`, `audit`, `level-up`, plus any shipped Anthropic skills |
| 1+ agent defined | 5 | Count `.claude/agents/*.md` >= 1 |

#### Cadence (25 pts)

| Criterion | Points | How to detect |
|---|---|---|
| 1+ recurring/scheduled trigger | 10 | `.github/workflows/*.yml` with cron/schedule, OR hook scripts in `.claude/hooks/` |
| Recent activity / usage signal | 10 | Skills modified within 30 days, OR `decisions/log.md` has entry within 30 days |
| Templates folder populated | 5 | `templates/` or `.claude/templates/` has >=1 file |

### Step 3: Identify top 3 gaps by leverage

For each criterion that lost points: leverage = (points lost) × (impact multiplier).

**Impact multipliers:**
- 0 tier-1 domains reachable: **4x** (AIOS is blind to the business)
- Operating manual missing or thin: **3x** (foundation)
- <=2 tier-1 domains reachable: **3x** (Connections is the gateway to live data)
- 0 skills: **2x** (no Capabilities = no AIOS)
- No recurring trigger: **2x** (no Cadence = no autonomy)
- All connections read-only: **2x** (viewer, not an OS)
- 0 reference guides for connected tools: **1.5x**
- No decisions log: **1.5x**
- All others: **1x**

Sort gaps by leverage descending. Take top 3. For each, write a one-line concrete next step.

### Step 4: Output the report

Print directly in chat (Markdown). Format:

```
# AIOS Audit — {date}
**Score: {total}/100** ({stage})

Stage thresholds:
- 0-39 → Stage 0: Foundation
- 40-69 → Stage 1: Built
- 70-89 → Stage 2: Compounding
- 90-100 → Stage 3: Autonomous

## Scoreboard

Context        {bar}  {n}/25  {label}
Connections    {bar}  {n}/25  {label}
Capabilities   {bar}  {n}/25  {label}
Cadence        {bar}  {n}/25  {label}

(bar = ## per 5pts; label = "Strong" >=20, "Solid" 15-19, "Thin" 8-14, "Missing" <8)

## Strengths
- {1-3 short bullets from highest-scoring criteria}

## Top 3 Gaps (ranked by leverage)
1. **{gap name}** (-{n}pts x {multiplier})
   -> {concrete next-step}
2. **{gap name}** (-{n}pts x {multiplier})
   -> {concrete next-step}
3. **{gap name}** (-{n}pts x {multiplier})
   -> {concrete next-step}

## Suggested next: {single most leveraged action}

---
Structural gaps only. To explore CAPABILITY gaps, run /level-up after this audit.
```

### Step 5: Offer to save the report

After printing, ask: "Save this audit to `audits/audit-{date}.md` so you can track score over time?" If yes, write it. This is the only writable side effect.

## Notes

- **Read-only by default.** Never modify CLAUDE.md, memory, skills, or any project files. Only optional write is the audit report.
- **Be flexible about file names.** Don't penalize for using non-canonical names if intent is captured.
- **Be honest, not generous.** A 95/100 is rare. Most setups land 40-70.
- **Speed matters.** Report in under 60 seconds wall-clock.
- **Cadence detection is fuzzy.** Infer from workflows and hook scripts if cron data isn't cleanly available.

> *Adapted from The Three Ms of AI™ © 2026 Nate Herk.*
