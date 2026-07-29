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
- **Funciona em qualquer agente:** Claude, Cursor, Grok, Codex, OpenCode
- **Skills plugáveis:** ative só o que precisa, crie as suas
- **Memória viva:** seus dados ficam em Markdown no seu repo. Portável, sua
- **Grátis:** MIT. Sem lock-in, sem surpresa

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

1. Fork o repo
2. Cria uma branch (`git checkout -b feature/minha-feature`)
3. Commit (`git commit -m 'feat: minha feature'`)
4. Push (`git push origin feature/minha-feature`)
5. Abre um Pull Request

Issues e discussões são bem-vindas: [Issues](https://github.com/felipenalves/InvOS/issues) · [Discussões](https://github.com/felipenalves/InvOS/discussions)

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
