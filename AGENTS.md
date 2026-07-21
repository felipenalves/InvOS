# AGENTS.md

## Purpose

This file defines how agents should operate in this repository. Universal for any harness (Claude Code, Codex, OpenCode, Grok, Cursor, etc.).

## Required Context Order

**Leitura obrigatória no início de TODA sessão:**

1. Carregar skill `session-start` — lê `memoria/perfil.md`, `memoria/empresa.md`, `memoria/projetos.md`, `memoria/decisoes.md`, `memoria/insights.md`, `memoria/regras/*`, `memoria/ativo.md`, último histórico
2. **Onboard obrigatório se a memória ainda for template.** Disparar skill `onboard` **antes** de anunciar estado ou continuar o trabalho se **qualquer** um for verdadeiro:
   - `memoria/empresa.md` contém `[o que` **ou** `[seu nome]` **ou** `PREENCHA`
   - `memoria/projetos.md` contém `PREENCHA`
   - `memoria/ativo.md` contém `primeira sessão`
3. Se a memória já está configurada: anunciar estado (founder, oferta, cliente ideal, projeto, foco) e **provar segunda sessão** em 1 parágrafo — **sem** re-entrevistar
4. `memoria/` está carregado, seguir para o que o usuário pedir

**Core vs bônus:** o core é o loop de memória (`memoria/` + session-start/end/checkpoint/onboard). Squads (advisory-board, brand, hormozi) são **bônus opcionais**, não requisito pro wow.

**Ao encerrar:** Quando o usuário disser que a sessão acabou ("fim", "acabou", "sessão encerrada"), disparar skill `session-end`.

## Proactive Behavior

During the session, automatically invoke `session-checkpoint` when you detect:

- **Decisão arquitetural ou de produto:** "vamos usar X em vez de Y", "mudamos de direção"
- **Lição aprendida:** algo quebrou e descobrimos o porquê
- **Escopo alterado:** feature cortada, nova prioridade, prazo mudou
- **Deploy / release:** algo foi pra produção
- **Link ou documento relevante:** URL, PR, issue que precisa ser registrada
- **Insight estratégico:** conexão entre coisas, epifania sobre o negócio
- **Usuário diz qualquer gatilho:** "guarda isso", "anota", "não esquece"

Não pergunte "quer que eu salve?" — apenas salve e avise "Checkpoint salvo: [tipo]". Se o usuário não quiser, ele vai falar.

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
