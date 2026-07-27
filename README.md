<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/felipenalves/InvOS/main/marca/logo-dark.svg">
    <img alt="InvOS" src="https://raw.githubusercontent.com/felipenalves/InvOS/main/marca/logo-light.svg" width="420">
  </picture>
</p>

<p align="center">
  <b>O sistema operacional do seu negócio — memória + skills, pra qualquer agente de IA.</b>
</p>

<p align="center">
  <a href="https://github.com/felipenalves/InvOS/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
  <a href="https://www.npmjs.com/package/invos"><img src="https://img.shields.io/npm/v/invos.svg" alt="npm version"></a>
  <a href="https://github.com/felipenalves/InvOS"><img src="https://img.shields.io/github/stars/felipenalves/InvOS?style=social" alt="GitHub stars"></a>
</p>

---

INVOS transforma seu agente de IA num assistente que **entende seu negócio**.
Não importa se você usa Claude, Codex, Cursor, Grok ou OpenCode — depois
de rodar o `/instalar`, o agente sabe quem você é, como fala, o que importa
essa semana, e tem comandos prontos pra operação e marketing.

---

## Começar

```bash
npx invos@latest init --name meu-negocio
cd meu-negocio
# abre no seu agente preferido e roda:
/instalar
```

O `/instalar` te entrevista, monta a memória e escolhe o perfil ideal
(solopreneur, freelancer, agência, empresa). Depois é uso diário —
nenhuma sessão começa do zero.

Atualizar skills sem perder sua memória:

```bash
npx invos@latest update
```

---

## Comandos principais

| Comando | O que faz |
|---------|-----------|
| `/abrir` | Carrega seu contexto no início da sessão |
| `/salvar` | Commit + push no GitHub |
| `/atualizar` | Sincroniza contexto com mudanças recentes |
| `/novo-projeto` | Cria pasta isolada por cliente ou iniciativa |
| `/mapear-rotinas` | Transforma tarefas repetitivas em skills |

**Marketing e conteúdo:** `/carrossel` · `/publicar-tema` · `/seo` · `/responder-avaliacoes` · `/aprovar-post`

**Ads e operação:** `/anuncio-google` · `/relatorio-ads` · `/analisar-dados` · `/email-profissional`

---

## Como funciona

```
projeto/
├── AGENTS.md          ← Regras do agente (multi-harness). Fonte da verdade.
├── _memoria/          ← Cérebro: sua empresa, voz, foco da semana.
├── marca/             ← Rosto: cores, fontes, logo.
├── marketing/         ← Conteúdo, SEO, campanhas gerados pelas skills.
├── saidas/            ← Análises, e-mails, documentos.
├── scripts/           ← Utilitários que o sistema usa.
├── .agents/skills/    ← Skills canônicas (qualquer harness).
├── templates/         ← Perfis pré-formatados pra cada tipo de negócio.
└── packages/cli/      ← CLI do INVOS (`npx invos`).
```

O sistema não substitui você. Ele **guarda contexto** e **fecha loops**
que hoje ficam abertos — você faz, esquece, e tem que reexplicar tudo
na próxima sessão. INVOS acaba com isso.

---

## Por que INVOS?

- **Multi-harness:** funciona em Claude Code, Cursor, Grok, Codex, OpenCode — qualquer agente que leia `AGENTS.md`
- **Memória viva:** seus dados ficam em arquivos Markdown no seu repo, não num banco externo
- **Skills plugáveis:** de carrossel de Instagram a análise de dados — ative só o que você usa
- **Open-source (MIT):** livre pra usar, modificar, compartilhar. Sem lock-in, sem surpresa

---

## Licença

MIT &mdash; use, estude, modifique, compartilhe. Construído por [Felipe Alves](https://github.com/felipenalves).

---

<p align="center">
  <a href="https://github.com/felipenalves/InvOS">GitHub</a>
  ·
  <a href="https://www.npmjs.com/package/invos">npm</a>
  ·
  <a href="https://github.com/felipenalves/InvOS/issues">Reportar bug</a>
  ·
  <a href="https://github.com/felipenalves/InvOS/discussions">Discussões</a>
</p>
