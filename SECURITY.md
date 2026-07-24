# Segurança

> Regras pra não vazar chave, token, senha ou dado de cliente.

## Nunca commitar

```
.env
.env.*
*.local
**/secrets/**
**/credentials/**
**/*_key*
**/*_secret*
**/token*
**/auth*
```

O `.gitignore` já bloqueia a maioria. Mas o agente também **nunca** deve escrever chaves em arquivos tracked.

## Regras pro agente

- Se detectar que um arquivo contém chave/API key/token SECRETO, avise antes de qualquer ação
- Não escreva `.env` preenchido em arquivo versionado
- Se precisar de credencial pra teste, use variável de ambiente ou `.env.local` (no `.gitignore`)
- Dados de cliente (nome, empresa, contato) em `memoria/` são ok — mas sem senha, token ou dado financeiro
- **Composio / OAuth:** `COMPOSIO_API_KEY` e tokens só em ambiente ou `.env` local (gitignore). Nunca em `integracoes/`, `memoria/` ou commit. OAuth fica na conta Composio do usuário.

## Checklist de segurança (antes de push)

- [ ] `grep -r "API_KEY\|SECRET\|PASSWORD\|token" .env* 2>/dev/null` — não deve achar nada
- [ ] `cat .gitignore` — `.env*` e `*.local` estão lá?
- [ ] `git status` — tem arquivo de credencial aparecendo? Se sim, adicionar no `.gitignore`

## Se vazar

1. Rotacionar a chave imediatamente no serviço (Notion, OpenAI, GitHub, etc.)
2. Usar `git filter-branch` ou `bfg` pra remover do histórico
3. Anotar como regra em `memoria/regras/` pra não repetir
