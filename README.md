# INVOS

> Seu segundo cérebro profissional, conectado ao agente de IA que você usa.

INVOS organiza em arquivos do seu projeto o contexto de trabalho que você registra:
clientes, projetos, decisões, documentos, reuniões, ideias e histórico. Com esse
material disponível, seu agente pode retomar o que foi combinado, explicar uma decisão
e ajudar você a pensar no próximo passo.

## Memória e pensamento, na prática

Você pode perguntar ao agente:

- “O que combinamos com esse cliente?”
- “Por que decidimos isso?”
- “Quais problemas desse projeto ainda estão em aberto?”
- “O que devo considerar antes de aceitar esse trabalho?”
- “Me ajude a pensar nessa decisão.”

A memória depende do que você registra nos arquivos. O INVOS mantém esse contexto perto
do seu trabalho; as skills ajudam a executar fluxos específicos quando você chama por elas.

---

## Começar

Baixe o [INVOS 2.0.7 em ZIP](downloads/INVOS-2.0.7.zip), extraia e siga o `INSTALAR.md` incluído. Requer Node.js 18 ou superior.

```bash
npx invos@latest init --name meu-negocio
cd meu-negocio
# abre a pasta no agente que lê AGENTS.md e roda:
/instalar
```

O `/instalar` entrevista você, monta a memória, escolhe o perfil (solopreneur,
freela, agência, empresa). Depois é uso diário — os agentes já sabem seu contexto.

Atualizar skills sem perder memória:

```bash
npx invos@latest update
```

---

## Skills para o trabalho

| Comando | Função |
|---------|--------|
| `/abrir` | Carrega a memória e resume o foco da sessão |
| `/salvar` | Commit + push no GitHub |
| `/atualizar` | Alinha arquivos de contexto com o que mudou |
| `/novo-projeto` | Pasta isolada por cliente/iniciativa |
| `/mapear-rotinas` | O que você repete vira skill |

- **Conteúdo e marketing:** `/carrossel` · `/publicar-tema` · `/seo` · `/responder-avaliacoes` · `/aprovar-post`
- **Anúncios e produção:** `/anuncio-google` · `/relatorio-ads` · `/analisar-dados` · `/email-profissional`

Estrutura de pastas e ênfase depende do perfil que você escolhe no `/instalar`.

---

## Onde fica cada parte

- **`AGENTS.md`** — orienta o agente sobre o contexto e as regras do projeto.
- **`_memoria/`** — registra empresa, preferências, estratégia e decisões.
- **`.agents/skills/`** — reúne os fluxos que você pode chamar pelo nome.
- **`marca/`** — guarda as referências visuais usadas pelas skills de criação.

Os arquivos ficam no seu projeto em Markdown. O agente consulta o contexto registrado
ali quando trabalha com você.

---

## Licença

MIT — livre pra usar, modificar, compartilhar.

---

## Suporte / Comunidade

- GitHub: [felipenalves/invos](https://github.com/felipenalves/invos)
