# COMECE AQUI — ativar o sistema INVOS

Você não está “instalando um zip”. Está **ligando o sistema de memória do negócio** do usuário.

**Para o agente:** se o usuário abriu o INVOS pela primeira vez, ou pediu “como começo”, “instalar”, “setup”, “ativar”, **leia e execute este arquivo**. Não peça tutorial longo — guie e execute.

**Para o humano:** os mesmos passos valem se preferir na mão.

**Lembrete de posicionamento:** o produto é o **sistema** (memória + clientes + proposta + regras do agente). O **ZIP** é só como o sistema chegou no computador.

---

## Depois de ligado — só isto no dia a dia

| Você digita | O sistema faz |
|-------------|----------------|
| `O que importa hoje?` | 1 prioridade + quem executa (você ou agente) |
| `Proposta pro [cliente]: …` | HTML pronto + texto de envio + ⚠️ você manda |
| `Post / legenda …` | Texto na sua voz (`marca/`) |
| `Fábrica de carrossel: [tema]` | Time monta slides; você aprova e posta |
| `fim` | Arquiva a sessão |

Resto (Hormozi, Composio, audit profundo) = **só se você pedir**. Não é o caminho do dia 1.

---

## Objetivo

Em poucos minutos:

1. Projeto com **nome do negócio** (não “invos-kit” genérico pra sempre)  
2. Sistema de memória **preenchido** (onboard)  
3. (Prestador) primeiro cliente a partir do template  
4. Prova do wow: 2ª sessão já te conhece  

---

## Passo 0 — Onde o sistema está

O kit (ZIP) extrai algo como:

```text
invos-kit/              ← nome temporário do pacote
  COMECE-AQUI.md        ← este arquivo
  AGENTS.md             ← como o agente opera o sistema
  memoria/              ← cérebro do negócio
  clientes/             ← prestador: um cliente por pasta
  .agents/              ← skills (onboard, proposta, sessão…)
  ...
```

**Agente:** confirme que `AGENTS.md` e `memoria/` existem nesta pasta. Se o user abriu a pasta errada (ex.: só `Downloads`), oriente a abrir a pasta que contém `AGENTS.md` — **aí** está o sistema.

---

## Passo 1 — Nomear o projeto (humano ou agente orquestra)

`invos-kit` é só o nome do **pacote de entrega**.  
**Renomeie** para o negócio: essa pasta **é** o sistema INVOS da pessoa.

**Exemplos de nome bom:**

- `meu-negocio-invos`
- `studio-ana-invos`
- `bruno-freelancer`

**Como (terminal, na pasta pai):**

```bash
# se extraiu para meu-invos/invos-kit:
mv invos-kit meu-negocio-invos
cd meu-negocio-invos
```

**Finder (Mac):** clique no nome da pasta → renomeie → abra de novo no agente (*Open Folder* nessa pasta).

**Agente:** se a pasta ainda se chama `invos-kit` ou `invos`, **sugira renomear** e diga o comando exato. Não bloqueie o onboard se o user quiser renomear depois — mas avise que o ideal é nome estável desde o início.

---

## Passo 2 — Abrir no agente

1. Cursor / Claude Code / Codex / Grok / OpenCode: abrir **esta pasta** como projeto.  
2. Claude Code: lê `CLAUDE.md` → `@AGENTS.md`.  
3. Outros: leem `AGENTS.md` + este fluxo.

**Agente:** rode o boot de `AGENTS.md` (skill `session-start`). Se memória for template → **onboard** (skill `onboard`).

---

## Passo 3 — Onboard (primeira vez)

**Agente:** se `memoria/empresa.md` ainda tem `PREENCHA` / `[seu nome]` ou `ativo` tem `primeira sessão`:

1. Execute skill `.agents/skills/onboard/SKILL.md`  
2. Uma pergunta por vez  
3. Grave os arquivos na hora (incremental)  
4. No fim: checklist do que foi escrito + 1 próximo passo concreto  

**Humano:** diga *“Roda o onboard do INVOS”* ou *“Me entrevista pra configurar a memória”*.

**Prova do wow (obrigatória após onboard):**

1. Feche o chat / abra sessão nova **na mesma pasta**  
2. User: *“Quem eu sou e no que estou trabalhando?”*  
3. Sucesso = resposta com nome, oferta e foco **sem** re-entrevista  

Se falhar: `bash scripts/validar.sh --pos-onboard` e complete o que faltar.

---

## Passo 4 — Duplicar o template de cliente (prestador)

**Quando:** user presta serviço e tem (ou vai ter) cliente/lead.

**Agente — faça você (não só explique):**

1. Escolha um **slug** (minúsculo, hífen, sem acento): ex. `clinica-vida`, `ana-studio`  
2. Duplique o template:

```bash
cp -R clientes/_template "clientes/<slug>"
```

3. Preencha `clientes/<slug>/perfil.md` com o que o user der (nome, contato, status, dor, próximo passo + **dono**).  
4. **Adicione 1 linha** em `clientes/_index.md` (slug, status, próximo, dono, desde).  
5. Confirme o caminho: `clientes/<slug>/` (arquivos gerados → `arquivos/`).  
6. Nunca edite `_template` no lugar do cliente real — o template fica limpo para o próximo.

**Se o user der os dados em uma mensagem** (“cria o cliente Clínica Vida, Dra. Paula, lead, quer site”), o agente **cria a pasta e preenche** sem pedir 10 perguntas.

**Humano (manual):**

```bash
cp -R clientes/_template clientes/nome-do-cliente
# edite clientes/nome-do-cliente/perfil.md
```

Detalhes: `clientes/README.md`.

---

## Passo 5 — Uso do dia a dia (rituais)

**Ritual matinal (wow #2):** toda sessão com memória ok, o agente já anuncia prioridade (skill session-start).  
O user também pode mandar só:

```
O que importa hoje?
```

Resposta esperada: **1 prioridade** + **próximo passo** (de `ativo` / PRIORIDADE em `projetos` / cliente se houver). Não lista genérica de produtividade.

**Agente:** reconheça estas intenções (também em `AGENTS.md`):

| User diz | Ação |
|----------|------|
| “O que importa hoje?” / início de sessão | 1 prioridade + **dono** + próximo passo; alerta fila humana / atraso |
| “Cliente atual: X” | Lê `clientes/X/` (+ `_index`) |
| “Cria o cliente …” | Passo 4 (template + linha no `_index`) |
| “Proposta / orçamento pro X” | Skill proposta → HTML em `clientes/X/propostas/` (brand `marca/`) + msg + `_index` valor/pagto |
| “Extrai marca do site” | Skill `design-marca` → `marca/marca.md` |
| “O que posto essa semana?” / post texto | Skill `social-content` |
| “Carrossel IG / fábrica de carrossel” | Squad `instagram-carrossel` (time produz; você aprova) |
| “Conecta Gmail / envia por e-mail” | `integracoes/composio/` (opcional, CLI) |

---

## Passo 6 — Encerrar sessão

Quando o user disser fim / acabou / sessão encerrada: skill `session-end`  
(histórico + atualiza `ativo` / projetos se mudou).

---

## Checklist do agente (primeira abertura)

```
[ ] Estou na pasta que tem AGENTS.md
[ ] Sugeri renomear se ainda for invos-kit
[ ] session-start (ou onboard se template)
[ ] Expliquei a prova: 2ª sessão + "quem eu sou…"
[ ] Se prestador: ofereci criar 1º cliente a partir de _template
[ ] Não pedi pro user configurar API/Node pro core
```

---

## O que NÃO fazer

- Não misturar dados de clientes em um único arquivo solto  
- Não sobrescrever `clientes/_template` com dados reais  
- Não inventar senhas/tokens nos arquivos  
- Não transformar o setup em curso de 1 hora — **mínimo até o wow da 2ª sessão**

---

## Ordem mental

```
Receber o kit (ZIP) → nomear o projeto → abrir no agente
  → ativar memória (onboard) → prova 2ª sessão (wow)
  → (prestador) duplicar _template → proposta quando precisar
```

Fim do setup. Depois: **operar o negócio com o sistema ligado**, não “configurar arquivo”.
