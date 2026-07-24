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
- **Leve:** `conteudo/` (fila de post)
- **Bônus:** squads (advisory-board, brand, hormozi) e skills extras — opcional; se squad brand rodar, **grave** em `marca/marca.md`

**Ao encerrar:** Quando o usuário disser que a sessão acabou ("fim", "acabou", "sessão encerrada"), disparar skill `session-end`.

## Dia a dia do prestador (rituais)

Prioridade de projeto no inventário = linha com **PRIORIDADE ATUAL** em `memoria/projetos.md` (não invente).

| O user diz (ou similar) | Você faz |
|-------------------------|----------|
| “O que importa hoje?” / “por onde começo?” / início de sessão | **Sempre** 1 prioridade + dono + próximo passo (`ativo` + PRIORIDADE em `projetos` + `_index` clientes). Se dono=agente → execute ou ofereça executar. Se dono=humano → `⚠️ Sua vez:`. |
| “Cliente atual: X” / “abre o cliente X” | Lê `clientes/<slug>/`. Se não existir, oferece criar a partir de `clientes/_template/` + linha no `_index`. |
| “Cria o cliente …” | **Duplica** `clientes/_template` → `clientes/<slug>` (não edite o `_template`). Preenche + **1 linha em `_index`**. Detalhe: `COMECE-AQUI.md` passo 4. |
| “Proposta” / “orçamento” / “cotação pro X” | Skill **`proposta`**. HTML em `clientes/<slug>/propostas/*.html`; brand de **`marca/marca.md`**; `_index` com valor/pagto; msg de envio + Fila humana. |
| “Proposta completa / RFP / enterprise” | Skill proposta em modo avançado (`references/proposta-avancada.md`). |
| “Extrai marca do site” / cores / logo | Skill **`design-marca`** → `marca/marca.md` + `marca/assets/`. |
| “O que posto essa semana?” | `conteudo/_fila.md` + voz em `marca/`; 1 peça com dono. |
| “Cliente pagou / a receber” | Atualiza `_index` colunas **valor** / **pagto**. |
| Arquivo/HTML/PDF pro cliente | `clientes/<slug>/arquivos/` (nunca na raiz; logo **sua** em `marca/assets/`). |

**Clientes:** `clientes/README.md`. **Marca:** `marca/README.md`.

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
- **Task só humana:** grava **Fila humana** + alerta `⚠️ Sua vez:`
- **Usuário diz qualquer gatilho:** "guarda isso", "anota", "não esquece"

Não pergunte "quer que eu salve?" — apenas salve e avise "Checkpoint salvo: [tipo]". Se o usuário não quiser, ele vai falar.

**Execução:** o que for dono=`agente` e estiver no escopo do chat/repo — faça. Não empurre pro humano por preguiça.

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
| humanizer | Remover padrões de IA do texto em PT-BR |
| stop-slop | Remover padrões de IA do texto em EN |
| audit | Auditoria Four Cs — nota 0-100 pro seu sistema |
| notion | CLI/API do Notion — ler, escrever, buscar |
| pd-ikigai | Encontrar ideia de negócio lucrativa (framework Ikigai) |

## Squads disponíveis

| Squad | O que faz |
|-------|-----------|
| advisory-board | Conselho consultivo com 11 pensadores (Naval, Dalio, Thiel, Sinek...) |
| brand | Squad de marca — posicionamento, naming, identidade visual |
| hormozi-squad | Squad de crescimento e oferta (framework Hormozi) |

Ver `.agents/squads/` para detalhes de cada squad.

Ver `.agents/skills/` para detalhes de cada uma.
