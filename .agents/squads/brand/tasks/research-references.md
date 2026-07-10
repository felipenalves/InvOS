# Research References

```yaml
task:
  task_name: "Research Brand References from Brief"
  status: pending
  responsible_executor: marty-neumeier
  execution_type: Agent
  estimated_time: "30-45min"
  elicit: true

  input:
    - "Raw meeting brief (notes, transcript, or voice memo transcription)"

  output:
    - "Extracted brand signals"
    - "Reference brands (aspirational + anti-references)"
    - "Visual mood direction"
    - "Verbal/tone references"
    - "Competitive landscape snapshot"
    - "Structured brief for brand-diagnosis"

  action_items:
    - step: 1
      name: "Extract Brand Signals from Brief"
      description: |
        Read the raw brief and extract:
        - Sector / category (what the company does)
        - Target audience (who they serve)
        - Value proposition clues (what problem they solve)
        - Tone words the client used (adjectives, feelings, aspirations)
        - Brands the client mentioned (positive or negative)
        - What the client explicitly does NOT want
        - Price positioning signals (premium, accessible, mass)
        - Cultural context (country, language, regional nuance)

        Output as structured list. No interpretation yet — just extraction.

    - step: 2
      name: "Map Brand References"
      description: |
        Based on extracted signals, identify:

        **Aspirational References (3-5 brands):**
        - Brands that embody the client's desired perception
        - For each: name, sector, WHY it fits (1 sentence), key visual trait, key verbal trait

        **Anti-References (2-3 brands):**
        - Brands the client wants to avoid feeling like
        - For each: name, WHY it's a risk (1 sentence)

        **Adjacent References (2-3 brands):**
        - Brands in neighboring categories with relevant executions
        - Useful for cross-category inspiration without direct copy risk

        Priority: use real, documented brands. If sector is niche, go adjacent.
        Do NOT suggest generic "clean" or "modern" references — be specific.

    - step: 3
      name: "Visual Mood Direction"
      description: |
        Based on references and signals, define:

        **Visual Tension:** one axis (e.g., "Warm precision", "Raw sophistication", "Playful authority")

        **Typography Direction:**
        - Serif vs Sans vs Mixed
        - Formal vs Casual
        - High contrast vs monoweight
        - Reference typefaces (2-3 examples, not final choices)

        **Color Territory:**
        - Dominant hue family (warm / cool / neutral / chromatic)
        - Saturation level (muted / vivid / pastel / deep)
        - What competitors own (avoid these)
        - 2-3 reference color palettes from existing brands

        **Imagery / Texture Style:**
        - Photography style (studio / lifestyle / editorial / illustration)
        - Texture feel (clean digital / analog / brutalist / organic)

    - step: 4
      name: "Verbal / Tone References"
      description: |
        Identify brands with tone that fits:

        **Tone Axes (score 1-5 on each):**
        - Formal ←→ Casual
        - Serious ←→ Playful
        - Technical ←→ Accessible
        - Understated ←→ Bold
        - Warm ←→ Cool

        **Tone References (2-3 brands):**
        - For each: name + what their verbal identity does well that fits this client

        **Voice Dos:**
        - 3-5 things the brand voice should do

        **Voice Don'ts:**
        - 3-5 things to avoid

    - step: 5
      name: "Competitive Snapshot"
      description: |
        Map the client's direct competitive landscape:

        | Competitor | Visual Territory | Tone | Positioning Claim | Gap/Opportunity |
        |------------|-----------------|------|-------------------|-----------------|

        Identify white space: what visual or verbal territory is unclaimed?
        Flag if the client risks blending in with a dominant competitor visual.

    - step: 6
      name: "Output Structured Brief"
      description: |
        Compile everything into a structured brief ready for brand-diagnosis:

        - Sector + category
        - Target audience (primary + secondary)
        - Value proposition hypothesis
        - Archetype hypothesis (primary + secondary, with rationale)
        - Visual direction summary (3 sentences max)
        - Tone summary (3 sentences max)
        - Top 3 aspirational references with rationale
        - Top 2 anti-references with rationale
        - Competitive white space identified

  output_example: |
    ## Brand Reference Research — Ótica Visão Clara

    ### Extracted Signals
    - **Sector:** Eyewear retail (prescription glasses + sunglasses)
    - **Audience:** Adults 28-45, urban, value quality over price, tired of generic chains
    - **Value prop clue:** "Consultative experience, not just a purchase" (client's words)
    - **Tone words used:** sofisticado, humano, sem frescura, confiança
    - **Client mentioned positively:** Warby Parker, a local coffee shop experience
    - **Client mentioned negatively:** Chilli Beans ("muito barulhento"), LensaFácil ("parece plano de saúde")
    - **Price:** Premium accessible (not luxury, not mass)
    - **Context:** Brasil, SP, bairro Pinheiros

    ### Aspirational References
    | Brand | Sector | Why it fits | Visual trait | Verbal trait |
    |-------|--------|-------------|-------------|--------------|
    | Warby Parker | Eyewear | Direct-to-consumer warmth, editorial quality | Clean sans, earthy palette | Conversational, smart, no jargon |
    | Ace & Tate | Eyewear (EU) | Premium without stiffness, sustainable narrative | Minimal, high contrast, black/white + 1 color | Direct, opinionated, cultural |
    | Third Wave Coffee brands (e.g. Onibus) | F&B | Consultative experience feeling, local warmth | Artisanal type, texture, warm neutrals | Knowledgeable but human |

    ### Anti-References
    | Brand | Why it's a risk |
    |-------|----------------|
    | Chilli Beans | Loud visual identity reads as mass/youth — contradicts consultative positioning |
    | LensaFácil | Functional/clinical aesthetic signals health plan, not premium retail |

    ### Adjacent References
    | Brand | Sector | What to borrow |
    |-------|--------|---------------|
    | Aesop | Skincare | Premium accessible through restraint — minimal packaging, deep editorial voice |
    | Cusp. (bookstore) | Retail | Local authority feel, warm serif + editorial photography |

    ### Visual Mood Direction
    **Visual Tension:** "Editorial warmth"

    **Typography:** Humanist serif (headlines) + neutral sans (body). High readability, not decorative.
    References: Freight Display, Tiempos, Lyon Text.

    **Color Territory:**
    - Warm neutrals dominant (cream, sand, off-white)
    - 1 chromatic accent (deep green or rust — both unclaimed in local eyewear)
    - Avoid: blue (LensaFácil), black/neon (Chilli Beans)

    **Imagery:** Editorial lifestyle. Real people, natural light, Pinheiros aesthetic.
    No studio white backgrounds. No product-only shots.

    ### Verbal / Tone
    | Axis | Score |
    |------|-------|
    | Formal ←→ Casual | 3/5 (slightly casual) |
    | Serious ←→ Playful | 2/5 (grounded, not playful) |
    | Technical ←→ Accessible | 4/5 (very accessible) |
    | Understated ←→ Bold | 2/5 (understated) |
    | Warm ←→ Cool | 2/5 (warm) |

    **Tone References:** Warby Parker (smart casual), Aesop (restrained authority)

    **Voice Dos:** falar como especialista que respeita o cliente / usar frases curtas / mencionar o humano, não o produto
    **Voice Don'ts:** jargão técnico / exclamações / superlatives (melhor, líder, número 1)

    ### Competitive Snapshot
    | Competitor | Visual | Tone | Claim | Gap |
    |------------|--------|------|-------|-----|
    | Chilli Beans | Loud, neon, bold | Youth, irreverent | Moda acessível | — |
    | LensaFácil | Clean, clinical, blue | Functional | Preço e conveniência | — |
    | Óticas Carol | Colorful, promotional | Familiar | Variedade | — |
    | **White space** | Warm editorial | Consultative | — | Nenhuma marca ocupa premium humano em SP |

    ### Structured Brief for brand-diagnosis
    - **Sector:** Eyewear retail — premium accessible
    - **Audience:** Adultos urbanos 28-45, SP, valorizam experiência e curadoria
    - **Value prop hypothesis:** "A ótica que trata você como adulto inteligente"
    - **Archetype hypothesis:** Sage (primary) + Caregiver (secondary)
    - **Visual direction:** Editorial warmth — humanist type, warm neutrals, 1 deep accent, lifestyle photography
    - **Tone direction:** Consultative authority — knowledgeable but never clinical, warm but never folksy
    - **Top references:** Warby Parker, Ace & Tate, Aesop
    - **Anti-references:** Chilli Beans, LensaFácil
    - **White space:** Premium humano — território visual e verbal completamente aberto no mercado local

  acceptance_criteria:
    - "All 8 brand signals extracted from raw brief"
    - "Minimum 3 aspirational + 2 anti-references with rationale"
    - "Visual tension axis defined"
    - "Tone scored on 5 axes"
    - "Competitive white space identified"
    - "Structured brief ready to feed brand-diagnosis"

  veto_conditions:
    - "References chosen without rationale → VETO"
    - "Visual direction described only as 'clean' or 'modern' → VETO"
    - "No competitive landscape mapped → VETO"
    - "Structured brief missing archetype hypothesis → VETO"

  handoff:
    on_complete: "Pass structured brief to marty-neumeier for brand-diagnosis"
    deliverable: "Reference research document + structured brief"
```
