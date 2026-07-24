# saidas/ — outputs gerais do INVOS

Pasta pra qualquer output que não é marketing puro (não cabe em `marketing/`).

## O que vai aqui

- **Análises** de `/analisar-dados` — resumos executivos de CSV/XLSX/PDF
- **Emails** rascunhados por `/email-profissional`
- **Relatórios diversos** que não são de ads
- **Documentos** que skills geram e você precisa enviar/imprimir/anexar

## Estrutura sugerida

```
saidas/
├── analises/        relatórios de /analisar-dados
├── emails/          rascunhos de /email-profissional
└── outros/          qualquer coisa solta
```

Skills sabem onde salvar — você não precisa criar subpasta manualmente. Se uma skill perguntar onde salvar, vai propor aqui.

## Por que separar de `marketing/`?

`marketing/` é histórico vivo do trabalho de marketing — peças, campanhas, SEO acumulado.

`saidas/` é "coisa pontual gerada hoje" — relatório que você manda pro cliente e nunca mais olha, rascunho de email que copia e cola no Gmail.

A divisão importa pra `/salvar` (commit) e pra clareza ao navegar a pasta.
