---
task: designWorkshop()
responsavel: "@hormozi-workshop"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: topic
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: duration
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: workshopDesign
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] Single transformation promise defined"
  - "[ ] 3-5 teaching modules designed with frameworks and exercises"
  - "[ ] Run of show created with timing"
---

# Task: Design Workshop

**Task ID:** HORMOZI-008
**Version:** 1.0.0
**Command:** `*design-workshop`
**Agent:** Hormozi Workshop (hormozi-workshop)
**Purpose:** Design a workshop that delivers massive value and converts attendees into buyers.

---

## Inputs

| Field | Type | Source | Required | Validation |
|-------|------|--------|----------|------------|
| topic | string | User prompt | Yes | Workshop subject and transformation |
| audience | string | User prompt | Yes | Target attendees |
| duration | string | User prompt | Yes | 60min, 90min, half-day, full-day, multi-day |
| format | enum | User prompt | Yes | virtual, in-person, hybrid |
| backend_offer | object | User prompt | No | What you sell at the end (if conversion workshop) |
| price | number | User prompt | No | Workshop ticket price (0 for free) |
| capacity | number | User prompt | No | Max attendees |

---

## Preconditions

- Topic expertise available to deliver the content
- If conversion workshop: backend offer must be defined

---

## Execution Phases

### Phase 1: Workshop Architecture
1. Define the single transformation promise ("By the end of this workshop, you will...")
2. Choose the workshop model:
   - Pure Value: No pitch, brand building and relationship
   - Value + Offer: 80% teaching, 20% transition to offer
   - Implementation: Hands-on where they build something live
3. Structure the content blocks:
   - Opening: Hook + promise + agenda (10% of time)
   - Teaching blocks: 3-5 core modules (70% of time)
   - Implementation/exercises: Hands-on application (embedded in teaching)
   - Close: Recap + CTA or offer transition (20% of time)
4. For each teaching block, define the "aha moment" — what will they realize?

### Phase 2: Content Design
1. For each teaching block:
   - Big idea (one concept per block)
   - Framework or model to teach it
   - Example or case study to illustrate
   - Exercise or implementation step
   - Transition to next block
2. Design the "framework reveal" — give them a proprietary framework
3. Create worksheets or templates attendees will use
4. Build in interaction points every 10-15 minutes:
   - Questions to the audience
   - Chat engagement prompts
   - Quick exercises
   - Poll or vote moments
5. Plan the energy arc: start strong, vary pace, end on a peak

### Phase 3: Conversion Design (if applicable)
1. Plant "seeds" throughout the teaching that point to the offer:
   - "In my program, we go much deeper on this..."
   - "My clients get a done-for-you version of this..."
2. Design the transition from teaching to offer (the "bridge"):
   - Recap the transformation they experienced
   - Identify the gap between workshop knowledge and full implementation
   - Position the offer as the bridge to close that gap
3. Structure the offer presentation:
   - Restate the dream outcome
   - Reveal the offer and what's included
   - Stack the value
   - Present the price with anchoring
   - Handle the top 3 objections
   - CTA with urgency
4. Plan the follow-up for non-buyers

### Phase 4: Logistics and Delivery
1. Create the run-of-show with exact timing
2. Define tech requirements (platform, tools, slides, chat)
3. Plan the registration and reminder sequence
4. Create the post-workshop follow-up plan
5. Define success metrics (attendance rate, engagement, conversion if applicable)

---

## Output Format

```markdown
## Workshop Design: {Workshop Name}

**Promise:** "By the end, you will {transformation}"
**Duration:** {time}
**Format:** {format}
**Model:** {pure-value / value+offer / implementation}
**Capacity:** {N}

---

### Run of Show

| Time | Block | Content | Energy Level |
|------|-------|---------|-------------|
| 0:00-{X} | Opening | {hook + promise} | High |
| {X}-{Y} | Module 1 | {topic} | Medium |
| ... | ... | ... | ... |
| {Z}-END | Close/Offer | {recap + CTA} | Peak |

### Module Details

#### Module 1: {Title}
**Big Idea:** {concept}
**Framework:** {framework name}
**Example:** {case study}
**Exercise:** {what they do}
**Aha Moment:** {realization}

#### Module 2-N: ...

### Worksheets/Templates
| Resource | Purpose | When Used |
|----------|---------|-----------|

### Conversion Plan (if applicable)
**Seeds planted in:** {modules}
**Bridge script:** {transition language}
**Offer presentation:** {structure}
**Follow-up plan:** {non-buyer sequence}

### Registration and Reminders
| Timing | Communication | Channel |
|--------|--------------|---------|

### Success Metrics
| Metric | Target |
|--------|--------|
```

---

## Veto Conditions

- NEVER design a workshop without a single clear transformation promise
- NEVER teach more than 5 core concepts — depth beats breadth
- NEVER go more than 15 minutes without audience interaction
- NEVER pitch before delivering substantial value (minimum 60% pure teaching)
- NEVER skip the energy arc — monotone workshops lose people

---

## Completion Criteria

- [ ] Single transformation promise defined
- [ ] Workshop model selected
- [ ] 3-5 teaching modules designed with frameworks and exercises
- [ ] Run of show created with timing
- [ ] Interaction points planned every 10-15 minutes
- [ ] Conversion plan designed (if applicable)
- [ ] Worksheets/templates created
- [ ] Registration and follow-up sequences planned
- [ ] Success metrics defined
