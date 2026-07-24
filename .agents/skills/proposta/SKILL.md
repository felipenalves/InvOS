---
name: proposta
description: >-
  Gera proposta COMERCIAL PRONTA PARA ENVIAR (HTML) pro prestador, com brand
  da empresa.md e contexto do cliente em clientes/. Use em: proposta, orçamento,
  cotação, manda proposta pro cliente X, fecha escopo formal.
---

# Proposta (INVOS) — pronta pra enviar

O empresário **não** quer rascunho de Markdown pra “arrumar depois”.  
Ele joga o contexto do cliente, aciona a skill, e quer **arquivo que manda pro cliente agora**.

**Default de saída = HTML limpo e profissional** (abre no browser → envia por e-mail / WhatsApp como arquivo / Imprimir → PDF).  
Markdown é só backup opcional.

Não é consultoria enterprise de 20 páginas. É deal desta semana.

---

## Job a ser feito

```
contexto do cliente (chat ou pasta)
        +
memoria/empresa.md (marca + tom + oferta)
        ↓
HTML em clientes/<slug>/propostas/YYYY-MM-DD.html
        +
mensagem curta de envio (WhatsApp/e-mail) pra copiar
        +
⚠️ Sua vez: enviar (dono = humano)
```

---

## Antes de perguntar qualquer coisa

Leia (arquivo):

1. `memoria/empresa.md` — oferta, tom, **marca visual** (seção Brand se existir)  
2. `memoria/perfil.md` — se preenchido  
3. Cliente: `clientes/<slug>/perfil.md`, `contexto.md`, `entregas.md` + linha em `clientes/_index.md`  
4. Template: `references/proposta.html` (estrutura visual — **preencha**, não invente outro layout)

**Não reinvente** a empresa se a memória já tem.

### Brand (de onde sai o visual)

| Campo | Onde | Fallback se vazio |
|-------|------|-------------------|
| Nome da marca | `empresa.md` → Negócio ou **Marca** | Founder |
| Founder | `empresa.md` → Founder | “Profissional” |
| Cor principal | `empresa.md` → **Brand → Cor** | `#0f766e` |
| Site / Instagram | `empresa.md` → Brand ou Ferramentas | omitir |
| Tom do texto | Tom de voz + perfil | direto, PT-BR, sem guru |

Se faltar **só** a cor/site, use fallback e **não** trave a proposta.  
Se faltar preço/escopo e o user não mandou no brief, aí sim 1 rodada curta de pergunta.

---

## Gatilhos

- “proposta”, “orçamento”, “cotação”, “manda proposta”, “proposta pro [cliente]”
- Colar um brief longo do cliente e pedir proposta

---

## Fluxo (máx. 1 rodada de pergunta — preferência zero)

### 1. Cliente

- Pasta existe → use + confira `_index`.  
- Não existe → crie com `cp -R clientes/_template clientes/<slug>` + **1 linha no `_index`**.  
- Slug: minúsculo, hífen, sem acento.  
- Se o user **só colou o contexto** sem slug: derive o slug do nome e confirme em 1 linha ao final (“salvei em `clientes/ana-studio/`”).

### 2. Buraco (só se faltar o que muda o envio)

**Se o brief + memória já dão** escopo, prazo e preço (ou faixa): **gere na hora.** Não entreviste.

Se faltar algo crítico, **uma** mensagem com no máx. 4 bullets:

- Escopo agora (3 bullets)  
- Prazo  
- Preço (ou “sugere a partir da oferta em empresa.md”)  
- Fora de escopo (se souber)

### 3. Gerar — entregável principal = HTML

1. Abra `references/proposta.html`.  
2. Substitua todos os `{{PLACEHOLDERS}}` com conteúdo real (PT-BR, específico daquele cliente).  
3. Grave:

```text
clientes/<slug>/propostas/YYYY-MM-DD.html
```

4. (Opcional, se útil pro agente) grave o mesmo conteúdo em  
   `clientes/<slug>/propostas/YYYY-MM-DD.md` — **secundário**. O que importa pro humano é o **HTML**.

#### Placeholders do HTML

| Token | Conteúdo |
|-------|----------|
| `{{MARCA}}` | Nome comercial |
| `{{FOUNDER}}` | Nome do prestador |
| `{{SITE_LINE}}` | ` · site` ou string vazia |
| `{{COR}}` | hex da brand |
| `{{CLIENTE}}` | Nome do cliente |
| `{{DATA}}` / `{{VALIDADE}}` | ISO legível; validade = +14 ou +30 dias |
| `{{PROBLEMA}}` | 1–3 `<p>…</p>` |
| `{{SOLUCAO}}` | 1–3 `<p>…</p>` |
| `{{ENTRA_LIS}}` | vários `<li>…</li>` |
| `{{NAO_ENTRA_LIS}}` | vários `<li>…</li>` |
| `{{PRAZO}}` | texto |
| `{{PRECO}}` | ex. `R$ 3.500` |
| `{{PAGAMENTO}}` | forma de pagamento / condição |
| `{{PROXIMOS_LIS}}` | `<li>…</li>` acionáveis |
| `{{RODAPE}}` | marca · contato · “proposta válida até…” |

Escape HTML no texto do cliente (`&`, `<`, `>`).

### 4. Mensagem de envio (obrigatória no chat)

Além do arquivo, entregue **pronto pra copiar**:

```text
Oi [nome], tudo bem?
Segue a proposta do [projeto] — [1 linha do resultado].
Qualquer ajuste é só falar.
[Seu nome]
```

E diga:

1. Path do HTML  
2. “Abre no Chrome/Safari → se quiser PDF: Imprimir → Salvar como PDF”  
3. PDF gerado pode ir em `clientes/<slug>/arquivos/`  
4. `⚠️ Sua vez: enviar pro cliente` (Fila humana no `ativo` + `_index` próximo = enviar proposta, dono=humano)

### 5. Atualizar sistema

- `clientes/<slug>/contexto.md` — 1 linha se fechou escopo/valor  
- `clientes/_index.md` — status `proposta`, próximo, dono, desde  
- `memoria/ativo.md` — Fila humana se o envio for do humano  
- **Não** invente cases, NPS, equipe ou logo URL inventada

---

## O que NÃO fazer

- Entregar **só** Markdown como produto final  
- Entrevista de 7 etapas no deal simples  
- Proposta genérica sem ler `memoria/` + cliente  
- Misturar dados de outro cliente  
- Prometer o que `empresa.md` não vende  
- Inventar identidade visual (logo/foto) que não está na memória  

## Modo avançado (opcional)

“Proposta completa / RFP / enterprise / ROI / T&C longos” → `references/proposta-avancada.md`  
**Ainda** gera HTML enviável (pode ser o mesmo template com seções extras no `main`), não abandona o “pronto pra mandar”.

---

## Definição de pronto

- [ ] HTML existe no path do cliente  
- [ ] Brand veio de `empresa.md` (ou fallback explícito)  
- [ ] Conteúdo é **daquele** cliente  
- [ ] Mensagem de envio colável no chat  
- [ ] Humano sabe que o próximo passo (enviar) é **dele**
