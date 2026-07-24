# Dependências — squad instagram-carrossel no INVOS

Auditoria vs OpenSquad (`opensquad-master`). Objetivo: **zero path quebrado** no kit INVOS.

## Runtime OpenSquad — NÃO necessário

| OpenSquad original | INVOS |
|--------------------|--------|
| `npx opensquad` / `bin/opensquad.js` | Não usado |
| `_opensquad/core/runner.pipeline.md` | `RUN.md` no squad |
| `_opensquad/_memory/company.md` | `memoria/empresa.md` + `marca/marca.md` |
| `_opensquad/config/playwright.config.json` | Opcional; Chrome headless em `references/render-png.md` |
| Dashboard Phaser | Não usado |
| `base_agent` registry core | Ignorado — agents são `.custom.md` + tasks |

## Skills (vendidas no INVOS)

| Skill / doc | Path INVOS | Obrigatória? |
|-------------|------------|--------------|
| **instagram-carrossel** (entrada) | `.agents/skills/instagram-carrossel/SKILL.md` | Sim (MVP ou full) |
| render PNG (ex image-creator) | `…/instagram-carrossel/references/render-png.md` | Só se pedir PNG |
| fetch assets (ex image-fetcher) | `…/instagram-carrossel/references/fetch-assets.md` | Não |
| publish API (ex publisher) | `…/instagram-carrossel/references/publish.md` + `scripts/publish.js` | Não (default handoff) |
| social-content | `.agents/skills/social-content/` | Não (só texto/legenda) |

## Paths internos do squad (ok se relativos ao squad)

- `pipeline/data/*`  
- `pipeline/steps/*`  
- `agents/*/tasks/*`  
- `output/`  

## Paths INVOS (raiz do projeto)

| Uso | Path |
|-----|------|
| Marca | `marca/marca.md`, `marca/assets/` |
| Empresa / ICP | `memoria/empresa.md` |
| Fila | `conteudo/_fila.md` |
| Runs | `conteudo/carrosseis/` |

## Ferramentas de máquina

| Tool | Uso | Se faltar |
|------|-----|-----------|
| Chrome/Chromium | PNG headless | Entregar só HTML + instrução |
| Python 3 | `http.server` no render | Idem |
| Node | publish.js API | Handoff humano |
| Web search | research news | User cola tema/fonte |

## Env (nunca no git)

```
INSTAGRAM_ACCESS_TOKEN=
INSTAGRAM_USER_ID=
IMGBB_API_KEY=
COMPOSIO_API_KEY=   # se usar integracoes
```

## Checklist anti-erro (agente)

- [ ] Não ler `_opensquad/...`  
- [ ] Não exigir Playwright MCP  
- [ ] Não chamar publish sem user + env  
- [ ] Voz/cores de `marca/`  
- [ ] Artefatos em `conteudo/carrosseis/`  

## O que NÃO foi copiado (e por quê)

| Pacote OpenSquad | Motivo |
|------------------|--------|
| Core runner, i18n, init CLI | Substituído por RUN.md |
| best-practices inteiro | Só `instagram-feed` em pipeline/data |
| canva, blotato, apify, resend skills | Fora do escopo carrossel |
| Sherlock investigators | Research usa web_search do harness |
