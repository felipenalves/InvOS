# Integrações

Camada **opcional** do INVOS: conectar o agente a ferramentas externas (Gmail, Sheets, Notion, ads, etc.).

O core do INVOS (**memoria / marca / clientes / proposta**) **funciona sem isso**.  
Integração é quando o prestador já quer que o agente **leia ou dispare** algo fora da pasta.

## O que tem aqui

| Path | Pra quê |
|------|---------|
| [`composio/`](./composio/) | Setup CLI + mapa de ferramentas de marketing/vendas |
| Skill `social-content` | Criar posts (texto) com voz da marca — **não precisa** de Composio |
| Composio | **Publicar / puxar dados** de apps conectados (quando o toolkit existir) |

## Ordem de preferência (eficiência)

```text
1. Arquivos do INVOS (memoria, clientes, conteudo)     ← sempre primeiro
2. composio CLI  (npx composio / composio)             ← preferido pra executar
3. Composio MCP  (se o harness só fala MCP)            ← alternativa
4. API nativa da ferramenta                            ← se for crítico e deep
```

**Por quê CLI > MCP no INVOS:** menos magia no harness, dá pra `search` → `link` → `execute` com schema e dry-run; o empresário (ou o agente) repete o comando. MCP é cômodo no Claude Code, mas o fluxo CLI é mais auditável e portável entre agentes.

## Segurança

- Tokens e `COMPOSIO_API_KEY` só em **`.env` / ambiente** — nunca em `memoria/` nem commit.  
- Ver `SECURITY.md` na raiz.  
- OAuth fica na conta Composio do usuário; o kit **não** embute chaves.
