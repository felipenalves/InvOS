---
name: instagram-carrossel
description: >-
  Carrossel Instagram INVOS. Default = modo MVP (1–2 slides HTML + caption +
  handoff). Pipeline completo só se o user pedir "fábrica completa" / "squad
  full". Use: fábrica de carrossel, carrossel Instagram, slides IG, pack carrossel.
---

# Instagram carrossel (INVOS)

## Default: modo MVP (dia a dia)

Para prestador que quer **sair em 5–15 min**, **não** rode os 13 steps do squad.

1. Leia `marca/marca.md` + `memoria/empresa.md` (+ prova em `clientes/` se houver).  
2. Crie pasta `conteudo/carrosseis/YYYY-MM-DD-kebab/`.  
3. Entregue:
   - `caption.txt` (legenda colável)  
   - `slide-01.html` (e opcional `slide-02.html`) — 1080×1350, cores da marca  
   - `README.md` com: como abrir no browser, Imprimir→PDF/PNG se quiser, ⚠️ postar no app  
4. Atualize `conteudo/_fila.md` (peça da semana / status).  
5. Chat: paths + `⚠️ Sua vez: subir no Instagram na ordem`.

**PNG via Chrome** (`image-creator`): só se o user pedir **e** Chrome/Python existirem.  
Se não der: HTML + handoff — **não finja** que o squad de 13 steps rodou.

## Quando rodar a fábrica completa

Só se o user disser explicitamente: **“fábrica completa”**, **“modo squad”**, **“pipeline full”**, **“com research e ângulos”**.

Aí siga na íntegra:

1. `.agents/squads/instagram-carrossel/RUN.md`  
2. `squad.yaml` + `pipeline/`  
3. Preferir **modo turbo** do RUN se o user não quiser checkpoints demais.

## Atalhos

| User diz | Comportamento |
|----------|----------------|
| “faz um carrossel” / tema na msg | **MVP** (default) |
| “modo turbo” + full | Auto-escolhe ângulo/visual no pipeline |
| “só o pack, eu posto” | MVP ou até handoff |
| “publica” | Só se integração real; senão ⚠️ |

## Relação com outras skills

| Skill | Quando |
|-------|--------|
| `social-content` | Só **texto/legenda** — nunca slides PNG |
| `design-marca` | Marca vazia antes do visual |
| `image-creator` | Render HTML→PNG (opcional) |

## Dono do negócio

Mínimo de ações: aprovar copy se pediu full; senão só **subir pack no app**.
