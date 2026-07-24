---
name: instagram-carrossel
description: >-
  Roda a fábrica de carrossel Instagram do INVOS (squad multi-agente): pesquisa,
  ângulos, copy, visual, slides PNG, review e pack pra publicar. Use quando:
  "fábrica de carrossel", "carrossel Instagram", "squad instagram-carrossel",
  "conteúdo IG completo", "produz carrossel da semana".
---

# Skill wrapper → Squad Instagram Carrossel

Esta skill **não** reimplementa o pipeline. Ela manda o agente executar o squad.

## Ação

1. Abrir e seguir **na íntegra**:  
   `.agents/squads/instagram-carrossel/RUN.md`  
2. Usar definição:  
   `.agents/squads/instagram-carrossel/squad.yaml`  
3. Steps:  
   `.agents/squads/instagram-carrossel/pipeline/`  

## Atalhos

| User diz | Comportamento |
|----------|----------------|
| tema já na mensagem | Pula re-intake; step 01 preenchido |
| “modo turbo” | Auto-escolhe research/ângulo/visual; para em copy + imagens |
| “só o pack, eu posto” | Até step 13 handoff humano |
| “publica” | Só se integração real; senão ⚠️ Sua vez |

## Relação com outras skills

| Skill | Quando |
|-------|--------|
| `social-content` | Só texto/legenda rápido, sem fábrica |
| `design-marca` | Marca vazia antes do visual |
| Squad (este) | Peça completa (pesquisa → PNG → caption) |

## Dono do negócio

Objetivo: **mínimo de ações** — aprovar checkpoints e (se preciso) subir o carrossel no app em 2 min com o pack em `conteudo/carrosseis/`.
