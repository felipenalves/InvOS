# Clientes — índice

> Pipeline comercial + dinheiro leve. Boot: ler **só este arquivo**.  
> Ficha e arquivos: `clientes/<slug>/`.

## Como usar

| Campo | Significado |
|-------|-------------|
| **slug** | pasta `clientes/<slug>/` |
| **status** | lead · dm · call · proposta · enviado · aceito · ativo · pausado · perdido · encerrado |
| **próximo** | 1 ação concreta |
| **dono** | `agente` ou `humano` |
| **desde** | data ISO da pendência atual |
| **valor** | R$ da proposta/deal (número ou `—`) |
| **pagto** | — · pendente · parcial · pago · cancelado |

**Novo cliente:** `cp -R clientes/_template clientes/<slug>` → preencher → **1 linha aqui**.

## Pipeline

| slug | nome | status | valor | pagto | próximo | dono | desde | pasta |
|------|------|--------|-------|-------|---------|------|-------|-------|
| — | *(vazio — 1ª ficha no 1º lead real)* | | — | — | | | | |

## A receber (visão rápida)

Linhas com `pagto` = pendente ou parcial e `valor` preenchido → session-start pode citar “em aberto: R$ …”.

## Atrasados

Se `desde` > 3 dias e status aberto → alerta no boot.
