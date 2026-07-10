---
task: setPricing()
responsavel: "@hormozi-pricing"
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
  - campo: pricingStrategy
    tipo: string
    destino: Console
    persistido: false

Checklist:
  - "[ ] Value delivered calculated with financial and emotional dimensions"
  - "[ ] Pricing model selected with rationale"
  - "[ ] Testing plan defined"
---

# Task: Set Pricing Strategy

**Task ID:** HORMOZI-003
**Version:** 1.0.0
**Command:** `*set-pricing`
**Agent:** Hormozi Pricing (hormozi-pricing)
**Purpose:** Design a value-based pricing strategy that maximizes revenue without competing on price.

---

## Inputs

| Field | Type | Source | Required | Validation |
|-------|------|--------|----------|------------|
| product | string | User prompt | Yes | Product or service to price |
| audience | string | User prompt | Yes | Target customer with willingness-to-pay context |
| current_price | number | User prompt | No | Existing price if applicable |
| cost_structure | object | User prompt | No | Cost to deliver (COGS, fulfillment, etc.) |
| competitor_prices | list | User prompt | No | Market pricing references |
| business_model | string | User prompt | No | One-time, subscription, tiered, usage-based |
| revenue_target | number | User prompt | No | Target monthly/annual revenue |

---

## Preconditions

- Product or service defined with clear value delivery
- Offer structure completed (ideally via create-offer.md first)

---

## Execution Phases

### Phase 1: Value Assessment
1. Calculate the ROI the customer receives from the product
2. Apply the 10x Rule: price should be 1/10 of the value delivered minimum
3. Determine the "cost of inaction" — what does NOT buying cost them?
4. Identify comparable investments the customer already makes
5. Assess the emotional value beyond financial ROI

### Phase 2: Pricing Architecture
1. Choose the pricing model:
   - Premium (high price, high touch, fewer customers)
   - Volume (lower price, systems-based, many customers)
   - Hybrid (tiered with entry and premium levels)
2. Set the anchor price (the "should be" number based on value)
3. Set the actual price as a fraction of the anchor
4. Design payment options:
   - Pay-in-full with discount incentive
   - Payment plan with premium for convenience
   - Subscription with lock-in benefits
5. Create pricing tiers if applicable:
   - Good: Core offer only
   - Better: Core + speed bonuses
   - Best: Core + all bonuses + premium access

### Phase 3: Price Justification
1. Build the price-to-value narrative
2. Calculate the daily/weekly cost breakdown ("less than a coffee per day")
3. Create the comparison stack (what else costs this much but delivers less)
4. Define the ROI timeline — when does the investment pay for itself?
5. Write the pricing section copy for sales materials

### Phase 4: Pricing Optimization
1. Set the initial test price
2. Define the price testing methodology:
   - Test at 2x current price first (most businesses underprice)
   - Monitor conversion rate AND revenue (not just conversion)
   - Revenue per lead matters more than conversion rate
3. Define price increase triggers
4. Plan the annual price increase strategy

---

## Output Format

```markdown
## Pricing Strategy: {Product Name}

**Model:** {premium / volume / hybrid}
**Price:** ${price}
**Value Delivered:** ${value}
**Value-to-Price Ratio:** {X}:1
**Cost of Inaction:** ${cost}/year

---

### Value Assessment

| Dimension | Value | Rationale |
|-----------|-------|-----------|
| Financial ROI | ${X} | {calculation} |
| Time Saved | {hours} | {at $X/hour = $Y} |
| Emotional Value | {qualitative} | {description} |
| Cost of Inaction | ${X}/year | {what they lose by not buying} |

### Pricing Tiers

| Tier | Includes | Price | Target Customer |
|------|----------|-------|----------------|

### Payment Options

| Option | Price | Terms | Incentive |
|--------|-------|-------|-----------|

### Price Justification Narrative
{Ready-to-use copy for sales materials}

### Testing Plan
| Phase | Price | Duration | Success Metric |
|-------|-------|----------|----------------|

### Price Increase Strategy
{Annual increase plan with triggers}
```

---

## Veto Conditions

- NEVER price based solely on competitor pricing — that is a race to the bottom
- NEVER lower price to increase sales without first testing at higher prices
- NEVER offer discounts without a strategic reason (urgency, loyalty, volume)
- NEVER price below 10x of delivery cost — margins must support growth
- NEVER set price without calculating the value delivered first

---

## Completion Criteria

- [ ] Value delivered calculated with financial and emotional dimensions
- [ ] 10x Rule applied and validated
- [ ] Pricing model selected with rationale
- [ ] Tiers and payment options designed
- [ ] Price justification narrative written
- [ ] Testing plan defined
- [ ] Price increase strategy documented
