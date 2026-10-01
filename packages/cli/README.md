# invos (CLI) — INVOS v2

```bash
npx invos init --name meu-negocio
npx invos install
npx invos update          # sem token — kit no npm
npx invos doctor
```

## Release (você)

```bash
cd packages/cli
npm version patch
npm run bundle-zip        # atualiza kit/ e cria downloads/INVOS-<versão>.zip
npm publish --access public
```

O comando `bundle-zip` requer o utilitário `zip` instalado e disponível no `PATH`.

Comunidade: `npx invos@latest update`

## O que o update não toca

`_memoria/`, `marca/*` (conteúdo), `clientes/`, `marketing/*` gerado, `saidas/`, `dados/` real, `.env`

## Dev

```bash
cd packages/cli
npm run bundle-kit
node bin/invos.js init --name smoke /tmp/invos-v2-smoke
node bin/invos.js doctor --dir /tmp/invos-v2-smoke
```
