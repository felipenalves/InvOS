---
name: design-marca
description: >-
  Extrai ou atualiza a identidade visual do negócio em marca/marca.md (cores,
  tipografia, assets). Use quando: "extrai a marca do meu site", "design system",
  "/design", "atualiza cores da marca", "pega o branding do site X".
---

# Design → marca/ (INVOS)

Adaptação da ideia **design-md** pro INVOS: o destino **não** é `DESIGN.md` na raiz.  
Destino canônico = **`marca/marca.md`** (+ `marca/assets/` se houver logo).

Objetivo: proposta HTML e qualquer saída usarem **as cores e a voz reais** do prestador.

## Gatilhos

- “Extrai a marca do site …”, “/design …”, “atualiza brand”, “minhas cores”
- Onboard ofereceu preencher marca e o user mandou URL
- Proposta pediu brand e `marca/marca.md` ainda é template

## Fontes de dados (ordem)

1. **URL do site do usuário** (preferido se tiver)  
2. Respostas manuais (nome, cor favorita, tom)  
3. Já existente em `marca/marca.md` / `memoria/empresa.md` (não apagar o que for bom)

## Extração de site (se houver URL)

Normalizar URL (`https://` se faltar).

Tentar, nesta ordem:

1. MCP/CLI Hyperbrowser se existir no ambiente:  
   `hx web fetch <url> --format branding`  
   ou tool `scrape_webpage` com branding  
2. Se **não** houver Hyperbrowser / API key:  
   - abrir a página com ferramenta de browse disponível, **ou**  
   - perguntar 4 coisas manuais: cor principal (hex), cor de texto, fonte se souber, tom visual  
   - **Não inventar** paleta “bonita” sem base

**Regra:** só grave hex/fontes que foram **extraídos ou ditos pelo user**. Sem alucinar design system completo.

## O que gravar

### Sempre atualizar `marca/marca.md`

Preencher / mesclar seções:

- Identidade (nome da marca, site, contato se souber)  
- Cores (primária, fundo, texto — hex)  
- Tipografia (se veio na extração)  
- Voz: se o user já tem tom em `empresa.md`, **copie** pra cá (não deixe só em empresa)

Mantenha o formato do template. Não reescreva o arquivo apagando campos úteis sem necessidade.

### Logo

- Se o user **anexar** logo: salvar em `marca/assets/logo.png` ou `logo.svg` e marcar **Logo presente? sim**  
- Se só URL de logo clara e download for possível/seguro: salvar em `assets/`  
- Senão: deixar “não” e seguir só com cor + nome

### Espelhar o mínimo em `memoria/empresa.md`

Atualize a seção **Brand** (ou o ponteiro) pra não divergir:

- Marca, Cor, Site, Contato = mesmos valores de `marca/marca.md`

`marca/marca.md` continua sendo a **fonte**; empresa só resume.

## Output no chat

```
✅ Marca atualizada em marca/marca.md
- Primária: #…
- Fundo / texto: …
- Logo: sim (path) | não
Próximo: gerar proposta ou post já usa essas cores.
```

## O que NÃO fazer

- Salvar `DESIGN.md` na raiz do INVOS (confunde com o core)  
- Inventar cores/fontes “de gosto”  
- Misturar brand do **cliente** com a marca do prestador  
- Depender de API paga sem fallback manual  

## Relação com squad `brand`

Squad brand = consultoria profunda (posicionamento, brand book).  
Esta skill = **operacional**: 5 minutos, arquivo que a proposta lê.  
Se o squad gerar brand book, **resuma** cores/voz/logo path em `marca/marca.md`.
