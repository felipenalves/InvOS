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
  <b>Você já usa IA. Agora é hora de ter um cofundador de IA trabalhando por você.</b>
</p>

<p align="center">
  <a href="https://github.com/felipenalves/InvOS/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
  <a href="https://www.npmjs.com/package/invos"><img src="https://img.shields.io/npm/v/invos.svg" alt="npm version"></a>
  <a href="https://github.com/felipenalves/InvOS"><img src="https://img.shields.io/github/stars/felipenalves/InvOS?style=social" alt="GitHub stars"></a>
</p>

---

**Usar IA é o nível 1.** A IA trabalha *com* você: responde quando você pergunta,
esquece tudo na próxima sessão, e para quando você para.

**Ter um cofundador de IA é o nível 2.** Ele trabalha *por* você: sabe quem você é,
o que importa hoje e o que foi decidido ontem. Prioriza o dia, rascunha proposta no
teu tom, audita posicionamento, cria conteúdo — com memória que não esquece.

INVOS leva qualquer agente de IA do nível 1 ao nível 2. Zero programação — se você
abre o Claude Code ou o Codex e responde a uma entrevista, já basta. Em ~10 minutos seu
cofundador de IA está rodando e sabe quem você é.

### A diferença, lado a lado

| Nível 1 · ferramenta de apoio | Nível 2 · cofundador de IA |
|---|---|
| A IA como copiloto: trabalha **com** você | Trabalha **por** você, no automático |
| Só responde quando você pergunta | Você dá o objetivo, ele executa de ponta a ponta |
| Faz uma tarefa por vez, e só quando você especifica | Trabalha todos os dias, 24/7 |
| Você precisa saber exatamente o que pedir | Sabe quem você é, o que importa hoje e o que decidiu ontem |
| Sem você no meio, ela não faz nada | Opera fluxos e áreas inteiras por você |
| Esquece tudo na próxima sessão | Memória viva — decisões, clientes, histórico |

---

## Início rápido (3 passos)

**1. Crie seu projeto**
```bash
# Pasta nova
npx invos init --name meu-negocio

# Pasta existente
cd meu-projeto && npx invos init
```

**2. Abra no seu agente de IA e rode `/instalar`**

O agente faz uma entrevista rápida e monta a memória do seu negócio.

**3. Pronto. Seu cofundador já sabe quem você é.**

---

## Agentes suportados

| Agente | Funciona? | Como ativar |
|--------|-----------|-------------|
| Claude Code | ✅ | `CLAUDE.md` carrega automaticamente |
| Cursor | ✅ | `AGENTS.md` carrega automaticamente |
| OpenCode | ✅ | `AGENTS.md` carrega automaticamente |
| Codex CLI | ✅ | `AGENTS.md` carrega automaticamente |
| Grok | ✅ | `AGENTS.md` carrega automaticamente |
| Gemini CLI | ✅ | `AGENTS.md` carrega automaticamente |

Qualquer agente que leia `AGENTS.md` funciona.

---

## Comandos do agente

| Comando | O que faz |
|---------|-----------|
| `/abrir` | Carrega seu contexto no início da sessão |
| `/instalar` | Entrevista + monta memória do negócio (primeira vez) |
| `/carrossel` | Cria post educativo pro Instagram |
| `/salvar` | Commit + push no GitHub |
| `/atualizar` | Sincroniza contexto com mudanças recentes |
| `/analisar-dados` | Planilha → relatório com insights |
| `/email-profissional` | Escreve e-mail no seu tom |
| `/anuncio-google` | Estrutura campanha de Google Ads |
| `/seo` | Audita e sugere melhorias de SEO |
| `/mapear-rotinas` | Transforma tarefas repetitivas em skills |
| `/novo-projeto` | Cria pasta isolada por cliente |

---

## Comandos da CLI

| Comando | O que faz |
|---------|-----------|
| `npx invos init` | Cria projeto novo com kit completo |
| `npx invos install` | Instala no projeto atual |
| `npx invos update` | Atualiza kit (preserva memória e dados) |
| `npx invos doctor` | Diagnostica instalação + avisa se tem versão nova |

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
└── templates/         ← Perfis pré-formatados (solopreneur, agência…)
```

Tudo em **Markdown puro** — portável, editável, versionado no Git.

---

## Exemplos do que dá pra fazer

- **Criar carrossel pro Instagram** → `/carrossel` sobre tendências do seu nicho
- **Escrever proposta comercial** → no seu tom, com dados do cliente
- **Auditar posicionamento** → advisorboard analisa e sugere ajustes
- **Analisar planilha** → `/analisar-dados` gera relatório com insights
- **Criar conteúdo de lançamento** → hormozi-squad monta oferta completa
- **Email profissional** → no seu tom, pra qualquer contexto

---

## Por que INVOS?

- **Cofundador, não ferramenta:** ele sabe quem você é, o que importa hoje, e executa
- **Nível 2, não nível 1:** IA que trabalha *por* você, não *com* você
- **Rapidez:** cofundador rodando em ~10 minutos — entrevista, memória, pronto
- **Funciona em qualquer agente:** Claude, Cursor, Grok, Codex, OpenCode
- **Skills plugáveis:** ative só o que precisa, crie as suas
- **Memória viva:** seus dados ficam em Markdown no seu repo. Portável, sua
- **Grátis:** MIT. Sem lock-in, sem surpresa
- **Sem programação:** feito pra quem toca o negócio — o agente guia a instalação

---

## Troubleshooting

| Problema | Solução |
|----------|---------|
| `command not found: invos` | Use `npx invos` (com npx, não npm) |
| Skills não aparecem no Claude Code | Rode `npx invos doctor --fix` |
| Memória sumiu depois de update | Seus dados em `_memoria/` são preservados. Rode `/abrir` |
| Quero versão específica | `npx invos@2.0.5 init` |
| Erro no install | Rode `npx invos doctor` e veja o diagnóstico |

---

## Contribuindo

- **Bug report ou sugestão** → [Issues](https://github.com/felipenalves/InvOS/issues)
- **Dúvida ou discussão** → [Discussões](https://github.com/felipenalves/InvOS/discussions)

---

## Licença

MIT — use, estude, modifique, compartilhe. Construído por [Felipe Natanael](https://github.com/felipenalves).

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
