# AGENTS.md

## Purpose

This file defines how agents should operate in the **INVOS system** (business memory for any AI agent). Universal for any harness (Claude Code, Codex, OpenCode, Grok, Cursor, Gemini, etc.).

**SOT multi-harness.** `CLAUDE.md` (se existir) só aponta pra cá (`@AGENTS.md`).  
O ZIP é só a entrega do sistema; o valor é memória + clientes + proposta + este arquivo.

## Required Context Order

**Leitura obrigatória no início de TODA sessão:**

0. Se for **primeira abertura** do kit, user pediu instalar/setup/“como começo”, ou pasta ainda se chama `invos-kit`: leia e siga **`COMECE-AQUI.md`** (instalação, renomear pasta, duplicar template de cliente).
1. Carregar skill `session-start` — lê `memoria/*` core, `clientes/_index.md`, `marca/marca.md`, último histórico
2. **Onboard obrigatório se a memória ainda for template.** Disparar skill `onboard` **antes** de anunciar estado ou continuar o trabalho se **qualquer** um for verdadeiro:
   - `memoria/empresa.md` contém `[o que` **ou** `[seu nome]` **ou** `PREENCHA`
   - `memoria/projetos.md` contém `PREENCHA`
   - `memoria/ativo.md` contém `primeira sessão`
3. Se a memória já está configurada: anunciar estado (founder, oferta, cliente ideal, projeto, foco) e **provar segunda sessão** em 1 parágrafo — **sem** re-entrevistar
4. `memoria/` está carregado, seguir para o que o usuário pedir

**Core vs bônus:**
- **Core:** `memoria/` + `marca/` + `clientes/` + session skills + onboard + `proposta` + `design-marca`
- **Produção IG:** skill **`instagram-carrossel`** default **MVP** (HTML+caption); pipeline full opcional
- **Leve (só texto):** `social-content` + `conteudo/_fila.md`
- **Empresário digital (sob demanda):** `google-workspace` (Gmail etc.), `notion`, `llm-wiki` (pesquisa → KB), `popular-web-designs` (site/UI cliente ou próprio), `pd-ikigai`, `powerpoint`/`ocr`/`nano-pdf`, `apple-*` (macOS)
- **Composio:** redes/apps extras (IG/TikTok/Telegram…) — **não** substitui skill Gmail/Notion nativa
- **Estratégia (não é post):** squads advisory-board, brand, hormozi — brand → resumo em `marca/`

**Skills multi-harness:** canônico = `.agents/skills/` (Codex, OpenCode, Grok, Gemini, Antigravity…). Claude Code = `.claude/skills/` (symlinks para o mesmo). Não duplicar conteúdo.

**Ao encerrar:** Quando o usuário disser que a sessão acabou ("fim", "acabou", "sessão encerrada"), disparar skill `session-end`.

## Dia a dia do prestador (rituais)

Prioridade de projeto no inventário = linha com **PRIORIDADE #1** (ou `#2`…) em `memoria/projetos.md` (não invente).

| O user diz (ou similar) | Você faz |
|-------------------------|----------|
| “O que importa hoje?” / “por onde começo?” / início de sessão | **Sempre** 1 prioridade + dono + próximo passo (`ativo` + PRIORIDADE em `projetos` + `_index` clientes). Se dono=agente → execute ou ofereça executar. Se dono=humano → `⚠️ Sua vez:`. |
| “Cliente atual: X” / “abre o cliente X” | Lê `clientes/<slug>/`. Se não existir, oferece criar a partir de `clientes/_template/` + linha no `_index`. |
| “Cria o cliente …” | **Duplica** `clientes/_template` → `clientes/<slug>` (não edite o `_template`). Preenche + **1 linha em `_index`**. Detalhe: `COMECE-AQUI.md` passo 4. |
| “Proposta” / “orçamento” / “cotação pro X” | Skill **`proposta`**. HTML em `clientes/<slug>/propostas/*.html`; brand de **`marca/marca.md`**; `_index` com valor/pagto; msg de envio + Fila humana. |
| “Proposta completa / RFP / enterprise” | Skill proposta em modo avançado (`references/proposta-avancada.md`). |
| “Extrai marca do site” / cores / logo | Skill **`design-marca`** → `marca/marca.md` + `marca/assets/`. |
| “O que posto essa semana?” / legenda / post texto | Skill **`social-content`** |
| “Carrossel” / “faz um carrossel” | Skill **`instagram-carrossel`** **modo MVP** (1–2 HTML + caption). Full pipeline só se pedir “fábrica completa”. |
| “Call amanhã …” / agendar call com cliente | `_index`: status **`call`**, próximo, dono=humano, desde=hoje + linha no `contexto.md` |
| “Gmail / Calendar / Drive / manda e-mail” | Skill **`google-workspace`** (nativa). Composio só se toolkit diferente ou já linkado. |
| “Notion …” | Skill **`notion`** (em `productivity/notion`) |
| “Pesquisa e guarda no segundo cérebro / wiki” | Skill **`llm-wiki`** (+ cliente em `clientes/<slug>/` se for do cliente) |
| “Site / UI estilo X (Stripe, Linear…)” | Skill **`popular-web-designs`** |
| “Cliente pagou / a receber” | Skill **proposta §6** / checkpoint: `_index` + perfil + entregas + **Próximo** em `projetos.md` + `ativo` (não só uma linha). |
| Arquivo/HTML/PDF pro cliente | `clientes/<slug>/arquivos/` (nunca na raiz; logo **sua** em `marca/assets/`). |

**Clientes:** `clientes/README.md`. **Marca:** `marca/README.md`. **Integrações:** `integracoes/README.md` (opcional).

**Toda task tem dono** (`agente` | `humano`) — `memoria/regras/task-com-dono.md`. Pendência > 3 dias → alerta no boot.

## Proactive Behavior

During the session, automatically invoke `session-checkpoint` when you detect:

- **Decisão arquitetural ou de produto:** "vamos usar X em vez de Y", "mudamos de direção"
- **Lição aprendida:** algo quebrou e descobrimos o porquê
- **Escopo alterado:** feature cortada, nova prioridade, prazo mudou
- **Deploy / release:** algo foi pra produção
- **Link ou documento relevante:** URL, PR, issue que precisa ser registrada
- **Insight estratégico:** conexão entre coisas, epifania sobre o negócio
- **Comercial:** lead, DM, proposta, call, status de cliente
- **Call agendada:** `_index` status=`call` + contexto do cliente (não só texto solto no chat)
- **Task só humana:** grava **Fila humana** + alerta `⚠️ Sua vez:`
- **Usuário diz qualquer gatilho:** "guarda isso", "anota", "não esquece"

Não pergunte "quer que eu salve?" — apenas salve e avise "Checkpoint salvo: [tipo]". Se o usuário não quiser, ele vai falar.

**Execução:** o que for dono=`agente` e estiver no escopo do chat/repo — faça. Não empurre pro humano por preguiça.

**Estado vivo:** se `_index` (pagto/status) contradiz `ativo`/`projetos` “Próximo”, **alinhe o disco** (verdade = pipeline + o que o user disse na sessão). Não deixe a 2ª sessão com “enviar proposta” se já pagou.

## Proactive Content — Formato Seriado

Toda ação relevante vira conteúdo. Mas conteúdo isolado não prende. O formato é **seriado** — como um programa de TV sobre construir o negócio em público.

### Estrutura de cada episódio

Cada conteúdo precisa ter:

1. **Cena** — onde estamos agora (o problema, o momento, a decisão)
2. **Tentativa** — o que eu fiz pra resolver
3. **Resultado** — o que aconteceu (acertei? errei?)
4. **Próximo episódio** — o que vem a seguir (gancho pra continuar assistindo)

O ICP precisa sentir que se ele perder o próximo episódio, ele perdeu algo.

### Exemplo aplicado

"Episódio 1: Toda vez que abro meu Claude, ele me trata como estranho. Cena: to há 15 minutos reexplicando quem sou. Tentativa: criei um template que responde 6 perguntas. Resultado: agora ele sabe meu nome, meu cliente, meu projeto. Próximo episódio: mostrar os bônus que botei dentro."

### Regras do formato

- **ICP é o protagonista**, não eu. Ele se vê na cena.
- **Sem nome de famoso**, sem framework importado. "Seu agente te trata como estranho" → ele sente.
- **Gancho no final** de todo conteúdo. "Amanhã vou mostrar como coloquei um consultor de vendas dentro do template."
- **Realidade, não perfeição.** Mostrar o erro, a tentativa, o aprendizado. Isso é o que prende.

### Gatilhos

Quando detectar evento (commit, decisão, bug, feature, aprendizado):
1. Traduz em cena do ICP ("você já passou por isso?")
2. Enquadra como episódio ("Episódio X: [título que o ICP falaria]")
3. Define gancho ("Próximo episódio: [o que vem]")

Apresente como: "Episódio: [título na voz do ICP]. Cena: [onde ele está]. Gancho: [próximo]."
Não peça permissão — sugira e siga. Se o usuário ignorar, guarde no checkpoint.

## Core Behavior

- Treat `memoria/` as real operating data, not demo content.
- Do not leak secrets, keys, or local machine paths into tracked files.
- Do not push automatically.
- Do not commit automatically unless the user explicitly asks.
- Verify changes before claiming success.
- Prefer the smallest correct change.

## Denylist Paths

Nunca auto-editar sem human gate:

```
.env*
**/secrets/**
**/credentials/**
**/*_key*
**/*_secret*
**/token*
**/auth*
SECURITY.md
```

## Skills disponíveis

| Skill | Quando usar |
|-------|-------------|
| session-start | Início de toda sessão |
| session-end | Fim da sessão |
| session-checkpoint | Durante a sessão (automático) |
| onboard | Primeiro uso (automático) — entrevista inicial |
| **proposta** | HTML pronto pra enviar (lê `marca/` + `clientes/`) |
| **design-marca** | Cores/fontes/logo → `marca/marca.md` (site ou manual) |
| **social-content** | Posts/legendas texto rápido → `conteudo/` |
| **instagram-carrossel** | Carrossel IG: default MVP (HTML+caption); full/squad opcional |
| **google-workspace** | Gmail, Calendar, Drive, Docs, Sheets |
| **notion** | Notion API/CLI |
| **llm-wiki** | Wiki/KB interligada (pesquisa → guardar) |
| **popular-web-designs** | Design systems reais (site/UI) |
| pd-ikigai | Ikigai / ideia e estratégia de oferta |
| apple-notes / apple-reminders | Notes e Reminders (macOS) |
| powerpoint / ocr / nano-pdf | PPTX, OCR, PDF leve |
| humanizer / stop-slop | Limpar texto IA (PT / EN) |
| audit | Four Cs — sob demanda |

## Squads disponíveis

| Squad | O que faz |
|-------|-----------|
| **instagram-carrossel** | **Produção** de carrossel IG (research→copy→visual→pack). Dono aprova. |
| advisory-board | Conselho estratégico (não produz post) |
| brand | Posicionamento/identidade → gravar em `marca/` |
| hormozi-squad | Oferta/leads/growth (framework; não é fábrica de feed) |

Ver `.agents/squads/index.md`.

Ver `.agents/skills/` para detalhes de cada uma.
