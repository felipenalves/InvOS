---
name: instagram-carrossel
description: >-
  Instagram no INVOS: carrossel (default MVP 1–2 slides HTML + caption + handoff),
  opcional render PNG, opcional publish Graph API. Use quando: carrossel, slides IG,
  fábrica de carrossel, pack carrossel, render PNG dos slides, publica no Instagram
  (Business + .env). NÃO use para só legenda texto (social-content).
---

# Instagram carrossel (pacote único)

Uma skill de entrada. Dependências antigas (`image-creator`, `image-fetcher`, `instagram-publisher`) vivem em **`references/`** — o agente carrega o subdoc **só quando o passo exigir**.

```text
User: carrossel / slides
        → este SKILL (MVP ou full)
User: gera PNG / render
        → references/render-png.md
User: busca imagem / screenshot pra slide
        → references/fetch-assets.md
User: publica no IG (API)
        → references/publish.md + scripts/publish.js
```

---

## Default: modo MVP (dia a dia)

Prestador em 5–15 min — **não** rode 13 steps do squad.

1. Leia `marca/marca.md` + `memoria/empresa.md` (+ prova em `clientes/` se houver).  
2. Pasta `conteudo/carrosseis/YYYY-MM-DD-kebab/`.  
3. Entregue:
   - `caption.txt`
   - `slide-01.html` (+ opcional `slide-02.html`) — 1080×1350, cores da marca  
   - `README.md` (abrir browser / print / ⚠️ postar no app)  
4. `conteudo/_fila.md` atualizado.  
5. Chat: paths + `⚠️ Sua vez: subir no Instagram`.

**PNG:** só se user pedir **e** Chrome/Python ok → siga `references/render-png.md`.  
Senão: HTML + handoff. **Não finja** pipeline completo.

## Fábrica completa (opcional)

Só se user disser: **“fábrica completa”**, **“modo squad”**, **“pipeline full”**, **“com research e ângulos”**.

1. `.agents/squads/instagram-carrossel/RUN.md`  
2. `squad.yaml` + `pipeline/`  
3. Preferir modo turbo do RUN.

## Publicar no Instagram (opcional)

Só se user disser **“publica” / “pode postar”** **e** `.env` com tokens Business.

1. Leia `references/publish.md`  
2. Script: `node --env-file=.env .agents/skills/instagram-carrossel/scripts/publish.js …`  
3. Sem env / falha → handoff humano. **Nunca** invente permalink.

## Atalhos

| User diz | O que rodar |
|----------|-------------|
| “faz um carrossel” / tema | **MVP** deste arquivo |
| “gera PNG” / “exporta slides” | MVP (se falta HTML) + `references/render-png.md` |
| “busca imagem pro slide” | `references/fetch-assets.md` |
| “publica no IG” | pack pronto + `references/publish.md` ou ⚠️ |
| “só legenda” | **Não** esta skill → `social-content` |

## Relação

| Skill / path | Quando |
|--------------|--------|
| `social-content` | Texto/legenda sem slides |
| `design-marca` | Marca vazia |
| Squad `instagram-carrossel` | Só no modo full |

## Dono

Mínimo: subir pack no app. API e PNG são extras.
