---
name: session-checkpoint
description: Capture important context mid-session — decisions, rules, insights, progress. Called explicitly by user OR proactively by agent.
---

# Session Checkpoint

Registra momentos importantes DURANTE a sessão, sem precisar esperar o fim.

## Quando ativar (gatilhos)

**Chamada explícita:**
- "guarda isso" / "anota" / "registra" / "salva essa decisão" / "isso é importante" / "não esquece"

**Detecção proativa:**
- Decisão arquitetural tomada
- Mudança de rota/estratégia
- Erro corrigido com lição aprendida
- Insight estratégico, epifania, conexão entre coisas
- Escopo alterado significativamente
- Deploy ou mudança em produção
- Link/documento relevante descoberto

## Sequence

### 1. Identificar tipo

- **Decisão**: escolha entre opções, caminho definido
- **Regra**: lição aprendida, erro evitado
- **Progresso**: milestone atingido
- **Alerta**: algo quebrou, risco identificado
- **Insight**: ideia estratégica, semente
- **Contexto**: informação pra próxima sessão

### 2. Salvar

- **Decisão**: adicione em `## Decisões da sessão` no ativo.md
- **Regra**: adicione em `## Regras novas` no ativo.md
- **Progresso**: atualize `## Em andamento` no ativo.md
- **Insight**: adicione em `memoria/insights.md`:
  ```
  - **Título:** descrição. [Fonte: contexto]
  ```

Não reescreva arquivos inteiros — apenas insira ou atualize a linha relevante.

### 3. Se for regra, criar arquivo permanente

```bash
cat > memoria/regras/$(date +%Y%m%d)-nome-da-regra.md << 'EOF'
# [Nome]

**Gatilho:** [quando se aplica]
**Criada em:** $(date +%Y-%m-%d)
**Origem:** checkpoint durante sessão

## Regra

[descrição]

## Por quê

[contexto]
EOF
```

### 4. Confirmar

"Checkpoint salvo: [tipo] — [resumo de 1 linha]"
