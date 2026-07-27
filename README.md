<pre align="center">
╔══════════════════════════════════════════════════════╗
║                                                      ║
║      ██╗███╗   ██╗██╗   ██╗ ██████╗ ███████╗        ║
║      ██║████╗  ██║██║   ██║██╔═══██╗██╔════╝        ║
║      ██║██╔██╗ ██║██║   ██║██║   ██║███████╗        ║
║      ██║██║╚██╗██║╚██╗ ██╔╝██║   ██║╚════██║        ║
║      ██║██║ ╚████║ ╚████╔╝ ╚██████╔╝███████║        ║
║      ╚═╝╚═╝  ╚═══╝  ╚═══╝   ╚═════╝ ╚══════╝        ║
║                                                      ║
║               your AI co-founder                     ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
</pre>

<p align="center">
  <b>Seu cofundador artificial — memória do negócio + habilidades que executam, em qualquer agente de IA.</b>
</p>

<p align="center">
  <a href="https://github.com/felipenalves/InvOS/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
  <a href="https://www.npmjs.com/package/invos"><img src="https://img.shields.io/npm/v/invos.svg" alt="npm version"></a>
  <a href="https://github.com/felipenalves/InvOS"><img src="https://img.shields.io/github/stars/felipenalves/InvOS?style=social" alt="GitHub stars"></a>
</p>

---

INVOS transforma qualquer agente de IA no **cofundador que você sempre quis**.
Ele não só entende seu negócio — ele **executa**. Prioriza o dia, rascunha
proposta no teu tom, audita posicionamento, cria conteúdo.

---

## Como funciona (o fluxo)

**1. CLI cria seu projeto**
```bash
npx invos@latest init --name meu-negocio
```
Isso gera uma pasta com a estrutura completa: memória, skills, templates.

**2. Você abre essa pasta no seu agente de IA favorito**
Claude Code, Cursor, OpenCode, Codex, Grok — qualquer um que leia
`AGENTS.md`. Dentro do chat do agente, roda:

```
/instalar
```

O agente lê o `AGENTS.md`, faz uma entrevista de 5 minutos e monta a
memória do seu negócio: quem você é, o que vende, tom de voz,
prioridades da semana.

**3. Pronto. Seu cofundador já sabe quem você é.**

Agora é uso diário. Abre o projeto no agente, roda `/abrir` e ele carrega
o contexto. Pede o que precisar:

| Comando | O que faz |
|---------|-----------|
| `/abrir` | Carrega seu contexto no início da sessão |
| `/carrossel` | Cria post educativo pro Instagram |
| `/salvar` | Commit + push no GitHub |
| `/atualizar` | Sincroniza contexto com mudanças recentes |
| `/analisar-dados` | Planilha → relatório com insights |
| `/email-profissional` | Escreve e-mail no seu tom |
| `/anuncio-google` | Estrutura campanha de Google Ads |
| `/seo` | Audita e sugere melhorias de SEO |
| `/mapear-rotinas` | Transforma tarefas repetitivas em skills |
| `/novo-projeto` | Cria pasta isolada por cliente |

Atualizar skills sem perder sua memória:
```bash
npx invos@latest update
```

---

## A estrutura que seu agente enxerga

```
projeto/
├── AGENTS.md          ← Instruções: diz ao agente que ele é um cofundador
├── CLAUDE.md          ← Só redireciona pra AGENTS.md (multi-harness)
├── _memoria/          ← Quem você é: empresa, tom de voz, foco da semana
├── .agents/skills/    ← Habilidades: carrossel, humanizer, ads, SEO…
├── marca/             ← Cores, fontes, logo (pra posts visuais)
├── marketing/         ← Conteúdo e campanhas que as skills geram
├── saidas/            ← Documentos, propostas, relatórios prontos
├── templates/         ← Perfis pré-formatados (solopreneur, agência…)
└── packages/cli/      ← Código do CLI (`npx invos`)
```

Tudo em **Markdown puro** — portável, editável no VS Code, versionado no Git.

---

## Por que INVOS?

- **Cofundador, não ferramenta:** ele sabe quem você é, o que importa hoje, e executa — prioridade, proposta, conteúdo, decisão
- **Funciona em qualquer agente:** Claude, Cursor, Grok, Codex, OpenCode — o cofundador te acompanha
- **Skills plugáveis:** carrossel de Instagram, análise de dados, humanizer, auditoria de posicionamento — ative só o que precisa
- **Memória viva:** seus dados ficam em Markdown no seu repo, não num banco externo. Portável, editável, sua
- **Grátis:** MIT. Sem lock-in, sem surpresa, sem mensalidade

---

## Licença

MIT &mdash; use, estude, modifique, compartilhe. Construído por [Felipe Natanael](https://github.com/felipenalves).

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
