# CLI INVOS — `npx invos`

## Como rodar localmente (dev)

```bash
# Na raiz do kit invos
cd /caminho/invos

# npm link (registra comando invos global)
npm link packages/cli

# Ou rodar direto
node packages/cli/bin/invos.js --help

# Ou via npm
npm run invos -- init
```

## Comandos MVP

| Comando | Descrição |
|---------|-----------|
| `invos init [dir]` | Cria novo projeto INVOS (copia kit + lock + symlinks) |
| `invos install` | Instala skills/scripts em diretório existente |
| `invos update [--dry-run]` | Atualiza shipped, preserva user data |
| `invos doctor [--fix]` | Valida instalação |

## Smokes

```bash
# 1. Init
node packages/cli/bin/invos.js init /tmp/invos-smoke

# 2. Install (em repo existente)
cd /tmp/invos-smoke
node /caminho/packages/cli/bin/invos.js install

# 3. Doctor
node /caminho/packages/cli/bin/invos.js doctor

# 4. Update (preserva USER)
echo "USER DATA" > memoria/perfil.md
node /caminho/packages/cli/bin/invos.js update --dry-run
```

## Kit source detection

1. `INVOS_KIT_PATH` env var (se definido)
2. Relativo ao bin do CLI (`../../..` quando em `packages/cli/`)
3. Fallback: `process.cwd()`

## Publicação

```bash
# npm login (com conta com acesso)
npm publish packages/cli
```

Após publicado:
```
npx invos init meu-negocio
```
