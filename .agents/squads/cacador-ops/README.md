# Squad: Caçador Ops (3 agentes)

**Job:** caçar o que falta, quebra ou confunde no INVOS — com olhar de produto (OpenSquad-like: time de agentes + checkpoints + menos trabalho do dono) **sem** virar monstro de tokens.

**Não é** produção de conteúdo. **Não é** advisory.  
É **qualidade do sistema de operação** do empresário com agentes.

## Os 3 (máximo)

| # | Agente | Faz | Não faz |
|---|--------|-----|---------|
| 1 | **Caçador** | Lista falhas/gaps com grau P0–P3 + onde | Não testa 20 paths; não reescreve o kit |
| 2 | **Testador** | Smoke isolado (validar, paths, 1 fluxo) | Não inventa feature; não lê o monorepo inteiro |
| 3 | **Revisor** | Mata ruído, ordena 3 ações, confusão do dono | Não caça de novo do zero |

Ordem: Caçador → Testador (só nos P0/P1) → Revisor → **1 página de saída**.

## Como rodar

```
Caça o INVOS / roda cacador-ops / audit ops
```

Seguir **[RUN.md](./RUN.md)**.

## Saída

`docs/ops-hunt/YYYY-MM-DD.md` (ou `conteudo/` se preferir leve — default **docs/ops-hunt/**).

Máx. ~1 tela de achados + 3 próximos passos. Sem relatório de 20 páginas.
