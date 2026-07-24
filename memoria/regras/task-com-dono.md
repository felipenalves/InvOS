# Toda task tem dono

**Gatilho:** criar pendência, fila do dia, pipeline de cliente, ou “fica pra depois”
**Criada em:** 2026-07-24
**Origem:** INVOS — solo + agentes; anti pendência eterna sem dono

## Regra

1. **Toda task tem dono:** `agente` ou `humano`. Sem dono = inválida (não grava).
2. **Dono = agente** → o que dá pra fazer no repo/chat (redigir, arquivo, pesquisa, proposta draft, organizar `clientes/`). **Executa** sem empurrar pro humano, salvo bloqueio real.
3. **Dono = humano** → só o que exige a pessoa: enviar DM de verdade, call, pagar, assinar, decisão de preço/risco, secret/acesso.
4. Ao criar task `humano`: grava em `memoria/ativo.md` (**Fila humana**) **e alerta no chat** em 1 linha: `⚠️ Sua vez: [task] — done quando: […]`.
5. Pendência em `ativo` / `clientes/_index.md` **sempre** com `desde: YYYY-MM-DD`. Se > 3 dias e ainda aberta → session-start **alerta atraso**.
6. Arquivos gerados pro cliente (html, pdf, img, md) → **só** em `clientes/<slug>/arquivos/` (propostas em `propostas/`). Não na raiz do projeto.

## Por quê

Fila sem dono vira lixo eterno. Agente que só “sugere” o que poderia executar desperdiça o time de um. Humano só na restrição real.
