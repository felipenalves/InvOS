---
name: session-start
description: Load memory context at the beginning of every session. Reads empresa.md, projetos.md, decisoes.md, insights.md, regras/, ativo.md. Archives previous session if new day. Must run before any other action.
---

# Session Start

Dispara no início de toda sessão em QUALQUER harness (Claude Code, Codex, OpenCode, Grok, Cursor, etc.). Carrega o estado atual do sistema e prepara o contexto.

## Sequence (sempre nesta ordem)

### 1. Verificar data do ativo.md

Se `memoria/ativo.md` existe, extrair a data do campo `**Data:**`:

```bash
grep -o '\*\*Data:\*\* [0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}' memoria/ativo.md | cut -d' ' -f2
```

Se a data extraída for anterior a $(date +%Y-%m-%d):
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

### 8. Ler último histórico

```bash
ls -t memoria/historico/*.md 2>/dev/null | head -1 | xargs cat 2>/dev/null
```

### 9. Detectar gaps no histórico

```bash
ls memoria/historico/*.md 2>/dev/null | sed 's/.*\/\([0-9-]*\)\.md/\1/' | sort
```

Se houver gaps, avise: "⚠️ Gap detectado no histórico: [dias faltantes]"

### 10. Validar integridade

```bash
ls memoria/perfil.md memoria/empresa.md memoria/projetos.md memoria/decisoes.md memoria/insights.md memoria/ativo.md > /dev/null 2>&1 && echo "OK" || echo "FALHA"
```

### 11. Anunciar estado

Após carregar, anuncie resumidamente:
- Empresa: [nome, estágio]
- Projetos ativos: [lista]
- Foco atual: [do ativo.md]
- Regras ativas: [número]
- Última sessão: [data, se existir]

## Denylist

Não edite nenhum arquivo durante o inicio de sessão. Apenas leia. Exceção: se precisou arquivar sessão anterior (step 1), que delega para session-end.
