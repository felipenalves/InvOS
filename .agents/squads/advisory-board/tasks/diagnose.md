---
task: diagnoseAdvisoryBoard()
responsavel: "@board-chair"
responsavel_type: Agent
atomic_layer: Task
elicit: true

Entrada:
  - campo: user_message
    tipo: string
    origem: User Input
    obrigatorio: true
  - campo: routing_catalog
    tipo: string
    origem: data/routing-catalog.yaml
    obrigatorio: true

Saida:
  - campo: diagnosis
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] User intent parsed and categorized"
  - "[ ] Cross-cutting answer delivered to user"
  - "[ ] Routing suggestion provided"
---

# Task: Diagnose & Route — Advisory Board Squad

## Metadata

| Field         | Value                                            |
|---------------|--------------------------------------------------|
| Task ID       | `advisory-board:diagnose`                        |
| Command       | `@advisory-board` or `@advisory-board:board-chair` |
| Orchestrator  | `board-chair`                                    |
| Version       | 1.0.0                                            |
| Created       | 2026-03-05                                       |

## Purpose

Analyze the user's strategic question, provide an immediate cross-cutting answer,
and determine whether specialist routing is needed. The chair NEVER loads an advisor
agent file during diagnosis — it only identifies the best route.

## Inputs

| Input            | Source              | Required |
|------------------|---------------------|----------|
| `user_message`   | User prompt         | YES      |
| `routing_catalog` | `data/routing-catalog.yaml` | YES |
| `config`         | `config/config.yaml` | YES     |
| `conversation_history` | Session context | NO       |

## Preconditions

1. User message is not empty
2. Routing catalog is loaded and accessible

## Execution Phases

### Phase 1: Parse Request

1. Extract the core question or intent from the user message
2. Identify keywords, advisory domains, and strategic context
3. Determine the advisory domain: financial, entrepreneurial, organizational, or philosophical
4. Determine the decision style needed: quantitative/systematic, mental-model-based, first-principles, network-strategic, purpose-driven, courage-based, team-health-based, or minimalist-contrarian

### Phase 2: Match Routing Catalog

1. Load `data/routing-catalog.yaml`
2. Match extracted keywords against domain keyword lists
3. Score each domain by keyword overlap and contextual relevance
4. Identify `primary_agent` and `secondary_agent` for the top-scoring domain
5. If multiple domains score equally, consider the decision style to break ties:
   - Quantitative decisions: prefer ray-dalio
   - Mental model questions: prefer charlie-munger
   - First-principles problems: prefer peter-thiel, naval-ravikant
   - Network/scaling: prefer reid-hoffman
   - Purpose/culture: prefer simon-sinek, brene-brown
   - Team dynamics: prefer patrick-lencioni

### Phase 3: Cross-Cutting Answer

**MANDATORY — Always execute this phase before any routing.**

1. Provide an immediate, useful answer to the user's question
2. The answer should be actionable and demonstrate strategic advisory competence
3. Include relevant context: frameworks, principles, or mental models applicable
4. Reference the applicable advisory perspective by name
5. This answer must stand alone — even if the user never follows the routing suggestion

### Phase 4: Confidence Assessment

Assess routing confidence:

| Level  | Criteria                                      | Action                        |
|--------|-----------------------------------------------|-------------------------------|
| HIGH   | Clear keyword match, single domain, unambiguous | Route to primary advisor     |
| MEDIUM | Multiple domains match, slight ambiguity       | Suggest primary + secondary   |
| LOW    | No clear match, vague request, cross-domain    | Stay with chair, ask clarifying questions |

## Output Format

```yaml
diagnosis:
  intent: "{parsed user intent}"
  advisory_domain: "financial | entrepreneurial | organizational | philosophical"
  decision_style: "{identified decision style}"
  matched_domain: "{domain from routing catalog}"
  confidence: "HIGH | MEDIUM | LOW"
  primary_agent: "{agent-id}"
  secondary_agent: "{agent-id}"
  cross_cutting_answer: |
    {The immediate answer provided to the user}
  routing_suggestion: |
    {Why this advisor was chosen and what they can add}
```

## Veto Conditions

- **NEVER** route without providing a cross-cutting answer first
- **NEVER** route when confidence is LOW — stay with chair and ask clarifying questions
- **NEVER** load an advisor agent file during diagnosis — only identify the route
- **NEVER** invoke a full board meeting during diagnosis — route to one advisor at a time
- **NEVER** default to the same advisor for every question — match the actual domain

## Completion Criteria

- [x] User intent parsed and categorized
- [x] Advisory domain and decision style identified
- [x] Routing catalog consulted and domain matched
- [x] Cross-cutting answer delivered to user
- [x] Confidence level assessed
- [x] Routing suggestion provided (if confidence >= MEDIUM)
- [x] No advisor agent files loaded during diagnosis
