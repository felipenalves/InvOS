# Dependências — squad instagram-carrossel no INVOS

Auditoria vs OpenSquad (`opensquad-master`). Objetivo: **zero path quebrado** no kit INVOS.

## Runtime OpenSquad — NÃO necessário

| OpenSquad original | INVOS |
|--------------------|--------|
| `npx opensquad` / `bin/opensquad.js` | Não usado |
| `_opensquad/core/runner.pipeline.md` | `RUN.md` no squad |
| `_opensquad/_memory/company.md` | `memoria/empresa.md` + `marca/marca.md` |
| `_opensquad/config/playwright.config.json` | Opcional; Chrome headless no `image-creator` |
| Dashboard Phaser | Não usado |
| `base_agent` registry core | Ignorado — agents são `.custom.md` + tasks |

## Skills (vendidas no INVOS)

| Skill | Path INVOS | Obrigatória? |
|-------|------------|--------------|
| image-creator | `.agents/skills/image-creator/` | Sim pra PNG (Chrome) |
| image-fetcher | `.agents/skills/image-fetcher/` | Não (só se precisar stock/screenshot) |
| instagram-publisher | `.agents/skills/instagram-publisher/` | Não (default = handoff) |
| social-content | `.agents/skills/social-content/` | Não (atalho texto) |
| instagram-carrossel | `.agents/skills/instagram-carrossel/` | Wrapper do squad |

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
