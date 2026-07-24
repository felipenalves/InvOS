---
name: instagram-publisher
description: >-
  Publica carrossel no Instagram Business via Graph API + imgBB (opcional).
  No INVOS o default é handoff humano; publish automático só com .env e pedido explícito.
---

# Instagram Publisher (INVOS)

## Default no INVOS (sem erro se faltar API)

**Não é obrigatório.** O squad `instagram-carrossel` termina com pack em `conteudo/carrosseis/` +  

```text
⚠️ Sua vez: subir PNGs no Instagram + colar caption.txt
```

Só use publish automático se:

1. User disse **“publica” / “pode postar”**  
2. `.env` tem as variáveis (nunca commitar)  
3. Conta Instagram **Business** + Página Facebook  

## Env (local only)

```bash
# .env (gitignore)
INSTAGRAM_ACCESS_TOKEN=
INSTAGRAM_USER_ID=
IMGBB_API_KEY=
```

## Script

```bash
node --env-file=.env .agents/skills/instagram-publisher/scripts/publish.js \
  --images "path/slide-01.png,path/slide-02.png" \
  --caption "legenda..."
# dry-run:
#   ... --dry-run
```

Imagens: JPEG/PNG conforme o script; preferir 2–10 slides. Caption max 2200 chars.

## Setup token (resumo)

Ver Meta Graph API Explorer: permissões `instagram_content_publish`, `instagram_basic`, `pages_read_engagement`.  
User ID: Page → `instagram_business_account.id`.  
Token longa duração (~60 dias).

## Se faltar chave / script falhar

Reportar erro real → manter handoff humano. **Nunca** inventar permalink de post.
