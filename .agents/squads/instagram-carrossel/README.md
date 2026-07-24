# Squad: Instagram Carrossel (produção)

**Job:** o dono manda um tema (ou “faz carrossel da semana”) e o **time de agentes** pesquisa, escolhe ângulo, escreve, desenha slides, revisa e prepara publicação.  
O humano **só aprova** nos checkpoints — não escreve do zero.

Isto é **produção de conteúdo**, não advisory/brand/hormozi.

## Como rodar (qualquer harness)

1. Abra o projeto INVOS (pasta com `AGENTS.md`).  
2. Diga: **“Roda o squad instagram-carrossel”** ou **“Fábrica de carrossel: [tema]”**.  
3. O agente segue [RUN.md](./RUN.md) (orquestra os steps sem precisar OpenSquad runtime).

## O que o dono faz vs o time

| Dono (mínimo) | Agentes |
|---------------|---------|
| Tema **ou** “pega da fila / prova da semana” | Research, ângulos, copy, visual, render, review |
| Aprovar: história, ângulo, texto, visual, imagens (checkpoints) | Executar cada step |
| Publicar no IG se não houver API (1 upload) | Caption + PNGs prontos; tenta Composio se linkado |

## Pipeline (13 steps)

Ver `pipeline/pipeline.yaml`. Resumo:

```text
input → research news → pick story → angles → pick angle
  → copy → approve copy → visual options → pick visual
  → slides/PNG → approve images → review → publish/handoff
```

## Onde grava

| Path | Conteúdo |
|------|----------|
| `.agents/squads/instagram-carrossel/output/` | Run atual (working) |
| `conteudo/carrosseis/YYYY-MM-DD-slug/` | Run arquivada pro negócio |
| `conteudo/_fila.md` | Atualiza peça da semana / status |
| `marca/marca.md` | Cores, voz, logo (lido sempre) |

## Pré-requisitos

- `marca/marca.md` preenchido (onboard ou design-marca)  
- Chrome + Python 3 se for render PNG headless (igual skill build-carousel)  
- Opcional: Composio pra e-mail/outros; publish IG orgânico costuma ser **humano**

## Arquivos

- `squad.yaml` — definição do time  
- `pipeline/` — steps + quality data  
- `agents/` — papéis + tasks  
- `RUN.md` — **como o harness executa** no INVOS  
