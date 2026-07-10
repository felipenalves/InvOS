---
task: closeSale()
responsavel: "@hormozi-closer"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: product
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: price
    tipo: number
    origem: User Input
    obrigatorio: true

Saida:
  - campo: closingFramework
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] All 6 CLOSER steps scripted for the specific product"
  - "[ ] Top 10 objections handled with Isolate and Overcome responses"
  - "[ ] KPI targets set"
---

# Task: Close Sale

**Task ID:** HORMOZI-004
**Version:** 1.0.0
**Command:** `*close-sale`
**Agent:** Hormozi Closer (hormozi-closer)
**Purpose:** Design a closing framework using the CLOSER method for sales conversations.

---

## Inputs

| Field | Type | Source | Required | Validation |
|-------|------|--------|----------|------------|
| product | string | User prompt | Yes | Product/service being sold |
| price | number | User prompt | Yes | Price point of the offer |
| sales_context | enum | User prompt | Yes | phone, zoom, in-person, DM, chat |
| audience | string | User prompt | Yes | Prospect profile |
| common_objections | list | User prompt | No | Known objections from past sales |
| conversion_rate | number | User prompt | No | Current close rate if known |

---

## Preconditions

- Offer defined with clear value proposition
- Price point set
- Sales context identified (phone, video, in-person)

---

## Execution Phases

### Phase 1: CLOSER Framework Setup
1. Map each step of the CLOSER framework to the specific product:
   - **C — Clarify:** Questions to understand their current situation
   - **L — Label:** Restate their problem so they feel understood
   - **O — Overview:** Present the path from where they are to where they want to be
   - **S — Sell the Vacation:** Sell the outcome, not the process
   - **E — Explain Away Concerns:** Handle objections before they arise
   - **R — Reinforce and Close:** Ask for the decision
2. Write 3-5 discovery questions for the Clarify step
3. Prepare labeling statements for common situations
4. Build the overview narrative (3-step bridge from pain to solution)

### Phase 2: Objection Handling
1. List the top 10 objections for this price point and product
2. For each objection, prepare the "Isolate and Overcome" response:
   - "I totally understand. Other than {objection}, is there anything else?"
   - "If we could resolve {objection}, would you be ready to move forward?"
   - Specific reframe or evidence to dissolve the objection
3. Prepare responses for the 4 universal objections:
   - "I need to think about it" → Time-based urgency + recap value
   - "I can't afford it" → Cost of inaction + payment options
   - "I need to talk to my spouse/partner" → Bring them in or get conditional commitment
   - "I've been burned before" → Guarantee + differentiation from past failures
4. Create the "walk away" frame for prospects who are not a fit

### Phase 3: Script Development
1. Write the opening script (rapport + agenda setting)
2. Write the Clarify question sequence with transition bridges
3. Write the Label statements template
4. Write the Overview presentation (3-step path)
5. Write the Sell the Vacation section (outcome painting)
6. Write the Explain section (preemptive objection handling)
7. Write the Reinforce and Close section with exact closing language
8. Write the post-close confirmation script (reduce buyer remorse)

### Phase 4: Performance Framework
1. Define KPIs: show rate, close rate, average deal value
2. Create a call scoring rubric for self-evaluation
3. Build a follow-up sequence for non-closes
4. Design the "lost deal" recovery strategy
5. Set targets for each step's conversion rate

---

## Output Format

```markdown
## Sales Closing Framework: {Product Name}

**Method:** CLOSER
**Price:** ${price}
**Context:** {sales_context}
**Target Close Rate:** {X}%

---

### CLOSER Script

#### C — Clarify
{Discovery questions with transitions}

#### L — Label
{Labeling statement templates}

#### O — Overview
{3-step bridge narrative}

#### S — Sell the Vacation
{Outcome painting script}

#### E — Explain Away Concerns
{Preemptive objection handling}

#### R — Reinforce and Close
{Closing language and assumptive close}

---

### Objection Handling Matrix

| Objection | Isolate | Reframe | Evidence |
|-----------|---------|---------|----------|

### Post-Close Script
{Confirmation and next steps}

### Follow-Up Sequence (Non-Close)
| Day | Action | Message |
|-----|--------|---------|

### KPI Targets

| Metric | Target | Current |
|--------|--------|---------|
```

---

## Veto Conditions

- NEVER skip the Clarify step — selling without understanding is pitching
- NEVER handle an objection without isolating it first
- NEVER pressure someone who is genuinely not a fit — qualify out gracefully
- NEVER present price before establishing value (Sell the Vacation must come first)
- NEVER close without a clear next step defined

---

## Completion Criteria

- [ ] All 6 CLOSER steps scripted for the specific product
- [ ] Top 10 objections handled with Isolate and Overcome responses
- [ ] 4 universal objections prepared
- [ ] Opening and closing scripts written
- [ ] Post-close confirmation script included
- [ ] Follow-up sequence for non-closes defined
- [ ] KPI targets set
