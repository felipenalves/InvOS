---
name: onboard
description: >-
  First-run INVOS setup. Rápido, com WOW cedo: poucas perguntas, grava memória,
  entrega 1 artefato útil na hora (post ou prioridade). Dispara se template/placeholders.
---

# Onboard — primeiro uso com WOW

**Problema que evita:** entrevista de 15+ perguntas sem mostrar valor (chato, parece formulário).

**Meta:** em **≤ 6 perguntas** o sistema já tem memória útil **e** o user viu **1 vitória** (texto colável ou prioridade do dia).

## Gatilho

Roda quando:

- `memoria/ativo.md` contém `primeira sessão`
- `memoria/empresa.md` contém `[o que` ou `[seu nome]` ou `PREENCHA`
- `memoria/projetos.md` contém `PREENCHA`
- `memoria/perfil.md` contém `PREENCHA` ou `[Seu Nome]`

**Não pergunte “quer fazer onboard?”** — se o gatilho bateu, **comece**.

## Princípios (obrigatório)

1. **WOW antes de completar o formulário.** Depois de ter nome + o que vende + pra quem, **já grava e entrega** algo. O resto é opcional / curto.
2. **Máximo 6 perguntas** no caminho feliz. Prefira **2–3 blocos** (“me conta de uma vez”) a 12 turns.
3. **Uma resposta pode preencher vários campos** — se o user escreveu parágrafo, **extraia** nome, oferta, ICP sem re-perguntar o óbvio.
4. **Defaults inteligentes:** sem site/cor → cor default + marca = nome do negócio. Sem “visão” poética → pule.
5. **Zero filosofia.** Sem “qual sua visão de mundo”. Só o que faz o agente trabalhar amanhã.
6. Data em `ativo.md`: **ISO real `YYYY-MM-DD`**. Nunca `$(date…)`.

## Sequence (caminho feliz)

### 0. Abertura (10 segundos, sem pergunta)

```
Fala. Vou deixar o INVOS sabendo quem você é em poucos minutos.

No fim você já sai com:
1) memória gravada  2) 1 coisa pronta pra usar (post ou próximo passo do dia)

Me responde em 1–3 frases de uma vez (pode ser bagunçado):
• Como se chama?
• O que vende / o que a empresa faz?
• Pra quem? (tipo de cliente)
• O que precisa resolver AGORA? (1 prioridade)
```

Isso conta como **perguntas 1–4 em um turno**. Se o user responder completo, **não** repita item a item.

Se a resposta veio incompleta, complete **só o buraco** (máx 2 follow-ups).  
**Não** pergunte visão, stack, papel existencial, tom em 6 variações.

### 1. Grava núcleo (na hora)

Escreva **já**:

| Arquivo | Conteúdo mínimo |
|---------|-----------------|
| `memoria/perfil.md` | Nome + 1 linha de como opera |
| `memoria/empresa.md` | Negócio, oferta, ICP, tom **direto** se não disser (ajuste se falar) |
| `memoria/projetos.md` | **PRIORIDADE #1** = o que precisa agora + próximo passo |
| `marca/marca.md` | Nome da marca (= negócio se não disser) + cor default `#1e3a5f` (ou a que pediu) + contato se tiver no texto |
| `memoria/ativo.md` | Data hoje, foco = P1, missão = próximo passo, dono razoável |

Tom default se não falou: **direto e informal**.

### 2. WOW imediato (obrigatório — não pule)

Com a memória que acabou de gravar, **entregue 1 artefato na mesma resposta**:

**Escolha automática:**

| Se a prioridade fala de… | Entregue |
|--------------------------|----------|
| post, conteúdo, Instagram, carrossel, divulgar | **1 post LinkedIn/IG** na voz dele (5–12 linhas) + salve em `conteudo/publicados/YYYY-MM-DD-onboard.md` e 1 linha em `conteudo/_fila.md` |
| cliente, proposta, vender, orçamento | **Outline de proposta** ou msg de WhatsApp pronta + ofereça “gero o HTML com a skill proposta” |
| organizar, gestão, sistema, prioridade | **“O que importa hoje”** em 4 linhas (P1 + dono + ⚠️ se humano) já alinhado ao `ativo.md` |
| ambíguo | Post curto de autoridade **no nicho dele** + prioridade do dia |

No chat, mostre o artefato **por extenso** (não só “salvei o arquivo”).  
Isso é o **fator WOW** — o user sente que o sistema trabalha.

### 3. Opcional rápido (só se faltar e user topa)

No **máximo 2** perguntas extras, se ainda faltar e for útil:

- WhatsApp/contato pra proposta?  
- Tem site? (se sim: ofereça `design-marca` **depois**, não agora)

Se disser “depois” / “pula” → encerra.

**Proibido neste onboard:**  
lista de 4 perguntas de marca + 3 de perfil + 4 de projeto + decisão em série.

### 4. Fechamento (30 segundos)

```
✅ INVOS configurado pra você.

Já gravei: perfil · empresa · prioridade · marca (básico) · ativo.
Já te entreguei: [nome do artefato].

Amanhã (chat novo): “O que importa hoje?” — eu já sei quem você é.

Atalhos:
• Cria o cliente X
• Gera proposta pro X  
• Faz um carrossel: [tema]
• O que posto essa semana?

Quer que eu execute o próximo passo da sua prioridade agora?
```

## Se o user mandar “manda, bora” / “configura”

Não reexplique o produto. Vá **direto** ao bloco do passo 0 (perguntas em lote).

## Anti-loop (crítico)

- **Nunca** reinicie a lista do zero se já tiver metade das respostas.  
- **Nunca** pergunte de novo o que já está no último parágrafo do user.  
- Se já gravou `empresa.md` sem placeholder, **não** reabra “qual seu nome?”.  
- Se o user mudou de assunto pra “faz um carrossel”, **pause** o resto do formulário, entregue valor, volte só se faltar dado.

## Output

- `memoria/` + `marca/marca.md` sem placeholders de first-run  
- 1 artefato visível no chat + path  
- Próximo `session-start` **anuncia estado** (prova de memória), **não** re-entrevista
