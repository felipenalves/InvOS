---
name: proposta
description: >-
  Gera proposta comercial enxuta pro prestador de serviço, usando memoria/ do INVOS
  e a pasta clientes/. Use quando pedir "proposta", "orçamento", "cotação",
  "manda proposta pro cliente X", "fecha o escopo em texto formal".
---

# Proposta (INVOS — slim)

Você ajuda o **prestador de serviço** a mandar proposta **no tom e na oferta dele**, com o contexto do **cliente certo**. Não é consultoria enterprise de 20 páginas — é texto que fecha deal esta semana.

## Antes de perguntar qualquer coisa

Leia (com ferramenta de arquivo):

1. `memoria/empresa.md` — o que vende, pra quem, tom  
2. `memoria/perfil.md` — como a pessoa opera (se existir e estiver preenchido)  
3. Se o user citou um cliente: `clientes/<slug>/perfil.md`, `contexto.md`, `entregas.md`  

**Não reinvente** a empresa se a memória já tem. Use o que está escrito.

## Gatilhos

- “proposta”, “orçamento”, “cotação”, “manda proposta”, “proposta pro [cliente]”

## Fluxo (máximo 2 rodadas de pergunta)

### 1. Cliente

- Se já existe pasta em `clientes/<slug>/` → use.  
- Se não existe: pergunte nome do cliente + 2–3 dados (o que precisa, prazo, se tem valor em mente) e **crie** a pasta copiando a estrutura de `clientes/_template/` (escreva os arquivos).  
- Slug: minúsculo, hífen, sem acento (ex: `ana-studio`).

### 2. Buraco (só o que faltar)

Uma mensagem, perguntas curtas:

- O que exatamente estamos propondo **agora**? (3 bullets de escopo)  
- Prazo de entrega  
- Preço (ou “sugere a partir da minha oferta em empresa.md”)  
- O que **não** entra no escopo (se souber)

Se o user mandar brief longo de uma vez, **não** faça entrevista de 7 passos — extraia e confirme em 5 linhas.

### 3. Gerar e gravar

Escreva a proposta em:

`clientes/<slug>/propostas/YYYY-MM-DD.md`

(data real ISO). Tom = `empresa.md` / perfil (direto, PT-BR, sem hype de guru).

#### Estrutura obrigatória (curta)

```markdown
# Proposta — [Cliente]
**De:** [seu nome / marca em empresa.md]  
**Data:** YYYY-MM-DD · **Válida até:** YYYY-MM-DD (+14 ou +30 dias)

## O problema
[dor do cliente em 2–4 frases — dados se tiver]

## O que eu faço
[solução em linguagem simples]

## O que entra
- …

## O que não entra
- …

## Prazo
…

## Investimento
R$ …  
[forma de pagamento se souber]

## Próximo passo
1. …
2. …
```

### 4. Depois de gerar

1. Mostre o caminho do arquivo.  
2. Ofereça 1 ajuste (tom / preço / escopo).  
3. Se o user **fechou** valor ou escopo: atualize `clientes/<slug>/contexto.md` (1 linha na tabela) e avise “Checkpoint salvo: contexto do cliente”.  
4. **Não** invente cases, NPS ou equipe se não estiver na memória.

## O que NÃO fazer

- Entrevista de 7 etapas (deal context, ROI calculator, 3 tiers, T&C jurídicos longos) — isso é modo avançado, ver `references/proposta-avancada.md` **só se o user pedir proposta enterprise / RFP**.  
- Proposta genérica sem ler `memoria/` e o cliente.  
- Misturar dados de outro cliente.  
- Prometer o que a empresa.md não vende.

## Modo avançado (opcional)

Se o user disser “proposta completa”, “RFP”, “B2B grande”, “com ROI e T&C”:  
leia `references/proposta-avancada.md` e siga aquele fluxo — **ainda** puxando `memoria/` + `clientes/` primeiro.
