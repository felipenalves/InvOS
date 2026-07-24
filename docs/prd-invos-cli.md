# PRD — INVOS CLI (`npx invos`)

> Product Requirements Document · Kit Privado · CLI-first

---

## 1. Visão

INVOS = **cérebro do negócio** (intelligence) com 5 raios:

| Raio | Função |
|------|--------|
| **Oferta** | Proposta, precificação, escopo |
| **Aquisição** | Pipeline, clientes, leads, conteúdo |
| **Vendas** | Follow-up, fechamento, objeção |
| **Entrega** | Projetos, arquivos, revisões, prazos |
| **Operação** | Memória, regras, sessões, histórico |

Pasta = **SaaS de arquivos**. O CLI é o orquestrador que instala, atualiza e diagnostica o sistema.

## 2. Modelo de distribuição

- **Kit privado** (pago via Hotmart ou similar)
- Freemium futuro possível (kit público limitado)
- CLI = caminho **principal** de acesso
- Checkout integrado: landing page + entrega automática via Hotmart/GitHub token

## 3. Comandos

### 3.1 `npx invos init`

Cria novo projeto INVOS do zero.

```bash
npx invos init [--name <slug>] [--dir <path>]
```

- Gera estrutura completa: `AGENTS.md`, `MEMORY.md`, `SECURITY.md`, `.env.example`, `COMECE-AQUI.md`, `memoria/`, `marca/`, `clientes/`, `conteudo/`, `scripts/`, `.agents/skills/`, `.agents/squads/`
- `--name`: slug do negócio (ex: `ana-studio`)
- `--dir`: diretório destino (default: `./<name>`)
- Pós-init: `npx invos doctor` para verificar

### 3.2 `npx invos install`

Instala INVOS em **repo existente**. Inspirado em `npx aiox-core install`.

```bash
cd /meu-projeto && npx invos install
```

- Adiciona `.agents/skills/`, `.agents/squads/`, `memoria/` (se ausente), `scripts/`, `marca/`
- Cria `AGENTS.md` com `@AGENTS.md` se `CLAUDE.md` existe (link simbólico de documentação)
- Cria `INVOS-LOCK.json`
- **Nunca** sobrescreve: `memoria/` preenchida, `clientes/*` (exceto `_template`), `marca/` com conteúdo real, `conteudo/` real, `.env`

### 3.3 `npx invos update`

Atualiza sistema e skills.

**Sobe (shipped → local):**

| Sobe | Não sobe |
|------|----------|
| `.agents/skills/*` | `memoria/*` (dados do usuário) |
| `.agents/squads/*` | `clientes/<slug>/*` (exceto `_template`) |
| `AGENTS.md` (shipped) | `marca/marca.md` se preenchido |
| `scripts/*` | `conteudo/*` real |
| `COMECE-AQUI.md` | `.env` |
| `MEMORY.md` | `clientes/_index.md` |
| `SECURITY.md` | |
| `templates/` (`clientes/_template`, `marca/assets/`) | |

**Política de AGENTS.md custom:**

Se o AGENTS.md do usuário divergiu do shipped:
1. Renomeia shipped para `AGENTS.md.shipped.bak`
2. Warn: `⚠️ AGENTS.md customizado — backup em AGENTS.md.shipped.bak`
3. Oferece opções: `replace` (sobrescreve) | `skip` (mantém custom)

Sem machineId, sem rastreamento. Apenas diff contra `AGENTS.md.shipped.sha256` no lock.

### 3.4 `npx invos doctor`

Diagnóstico do sistema INVOS.

```bash
npx invos doctor [--fix]
```

- Verifica estrutura de pastas essenciais
- Verifica skills presentes (vs manifesto)
- Verifica lock file
- `--fix`: tenta corrigir problemas comuns (pastas faltando, symlinks quebrados)

### 3.5 `npx invos uninstall`

Remove estrutura INVOS do projeto.

```bash
npx invos uninstall [--force]
```

- Remove `.agents/`, `memoria/`, `marca/`, `clientes/`, `conteudo/`, `scripts/`
- Restaura `INVOS-LOCK.json` backup se existir
- `--force`: não pede confirmação

### 3.6 `npx invos pack` (fase 2)

Empacota skills ou o kit completo para distribuição.

```bash
npx invos pack [--output <dir>] [--scope skills|kit]
```

- Escopo `skills`: empacota `.agents/skills/` para reuso
- Escopo `kit`: snapshot completo do kit (sem dados do usuário)

## 4. Manifesto e lock

### 4.1 `INVOS.json` (manifesto PRODUCT / SEED / USER)

```json
{
  "version": "1.0.0",
  "manifest": "PRODUCT",
  "product": {
    "name": "invos",
    "type": "kit",
    "distribution": "private",
    "checkout": "hotmart+github"
  },
  "seed": {
    "skills": ["session-start", "session-end", "session-checkpoint", "onboard",
               "proposta", "design-marca", "social-content", "instagram-carrossel",
               "humanizer-ptbr", "stop-slop", "audit", "pd-ikigai", "notion"],
    "squads": ["instagram-carrossel", "advisory-board", "brand", "hormozi-squad"],
    "templates": ["clientes/_template", "marca/assets"]
  },
  "user": {
    "installedAt": "2026-07-24",
    "projectDir": ".",
    "branch": "develop"
  }
}
```

Três seções:
- **PRODUCT**: versão, tipo, distribuição (só no repo oficial)
- **SEED**: o que o `install`/`init` planta
- **USER**: metadados da instalação local (gerado pelo CLI)

### 4.2 `INVOS-LOCK.json`

```json
{
  "version": "1.0.0",
  "shippedSha": {
    "AGENTS.md": "abc123...",
    ".agents/skills/session-start/SKILL.md": "def456..."
  },
  "custom": {
    "AGENTS.md": "skip" // ou "replace"
  },
  "installedAt": "2026-07-24T10:00:00Z",
  "updatedAt": null
}
```

- `shippedSha`: sha256 de cada arquivo shipped para diff no update
- `custom`: decisão do usuário sobre arquivos divergentes
- Usado por `doctor` e `update`

## 5. Multi-harness

Skills canônicas vivem em `.agents/skills/`. Para Claude Code, cria-se `.claude/skills/` com symlinks:

```
.claude/skills/session-start -> ../../.agents/skills/session-start
.claude/skills/session-end   -> ../../.agents/skills/session-end
```

Outros harness (Cursor, Gemini, Codex) leem de `.agents/skills/` diretamente.

## 6. Fluxos

### 6.1 Primeira vez (comprou)

```
Compra na Hotmart
  → recebe link do GitHub (token automático)
  → npx invos init --name meu-negocio
  → npx invos doctor
  → Pronto!
```

### 6.2 Já tem projeto

```
cd /meu-projeto-existente
npx invos install
  → adiciona skills + memoria + scripts
  → não mexe em dados existentes
npx invos doctor
```

### 6.3 Atualizar

```
npx invos update
  → baixa último shipped
  → preserva USER
  → avisa se AGENTS.md custom
```

### 6.4 Checkout integrado (fase 2)

Landing page INVOS → compra Hotmart → gatilho webhook → GitHub release + token → `npx invos init` ou `install` pronto na máquina do comprador.

## 7. MVP (2 semanas)

| O que | Entrega |
|-------|---------|
| `npx invos init` | Gera estrutura completa |
| `npx invos install` | Instala em repo existente |
| `npx invos doctor` | Valida instalação |
| `npx invos update` | Atualiza skills shipped |
| `INVOS.json` + `INVOS-LOCK.json` | Manifesto e lock |
| Multi-harness | Symlinks `.claude/skills/` |
| AGENTS.md custom policy | `.bak` + skip/replace |

**Fora do MVP:**

- `npx invos uninstall`
- `npx invos pack`
- Checkout LP integrado (apenas MVP de CLI)
- Freemium público
- `npx invos upgrade` (para versões pagas)

## 8. Non-goals

- **Não é framework de agentes** — não substitui OpenSquad, LangChain, CrewAI
  (INVOS inspira version pin + kit update, mas não vira clone do opensquad)
- **Não é CMS** — conteúdo é markdown, não banco
- **Não é SaaS multi-tenant** — cada instalação é independente
- **Não tem telemetria** — sem machineId, sem tracking
- **Não substitui Hotmart** — CLI não gerencia pagamentos; só recebe token

## 9. Critérios de aceite

| # | Critério | Como verificar |
|---|----------|----------------|
| 1 | `npx invos init --name x` gera `x/` com estrutura completa | `ls x/` mostra AGENTS.md, MEMORY.md, memoria/, .agents/ |
| 2 | `npx invos install` em repo vazio adiciona skills sem quebrar nada | `git status` mostra novos arquivos, nenhum removido |
| 3 | `npx invos doctor` retorna exit 0 em kit completo | `echo $?` = 0 |
| 4 | `npx invos update` não sobrescreve `memoria/perfil.md` preenchido | `cat memoria/perfil.md` mantém conteúdo |
| 5 | AGENTS.md custom gera `.bak` + warn | `ls AGENTS.md.shipped.bak` existe |
| 6 | Symlinks `.claude/skills/*` apontam para `.agents/skills/*` | `readlink .claude/skills/session-start` = `../../.agents/skills/session-start` |
| 7 | Lock file contém sha256 dos shipped | `cat INVOS-LOCK.json` mostra `shippedSha` |

## 10. Referência

- OpenSquad (inspiração version pin): https://www.npmjs.com/package/opensquad
- AIOX `npx aiox-core install` (inspiração install em repo existente)
- INVOS atual: `projetos/invos-TEST` (sandbox de validação)
