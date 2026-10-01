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
║        seu segundo cérebro profissional              ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
</pre>

<p align="center">
  <a href="https://github.com/felipenalves/InvOS/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Licença MIT"></a>
  <a href="https://www.npmjs.com/package/invos"><img src="https://img.shields.io/npm/v/invos.svg" alt="Versão npm"></a>
  <a href="https://github.com/felipenalves/InvOS"><img src="https://img.shields.io/github/stars/felipenalves/InvOS?style=social" alt="Estrelas no GitHub"></a>
</p>

> INVOS organiza o contexto do seu trabalho em arquivos Markdown e o deixa disponível para o agente de IA que você usa.

Ele pode reunir clientes, projetos, decisões, documentos, reuniões, ideias e histórico. Com esse material, você pode perguntar:

- “O que combinamos com esse cliente?”
- “Por que decidimos isso?”
- “Quais problemas deste projeto ainda estão em aberto?”
- “O que devo considerar antes de aceitar este trabalho?”
- “Me ajude a pensar nessa decisão.”

A memória depende do que você registra. O INVOS mantém esse contexto perto do trabalho; as skills ajudam quando você chama um fluxo específico.

**Grátis, open source sob licença MIT e baseado em arquivos locais.** Você mantém seus arquivos e escolhe se os versiona ou sincroniza com GitHub.

---

## O que vem no INVOS

| Parte | O que faz |
|---|---|
| **Memória** (`_memoria/`) | Registra contexto do negócio, preferências, estratégia e decisões. |
| **Skills** (`.agents/skills/`) | Fluxos que você chama por nome para tarefas recorrentes. |
| **Squads** (`.agents/squads/`) | Grupos opcionais de agentes para explorar decisões, marca ou oferta. |
| **Perfis** (`templates/perfis/`) | Estruturas iniciais para negócio solo, freelancer, agência ou empresa. |

O INVOS não toma decisões por você. O agente usa os arquivos disponíveis como contexto, mas pode interpretar algo errado ou não encontrar uma informação. Confira decisões importantes e mantenha a memória atualizada.

---

## Instalação

Requisito: **Node.js 18 ou superior** e um agente de IA compatível com as instruções do projeto. Se ainda não tiver o Node.js, instale pelo [site oficial](https://nodejs.org/).

### Pelo instalador ZIP

1. [Baixe o instalador INVOS 2.0.7](downloads/INVOS-2.0.7.zip) e extraia o arquivo.
2. No terminal, dentro da pasta extraída, crie seu projeto:

   ```bash
   node package/bin/invos.js init --name meu-negocio
   cd meu-negocio
   ```

3. Abra a pasta no agente de IA e rode `/instalar` para registrar o perfil e o contexto do negócio.
4. Nas próximas sessões, use `/abrir` para retomar a memória e o foco registrado. Depois, peça uma tarefa diretamente ou chame uma skill pelo nome.

O instalador inclui `INSTALAR.md` com esses passos.

### Pelo npm

Crie um projeto novo:

```bash
npx invos@latest init --name meu-negocio
cd meu-negocio
```

Instale em uma pasta existente:

```bash
npx invos@latest install --dir "/caminho/do/seu-projeto"
```

Depois, abra a pasta no agente de IA e rode `/instalar` para registrar o perfil e o contexto do negócio. Nas próximas sessões, use `/abrir` para retomar a memória e o foco registrado.

### Atualizar ou diagnosticar

Atualize o kit sem substituir a memória:

```bash
npx invos@latest update
```

Confira a instalação:

```bash
npx invos@latest doctor
```

---

## Comandos da CLI

| Comando | O que faz |
|---|---|
| `npx invos init --name <slug>` | Cria um projeto com o kit do INVOS. |
| `npx invos install --dir <pasta>` | Instala o kit em uma pasta existente. |
| `npx invos update --dir <pasta>` | Atualiza os arquivos do produto e preserva os dados do negócio. |
| `npx invos doctor --dir <pasta>` | Verifica arquivos, skills e links do agente. |

---

## Skills incluídas

### Contexto e organização

- `/instalar` — configura o INVOS para o negócio.
- `/abrir` — carrega a memória e resume o foco da sessão.
- `/atualizar` — alinha os arquivos de contexto ao que mudou.
- `/salvar` — registra o trabalho no GitHub (commit e push).
- `/novo-projeto` — cria uma estrutura para cliente ou iniciativa.
- `/mapear-rotinas` — transforma uma tarefa recorrente em uma skill.
- `/notion` — consulta e organiza conteúdo no Notion.

### Conteúdo e comunicação

- `/carrossel` — cria carrosséis com a identidade visual registrada.
- `/publicar-tema` — desenvolve conteúdo a partir de um tema.
- `/email-profissional` — redige e-mails conforme o contexto e o destinatário.
- `/humanizer` — revisa textos para deixá-los mais naturais.
- `/youtube-summarizer` — resume vídeos do YouTube.
- `/aprovar-post` — revisa itens preparados para publicação.

### Dados, marketing e design

- `/analisar-dados` — analisa arquivos de dados e organiza os resultados.
- `/relatorio-ads` — estrutura relatórios de anúncios.
- `/anuncio-google` — ajuda a montar campanhas de Google Ads.
- `/seo` — orienta tarefas de SEO.
- `/responder-avaliacoes` — prepara respostas a avaliações.
- `/canvas-design`, `/frontend-design` e `/popular-web-designs` — apoiam trabalhos visuais e de interface.

As skills estão em `.agents/skills/`. Para ver os requisitos de cada uma, abra o respectivo `SKILL.md`.

---

## Squads opcionais

Os squads ajudam a explorar problemas que pedem mais de uma perspectiva:

- **Advisory Board:** decisões estratégicas e trade-offs.
- **Brand:** posicionamento, naming e identidade.
- **Hormozi Squad:** oferta, preço, leads e crescimento.

Cada pasta em `.agents/squads/` contém os agentes e instruções do grupo.

---

## Agentes compatíveis

O kit usa `AGENTS.md` como arquivo principal de instruções. A forma de carregá-lo depende do agente:

| Agente | Como carrega as instruções |
|---|---|
| **Claude Code** | A partir da v2.1.277, lê `AGENTS.md` quando não há `CLAUDE.md` no caminho do projeto. Para ler ambos, configure **Project instructions** como `claude-md-and-agents-md`; o `CLAUDE.md` do INVOS também importa `@AGENTS.md`. [Documentação](https://code.claude.com/docs/en/memory#agents-md) |
| **Codex CLI** | Lê `AGENTS.md` automaticamente no início da sessão. [Documentação](https://developers.openai.com/codex/guides/agents-md/) |
| **Cursor** | Lê `AGENTS.md` na raiz e em subdiretórios. [Documentação](https://cursor.com/docs/rules) |
| **OpenCode** | Lê `AGENTS.md` como instrução do projeto. [Documentação](https://opencode.ai/docs/rules/) |
| **Grok** | Lê `AGENTS.md` no projeto e em diretórios acima da pasta de trabalho. [Documentação](https://docs.x.ai/build/features/project-rules) |
| **Gemini CLI** | Usa `GEMINI.md` por padrão. Para incluir `AGENTS.md`, adicione os dois nomes em `context.fileName` nas configurações. [Documentação](https://geminicli.com/docs/cli/gemini-md/) |

Este kit inclui `CLAUDE.md` com `@AGENTS.md` como ponte para Claude Code. No Gemini CLI, configure os nomes de contexto se quiser usar o mesmo arquivo.

---

## Estrutura do projeto

```text
meu-negocio/
├── AGENTS.md              # instruções do agente
├── CLAUDE.md              # importa AGENTS.md para Claude Code
├── _memoria/              # contexto do negócio e decisões
├── .agents/skills/        # fluxos chamados por nome
├── .agents/squads/        # grupos opcionais de agentes
├── templates/perfis/      # perfis aplicados durante /instalar
├── marca/                 # referências visuais e de comunicação
├── dados/                 # arquivos temporários para análise
└── saidas/                # materiais produzidos no trabalho
```

O `/instalar` oferece quatro perfis: **solopreneur/criador solo**, **freelancer**, **agência/consultoria** e **empresa**.

---

## O que acontece com seus dados

- A memória fica em arquivos Markdown dentro do seu projeto.
- `npx invos update` preserva `_memoria/`, `marca/`, `clientes/`, `saidas/`, `dados/` e arquivos gerados do negócio.
- O kit do INVOS não mantém um servidor próprio para sua memória. O agente, o GitHub, o Notion e outras integrações que você conectar podem processar ou sincronizar dados conforme os serviços e as configurações escolhidos.
- A qualidade da memória depende das informações que você registra e mantém atualizadas.

---

## Problemas comuns

| Problema | O que fazer |
|---|---|
| `invos: command not found` | Rode os comandos com `npx invos@latest`. |
| O agente não encontra as instruções | Confirme que abriu a pasta do projeto. Rode `npx invos doctor --dir <pasta>` e veja a tabela de agentes acima. |
| Skills não aparecem no Claude Code | Confira a versão e os arquivos listados pelo `doctor`; se necessário, rode `npx invos doctor --dir <pasta> --fix`. |
| Quer usar uma versão específica | Use `npx invos@2.0.7 <comando>`. |
| A memória não mudou após `update` | O update preserva `_memoria/`; edite os arquivos de contexto ou rode `/atualizar`. |

---

## Contribuir e pedir suporte

- **Bug ou sugestão:** [GitHub Issues](https://github.com/felipenalves/InvOS/issues)
- **Perguntas e ideias:** [GitHub Discussions](https://github.com/felipenalves/InvOS/discussions)
- **CLI, empacotamento e releases:** [packages/cli/README.md](packages/cli/README.md)

## Licença

MIT — use, estude, modifique e compartilhe. Construído por [Felipe Natanael](https://github.com/felipenalves).
