---
task: planLaunch()
responsavel: "@hormozi-launch"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: product
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: offer
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: launchPlan
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] Launch model selected with rationale"
  - "[ ] Timeline mapped with all phases"
  - "[ ] Revenue model calculated with scenarios"
---

# Task: Plan Launch

**Task ID:** HORMOZI-006
**Version:** 1.0.0
**Command:** `*plan-launch`
**Agent:** Hormozi Launch (hormozi-launch)
**Purpose:** Design a product launch strategy that maximizes revenue in a compressed timeframe.

---

## Inputs

| Field | Type | Source | Required | Validation |
|-------|------|--------|----------|------------|
| product | string | User prompt | Yes | Product being launched |
| offer | object | User prompt | Yes | Complete offer (price, bonuses, guarantee) |
| audience_size | number | User prompt | Yes | Total reachable audience (email list, followers, etc.) |
| launch_type | enum | User prompt | No | seed, internal, partnership, paid — defaults to internal |
| timeline | string | User prompt | No | Desired launch date or window |
| budget | number | User prompt | No | Available launch budget |

---

## Preconditions

- Offer fully designed (ideally via create-offer.md)
- Audience exists to launch to (list, following, community, or ad budget)
- Product ready or will be ready by launch date

---

## Execution Phases

### Phase 1: Launch Architecture
1. Select the launch model:
   - Seed Launch: Small audience, test offer, collect testimonials
   - Internal Launch: Email list and existing audience
   - Partnership Launch: Affiliates and JV partners
   - Paid Launch: Ad-driven with retargeting sequences
2. Define the launch timeline:
   - Pre-launch: 7-14 days of warming and anticipation
   - Launch: 3-7 day cart-open window
   - Post-launch: 3-5 days of follow-up and onboarding
3. Set the revenue target based on audience size and expected conversion
4. Calculate required traffic and conversion rates backward from revenue target

### Phase 2: Pre-Launch Sequence
1. Design the pre-launch content (value-first, builds anticipation):
   - Day 1-3: Problem awareness content
   - Day 4-7: Solution education content
   - Day 8-10: Proof and social proof content
   - Day 11-14: Anticipation and waitlist building
2. Create the pre-launch email sequence
3. Design the social media content calendar
4. Build the waitlist or early-bird mechanism
5. Create the "launch story" narrative arc

### Phase 3: Launch Execution Plan
1. Cart Open day plan:
   - Email sequence (open announcement + 2 follow-ups)
   - Social media posts (announcement + behind-the-scenes)
   - Sales page live checklist
2. Mid-cart plan:
   - Case study or testimonial email
   - FAQ addressing top objections
   - Bonus reminder
3. Cart Close plan:
   - 48-hour warning email
   - 24-hour warning email
   - Final hours email (3-hour, 1-hour, closing)
   - Urgency escalation on social
4. Define the scarcity mechanism (quantity, time, bonus expiry)

### Phase 4: Post-Launch
1. Thank you and onboarding plan for buyers
2. "Door closed" messaging for non-buyers
3. Results collection strategy (for future launches)
4. Debrief metrics: revenue, conversion rate, email performance
5. Evergreen transition plan (if applicable)

---

## Output Format

```markdown
## Launch Plan: {Product Name}

**Launch Type:** {type}
**Timeline:** {dates}
**Revenue Target:** ${X}
**Audience Size:** {N}
**Required Conversion Rate:** {X}%

---

### Launch Calendar

| Phase | Days | Key Actions |
|-------|------|-------------|
| Pre-Launch | Day 1-14 | {summary} |
| Cart Open | Day 15-17 | {summary} |
| Mid-Cart | Day 18-19 | {summary} |
| Cart Close | Day 20-21 | {summary} |
| Post-Launch | Day 22-26 | {summary} |

### Pre-Launch Content Plan
| Day | Content | Channel | Goal |
|-----|---------|---------|------|

### Email Sequence
| Day | Email | Subject Line | Purpose |
|-----|-------|-------------|---------|

### Cart Open Checklist
- [ ] {item}

### Revenue Model

| Metric | Target | Conservative | Aggressive |
|--------|--------|-------------|------------|
| Traffic | {N} | {N} | {N} |
| Conversion | {X}% | {X}% | {X}% |
| Revenue | ${X} | ${X} | ${X} |

### Post-Launch Plan
{Onboarding, follow-up, and evergreen transition}
```

---

## Veto Conditions

- NEVER launch without a pre-launch sequence — cold launches underperform
- NEVER run an open-ended launch — cart must close to create urgency
- NEVER launch without a follow-up plan for non-buyers
- NEVER skip the revenue model — launching without targets is guessing
- NEVER promise results you cannot demonstrate with proof

---

## Completion Criteria

- [ ] Launch model selected with rationale
- [ ] Timeline mapped with all phases
- [ ] Pre-launch content plan created
- [ ] Email sequence outlined for all phases
- [ ] Cart open/mid/close execution plans defined
- [ ] Revenue model calculated with scenarios
- [ ] Post-launch plan included
- [ ] Scarcity mechanism defined
