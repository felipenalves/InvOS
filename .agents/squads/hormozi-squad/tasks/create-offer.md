---
task: createOffer()
responsavel: "@hormozi-offers"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: product
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: audience
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: grandSlamOffer
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] Value Equation scored across all 4 quadrants"
  - "[ ] Problems mapped to solution vehicles with proprietary names"
  - "[ ] Offer stack assembled with core + bonuses"
---

# Task: Create Grand Slam Offer

**Task ID:** HORMOZI-001
**Version:** 1.0.0
**Command:** `*create-offer`
**Agent:** Hormozi Offers (hormozi-offers)
**Purpose:** Build a Grand Slam Offer using the Value Equation from $100M Offers.

---

## Inputs

| Field | Type | Source | Required | Validation |
|-------|------|--------|----------|------------|
| product | string | User prompt | Yes | Core product or service |
| audience | string | User prompt | Yes | Dream customer avatar |
| current_price | number | User prompt | No | Existing price if applicable |
| delivery_method | string | User prompt | No | How the product is delivered |
| market | string | User prompt | No | Industry or niche |
| competitors | list | User prompt | No | Known competing offers |

---

## Preconditions

- Core product or service identified
- Target audience defined with clear pain points and dream outcomes

---

## Execution Phases

### Phase 1: Dream Outcome Mapping
1. Define the dream outcome in the customer's words (not yours)
2. Identify the gap between where they are and where they want to be
3. List every problem that stands between the customer and the dream outcome
4. For each problem, list the sub-problems and adjacent problems
5. Rate each problem by severity (how much pain it causes 1-10)
6. Identify which problems they have tried and failed to solve before

### Phase 2: Value Equation Construction
1. Apply the Hormozi Value Equation: Value = (Dream Outcome x Perceived Likelihood) / (Time Delay x Effort & Sacrifice)
2. Maximize the numerator:
   - Dream Outcome: Make the outcome as specific and vivid as possible
   - Perceived Likelihood: Stack proof, guarantees, and track record
3. Minimize the denominator:
   - Time Delay: Compress time to first result
   - Effort & Sacrifice: Remove friction, do it for them where possible
4. Score each quadrant (1-10) for the current offer
5. Identify which quadrant has the most room for improvement

### Phase 3: Offer Architecture
1. Transform each problem into a solution vehicle (course, tool, template, service, community, etc.)
2. Name each solution vehicle with a proprietary name
3. Assign delivery method and format to each vehicle
4. Stack the vehicles into a cohesive offer:
   - Core offer: The main transformation vehicle
   - Speed bonuses: Things that compress time to result
   - Effort bonuses: Things that reduce work required
   - Proof bonuses: Things that increase confidence
5. Design the guarantee using the Hormozi guarantee stack:
   - Unconditional (full refund, no questions)
   - Conditional (refund if you do X and don't get Y)
   - Anti-guarantee (this is NOT for you if...)
   - Performance (we'll work for free until you hit X)
6. Set the price based on value delivered, not cost or competitors

### Phase 4: Offer Naming and Positioning
1. Create a compelling offer name that implies the transformation
2. Write the one-line value proposition
3. Define the "this is NOT for you" qualifier to increase perceived exclusivity
4. Create the scarcity/urgency mechanism
5. Write the stack slide (visual summary of everything included)

---

## Output Format

```markdown
## Grand Slam Offer: {Offer Name}

**Dream Outcome:** {specific outcome}
**Avatar:** {dream customer}
**Price:** ${price}
**Value Equation Score:** {X}/10

---

### Value Equation Breakdown

| Quadrant | Score | Strategy |
|----------|-------|----------|
| Dream Outcome | X/10 | {how we maximize} |
| Perceived Likelihood | X/10 | {how we maximize} |
| Time Delay | X/10 | {how we minimize} |
| Effort & Sacrifice | X/10 | {how we minimize} |

### Problems → Solutions Map

| Problem | Solution Vehicle | Proprietary Name | Delivery |
|---------|-----------------|-------------------|----------|

### Offer Stack

| Component | What It Does | Value |
|-----------|-------------|-------|
| Core Offer | {description} | ${value} |
| Speed Bonus 1 | {description} | ${value} |
| Effort Bonus 1 | {description} | ${value} |
| Proof Bonus 1 | {description} | ${value} |

**Total Value:** ${total}
**Your Price:** ${price}

### Guarantee
{Full guarantee statement with type}

### Scarcity/Urgency
{Mechanism and rationale}

### Qualifier
"This is NOT for you if..."

### Stack Slide Copy
{Ready-to-use visual stack summary}
```

---

## Veto Conditions

- NEVER create an offer without applying the Value Equation
- NEVER price based on competitor prices — price based on value delivered
- NEVER skip the problem-solution mapping — every solution must solve a real problem
- NEVER create a guarantee that the business cannot fulfill
- NEVER add bonuses that distract from the core transformation

---

## Completion Criteria

- [ ] Dream outcome defined in customer's language
- [ ] Value Equation scored across all 4 quadrants
- [ ] Problems mapped to solution vehicles with proprietary names
- [ ] Offer stack assembled with core + bonuses
- [ ] Guarantee designed and documented
- [ ] Price set with value-based justification
- [ ] Scarcity mechanism defined
- [ ] Stack slide copy written
