# RUN — Instagram Carrossel no INVOS

Orquestração para **qualquer agente** (Claude, Cursor, Grok, Codex…).  
Não exige runtime OpenSquad: leia este arquivo e execute os steps.

## Princípio

**Menos ações pro dono.** Em cada checkpoint, mostre opções claras e peça **uma** resposta (número ou “aprovado”).  
Entre checkpoints, **não** fique perguntando — execute.

## Default no kit INVOS

O dia a dia do prestador usa a skill **`instagram-carrossel` em modo MVP** (1–2 HTML + caption), **sem** este pipeline de 13 steps.

Só execute este RUN se o user pediu **fábrica completa / squad full / research + ângulos**.

## Boot obrigatório (antes do step 01)

Leia:

1. `marca/marca.md`  
2. `memoria/empresa.md` + `memoria/perfil.md`  
3. `conteudo/_fila.md`  
4. Este squad: `squad.yaml` + `pipeline/data/tone-of-voice.md` + `anti-patterns.md` + `quality-criteria.md`  
5. Skills de render: `.agents/skills/instagram-carrossel/references/render-png.md`  
6. Se o tema envolver cliente/prova: `clientes/_index.md` ou ficha citada  
7. Mapa de deps: `DEPENDENCIES.md` (se path falhar)  

**Proibido:** paths `_opensquad/`, `skills/` na raiz OpenSquad, `company.md` externo.

**Tom e cores vêm do INVOS (`marca/`), não do tom antigo de outra empresa.**  
Se `tone-of-voice.md` conflitar com `marca/`, **vence `marca/`**.

## Pasta da run

```bash
SLUG=$(date +%Y-%m-%d)-carrossel
# ou kebab do tema
mkdir -p "conteudo/carrosseis/$SLUG"/{slides,rendered}
# working copy também em:
# .agents/squads/instagram-carrossel/output/
```

Ao final de cada step com artefato: grave em **ambos** `output/` do squad e `conteudo/carrosseis/$SLUG/`.

## Execução dos steps

Siga `pipeline/pipeline.yaml` na ordem.

| Step | Tipo | Ação |
|------|------|------|
| 01 | checkpoint | Ler `pipeline/steps/step-01-input-content.md`. Se user já deu tema, **não** re-pergunte. |
| 02 | agent researcher | Task `agents/researcher/tasks/find-and-rank-news.md` |
| 03 | checkpoint | User escolhe 1 história (ou “pula research, usa meu tema”) |
| 04 | agent copywriter | `generate-angles.md` |
| 05 | checkpoint | User escolhe 1 ângulo (default: recomende o #1 e confirme) |
| 06 | agent copywriter | `create-slides.md` + `optimize-copy.md` |
| 07 | checkpoint | Aprovar copy |
| 08 | agent image-designer | `propose-visual-identities.md` — **ancorar em marca/ cores** |
| 09 | checkpoint | Escolher visual (default: o mais alinhado a marca/) |
| 10 | agent image-designer | `create-slides.md` + `render-export.md` → HTML + PNG se Chrome ok |
| 11 | checkpoint | Aprovar imagens |
| 12 | agent reviewer | `score-content.md` + `generate-feedback.md` — se score baixo, corrige e volta |
| 13 | agent publisher | `validate-publish.md` — pack final + tenta publish ou ⚠️ humano |

### Modo turbo (ainda menos fricção)

Se o user disser **“modo turbo”** ou **“aprova automático o que for seguro”**:

- Checkpoints 03, 05, 09: agente **escolhe o top rank** e segue, só mostrando resumo de 3 linhas.  
- Checkpoints 07 e 11: ainda pede “ok?” (texto e imagem mexem na marca).  
- Se user disser **“full auto até o pack”**: só para no 13 com arquivos prontos + `⚠️ Sua vez: postar no Instagram` se não houver API.

## Artefatos mínimos no fim

```text
conteudo/carrosseis/$SLUG/
  input.md
  carousel-draft.md          # copy dos slides + caption
  design-system.md
  slides/slide-01.html …
  rendered/slide-01.png …    # se render ok
  caption.txt
  publish-handoff.md         # o que o dono faz em 1 min
```

Atualize `conteudo/_fila.md`: status publicado/rascunho, dono, path do carrossel.

## Publish (step 13) — realismo INVOS

1. Gerar `caption.txt` + lista ordenada de PNGs.  
2. Se Composio/`integracoes` tiver toolkit de post orgânico IG **e** conectado: tentar.  
3. Senão: **não inventar sucesso** — handoff:

```text
⚠️ Sua vez (2 min):
1. Abra Instagram → novo carrossel
2. Suba rendered/slide-01.png … na ordem
3. Cole caption.txt
```

## Anti-padrões de orquestração

- Não re-entrevistar se o tema já veio no chat  
- Não pedir “o que você quer fazer agora?” no meio do pipeline  
- Não misturar brand de outro cliente/marca  
- Não pular quality-criteria no review  
- Uma pergunta por checkpoint, opções numeradas  

## Frases que disparam este RUN

- “Roda fábrica de carrossel”  
- “Squad instagram-carrossel”  
- “Carrossel IG sobre [tema]”  
- “Conteúdo da semana no Instagram (carrossel)”  
