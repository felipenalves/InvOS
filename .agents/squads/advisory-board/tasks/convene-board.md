---
task: conveneBoard()
responsavel: "@board-chair"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: strategic_question
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: context
    tipo: string
    origem: User Input
    obrigatorio: true

Saida:
  - campo: board_meeting
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] 3-5 relevant advisors consulted with their frameworks"
  - "[ ] Synthesis identifies agreement, disagreement, and tensions"
  - "[ ] Unified recommendation with dissenting views included"
---

# Task: Full Board Meeting

**Task ID:** BOARD-001
**Version:** 1.0.0
**Command:** `*convene-board`
**Agent:** Board Chair (board-chair)
**Purpose:** Convene a full advisory board session on a strategic question, synthesizing multiple advisor perspectives.

---

## Inputs

| Input | Source | Required |
|-------|--------|----------|
| `strategic_question` | User prompt | YES |
| `context` | Business situation, data, constraints | YES |
| `advisors_requested` | Specific advisors to include | NO (default: 3-5 most relevant) |
| `decision_urgency` | Timeline for decision | NO |
| `previous_decisions` | Related past decisions | NO |

## Preconditions

1. Strategic question is clearly framed
2. Sufficient context provided for advisors to form meaningful opinions
3. At least 3 advisors are relevant to the question domain

## Execution Phases

### Phase 1: Frame the Question (board-chair)

1. Restate the strategic question in precise terms
2. Identify the decision type: investment, scaling, culture, hiring, product, pivot, exit
3. Map the decision dimensions: financial, operational, cultural, strategic, ethical
4. Determine which 3-5 advisors are most relevant based on expertise domains
5. Define the constraints — time, resources, risk appetite, values
6. Frame the question for each advisor in their language and framework
7. Set the agenda — order of consultation based on logical flow

### Phase 2: Collect Perspectives (routed to 3-5 advisors)

For each selected advisor, request their perspective:

1. **Ray Dalio** — Principles-based analysis, systematic risk assessment, radical transparency lens
2. **Charlie Munger** — Mental models application, inversion thinking, what could go wrong
3. **Peter Thiel** — Zero-to-one thinking, contrarian perspective, monopoly potential
4. **Reid Hoffman** — Network effects, blitzscaling lens, alliance strategy
5. **Naval Ravikant** — Leverage analysis, specific knowledge application, long-term thinking
6. **Simon Sinek** — Purpose alignment, infinite game perspective, why behind the decision
7. **Brene Brown** — Courage assessment, vulnerability in leadership, trust implications
8. **Patrick Lencioni** — Team health impact, organizational dysfunction risks
9. **Derek Sivers** — Contrarian simplicity, "hell yeah or no" test, minimalist lens
10. **Yvon Chouinard** — Mission alignment, environmental/ethical impact, long-term sustainability

Each advisor provides:
- Their analysis through their specific framework
- Key risks they see
- Their recommendation
- Confidence level (high/medium/low)

### Phase 3: Synthesize Perspectives (board-chair)

1. Identify areas of agreement — where do advisors converge?
2. Identify areas of disagreement — where do they diverge and why?
3. Map the tensions — which disagreements represent genuine tradeoffs vs different assumptions?
4. Weight perspectives by relevance — whose expertise matters most for THIS question?
5. Identify blind spots — what has no advisor addressed?
6. Look for the "and" — can seemingly opposing views be reconciled?

### Phase 4: Present Unified Recommendation (board-chair)

1. State the synthesized recommendation clearly
2. Explain the reasoning — which advisor perspectives shaped it most and why
3. Acknowledge dissenting views — what strong arguments exist against the recommendation
4. Define the risk profile — what could go wrong and mitigation strategies
5. Provide decision criteria — what would change the recommendation
6. Offer the contrarian check — the strongest argument against the recommendation
7. Define next steps — specific actions if the recommendation is adopted

## Output Format

```yaml
board_meeting:
  chair: "board-chair"
  question: "{strategic question}"
  advisors_consulted: ["{advisor list}"]
  perspectives:
    - advisor: "{name}"
      framework: "{their lens}"
      analysis: "{their perspective}"
      recommendation: "{their advice}"
      confidence: "HIGH | MEDIUM | LOW"
      key_risk: "{biggest concern}"
  synthesis:
    areas_of_agreement: ["{convergence points}"]
    areas_of_disagreement: ["{divergence points}"]
    key_tensions: ["{genuine tradeoffs}"]
    blind_spots: ["{unaddressed areas}"]
  recommendation:
    action: "{what to do}"
    reasoning: "{why}"
    dissenting_views: ["{strong counterarguments}"]
    risk_profile: "{what could go wrong}"
    contrarian_check: "{strongest argument against}"
    next_steps: ["{specific actions}"]
```

## Veto Conditions

- **NEVER** present a recommendation without acknowledging dissenting views
- **NEVER** consult fewer than 3 advisors on a strategic question
- **NEVER** let one advisor's voice dominate without explicit justification
- **NEVER** skip the contrarian check — every recommendation needs a devil's advocate
- **NEVER** present unanimous agreement without questioning if groupthink is present

## Completion Criteria

- [ ] Question framed precisely with constraints defined
- [ ] 3-5 relevant advisors consulted with their specific frameworks
- [ ] Each advisor's perspective documented with confidence level
- [ ] Synthesis identifies agreement, disagreement, and tensions
- [ ] Unified recommendation with clear reasoning
- [ ] Dissenting views and contrarian check included
- [ ] Next steps defined for implementation
