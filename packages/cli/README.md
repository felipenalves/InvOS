# invos

CLI do **INVOS** — sistema de memória multi-agente em arquivos (prioridade, clientes, proposta, conteúdo).

## Install

```bash
npx invos@latest init meu-negocio
# ou
npm i -g invos
invos init meu-negocio
```

## Commands

| Command | What it does |
|---------|----------------|
| `invos init [dir]` | Cria pasta nova com o kit |
| `invos install` | Injeta INVOS no diretório atual (repo existente) |
| `invos update` | Atualiza skills/sistema; **não** mexe em `memoria/` / clientes reais |
| `invos doctor` | Valida instalação |

## After init

```bash
cd meu-negocio
# Abra no Claude / Cursor / Codex / Grok
# Diga: Segue o COMECE-AQUI
```

## Env (opcional)

| Var | Uso |
|-----|-----|
| `INVOS_KIT_PATH` | Override do kit (dev / kit custom) |

## Site

https://inovadigitalid.com/invos
