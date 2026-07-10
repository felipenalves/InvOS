---
task: createHooks()
responsavel: "@hormozi-hooks"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: topic
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: platform
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: hookPackage
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] Hooks written across at least 4 categories"
  - "[ ] Platform constraints respected"
  - "[ ] All hooks scored on 3 dimensions"
---

# Task: Create Hooks

**Task ID:** HORMOZI-005
**Version:** 1.0.0
**Command:** `*create-hooks`
**Agent:** Hormozi Hooks (hormozi-hooks)
**Purpose:** Create attention-grabbing hooks for content, ads, and sales material.

---

## Inputs

| Field | Type | Source | Required | Validation |
|-------|------|--------|----------|------------|
| topic | string | User prompt | Yes | Subject matter for the hooks |
| platform | enum | User prompt | Yes | youtube, tiktok, instagram, facebook, linkedin, email, ad |
| audience | string | User prompt | Yes | Who the hooks must stop |
| content_goal | enum | User prompt | Yes | educate, sell, entertain, build-authority, generate-leads |
| quantity | number | User prompt | No | Defaults to 20 hooks |

---

## Preconditions

- Platform selected with understanding of format constraints
- Audience defined with enough specificity to write for them

---

## Execution Phases

### Phase 1: Hook Category Mapping
1. Select from the 7 hook categories (Hormozi framework):
   - **Contrarian:** Challenge a commonly held belief
   - **Curiosity Gap:** Create an information gap they must close
   - **Result/Proof:** Lead with a specific, impressive result
   - **Story:** Open with a dramatic moment from a real story
   - **Question:** Ask a question that forces self-reflection
   - **Bold Claim:** Make a specific, provocative statement
   - **Pattern Interrupt:** Break the expected scroll pattern with something unexpected
2. Allocate hooks across categories (at least 3 from each used category)
3. Match category to platform norms:
   - YouTube: Curiosity Gap and Result hooks dominate
   - TikTok: Pattern Interrupt and Contrarian perform best
   - LinkedIn: Bold Claim and Result hooks drive engagement
   - Email subjects: Curiosity Gap and Question hooks win opens
   - Ads: Result and Bold Claim hooks stop the scroll

### Phase 2: Hook Writing
1. Write each hook following platform constraints:
   - YouTube: Under 10 words for thumbnail, under 15 seconds spoken
   - TikTok/Reels: Under 3 seconds (8-12 words max)
   - LinkedIn: First line before "see more" (under 150 chars)
   - Email: Under 50 characters for subject line
   - Ads: Under 125 characters for primary text hook
2. Apply the specificity rule: replace vague words with numbers, names, or details
3. Apply the "would I stop scrolling?" test to each hook
4. Create 2-3 variations per core hook idea (reframed angles)

### Phase 3: Scoring and Packaging
1. Score each hook on 3 dimensions (1-5):
   - Stop Power: Would someone stop scrolling?
   - Relevance: Is it relevant to the target audience?
   - Payoff Potential: Can the content deliver on this hook's promise?
2. Rank by total score
3. Group into "ready to use" and "needs content built around it"
4. Suggest content ideas for the top 5 hooks
5. Provide A/B testing pairs

---

## Output Format

```markdown
## Hook Package: {Topic}

**Platform:** {platform}
**Audience:** {audience}
**Total Hooks:** {count}

---

### Top 10 Hooks (Ranked)

| Rank | Hook | Category | Stop | Relevance | Payoff | Total |
|------|------|----------|------|-----------|--------|-------|

### All Hooks by Category

#### Contrarian
1. {hook}
2. {hook}

#### Curiosity Gap
1. {hook}
2. {hook}

#### Result/Proof
...

### Content Ideas for Top 5
| Hook | Content Idea | Format |
|------|-------------|--------|

### A/B Testing Pairs
| Pair | Hook A | Hook B | What We're Testing |
|------|--------|--------|-------------------|
```

---

## Veto Conditions

- NEVER write hooks that the content cannot deliver on — clickbait destroys trust
- NEVER write vague hooks ("This changed everything") — specificity is mandatory
- NEVER ignore platform constraints — a YouTube hook differs from a TikTok hook
- NEVER submit hooks without scoring — unranked hooks are unusable
- NEVER use the same formula for more than 3 consecutive hooks

---

## Completion Criteria

- [ ] Hooks written across at least 4 categories
- [ ] Platform constraints respected
- [ ] All hooks scored on 3 dimensions
- [ ] Top 10 ranked with rationale
- [ ] Content ideas provided for top 5
- [ ] A/B testing pairs suggested
- [ ] Specificity rule applied to every hook
