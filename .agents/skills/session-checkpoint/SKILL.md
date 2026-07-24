---
name: session-checkpoint
description: Capture important context mid-session — decisions, rules, insights, progress, clients, tasks with owner. Called explicitly by user OR proactively by agent.
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
- **Comercial:** lead, DM, resposta, proposta, call, mudança de status de cliente
- **Pagamento:** “pagou”, “recebi”, “fechou o deal” → seguir skill **proposta §6** (estado vivo completo)
- **Task:** pendência só do humano → **Fila humana** + alerta `⚠️ Sua vez:`

## Sequence

### 1. Identificar tipo

- **Decisão**: escolha entre opções, caminho definido
- **Regra**: lição aprendida, erro evitado
- **Progresso**: milestone atingido
- **Alerta**: algo quebrou, risco identificado
- **Insight**: ideia estratégica, semente
- **Contexto**: informação pra próxima sessão
- **Cliente**: lead/status/entrega
- **Task**: item de fila com dono

### 2. Salvar

- **Decisão**: adicione em `## Decisões da sessão` no ativo.md
- **Regra**: adicione em `## Regras novas` no ativo.md
- **Progresso**: atualize `## Em andamento` ou marque item feito na fila
- **Insight**: adicione em `memoria/insights.md`:
  ```
  - **Título:** descrição. [Fonte: contexto]
  ```
- **Task agente**: linha em `## Fila agente` com `desde:` + `done quando:`
- **Task humana**: linha em `## Fila humana` + chat: `⚠️ Sua vez: …`
- **Cliente:** atualize `clientes/_index.md`; ficha em `clientes/<slug>/` (copiar de `_template/` se novo).  
  Arquivos → `arquivos/`. Propostas → `propostas/`. Log → `entregas.md`.
- **Pagou:** skill `proposta` seção **“cliente pagou”** — `_index` + perfil + contexto + entregas + `projetos.md` Próximo + `ativo` (não só uma linha no índice).

Não reescreva arquivos inteiros — apenas insira ou atualize a linha relevante (exceto `ativo` se a missão mudou de verdade).

### 3. Se for regra, criar arquivo permanente

```bash
cat > memoria/regras/$(date +%Y%m%d)-nome-da-regra.md << 'EOF'
# [Nome]

**Gatilho:** [quando se aplica]
**Criada em:** YYYY-MM-DD
**Origem:** checkpoint durante sessão

## Regra

[descrição]

## Por quê

[contexto]
EOF
```

### 4. Confirmar

"Checkpoint salvo: [tipo] — [resumo de 1 linha]"
