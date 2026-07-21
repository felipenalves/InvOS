---
name: session-start
description: Load memory context at the beginning of every session. Reads empresa.md, projetos.md, decisoes.md, insights.md, regras/, ativo.md. Archives previous session if new day. Must run before any other action. Runs onboard if placeholders remain.
---

# Session Start

Dispara no início de toda sessão em QUALQUER harness (Claude Code, Codex, OpenCode, Grok, Cursor, etc.). Carrega o estado atual do sistema e prepara o contexto.

## Sequence (sempre nesta ordem)

### 1. Verificar data do ativo.md

Se `memoria/ativo.md` existe, extrair a data do campo `**Data:**`:

```bash
grep -o '\*\*Data:\*\* [0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}' memoria/ativo.md | cut -d' ' -f2
```

Se a data extraída for anterior a hoje (YYYY-MM-DD real):
- Execute `session-end` com `reason=auto-new-day`
- Depois continue

### 2. Ler `memoria/empresa.md`

Identidade, estratégia, preferências do negócio. É a personalidade do sistema.

### 3. Ler `memoria/projetos.md`

Status de todos os projetos ativos.

### 4. Ler `memoria/decisoes.md`

Registro de decisões organizadas por tópico (cross-session).

### 5. Ler `memoria/insights.md`

Ideias estratégicas e epifanias de sessões anteriores.

### 6. Ler `memoria/regras/`

Todas as regras arquivadas. Leia cada arquivo — não pule.

### 7. Ler `memoria/ativo.md`

Contexto da sessão atual: foco, em andamento, próximos, regras ativas.

### 8. Ler `memoria/perfil.md`

Essência, operação e papel do founder.

### 9. Ler último histórico

```bash
ls -t memoria/historico/*.md 2>/dev/null | head -1 | xargs cat 2>/dev/null
```

### 10. Detectar gaps no histórico

```bash
ls memoria/historico/*.md 2>/dev/null | sed 's/.*\/\([0-9-]*\)\.md/\1/' | sort
```

Se houver gaps, avise: "⚠️ Gap detectado no histórico: [dias faltantes]"

### 11. Validar integridade

```bash
ls memoria/perfil.md memoria/empresa.md memoria/projetos.md memoria/decisoes.md memoria/insights.md memoria/ativo.md > /dev/null 2>&1 && echo "OK" || echo "FALHA"
```

### 12. Onboard obrigatório se memória ainda for template

**Após** a checagem de integridade, se **qualquer** condição abaixo for verdadeira, **pare o anúncio de estado** e execute a skill `onboard` **antes** de continuar:

| Arquivo | Marcador de template |
|---------|----------------------|
| `memoria/empresa.md` | `[o que` **ou** `[seu nome]` **ou** `PREENCHA` |
| `memoria/projetos.md` | `PREENCHA` |
| `memoria/ativo.md` | `primeira sessão` (marcador de first-run) |

Não anuncie "estado configurado" com placeholders. Onboard primeiro.

### 13. Anunciar estado (só se memória configurada)

#### Prova de segunda sessão

Se o onboard **já foi concluído** (sem placeholders / sem first-run):

1. **Abra provando que você sabe quem é a pessoa** — 1 parágrafo curto montado só da memória (nome, o que faz/vende/constrói, cliente ideal, projeto principal, foco de hoje).
2. **Não re-entreviste.** Não peça nome, negócio ou identidade de novo.

#### Conteúdo mínimo do anúncio

1. **Prova de memória** (1 parágrafo): nome, oferta, cliente ideal, projeto, foco.
2. **Prioridade de hoje (obrigatório — o “wow matinal”):**
   - **#1:** [projeto com PRIORIDADE ATUAL em `projetos.md`, senão o **Foco** de `ativo.md`]
   - **Próximo passo:** [de `ativo.md` → Próximo, ou do bloco do projeto]
   - Se houver cliente em andamento em `clientes/`, cite o slug em 1 linha.
   - Feche com: *“Quer que eu execute esse próximo passo agora?”*
3. Regras ativas: [número] · Última sessão: [data se existir]

**Formato curto preferido:**

```
Prioridade de hoje: [1 coisa clara].
Próximo passo: [ação].
[1 linha: quem você é / o que vende — só se ainda não falou no parágrafo.]
```

Não diga só “contexto carregado”. Sempre diga **por onde começar**.

## Denylist

Não edite nenhum arquivo durante o início de sessão. Apenas leia.

**Exceções:**

1. Step 1 arquivou sessão anterior → delega para `session-end`
2. Step 12 disparou onboard → onboard escreve em `memoria/` conforme a skill
