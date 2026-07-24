# RUN — Caçador Ops (3 agentes)

## Princípios (não negociar)

1. **Simples e lógico** — se o dono não entende em 10s, é bug de produto.  
2. **Menos tokens** — cada agente lê só o que a tabela permite.  
3. **Máx. 3 agentes.** Sem “especialista 4”.  
4. **Não inflar o kit** — achar ≠ implementar 12 features. Preferir cortar confusão.  
5. **Modelo de comparação (caçar em cima disto):**

| Pilar | Pergunta |
|-------|----------|
| A Memória | 2ª sessão conhece o negócio? |
| B Fila + dono | Sabe o que fazer hoje e quem executa? |
| C Dinheiro/cliente | Proposta/envio/pagto sem reexplicar? |
| D Marca | Saídas com a cara dele? |
| E Produção | Conteúdo com mínimo de cliques do dono? |
| F Integração | Opcional e honesta (sem prometer mágica)? |
| G Entrada | Sabe por onde começar em 60s? |
| H Anti-quebra | Paths/skills existem? Smoke passa? |

OpenSquad inspira: **pipeline + checkpoint + papéis**.  
INVOS diferencia: **memória do negócio no disco** (não só fábrica de conteúdo).

---

## Agente 1 — Caçador

**Lê (só):**
- `COMECE-AQUI.md`, `AGENTS.md` (rituais), `README.md` (topo)
- `MEMORY.md`
- Lista de skills: `ls .agents/skills`
- Lista de squads: `.agents/squads/index.md`
- Opcional 1 arquivo se o tema for focado (ex. só carrossel → `instagram-carrossel/DEPENDENCIES.md`)

**Não lê:** hormozi/advisory inteiro, dashboard, node_modules, histórico longo.

**Prompt mental:**
> Onde o empresário trava, o agente se perde, ou o sistema promete e não entrega?  
> Classifique P0–P3. Cite path. Uma linha de fix preferido (cortar / unificar / 1 doc / 1 skill).

**Graus:**

| Grau | Significado |
|------|-------------|
| **P0** | Quebra uso (path morto, onboard falha, “não sei por onde começar” total) |
| **P1** | Core do dinheiro/memória falha (proposta, fila, 2ª sessão, dono) |
| **P2** | Produção/conteúdo confuso ou gap real vs OpenSquad-like |
| **P3** | Nice-to-have; não priorizar |

**Entrega (bullet list, máx. 12 achados):**
```
P0|P1|P2|P3 | pilar A–H | achado | path | fix em 1 linha
```

---

## Agente 2 — Testador

**Só roda se houver ≥1 P0 ou P1.** Senão: “nada a testar” e pula.

**Lê:** lista do Caçador + arquivos citados nos P0/P1.

**Faz (isolado, barato):**
1. `bash scripts/validar.sh`  
2. Grep paths quebrados se o achado for path (`_opensquad`, skill fantasma)  
3. **1 fluxo mental** (não full E2E de carrossel):  
   - “primeira vez” → COMECE-AQUI + onboard trigger  
   **ou** “proposta” → skill existe + template HTML + marca  
   **ou** “carrossel” → RUN.md + image-creator existe  

**Não faz:** render 8 PNGs, publish IG, instalar Composio.

**Entrega:**
```
TEST | achado | PASS/FAIL | evidência 1 linha
```

---

## Agente 3 — Revisor

**Lê:** saída do Caçador + Testador.  
**Não relê o repo.**

**Faz:**
1. Mata duplicata e P3 barulho  
2. Ordena **só 3 ações** da próxima sprint (impacto × esforço)  
3. **Confusão do dono:** 1 frase “por onde começar no dia a dia” se estiver sujo  
4. **Anti-inflação:** o que **não** fazer (lista curta)

**Entrega final (única que o humano lê):**

```markdown
# Ops hunt YYYY-MM-DD

## Saúde (1 linha)
## P0/P1 (confirmados)
## 3 ações (ordem)
## Não fazer agora
## Dia a dia (1 bloco pra o dono)
```

---

## Orquestrador (você, harness principal)

1. Rodar Caçador (subagente read-only se possível).  
2. Rodar Testador só em P0/P1 (subagente isolado).  
3. Revisor no contexto principal (ou 3º subagente curto).  
4. Gravar `docs/ops-hunt/YYYY-MM-DD.md`.  
5. **Não** implementar tudo na mesma sessão — só se P0 trivial (path/typo).

## Disparos

- “caça o INVOS” / “cacador-ops” / “o que tá quebrado pro empresário”  
- Semanal leve / antes de zip Hotmart  
