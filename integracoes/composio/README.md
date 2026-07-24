# Composio no INVOS (CLI primeiro)

Uma conta Composio → OAuth gerenciado → **centenas de apps** (Gmail, Sheets, Notion, Slack, HubSpot, Meta Ads, etc.).

Para o prestador: o agente deixa de só **escrever** proposta/post e passa a **agir** em ferramenta (com permissão).

## Vale a pena?

| Situação | Usar Composio? |
|----------|----------------|
| Só memória + proposta + post em Markdown/HTML | **Não** — core basta |
| Quer Gmail / Sheets / Notion / Slack no agente | **Sim** |
| CRM (HubSpot) sem MCP nativo | **Sim** (forte) |
| Meta/LinkedIn **Ads** (campanha, spend) | **Sim** (médio) |
| Post orgânico Instagram “publicar sozinho” | **Cuidado** — coverage costuma ser ads/API limitada; muitas vezes o fluxo é: agente **escreve** o post (`social-content`) e **você** publica (dono=humano) |
| Volume absurdo / compliance enterprise | Preferir API nativa + processo |

**Resumo:** Composio é bom **MCP/CLI unificado** de marketing+ops. Não substitui `marca/` nem `conteudo/`. É o **frete** das ações externas.

## Pré-requisitos

- Node 18+  
- Conta em [composio.dev](https://composio.dev) (free tem cota)  
- Agente com terminal (Cursor, Claude Code, Codex, Grok…)

## Setup rápido (CLI)

```bash
# Login (uma vez na máquina)
npx composio login
# ou: composio login   se tiver CLI global

npx composio whoami
```

### Descobrir ferramenta

```bash
npx composio search "enviar email"
npx composio search "instagram" --toolkits 
npx composio search "planilha google"
```

### Conectar app (OAuth no browser)

```bash
npx composio link gmail
npx composio link googlesheets
npx composio link notion
# etc.
```

### Ver o que o tool exige (sem executar)

```bash
npx composio execute GMAIL_SEND_EMAIL --get-schema
npx composio execute GMAIL_SEND_EMAIL --dry-run -d '{ ... }'
```

### Executar

```bash
npx composio execute GMAIL_SEND_EMAIL -d '{ "recipient_email": "a@b.com", "subject": "Proposta", "body": "..." }'
```

### Vários de uma vez

```bash
npx composio execute --parallel \
  SLUG_A -d '{}' \
  SLUG_B -d '{}'
```

### Script (workflow)

```bash
npx composio run '
  const me = await execute("GMAIL_FETCH_EMAILS", { max_results: 3 });
  console.log(me.data);
'
```

## MCP (opcional)

Se o harness preferir MCP:

```bash
npx @composio/mcp@latest setup
```

No Claude Code: `/mcp` deve listar `composio`.  
No INVOS, **documentamos CLI como caminho default**; MCP é fallback.

## API key (opcional / time)

```bash
export COMPOSIO_API_KEY=...   # só no shell ou .env local (gitignore)
```

Nunca commitar.

## Fluxos úteis pro prestador INVOS

| Você diz | Fluxo |
|----------|--------|
| “Manda a proposta por e-mail pro cliente X” | Lê HTML/msg em `clientes/X/` → `composio` Gmail (se linkado) **ou** ⚠️ cola e envia manual |
| “Joga os leads da planilha no pipeline” | Sheets via Composio → linhas em `clientes/_index.md` |
| “Resumo dos deals no Notion” | Notion read → checkpoint em `ativo` / histórico |
| “Quanto gastei em ads essa semana?” | Meta/LinkedIn Ads toolkit se conectado |
| “Escreve o post da semana” | Skill **`social-content`** (sem Composio) → `conteudo/` |

## Troubleshooting

| Problema | Ação |
|----------|------|
| Tool not found / not connected | `composio link <toolkit>` e retry |
| Auth expirou | `composio connections list` → remove → link de novo |
| Rate limit | Reduzir calls; free ~cota mensal |
| Não sei o slug | `composio search "…"` |

Detalhe de toolkits de marketing: [marketing-tools.md](./marketing-tools.md).

## O que o agente deve fazer

1. Preferir dados em `memoria/` + `clientes/` + `marca/`.  
2. Se a tarefa **exigir app externo** e Composio estiver no ambiente: `search` → `link` se precisar → `execute --get-schema` se inseguro → `execute`.  
3. Se falhar OAuth ou toolkit não cobrir post orgânico: gerar o artefato no INVOS e marcar **Fila humana** (`⚠️ Sua vez: publicar no Instagram`).  
4. Nunca gravar token em arquivo do kit.
