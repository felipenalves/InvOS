# Clientes — índice

> Pipeline do prestador. Boot: ler **só este arquivo**.  
> Ficha e arquivos do cliente: `clientes/<slug>/` (não misturar com o resto do negócio).

## Como usar

| Campo | Significado |
|-------|-------------|
| **slug** | pasta `clientes/<slug>/` |
| **status** | lead · dm · call · proposta · ativo · pausado · perdido · encerrado |
| **próximo** | 1 ação concreta |
| **dono** | `agente` (pode executar no repo/chat) ou `humano` (só você: DM real, call, cobrar, decidir) |
| **desde** | data ISO da pendência atual |

**Novo cliente:** `cp -R clientes/_template clientes/<slug>` → preencher → **1 linha neste índice**.

## Pipeline

| slug | nome | status | próximo | dono | desde | pasta |
|------|------|--------|---------|------|-------|-------|
| — | *(vazio — 1ª ficha no 1º lead real)* | | | | | |

## Atrasados

Se `desde` > 3 dias e status aberto → session-start alerta: pendência velha.
