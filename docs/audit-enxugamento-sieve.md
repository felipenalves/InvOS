# Auditoria de Enxugamento — INVOS

**Data:** 2026-07-24  
**Escopo:** `/Users/felipealves/FelipeOS/projetos/Felipe.aiOS/projetos/invos`  
**Persona:** Empresário solo / prestador de serviço  
**Read-only:** Nenhum arquivo foi editado.

---

## 1. Veredito (5 linhas)

**Score: 6/10** — O core INVOS (memoria + clientes + session skills + proposta + social-content) é enxuto e funcional. O problema é **gordura opcional que veio junto**: 22 skills (10+ nunca usadas por empresário solo semanalmente), 3 squads (só 1 é MVP real), e README/AGENTS.md com seções duplicadas. Risco principal: **modelo fraco vai carregar description de 22 skills no boot** e se confundir com triggers sobrepostos (notion vs google-workspace vs composio; humanizer vs stop-slop).

---

## 2. Tabela KEEP (essencial dia a dia)

| Path | Por quê | Freq. esperada |
|------|---------|----------------|
| `memoria/` (9 arquivos) | Cérebro do negócio. Sem isso não existe INVOS. | Toda sessão |
| `clientes/_index.md` + `_template/` | Pipeline de vendas + duplicar cliente. Core do prestador. | Toda sessão |
| `marca/marca.md` + `assets/` | Identidade visual pra propostas e posts. | Toda sessão (via proposta/social-content) |
| `conteudo/_fila.md` | Fila de conteúdo pra postar. | Semanal |
| `.agents/skills/session-start` | Boot. Não negocia. | Toda sessão |
| `.agents/skills/session-end` | Arquivamento. | Toda sessão |
| `.agents/skills/session-checkpoint` | Checkpoint proativo. | Durante sessão |
| `.agents/skills/onboard` | Primeira configuração. | 1x (depois arquivar) |
| `.agents/skills/proposta` | Proposta comercial HTML. Ferramenta #1 do prestador. | Quinzenal |
| `.agents/skills/social-content` | Posts/legendas texto. Leve, rápido. | Semanal |
| `.agents/skills/instagram-carrossel` | Carrossel IG. MVP (1-2 HTML + caption). | Semanal |
| `.agents/skills/design-marca` | Extrair branding de site. | Mensal |
| `scripts/validar.sh` | Valida integridade do kit. | Pós-edit |
| `scripts/smoke-estado.sh` | Smoke test de coerência. | Pós-edit |
| `AGENTS.md` | Fonte de verdade de operação. | Toda sessão (lido pelo agente) |
| `COMECE-AQUI.md` | Setup inicial. | 1x (depois não lido) |

---

## 3. Tabela TRIM (manter mas encolher)

| Path | O que cortar | Ganho |
|------|-------------|-------|
| `AGENTS.md` | **Seção "Proactive Content — Formato Seriado"** (linhas 76-110): 35 linhas de tutorial de conteúdo que o empresário solo não precisa ler no boot. Mover para `conhecimento/formato-seriado.md` e referenciar 1 linha. | -800 tokens boot |
| `AGENTS.md` | **Tabela "Dia a dia do prestador"** (linhas 36-49): duplica o que já está em `COMECE-AQUI.md` Passo 5. Manter 3 linhas essenciais + link. | -400 tokens |
| `AGENTS.md` | **Tabela "Skills disponíveis"** (linhas 138-153): redundante com o trigger natural das skills. Manter só as 5 core + 1 linha "outras sob demanda". | -300 tokens |
| `AGENTS.md` | **Tabela "Squads disponíveis"** (linhas 155-163): o empresário não usa squads. Manter 1 linha: "Squads: instagram-carrossel (produção), brand, advisory-board — detalhes em `.agents/squads/`." | -150 tokens |
| `README.md` | **Seções "O problema" + "Como funciona"** (linhas 31-150): 120 linhas de marketing. O ZIP é a venda; o README é ref. Manter tabela "Core do dia a dia" + link pra COMECE-AQUI. | -3.000 tokens (mas não lido no boot) |
| `COMECE-AQUI.md` | **Passo 0 + Passo 2** (linhas 38-87): explicação óbvia ("abra a pasta no agente"). Manter só Passo 1 (renomear) + Passo 3 (onboard). | -500 tokens |
| `.agents/skills/humanizer` | Manter, mas **renomear trigger** para "humanizer-ptbr" e adicionar `aliases: [tira-ia, limpa-texto]` — empresário não sabe o que é "humanizer". | Clareza |
| `.agents/skills/stop-slop` | Mesmo caso. Aliases: `tira-ia-en, clean-english`. | Clareza |

---

## 4. Tabela CUT / Opcional (fora do core ou mover)

| Path | Motivo | Se mover: para onde |
|------|--------|---------------------|
| `.agents/skills/llm-wiki` | Knowledge base interligada. **507 linhas.** Empresário solo não usa wiki. É ferramenta de dev/pesquisador. | `addons/llm-wiki/` ou deletar |
| `.agents/skills/popular-web-designs` | 54 templates de design systems. **214 linhas.** Empresário não pede "faz igual Stripe". É pra dev frontend. | `addons/popular-web-designs/` ou deletar |
| `.agents/skills/pd-ikigai` | Encontrar ideia de negócio. **Uma vez na vida.** Não é operação diária. | `addons/pd-ikigai/` |
| `.agents/skills/audit` | Auditoria Four Cs. Roda 1x por semana no máximo. Não precisa estar no boot. | Manter em skills mas sem trigger automático |
| `.agents/skills/apple/*` (2) | **macOS only.** 50% do ICP usa Windows. Se incluir, colocar guard: `if platform != darwin: skip`. | `addons/apple/` ou condicional |
| `.agents/skills/productivity/notion` | Notion é opcional. Empresário solo pode não usar. | `addons/notion/` |
| `.agents/skills/productivity/google-workspace` | Gmail/Calendar. Opcional. Composio já cobre. | `addons/google-workspace/` |
| `.agents/skills/productivity/maps` | Geocode/POIs. Nenhum prestador precisa disso. | `addons/maps/` ou deletar |
| `.agents/skills/productivity/nano-pdf` | Editar PDFs. Nicho. | Manter mas sem destaque |
| `.agents/skills/productivity/ocr-and-documents` | Extrair texto de PDFs. Nicho. | Manter mas sem destaque |
| `.agents/skills/productivity/powerpoint` | Criar .pptx. Raramente usado. | `addons/powerpoint/` |
| `.agents/squads/advisory-board` | 11 conselheiros (Naval, Thiel, Munger...). **Overkill total** pra empresário solo. Nunca vai usar. | `addons/advisory-board/` ou deletar |
| `.agents/squads/brand` | 7 especialistas de branding. **Overkill.** `design-marca` já cobre o essencial. | `addons/brand/` |
| `integracoes/composio/` | Opcional. Só se o empresário pedir. | Manter como está (já é opcional) |

---

## 5. Conflitos e Ambiguidade de Trigger

| Par de skills | Conflito | Recomendação |
|---------------|----------|--------------|
| `social-content` vs `instagram-carrossel` | Ambas criam conteúdo IG. "Post" vs "Carrossel" é a linha, mas modelo fraco vai confundir. | **Já resolvido no AGENTS.md**: social-content = texto, carrossel = visual. Manter. |
| `humanizer` vs `stop-slop` | Uma é PT-BR, outra EN. Mas trigger "tira-ia" é ambíguo. | Adicionar alias claro: `humanizer-ptbr` e `stop-slop-en`. |
| `notion` vs `google-workspace` vs `composio` | Três ways de acessar dados. Notion = banco. Google = email/calendário. Composio = CLI. Modelo fraco vai chamar a errada. | **Cortar notion e google-workspace do core.** Composio já cobre CLI. Se precisar, volta via addon. |
| `proposta` vs `design-marca` | Proposta já lê `marca/marca.md`. Design-marca extrai de site. Conflito: "extrai minha marca" → design-marca. "faz proposta" → proposta. | OK. Sem conflito real. |
| `session-start` vs `onboard` | Session-start detecta template e chama onboard. OK. | Sem conflito. |
| `llm-wiki` vs `memoria/` | Duas formas de knowledge base. llm-wiki é interligada; memoria/ é simples. Modelo fraco vai misturar. | **Cortar llm-wiki.** Memória já resolve. |

---

## 6. Boot Mínimo para Modelo Fraco

### O que o agente DEVE ler no session-start (ordem):

1. `AGENTS.md` (enxugado, ~4.000 tokens)
2. Skill `session-start` → lê automaticamente:
   - `memoria/empresa.md`
   - `memoria/projetos.md`
   - `memoria/decisoes.md`
   - `memoria/insights.md`
   - `memoria/ativo.md`
   - `clientes/_index.md`
   - `marca/marca.md`
   - Último `memoria/historico/`

### O que NUNCA carregar no boot:

- `README.md` (12.8KB de marketing)
- `SECURITY.md` (só sob demanda)
- `.agents/skills/*/SKILL.md` (corpo completo — só description)
- `.agents/squads/` (só se pedir)
- `integracoes/` (só se pedir)
- `llm-wiki`, `popular-web-designs`, `pd-ikigai` (nunca no boot)
- `apple/*`, `productivity/*` (só se platform check passar)

### Checklist de 10s se AGENTS.md estiver gordo:

```
[ ] AGENTS.md tem < 6.000 bytes?
[ ] Tabela "Dia a dia" tem < 8 linhas?
[ ] Tabela "Skills disponíveis" tem < 8 linhas?
[ ] Seção "Proativo" tem < 15 linhas?
[ ] Não há seção de marketing/tutorial?
[ ] Link pra COMECE-AQUI.md (não duplica)?
[ ] Total skills listadas no boot: < 8?
[ ] Squads: 1 linha + link?
```

---

## 7. Plano de Enxugamento em 3 Ondas

### Onda 1 (hoje, zero risco de quebrar fluxo comercial)

1. **AGENTS.md**: mover "Formato Seriado" para `conhecimento/formato-seriado.md` (-800 tokens)
2. **AGENTS.md**: enxugar tabela "Dia a dia" de 14 para 5 linhas (-400 tokens)
3. **AGENTS.md**: enxugar tabela "Skills disponíveis" de 14 para 6 linhas (-300 tokens)
4. **AGENTS.md**: enxugar tabela "Squads" de 4 para 1 linha (-150 tokens)
5. **Renomear triggers**: `humanizer` → `humanizer-ptbr`, `stop-slop` → `stop-slop-en`

**Resultado**: AGENTS.md de ~9.2KB para ~5.5KB (~1.400 tokens economizados no boot)

### Onda 2 (semana, mover para addons)

1. Mover `llm-wiki/` → `addons/llm-wiki/`
2. Mover `popular-web-designs/` → `addons/popular-web-designs/`
3. Mover `pd-ikigai/` → `addons/pd-ikigai/`
4. Mover `apple/` → `addons/apple/` (com guard de platform)
5. Mover `productivity/notion/` → `addons/notion/`
6. Mover `productivity/google-workspace/` → `addons/google-workspace/`
7. Mover `productivity/maps/` → `addons/maps/`
8. Mover `productivity/powerpoint/` → `addons/powerpoint/`
9. Mover `.agents/squads/advisory-board/` → `addons/advisory-board/`
10. Mover `.agents/squads/brand/` → `addons/brand/`

**Resultado**: Skills core de 22 para 12. Squads de 3 para 1.

### Onda 3 (só se ICP não usar)

1. Se empresário não usa `ocr-and-documents` → mover pra addon
2. Se não usa `nano-pdf` → mover pra addon
3. Se não usa `audit` → mover pra addon (já é semanal)
4. Se `composio` nunca é pedido → mover pra addon
5. Consolidar `session-start` + `session-end` em 1 skill com flags (economiza 1 SKILL.md)

---

## 8. NÃO Recomendo

- Apagar `memoria/` ou `session-*` (core do sistema)
- Fundir `social-content` no `instagram-carrossel` (já decidido: texto vs visual)
- Inventar features novas
- Mover `proposta`, `design-marca`, `onboard` (core do prestador)
- Mudar `clientes/_template` ou `_index` (pipeline funcional)

---

## 5 Decisões — RESOLVIDO (Felipe, 2026-07-24)

| # | Proposta Sieve | Decisão produto |
|---|----------------|-----------------|
| 1 | Mover llm-wiki + popular-web → addons | **NÃO.** Empresário digital pesquisa e cria site/UI p/ si e clientes. |
| 2 | Mover squads advisory + brand → addons | **NÃO.** Bônus sob demanda (mentes/branding). |
| 3 | Mover productivity/* → addons / Composio | **NÃO** (exceto maps). Skill nativa Gmail/Notion/PPTX > CLI Composio no dia a dia. Composio = IG/TikTok/Telegram etc. |
| 4 | Mover apple → addons | **NÃO.** Manter Reminders/Notes. |
| 5 | Enxugar AGENTS por KB | **Parcial.** Otimizar **linhas/clareza**, não podar regra útil (engessa o sistema). |

**Única corte aprovado:** skill **`maps`** removida (sem encaixe; humano usa Google Maps).

Ver também: `memoria/decisoes.md` § Skills & enxugamento.
