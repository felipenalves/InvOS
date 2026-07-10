# AGENTS.md

## Purpose

This file defines how agents should operate in this repository. Universal for any harness (Claude Code, Codex, OpenCode, Grok, Cursor, etc.).

## Required Context Order

**Leitura obrigatória no início de TODA sessão:**

1. Carregar skill `session-start` — lê `memoria/perfil.md`, `memoria/empresa.md`, `memoria/projetos.md`, `memoria/decisoes.md`, `memoria/insights.md`, `memoria/regras/*`, `memoria/ativo.md`, último histórico
2. Se `empresa.md` ou `projetos.md` ainda contém placeholders (primeiro uso), disparar skill `onboard` antes de continuar
3. `memoria/` está carregado, seguir para o que o usuário pedir

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

## Proactive Content

Toda ação relevante vira conteúdo. Não enfeite. Não faça filtro. O valor está no problema resolvido.

Quando detectar:
- **Commit novo** — analise o que mudou e por quê. Sugira 1-2 ângulos de conteúdo (thread, post, carrossel, vídeo)
- **Decisão de produto** — "escolhemos X em vez de Y". Traduza em "por que essa escolha importa pra você"
- **Bug corrigido** — vire "o erro que me fez aprender X" ou "como evitar Y"
- **Feature nova** — mostre o antes/depois. Qual dor ela cura?
- **Aprendizado** — algo que descobriu testando. Isso é conteúdo.

Apresente como: "Ângulo de conteúdo: [título]. Por que funciona: [dor que ataca]."
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
