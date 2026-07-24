---
name: instalar
description: >
  Instala o INVOS no negócio do usuário. Entrevista sobre empresa, tom de voz,
  foco atual e identidade visual, e preenche `_memoria/empresa.md`, `_memoria/preferencias.md`,
  `_memoria/estrategia.md`, `marca/design-guide.md` e anexa o perfil no final do `AGENTS.md`.
  Use quando o usuário acabou de clonar o repositório e quer instalar o sistema, ou quando
  pedir explicitamente "rodar /instalar", "instalar o INVOS", "primeiro setup".
---

# /instalar — Instalação inicial do INVOS

Esse é o primeiro comando que o usuário roda depois de clonar o repositório. Não pode falhar e não pode soar burocrático. Trata como conversa de descoberta — pergunta uma coisa por vez, escuta de verdade, não enfileira tudo. O objetivo é o sistema sair daqui sabendo quem é a empresa, como ela fala, e onde tá o atrito do dia a dia.

## Pré-checagem

### 1. Nome da pasta

Conferir o nome da pasta atual (`basename "$(pwd)"`). Se for `invos`, `INVOS`, `invos-main`, `INVOS-main`, `MazyOS-main` ou variação genérica do kit:

> "Notei que a pasta atual ainda tem nome genérico ('<nome-atual>'). O ideal é a pasta ter o nome do seu negócio, não 'invos'. Quando terminarmos o setup, te lembro de renomear (é rápido — fechar VS Code, renomear a pasta no Finder/Explorer, abrir de novo). Seguimos?"

Registrar mentalmente o nome atual pra usar na Fase 5.

### 2. Arquivos de contexto

Conferir se algum arquivo de memória já está preenchido (não é placeholder):
- `_memoria/empresa.md`
- `_memoria/preferencias.md`
- `_memoria/estrategia.md`
- `marca/design-guide.md`

Se algum já tiver conteúdo real, perguntar:
> "Já tem algum contexto preenchido aqui. Quer que eu sobrescreva (recomeçar do zero) ou complemente o que falta?"

Se for setup limpo, seguir direto.

---

## Fase 1 — Escolha do perfil

Perguntar qual perfil mais combina com o negócio:

1. **Solopreneur / criador solo** — uma pessoa só, mistura de marca pessoal e negócio
2. **Freelancer** — atende clientes, organiza por projeto/cliente
3. **Agência / consultoria** — equipe pequena entregando pra vários clientes
4. **Empresa** — empresa estabelecida com setores (marketing, comercial, financeiro, etc.)

A resposta determina qual template de perfil colar no final do `AGENTS.md` (ver `templates/perfis/agents-*.md`).

---

## Fase 2 — Entrevista

Fazer essas perguntas em ordem, esperando a resposta de cada uma antes de seguir. Se vier resposta vaga, repetir uma vez pedindo concretude. Não insistir mais que isso — registrar o que vier.

**Sobre o negócio:**
1. "Como você chama o que você faz? (nome da empresa, ou seu nome se for marca pessoal)"
2. "O que sua empresa entrega, em uma frase do jeito que você falaria pro vizinho?"
3. "Quem te paga? (perfil de cliente real — descreve em uma ou duas frases, sem persona genérica)"
4. "Você toca sozinho ou tem equipe? Se tem, quantos e cada um fazendo o quê?"

**Sobre voz:**
5. "Me cola um exemplo da tua escrita — uma legenda do Insta, um email pra cliente, qualquer coisa real e recente. Assim eu calibro o jeito de escrever sem precisar adivinhar."
6. "O que te dá ranço quando alguém escreve assim? (ex: 'vamos juntos!', emoji em email formal, 'caro cliente', jargão de guru, 'alavancar', 'sinergia')"

**Sobre foco:**
7. "Qual o gargalo do teu negócio hoje? O que tá segurando ele de crescer?"
8. "Se eu pudesse tirar UMA coisa que você repete toda semana das tuas costas, qual seria?"

**Sobre identidade visual:**
9. "Tem identidade visual definida ou tá no zero? Se tem, me passa as cores principais e a fonte."
10. "Tem logo? Se sim, joga o arquivo em `marca/logo.png` (ou `.svg`) e me confirma."

---

## Fase 3 — Preenchimento dos arquivos

### `_memoria/empresa.md`
Preencher com base nas perguntas 1-4. Manter formato simples — nome, o que faz, perfil de cliente, equipe.

### `_memoria/preferencias.md`
Preencher com base nas perguntas 5-6. Estrutura:
- **Tom de voz:** derivar do exemplo de escrita real da pergunta 5 (descrever em 2-3 frases o jeito de escrever, com referência ao exemplo)
- **O que evitar:** lista direta da resposta 6
- **Estilo geral:** síntese do que combina e o que destoa

### `_memoria/estrategia.md`
Preencher com base nas perguntas 7-8. Estrutura:
- **Gargalo atual:** [resposta da 7]
- **Pra tirar das costas:** [resposta da 8] — registrar como candidata a virar skill via `/mapear-rotinas`
- **Próximas prioridades:** derivar do gargalo (o que ataca o gargalo direto)

### `marca/design-guide.md`
Se o usuário forneceu cores/fontes/logo (perguntas 9-10), preencher os campos correspondentes. Se não, deixar como está e avisar:
> "Deixei o `marca/design-guide.md` em branco. Sempre que você definir uma identidade visual, edita lá — as skills de carrossel, proposta e slide leem esse arquivo antes de criar qualquer visual."

### `AGENTS.md` + `CLAUDE.md`
1. Garantir que a raiz tem `CLAUDE.md` com **apenas** uma linha: `@AGENTS.md` (ponteiro pro harness Claude Code). Não colocar regras de negócio no `CLAUDE.md`.
2. Pegar o template do perfil (`templates/perfis/agents-<perfil>.md` — solopreneur | freelancer | agencia | empresa).
3. Adaptar com o nome do negócio e pastas das respostas.
4. **Anexar** o conteúdo adaptado na seção `## Perfil do negócio` no final do `AGENTS.md` da raiz. **Não** apagar o boot multi-harness acima dessa seção.

---

## Fase 4 — Resumo

Mostrar pro usuário o que foi configurado:

```
✓ Perfil aplicado: [perfil]
✓ Contexto do negócio: _memoria/empresa.md
✓ Tom de voz: _memoria/preferencias.md
✓ Foco atual: _memoria/estrategia.md
✓ Marca: marca/design-guide.md  [preenchida | em branco — preencher depois]
✓ AGENTS.md com perfil [perfil] · CLAUDE.md = @AGENTS.md
```

---

## Fase 5 — Renomear pasta (se necessário)

Se a pasta atual ainda tem nome genérico (detectado na Pré-checagem), gerar slug do nome da empresa (resposta da pergunta 1):
- minúsculas
- sem acentos
- espaços viram hífen
- caracteres especiais removidos

Ex: "Acme Empresa Ltda" → `acme-empresa-ltda`

Mostrar:

> "Última coisa: a pasta ainda tá com nome genérico ('<nome-atual>').
> Pra ter cara do seu negócio, recomendo renomear pra '<slug>'.
>
> Como fazer:
> 1. Fecha o VS Code
> 2. Renomeia a pasta no Finder (Mac) ou Explorer (Windows) — ou no
>    terminal fora dela: `mv <nome-atual> <slug>`
> 3. Abre o VS Code de novo na pasta renomeada
>
> Se preferir outro nome, me fala que eu ajusto a sugestão."

Se a pasta já tem nome próprio (não genérico), pular essa fase.

---

## Fase 6 — Próximos passos

> "Pronto. O INVOS já te conhece.
>
> No começo de cada sessão de trabalho, roda `/abrir` — eu carrego tudo
> que combinamos aqui antes da primeira frase. Quando quiser fazer um
> carrossel, plano de SEO, campanha ou qualquer outra coisa, é só
> chamar a skill que cabe.
>
> Você mencionou que repete '<resposta da pergunta 8>' toda semana.
> Quando quiser tirar isso das costas de vez, roda `/mapear-rotinas`
> que eu transformo em skill própria."

Se o usuário quiser publicar o trabalho no GitHub, mencionar `/salvar`.

---

## Regras

- Não inventar dados — se a resposta for vaga, registrar do jeito que veio (ou deixar placeholder claro)
- Não escrever "este arquivo será preenchido pelo /instalar" nos arquivos finais — esse aviso só existe nos placeholders, sai depois do /instalar
- O setup deve durar 5-7 minutos no máximo. Se o usuário estiver enrolando numa pergunta, registra o que tem e segue
- Não fazer perguntas extras além das listadas acima sem motivo claro
