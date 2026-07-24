---
name: proposta
description: >-
  Gera proposta COMERCIAL PRONTA PARA ENVIAR (HTML) pro prestador, com brand
  de marca/marca.md e contexto do cliente em clientes/. Use em: proposta,
  orçamento, cotação, manda proposta pro cliente X, fecha escopo formal.
---

# Proposta (INVOS) — pronta pra enviar

O empresário **não** quer rascunho de Markdown.  
Ele joga o contexto do cliente, aciona a skill, e quer **arquivo que manda agora**.

**Default = HTML** (browser → e-mail/WhatsApp / Imprimir → PDF).  
Markdown = backup opcional.

---

## Job

```
contexto do cliente
  + marca/marca.md (+ assets/logo se houver)
  + memoria/empresa.md (oferta)
        ↓
clientes/<slug>/propostas/YYYY-MM-DD.html
  + msg de envio colável
  + _index: valor + pagto=pendente + ⚠️ Sua vez: enviar
```

---

## Antes de perguntar

Leia:

1. **`marca/marca.md`** — cores, nome, contato, logo path (fonte visual)  
2. `marca/assets/` — se logo existir, referencie no HTML se o template permitir  
3. `memoria/empresa.md` — oferta, tom (se marca/ voz vazia, use daqui)  
4. `memoria/perfil.md` — se preenchido  
5. Cliente: `clientes/<slug>/…` + `clientes/_index.md`  
6. Template: `references/proposta.html`

**Não reinvente** marca nem empresa.

### Brand (prioridade)

| Campo | Fonte 1 | Fallback |
|-------|---------|----------|
| Nome | `marca/marca.md` → Nome da marca | empresa.md → Marca / Negócio / Founder |
| Cor primária | `marca` → Primária | `#0f766e` |
| Fundo / texto | `marca` | `#ffffff` / `#0f172a` |
| Contato / site | `marca` | empresa Brand |
| Tom | `marca` → Voz | empresa Tom de voz |
| Logo | `marca/assets/logo.*` | só texto da marca (não inventar URL) |

Se `marca/marca.md` ainda for template e o user tiver **site**: ofereça *depois* da proposta (ou antes se pedir) a skill **`design-marca`**.  
Não bloqueie a proposta por logo ausente.

---

## Gatilhos

“proposta”, “orçamento”, “cotação”, “manda proposta”, brief colado do cliente.

---

## Fluxo (máx. 1 rodada de pergunta)

### 1. Cliente

- Pasta existe → use + `_index`.  
- Senão → `cp -R clientes/_template clientes/<slug>` + linha no `_index`.  
- Slug: minúsculo, hífen, sem acento.

### 2. Buraco

Se brief + memória já têm escopo, prazo e preço → **gere na hora**.  
Senão, 1 mensagem ≤ 4 bullets (escopo, prazo, preço, fora de escopo).

### 3. HTML

1. Abra `references/proposta.html`.  
2. Substitua `{{…}}` com dados reais + brand de `marca/`.  
3. Se existir `marca/assets/logo.svg` ou `.png`, inclua no header (tag `<img src="…">` com path relativo se o HTML for aberto da pasta do cliente: `../../../marca/assets/logo.png` — ou embutir note “logo em marca/assets”).  
   Path relativo do HTML em `clientes/<slug>/propostas/` → logo: `../../../marca/assets/logo.png` (ajuste se extensão for svg).  
4. Grave: `clientes/<slug>/propostas/YYYY-MM-DD.html`  
5. MD opcional no mesmo dir.

| Token | Conteúdo |
|-------|----------|
| `{{MARCA}}` `{{FOUNDER}}` `{{SITE_LINE}}` | de marca/ / empresa |
| `{{COR}}` | primária hex |
| `{{CLIENTE}}` `{{DATA}}` `{{VALIDADE}}` | deal |
| `{{PROBLEMA}}` `{{SOLUCAO}}` | HTML paragraphs |
| `{{ENTRA_LIS}}` `{{NAO_ENTRA_LIS}}` `{{PROXIMOS_LIS}}` | `<li>` |
| `{{PRAZO}}` `{{PRECO}}` `{{PAGAMENTO}}` | deal |
| `{{RODAPE}}` | marca · contato · validade |
| `{{LOGO_IMG}}` | `<img class="brand-logo" src="../../../marca/assets/logo.png" alt="">` se logo existir; senão string vazia |

Escape `& < >` no texto.

### 4. Mensagem de envio (chat)

```text
Oi [nome], tudo bem?
Segue a proposta do [projeto] — [1 linha].
Qualquer ajuste é só falar.
[Seu nome]
```

+ path do HTML + “Imprimir → PDF” + PDF pode ir em `arquivos/`  
+ `⚠️ Sua vez: enviar pro cliente`

### 5. Atualizar sistema (depois de gerar)

- `contexto.md` se fechou escopo/valor  
- **`_index`:** status `proposta` ou `enviado`, **valor**, **pagto=pendente**, próximo=enviar, dono=humano, desde=hoje  
- `perfil.md` do cliente: valor + pagto se souber  
- `entregas.md`: 1 linha na tabela (data · proposta enviável path · rascunho/enviado)  
- `ativo` → Fila humana enviar  
- **Não** invente cases/logo

### 6. Evento **“cliente pagou”** / “marcou pago” / “fechou o deal”

Gatilhos: “pagou”, “cliente pagou”, “recebi o pix”, “fechou”, “deal pago”.

**Atualizar tudo na hora (não só o `_index`):**

| Onde | O quê |
|------|--------|
| `clientes/_index.md` | status=`ativo` (ou encerrado se for o caso), **pagto=pago**, **próximo**=entrega (wire/kickoff), dono=`agente` se houver trabalho no repo, desde=hoje |
| `clientes/<slug>/perfil.md` | status + pagto + próximo passo da entrega |
| `clientes/<slug>/contexto.md` | 1 linha na tabela: data · “pagamento confirmado · R$ …” |
| `clientes/<slug>/entregas.md` | linha: data · “proposta aceita / kickoff” · aprovado; em andamento = entrega |
| `memoria/projetos.md` | no bloco do cliente/deal: **Próximo** = entrega (nunca deixar “enviar proposta” se já pagou) |
| `memoria/ativo.md` | missão = entrega; Fila agente com o próximo passo; remover “enviar proposta” da Fila humana se existir |

Confirmar no chat: `Checkpoint salvo: pagto — [slug] pago · próximo: [entrega]`.

---

## Não fazer

- Só Markdown como entregável final  
- Inventar paleta/logo  
- Misturar clientes  
- Prometer o que empresa não vende  

## Avançado

RFP / enterprise → `references/proposta-avancada.md` + **ainda** HTML enviável.

## Pronto

- [ ] HTML no path do cliente  
- [ ] Brand de `marca/` (ou fallback)  
- [ ] valor/pagto no `_index`  
- [ ] Msg de envio + ⚠️ humana  
