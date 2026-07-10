---
task: seekInvestmentCounsel()
responsavel: "@board-chair"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: opportunity_description
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: financial_data
    tipo: string
    origem: User Input
    obrigatorio: false

Saida:
  - campo: investment_counsel
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] All three analyses (Dalio, Munger, Thiel) completed"
  - "[ ] Clear recommendation with terms or conditions"
  - "[ ] Kill criteria and monitoring framework defined"
---

# Task: Investment Committee Session

**Task ID:** BOARD-002
**Version:** 1.0.0
**Command:** `*seek-investment-counsel`
**Agent:** Board Chair routes to Ray Dalio + Charlie Munger + Peter Thiel
**Purpose:** Evaluate an investment or major financial decision through multiple analytical lenses.

---

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| `opportunity_description` | User prompt | YES |
| `financial_data` | Revenue, costs, projections | PREFERRED |
| `investment_amount` | Capital required | PREFERRED |
| `market_context` | Industry, competition, timing | PREFERRED |
| `risk_appetite` | Conservative, moderate, aggressive | NO |
| `time_horizon` | Short-term, medium, long-term | NO |

## Preconditions

1. Investment opportunity or financial decision is described
2. At least basic financial context is available
3. Decision-maker's constraints and values are understood

## Execution Phases

### Phase 1: Present Opportunity (board-chair)

1. Frame the opportunity in clear terms — what is being considered?
2. Summarize available financial data and projections
3. Identify the decision: invest/pass, amount, terms, timing
4. Map known risks and unknowns
5. Route to the investment committee: Dalio, Munger, Thiel

### Phase 2: Risk Analysis

**Ray Dalio — Principles-Based Analysis:**
1. Apply radical transparency — what are the uncomfortable truths?
2. Stress-test assumptions — what if projections are 50% wrong?
3. Assess systematic risk — is this correlated with macro factors?
4. Apply pain + reflection = progress — what does past experience teach?
5. Calculate expected value — probability-weighted outcomes
6. Check: Does this align with established investment principles?

**Charlie Munger — Mental Models Analysis:**
1. Apply inversion — what would make this fail? Work backwards from disaster
2. Check for cognitive biases — confirmation bias, FOMO, sunk cost, anchoring
3. Assess circle of competence — do you truly understand this domain?
4. Apply Lollapalooza effect — are multiple forces combining (for or against)?
5. Check the moat — what is the durable competitive advantage?
6. Apply the "newspaper test" — would you be proud of this decision on the front page?

**Peter Thiel — Zero-to-One Analysis:**
1. Is this a 0-to-1 opportunity (creating something new) or 1-to-n (copying)?
2. What is the secret — what do you believe that most people do not?
3. Can this become a monopoly in a small market before expanding?
4. Apply definite optimism — is there a specific plan, not just hope?
5. Assess the power law — could this be a 100x return, or is it incremental?
6. Check last mover advantage — will this be the definitive solution?

### Phase 3: Mental Models Application

1. Compile all three analyses side by side
2. Identify where all three agree (high-confidence signal)
3. Identify where they disagree (requires deeper analysis)
4. Apply second-order thinking — what happens AFTER the first move?
5. Calculate the asymmetry — is the upside much larger than the downside?
6. Run the pre-mortem — imagine it failed, what was the cause?

### Phase 4: Recommendation

1. Synthesize into a clear invest/pass/conditional recommendation
2. If invest: recommended terms, amount, and conditions
3. If pass: what would need to change to reconsider
4. If conditional: specific milestones or information needed
5. Define kill criteria — what triggers exiting the investment
6. Provide monitoring framework — what metrics to track

## Output Format

```yaml
investment_counsel:
  opportunity: "{description}"
  committee: [ray-dalio, charlie-munger, peter-thiel]
  analyses:
    dalio:
      principles_assessment: "{analysis}"
      expected_value: "{calculation}"
      stress_test: "{worst case}"
      verdict: "INVEST | PASS | CONDITIONAL"
    munger:
      mental_models_applied: ["{models used}"]
      inversion_result: "{failure scenarios}"
      bias_check: ["{biases identified}"]
      verdict: "INVEST | PASS | CONDITIONAL"
    thiel:
      zero_to_one: "{is this creating something new?}"
      monopoly_potential: "{assessment}"
      power_law_fit: "{could this be a 100x?}"
      verdict: "INVEST | PASS | CONDITIONAL"
  synthesis:
    agreement: ["{convergence}"]
    disagreement: ["{divergence}"]
    asymmetry: "{upside vs downside}"
  recommendation:
    verdict: "INVEST | PASS | CONDITIONAL"
    terms: "{if invest}"
    conditions: "{if conditional}"
    kill_criteria: ["{exit triggers}"]
    monitoring: ["{key metrics}"]
```

## Veto Conditions

- **NEVER** recommend investing without stress-testing assumptions
- **NEVER** skip the inversion exercise — always consider how it could fail
- **NEVER** ignore cognitive biases in the analysis
- **NEVER** recommend based on FOMO or social proof alone
- **NEVER** present a recommendation without defining kill criteria

## Completion Criteria

- [ ] Opportunity framed with available financial data
- [ ] Dalio's principles-based analysis completed with stress test
- [ ] Munger's mental models applied with inversion and bias check
- [ ] Thiel's zero-to-one analysis completed with monopoly assessment
- [ ] Analyses synthesized with agreement and disagreement mapped
- [ ] Clear recommendation with terms or conditions
- [ ] Kill criteria and monitoring framework defined
