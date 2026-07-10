---
task: generateLeads()
responsavel: "@hormozi-leads"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: business
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: audience
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: leadGenerationSystem
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] All 4 lead sources audited and scored"
  - "[ ] Lead magnet designed with clear bridge to core offer"
  - "[ ] 30-Day launch plan created"
---

# Task: Generate Leads

**Task ID:** HORMOZI-002
**Version:** 1.0.0
**Command:** `*generate-leads`
**Agent:** Hormozi Leads (hormozi-leads)
**Purpose:** Design a lead generation system using the $100M Leads framework.

---

## Inputs

| Field | Type | Source | Required | Validation |
|-------|------|--------|----------|------------|
| business | string | User prompt | Yes | Business type, product/service, and current stage |
| audience | string | User prompt | Yes | Dream customer avatar with demographics |
| budget | string | User prompt | No | Monthly marketing budget range |
| current_channels | list | User prompt | No | Existing lead sources |
| lead_goal | number | User prompt | No | Target leads per month |
| business_model | string | User prompt | No | B2B, B2C, local, e-commerce, SaaS, service |

---

## Preconditions

- Business type and offer defined
- Target audience identified with enough specificity to find them

---

## Execution Phases

### Phase 1: Lead Source Audit
1. Evaluate the 4 core lead sources (Hormozi framework):
   - Warm Outreach: Existing contacts, past customers, referrals
   - Cold Outreach: Direct outreach to strangers (email, DM, phone)
   - Content (Free): Organic content that attracts leads over time
   - Paid Ads: Paid media that buys leads immediately
2. Score each source on current effectiveness (1-10)
3. Identify the biggest gap — which source is underused?
4. Map each source to the business model and budget

### Phase 2: Lead Magnet Design
1. Create a lead magnet using the Hormozi criteria:
   - Solves a specific, narrow problem completely
   - Delivers value in under 5 minutes of consumption
   - Naturally leads to the core offer as the next step
   - Has a compelling, specific name
2. Choose the lead magnet type:
   - Free trial / sample
   - Checklist / cheat sheet
   - Free tool / calculator
   - Free training / workshop
   - Assessment / quiz
   - Template / swipe file
3. Name the lead magnet with a result-oriented title
4. Define the delivery mechanism

### Phase 3: Channel Strategy
1. For each active or recommended channel, define:
   - Target volume (leads per week)
   - Cost per lead estimate
   - Message/content type
   - Frequency and cadence
2. Warm Outreach plan:
   - List building strategy (who to contact first)
   - Message templates (ACA framework: Acknowledge, Compliment, Ask)
   - Follow-up sequence
3. Cold Outreach plan:
   - List sourcing method
   - Offer framing for cold contacts
   - Personalization approach
   - Volume targets and conversion expectations
4. Content plan:
   - Platform selection (where the audience already is)
   - Content pillars tied to the core offer
   - Posting cadence and content types
   - Call-to-action strategy
5. Paid Ads plan:
   - Platform recommendation
   - Budget allocation
   - Creative direction
   - Lead capture mechanism

### Phase 4: System Assembly
1. Map the complete lead flow: Source → Lead Magnet → Nurture → Offer
2. Define the follow-up system for each source
3. Set KPIs for each channel
4. Create a 30-day launch plan with weekly milestones
5. Define the scaling triggers (when to increase spend/effort)

---

## Output Format

```markdown
## Lead Generation System: {Business Name}

**Business Model:** {model}
**Lead Goal:** {X}/month
**Budget:** ${range}/month
**Primary Channel:** {recommended}

---

### Lead Source Scorecard

| Source | Current Score | Opportunity | Priority |
|--------|-------------|-------------|----------|
| Warm Outreach | X/10 | {gap} | {1-4} |
| Cold Outreach | X/10 | {gap} | {1-4} |
| Content (Free) | X/10 | {gap} | {1-4} |
| Paid Ads | X/10 | {gap} | {1-4} |

### Lead Magnet
**Name:** {name}
**Type:** {type}
**Problem Solved:** {specific problem}
**Delivery:** {method}
**Bridge to Offer:** {how it leads to the paid product}

### Channel Plans
{Detailed plan per channel}

### Lead Flow Map
{Source} → {Lead Magnet} → {Nurture} → {Offer}

### 30-Day Launch Plan

| Week | Actions | Target Leads | KPI |
|------|---------|-------------|-----|

### Scaling Triggers
| Metric | Threshold | Action |
|--------|-----------|--------|
```

---

## Veto Conditions

- NEVER recommend paid ads as the only channel for a business with no budget
- NEVER skip the lead magnet — direct-to-offer works only for most-aware audiences
- NEVER recommend channels where the audience does not exist
- NEVER set lead goals without defining cost per lead expectations
- NEVER build a system without a follow-up mechanism

---

## Completion Criteria

- [ ] All 4 lead sources audited and scored
- [ ] Lead magnet designed with clear bridge to core offer
- [ ] Channel plans defined with volume targets
- [ ] Lead flow mapped end-to-end
- [ ] 30-Day launch plan created
- [ ] Scaling triggers defined
- [ ] KPIs set for each channel
