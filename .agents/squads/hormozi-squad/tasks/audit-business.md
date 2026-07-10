---
task: auditBusiness()
responsavel: "@hormozi-audit"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: business
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: revenue
    tipo: number
    origem: User Input
    obrigatorio: true

Saida:
  - campo: businessAudit
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] Revenue equation scored with all 4 components"
  - "[ ] #1 constraint clearly identified"
  - "[ ] 3 prioritized recommendations with revenue impact"
---

# Task: Audit Business

**Task ID:** HORMOZI-007
**Version:** 1.0.0
**Command:** `*audit-business`
**Agent:** Hormozi Audit (hormozi-audit)
**Purpose:** Conduct a comprehensive business audit with metrics-driven diagnosis.

---

## Inputs

| Field | Type | Source | Required | Validation |
|-------|------|--------|----------|------------|
| business | string | User prompt | Yes | Business name, type, and stage |
| revenue | number | User prompt | Yes | Monthly or annual revenue |
| profit_margin | number | User prompt | No | Current profit margin percentage |
| team_size | number | User prompt | No | Number of employees/contractors |
| channels | list | User prompt | No | Marketing and sales channels in use |
| biggest_challenge | string | User prompt | No | Self-identified primary constraint |
| metrics | object | User prompt | No | Available business metrics (CAC, LTV, churn, etc.) |

---

## Preconditions

- Business is operational with revenue
- Owner willing to share honest numbers

---

## Execution Phases

### Phase 1: Revenue Engine Audit
1. Diagnose the revenue equation: Revenue = Leads x Conversion Rate x Price x Frequency
2. Score each component (1-10):
   - Leads: Volume and quality of incoming leads
   - Conversion: Percentage of leads that become customers
   - Price: Average revenue per transaction
   - Frequency: How often customers buy (repeat rate)
3. Identify the weakest link in the revenue chain
4. Calculate the impact of a 10% improvement in each component
5. Determine the constraint: which single improvement would double revenue?

### Phase 2: Offer Audit
1. Evaluate the current offer against the Value Equation
2. Score each quadrant:
   - Dream Outcome: Is the promise compelling enough?
   - Perceived Likelihood: Does the buyer believe it will work?
   - Time Delay: How long until first result?
   - Effort & Sacrifice: How much work for the buyer?
3. Identify if the offer is "good" (solves problem) or "grand slam" (irresistible)
4. Benchmark pricing: is the business underpriced for the value delivered?

### Phase 3: Operations Audit
1. Assess the delivery system:
   - Can the business fulfill 2x current volume without breaking?
   - What is the cost to deliver per customer?
   - Where are the bottlenecks in fulfillment?
2. Assess the team:
   - Key-person dependencies
   - Role clarity and accountability
   - Capacity utilization
3. Assess the financials:
   - Gross margin
   - Net margin
   - Cash flow predictability
   - Customer Acquisition Cost vs Lifetime Value ratio

### Phase 4: Growth Prescription
1. Identify the #1 constraint holding the business back
2. Provide 3 specific, prioritized recommendations:
   - Quick win (implementable this week)
   - Medium-term play (implementable this month)
   - Strategic shift (implementable this quarter)
3. Calculate the revenue impact of each recommendation
4. Define the next 90-day focus
5. Identify what to STOP doing (subtraction audit)

---

## Output Format

```markdown
## Business Audit: {Business Name}

**Revenue:** ${X}/month
**Margin:** {X}%
**Stage:** {startup / growth / scale / optimize}
**#1 Constraint:** {identified constraint}

---

### Revenue Engine

| Component | Score | Current | 10% Improvement Impact |
|-----------|-------|---------|----------------------|
| Leads | X/10 | {metric} | +${X}/month |
| Conversion | X/10 | {metric}% | +${X}/month |
| Price | X/10 | ${metric} | +${X}/month |
| Frequency | X/10 | {metric}x/year | +${X}/month |

**Weakest Link:** {component}
**Doubling Lever:** {which component to focus on}

### Offer Assessment

| Quadrant | Score | Issue | Fix |
|----------|-------|-------|-----|
| Dream Outcome | X/10 | {issue} | {fix} |
| Perceived Likelihood | X/10 | {issue} | {fix} |
| Time Delay | X/10 | {issue} | {fix} |
| Effort & Sacrifice | X/10 | {issue} | {fix} |

### Operations Assessment
**Scalability:** {can/cannot handle 2x volume}
**Bottleneck:** {identified bottleneck}
**CAC:LTV Ratio:** {X}:1

### Growth Prescription

| Priority | Recommendation | Timeline | Revenue Impact |
|----------|---------------|----------|----------------|
| 1 | {quick win} | This week | +${X}/month |
| 2 | {medium play} | This month | +${X}/month |
| 3 | {strategic shift} | This quarter | +${X}/month |

### Stop Doing List
1. {thing to stop}
2. {thing to stop}

### 90-Day Focus
{One clear priority for the next 90 days}
```

---

## Veto Conditions

- NEVER audit without real revenue numbers — estimates produce estimate-quality advice
- NEVER recommend more than 3 priorities — focus is the point
- NEVER ignore the operations side — growth without fulfillment capacity kills businesses
- NEVER skip the "stop doing" list — subtraction is as important as addition
- NEVER provide generic advice — every recommendation must tie to the specific business numbers

---

## Completion Criteria

- [ ] Revenue equation scored with all 4 components
- [ ] Weakest link and doubling lever identified
- [ ] Offer audited against Value Equation
- [ ] Operations assessed for scalability
- [ ] #1 constraint clearly identified
- [ ] 3 prioritized recommendations with revenue impact
- [ ] Stop doing list provided
- [ ] 90-day focus defined
