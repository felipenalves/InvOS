# COMECE AQUI — instalação e uso inicial

**Para o agente:** se o usuário abriu o kit pela primeira vez, ou pediu “como começo”, “instalar”, “setup”, **leia e execute este arquivo** (passo a passo). Não peça que o humano leia tutorial longo — guie você.

**Para o humano:** se preferir fazer na mão, os mesmos passos valem.

---

## Objetivo

Em poucos minutos:

1. Pasta do projeto com **nome dela** (não “invos-kit” genérico pra sempre)  
2. Memória preenchida (onboard)  
3. (Prestador) primeiro cliente a partir do template  
4. Prova do wow: 2ª sessão já te conhece  

---

## Passo 0 — Onde você está

O ZIP extrai algo como:

```text
invos-kit/
  COMECE-AQUI.md   ← este arquivo
  AGENTS.md
  memoria/
  clientes/
  .agents/
  ...
```

**Agente:** confirme que `AGENTS.md` e `memoria/` existem nesta pasta. Se o user abriu a pasta errada (ex.: só `Downloads`), oriente a abrir a pasta que contém `AGENTS.md`.

---

## Passo 1 — Nomear a pasta do projeto (humano ou agente orquestra)

A pasta padrão `invos-kit` é só o nome do pacote. **Renomeie** para o negócio ou o uso do user.

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

3. Preencha `clientes/<slug>/perfil.md` com o que o user der (nome, contato, status, dor, próximo passo).  
4. Confirme o caminho: `clientes/<slug>/`  
5. Nunca edite `_template` no lugar do cliente real — o template fica limpo para o próximo.

**Se o user der os dados em uma mensagem** (“cria o cliente Clínica Vida, Dra. Paula, lead, quer site”), o agente **cria a pasta e preenche** sem pedir 10 perguntas.

**Humano (manual):**

```bash
cp -R clientes/_template clientes/nome-do-cliente
# edite clientes/nome-do-cliente/perfil.md
```

Detalhes: `clientes/README.md`.

---

## Passo 5 — Uso do dia a dia (rituais)

**Agente:** reconheça estas intenções (também em `AGENTS.md`):

| User diz | Ação |
|----------|------|
| “O que importa hoje?” | Lê `memoria/ativo.md` + `projetos.md` → 1 prioridade + próximo passo |
| “Cliente atual: X” | Lê `clientes/X/` |
| “Cria o cliente …” | Passo 4 (duplicar template) |
| “Proposta / orçamento pro X” | Skill `.agents/skills/proposta/SKILL.md` → grava em `clientes/X/propostas/` |

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
ZIP → nomear pasta → abrir no agente → onboard → prova 2ª sessão
     → (prestador) duplicar _template → proposta quando precisar
```

Fim do setup inicial. Depois: operar o negócio, não “configurar o kit”.
