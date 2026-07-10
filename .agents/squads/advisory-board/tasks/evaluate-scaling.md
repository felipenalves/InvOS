---
task: evaluateScaling()
responsavel: "@board-chair"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: business_description
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: scaling_trigger
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: scaling_evaluation
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] Readiness assessed by all three advisors (Hoffman, Thiel, Naval)"
  - "[ ] Scaling strategy identified with clear rationale"
  - "[ ] Go/No-Go verdict with playbook and kill criteria"
---

# Task: Scaling Decision Analysis

**Task ID:** BOARD-004
**Version:** 1.0.0
**Command:** `*evaluate-scaling`
**Agent:** Board Chair routes to Reid Hoffman + Peter Thiel + Naval Ravikant
**Purpose:** Evaluate whether and how to scale a business, product, or team.

---

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| `business_description` | Current state of the business | YES |
| `scaling_trigger` | Why scaling is being considered now | YES |
| `current_metrics` | Revenue, users, growth rate, unit economics | PREFERRED |
| `resources_available` | Capital, team, infrastructure | PREFERRED |
| `market_context` | Market size, competition, timing | NO |
| `constraints` | Limitations, values, non-negotiables | NO |

## Preconditions

1. Business has some form of product-market fit (or believes it does)
2. Scaling is being actively considered as a strategic move
3. Basic metrics or traction data is available

## Execution Phases

### Phase 1: Assess Readiness

**Reid Hoffman — Blitzscaling Readiness:**
1. Is there a large, growing market? (TAM analysis)
2. Is there product-market fit? (retention, referral, organic growth)
3. Are there network effects? (does the product get better with more users?)
4. Do you have distribution advantage? (viral, embedded, paid scalable?)
5. Is there a first-scaler advantage? (winner-take-most dynamics?)
6. Rate blitzscaling readiness: NOT READY / APPROACHING / READY / OVERDUE

**Peter Thiel — Monopoly Assessment:**
1. Are you dominating a small market? (You should be #1 or #2 in a niche)
2. What is your secret? (What do you know that others do not?)
3. Can you achieve monopoly in a defined space?
4. Is your technology 10x better (not just incrementally)?
5. Are you building proprietary technology, network effects, economies of scale, or brand?
6. Rate monopoly potential: WEAK / MODERATE / STRONG

**Naval Ravikant — Leverage Analysis:**
1. Are you applying leverage? (Code, media, capital, labor — in that order of preference)
2. Do you have specific knowledge? (Something the market cannot easily replicate)
3. Are you building assets that earn while you sleep?
4. Is this a compounding opportunity? (Does each unit of effort build on the last?)
5. What is the accountability structure? (Who has skin in the game?)
6. Rate leverage position: LOW / MEDIUM / HIGH

### Phase 2: Identify Scaling Strategy

1. **Speed vs Efficiency** — Should you prioritize growth speed or unit economics?
   - Hoffman: Speed when market is winner-take-most
   - Thiel: Efficiency when building monopoly in a niche
   - Naval: Leverage when you can scale without proportional effort
2. **Horizontal vs Vertical** — Expand breadth (more markets) or depth (more value)?
3. **Organic vs Inorganic** — Grow internally or through acquisition/partnership?
4. **Capital Strategy** — Bootstrap, raise venture, or revenue-fund growth?
5. Map the scaling sequence — what must be true at each stage

### Phase 3: Risk Assessment

1. **Premature scaling risks** — Scaling before product-market fit is the #1 startup killer
2. **Execution risk** — Can your team handle 10x complexity?
3. **Culture risk** — Will rapid growth break your culture? (Hoffman's "firefighting" phase)
4. **Financial risk** — What is the burn rate during scaling? Runway?
5. **Market risk** — Is the timing right? Could the window close?
6. **Competitive risk** — Will scaling invite retaliation from incumbents?
7. Apply Thiel's definite optimism test — do you have a specific plan, not just hope?

### Phase 4: Go/No-Go Recommendation

1. Synthesize readiness, strategy, and risk assessments
2. Deliver a clear verdict:
   - **GO — Scale Now** — Market timing, readiness, and resources align
   - **CONDITIONAL GO** — Scale after specific conditions are met (list them)
   - **NO-GO — Not Ready** — Specify what must change before reconsidering
   - **PIVOT** — Scaling the current approach is wrong; redirect first
3. If GO: Define the scaling playbook (first 90 days, 6 months, 12 months)
4. Define success metrics and checkpoints at each stage
5. Establish kill criteria — what would make you stop scaling and reassess

## Output Format

```yaml
scaling_evaluation:
  advisors: [reid-hoffman, peter-thiel, naval-ravikant]
  readiness:
    hoffman_blitzscaling: "NOT_READY | APPROACHING | READY | OVERDUE"
    thiel_monopoly: "WEAK | MODERATE | STRONG"
    naval_leverage: "LOW | MEDIUM | HIGH"
  strategy:
    approach: "speed | efficiency | leverage"
    direction: "horizontal | vertical"
    growth_type: "organic | inorganic | hybrid"
    capital_strategy: "bootstrap | venture | revenue-funded"
  risks:
    premature_scaling: "{assessment}"
    execution: "{assessment}"
    culture: "{assessment}"
    financial: "{assessment}"
    market: "{assessment}"
    competitive: "{assessment}"
  verdict: "GO | CONDITIONAL_GO | NO_GO | PIVOT"
  conditions: ["{if conditional}"]
  playbook:
    days_90: ["{first actions}"]
    months_6: ["{medium-term actions}"]
    months_12: ["{long-term actions}"]
  success_metrics: ["{what to measure}"]
  kill_criteria: ["{when to stop}"]
```

## Veto Conditions

- **NEVER** recommend scaling without evidence of product-market fit
- **NEVER** ignore unit economics — growth without margins is just expensive failure
- **NEVER** recommend blitzscaling when there is no first-scaler advantage
- **NEVER** skip the risk assessment — overconfidence kills more companies than competition
- **NEVER** recommend scaling if it conflicts with the founder's core values (ask first)

## Completion Criteria

- [ ] Blitzscaling readiness assessed (Hoffman)
- [ ] Monopoly potential evaluated (Thiel)
- [ ] Leverage position analyzed (Naval)
- [ ] Scaling strategy identified with clear rationale
- [ ] Risk assessment completed across all dimensions
- [ ] Clear Go/No-Go verdict with reasoning
- [ ] Playbook defined with metrics and kill criteria
