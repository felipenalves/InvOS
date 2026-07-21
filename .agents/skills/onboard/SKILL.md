---
name: onboard
description: First-run interview. Asks questions one at a time and writes memoria/ incrementally so the kit works from day 1. Triggers when placeholders remain or ativo marks first session.
---

# Onboard — Entrevista Inicial

Primeira execução do starter kit. Faz perguntas **uma de cada vez** e **grava a memória em etapas** (não deixa tudo pro final). No fim, o kit está configurado.

## Gatilho

Roda automaticamente quando qualquer um destes for verdadeiro:

- `memoria/ativo.md` contém "primeira sessão"
- `memoria/empresa.md` contém `[o que` ou `[seu nome]` ou `PREENCHA`
- `memoria/projetos.md` contém `PREENCHA`
- `memoria/perfil.md` contém `[Seu Nome]` ou `PREENCHA` ou `[Escreva aqui`

## Regras de gravação

- **Uma pergunta por vez.** Aguarde a resposta antes da próxima.
- **Escrita incremental:** após cada bloco de perguntas, **escreva o arquivo na hora** (não acumule tudo pro fim).
- Substitua placeholders por dados reais. Mantenha a estrutura de cada arquivo.
- Data em `ativo.md`: use a data real no formato **ISO `YYYY-MM-DD`**. Nunca grave o literal `$(date +%Y-%m-%d)`.

## Sequence

### 1. Abertura

```
Bem-vindo ao INVOS 👋

Vou fazer algumas perguntas pra configurar seu sistema de memória.
São rápidas — depois disso, todo agente que você usar vai saber quem você é,
o que está fazendo, e o que já foi decidido.

Vamos lá?
```

### 2. Identidade → grava `memoria/empresa.md` na hora

Pergunte uma de cada vez:

1. "Qual seu nome?"
2. "Qual sua visão? O que você quer construir ou resolver?"
3. "Qual seu negócio principal? Descreve em 1 linha."
4. "O que você vende **ou** está construindo? (pode ser oferta, produto, serviço ou o que está no forno — se ainda não vende, descreve o que está criando)"
5. "Quem é seu cliente ideal? (ou quem você quer servir quando estiver pronto)"
6. "Qual seu tom de voz? Como você se comunica?"

**Imediatamente após a 6ª resposta**, escreva `memoria/empresa.md` com dados reais (zero placeholders `[o que`, `[seu nome]`, `PREENCHA`). Mantenha a estrutura do template (Identidade, Estratégia de conteúdo se fizer sentido, Preferências operacionais).

### 3. Perfil → grava `memoria/perfil.md` na hora

Máximo 3 perguntas, uma de cada vez:

1. "Em 1–3 frases: quem você é / como opera (sua essência)?"
2. "Como você trabalha no dia a dia? (1–3 bullets)"
3. "Qual seu papel? (ex: builder, não guru)"

**Imediatamente após as respostas**, escreva `memoria/perfil.md` com dados reais (sem `[Seu Nome]`, `PREENCHA`, `[Escreva aqui`).

### 4. Projetos → grava `memoria/projetos.md` na hora

Uma de cada vez:

1. "Qual projeto você vai trabalhar agora? Pode ser mais de um, mas vamos começar com o principal."
2. "Qual o status desse projeto? (ideação, MVP, vivo, escala)"
3. "Qual a stack ou ferramentas que você usa?"
4. "Qual o próximo passo que você precisa fazer?"

**Imediatamente após as respostas**, escreva `memoria/projetos.md` com o projeto principal (sem `PREENCHA` nem `[descrição`).

### 5. Decisão (opcional) → grava `memoria/decisoes.md` se houver

1. "Tem alguma decisão importante que você já tomou sobre esse projeto e quer registrar?"

- Se sim → escreva/atualize `memoria/decisoes.md` na hora.
- Se não → pule sem inventar decisão.

### 6. Ativo → grava `memoria/ativo.md`

Escreva `memoria/ativo.md` com data **real** (ISO `YYYY-MM-DD`), foco = projeto principal, próximo = próximo passo da entrevista.

Modelo:

```markdown
# Ativo

## Contexto da sessão

- **Data:** YYYY-MM-DD
- **Sessão anterior:** (nenhuma — onboarding concluído)
- **Foco:** [projeto principal informado na entrevista]

## Em andamento

- Configuração inicial do starter kit concluída

## Próximo (contexto)

- [próximo passo informado na entrevista]
```

**Proibido:** literal `$(date ...)` e marcador `primeira sessão` neste arquivo após o onboard.

### 7. Finalização + checklist

Liste o que foi gravado e feche:

```
✅ Pronto! Seu sistema de memória está configurado.

Arquivos escritos:
- [x] memoria/empresa.md
- [x] memoria/perfil.md
- [x] memoria/projetos.md
- [x/—] memoria/decisoes.md (se houve decisão)
- [x] memoria/ativo.md

Agora, sempre que você abrir uma sessão:
- O agente vai saber quem você é e o que faz
- Vai lembrar o que foi decidido
- Vai capturar insights e regras automaticamente
- Vai arquivar tudo no final

**Primeira ação (obrigatória):** proponha 1 passo concreto amarrado ao "Próximo" de `projetos.md` / `ativo.md` (ex.: rascunhar DM pro beta, abrir a tarefa do MVP). Não termine só com "o que você quer fazer?".

Bora. Seu próximo passo registrado é: [citar o Próximo]. Quer que eu execute isso agora?
```

## Output

`memoria/empresa.md`, `memoria/perfil.md`, `memoria/projetos.md`, `memoria/ativo.md` (e `decisoes.md` se aplicável) preenchidos com dados reais. Próximo `session-start` **não** re-entrevista — prova segunda sessão com memória.
