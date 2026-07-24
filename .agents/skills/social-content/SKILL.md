---
name: social-content
description: >-
  Cria posts e legendas de social (LinkedIn, Instagram, X, etc.) em TEXTO na voz
  da marca. Use em: o que posto, post LinkedIn, legenda Instagram, thread,
  repurpose, fila da semana. NÃO use para "carrossel" / "fábrica de carrossel"
  (isso é skill/squad instagram-carrossel). Lê marca/ e conteudo/.
---

# Social content (INVOS)

Skill **de criação** pro prestador. Objetivo: peça **pronta pra copiar/publicar**, não estratégia de 10 páginas.

Composio (se existir) é só pra **enviar/puxar** em app externo depois.  
Aqui o default é: texto na pasta + `⚠️ Sua vez: publicar` se o dono for humano.

## Antes de escrever

Leia (arquivo):

1. `marca/marca.md` — tom, exemplos pode/não dizer, cores (se for brief visual)  
2. `memoria/empresa.md` — oferta, ICP  
3. `conteudo/_fila.md` — peça da semana / ideias  
4. Se citar cliente/prova: `clientes/<slug>/` (sem vazar o que é confidencial)

**Não** invente case ou número que não está na memória.

## Gatilhos

“o que posto”, “post LinkedIn”, “legenda IG”, “thread”, “repurpose isso”, “fila da semana”, “social”.

**Não é gatilho desta skill:** “carrossel”, “fábrica de carrossel”, “slides IG”, “PNG carrossel”  
→ desambiguar: se o user quiser **slides/PNG**, rodar skill **`instagram-carrossel`**.  
Se quiser só **outline em texto** de slides, pode continuar aqui — e avisar “isto é rascunho de texto; pra PNG use fábrica de carrossel”.

## Fluxo (rápido)

### 1. Objetivo em 1 linha

Se o user não disse: assumir **1 plataforma** + **1 objetivo** (autoridade | lead | prova | oferta).  
Não faça entrevista de 6 perguntas se o brief já veio.

### 2. Escolher formato

| Plataforma | Default |
|------------|---------|
| LinkedIn | Post 800–1500 chars (bullets ok) |
| Instagram | Legenda + ideia de 1ª frame (outline de slides em texto só se pedir “só o texto”) |
| X/Twitter | Post curto ou thread 5–8 tweets |
| WhatsApp status / Stories | 1–3 linhas + CTA |

Voz = `marca/marca.md`. ICP = `empresa.md`.

### 3. Estrutura mínima de toda peça

1. **Hook** (1ª linha)  
2. **Corpo** (história ou valor — específico do negócio dele)  
3. **CTA** (comentar, DM, link na bio, “chama no zap”) — alinhado à oferta  
4. **O que NÃO fazer** (1 linha se útil: sem hype vazio)

Hooks úteis (adaptar, não copiar genérico):

- “Eu errava em [crença comum do ICP].”  
- “Cliente pediu X. O que resolveu foi Y.”  
- “Para de [erro]. Faz [ação].”

### 4. Gravar no INVOS

- Atualize `conteudo/_fila.md` (status rascunho/publicado, dono)  
- Opcional: `conteudo/publicados/YYYY-MM-DD-plataforma.md` com o texto final  
- Se for a “peça da semana”, preencha **Em destaque**

### 5. Entrega no chat

- Texto **colável**  
- Plataforma + quando postar (se souber)  
- `⚠️ Sua vez: publicar no [app]` (dono=humano) — a menos que Composio/API esteja linkado **e** o user pediu publicar de fato

### 6. Publicar via integração (opcional)

Só se o user pedir **enviar/publicar de verdade**:

1. Ver `integracoes/composio/README.md`  
2. `composio search "…"` → `link` se precisar → `execute`  
3. Se toolkit não cobrir orgânico: **não finja** — deixe na Fila humana

## Calendário / batch (leve)

Se pedir “semana de conteúdo”:

- Máx. **5** ideias na `_fila`  
- 1 peça **pronta** agora + 4 ganchos  
- Amarrar em **prova real** (cliente, proposta, aprendizado em `historico/`) quando existir

Não montar grade 3 redes × 7 dias vazia de verdade do negócio.

## Plataformas (1 parágrafo cada)

- **LinkedIn:** história + lição B2B; link no comentário se precisar.  
- **Instagram:** legenda conversacional; slides PNG = skill **instagram-carrossel**.  
- **X:** densidade; thread com promessa no 1.  
- **TikTok/Reels:** script falado 15–30s (hook 1s) — o user grava.

Refs longas (opcional, se precisar de profundidade): não copiar pacote marketing inteiro pro kit; improvise com a tabela acima + voz da marca.

## Não fazer

- Tom guru / “revolucione seu negócio”  
- Post genérico que serviria pra qualquer um  
- Ignorar `marca/` e `empresa.md`  
- Prometer que Composio “posta em tudo”  
- Encher `conteudo/` com 30 rascunhos sem dono  

## Pronto

- [ ] Texto na voz da marca  
- [ ] Gravado em `conteudo/`  
- [ ] CTA alinhado à oferta  
- [ ] Dono de publicar explícito (humano ou execute Composio)
