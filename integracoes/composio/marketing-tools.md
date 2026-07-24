# Composio — toolkits úteis pra marketing/vendas (mapa)

Referência enxuta pro agente e pro prestador. Depth: Deep = uso diário ok · Medium = core · Shallow = básico.

## CRM / pipeline (fora do `_index` local)

| Toolkit | Auth | Uso típico INVOS | Depth |
|---------|------|------------------|-------|
| `HUBSPOT` | OAuth | Contatos, deals — espelhar quentes em `clientes/` | Deep |
| `SALESFORCE` | OAuth | Leads/opps (se o prestador usa) | Deep |

## E-mail

| Toolkit | Auth | Uso típico | Depth |
|---------|------|------------|-------|
| `GMAIL` | OAuth | Enviar proposta / follow-up | Deep |
| `MAILCHIMP` | OAuth | Lista / campanha (se tiver lista) | Deep |
| `KLAVIYO` / `ACTIVECAMPAIGN` | API Key | E-mail marketing | Medium |

## Ads (pago)

| Toolkit | Auth | Uso típico | Depth |
|---------|------|------------|-------|
| `FACEBOOKADS` | OAuth | Spend, campanhas Meta | Medium |
| `LINKEDIN` | OAuth | Ads / page analytics | Medium |
| `GOOGLEADS` | OAuth | Campanhas search | Medium |

## Produtividade

| Toolkit | Auth | Uso típico | Depth |
|---------|------|------------|-------|
| `GOOGLESHEETS` | OAuth | Lead list → importar pro `_index` | Deep |
| `NOTION` | OAuth | Notas / CRM paralelo | Deep |
| `SLACK` | OAuth | Avisos (se time) | Deep |
| `AIRTABLE` | OAuth | Base de leads | Deep |

## Commerce

| Toolkit | Auth | Uso típico | Depth |
|---------|------|------------|-------|
| `SHOPIFY` | OAuth | Pedidos/produtos (se ecom) | Deep |

## Analytics

| Toolkit | Auth | Uso típico | Depth |
|---------|------|------------|-------|
| `GOOGLEANALYTICS` | OAuth | Tráfego do site | Medium |

## Social orgânico (postar feed)

Muitos prestadores esperam “posta no Instagram sozinho”. Na prática:

- Composio brilha em **ads, CRM, e-mail, sheets**.  
- **Publicação orgânica** (IG/TikTok feed) costuma ser restrita por API da Meta/etc.  
- Fluxo INVOS recomendado: skill **`social-content`** gera o post → `conteudo/` → dono **humano** publica → opcionalmente registrar “publicado” na fila.

Sempre: `composio search "instagram"` / `"linkedin post"` no ambiente atual — a cobertura muda.

## Preferência se existir ferramenta nativa

Se o harness já tiver MCP/CLI **nativo** e mais profundo (ex.: Stripe, GA4 em alguns setups), prefira o nativo. Composio = **um conector pra muitos apps** e OAuth fácil.
