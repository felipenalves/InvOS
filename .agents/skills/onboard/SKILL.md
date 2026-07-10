---
name: onboard
description: First-run interview. Asks questions and preenches memoria/ files so the kit works from day 1. Triggers automatically when ativo.md has template content.
---

# Onboard — Entrevista Inicial

Primeira execução do starter kit. Faz perguntas uma de cada vez e salva as respostas nos arquivos de memória. No final, o kit está configurado e pronto pra uso.

## Gatilho

Roda automaticamente quando:
- `memoria/ativo.md` contém "primeira sessão"
- `memoria/empresa.md` contém `[o que` ou `[seu nome]` (placeholders não preenchidos)
- `memoria/projetos.md` contém `PREENCHA`

## Sequence

### 1. Abertura

```
Bem-vindo ao INVOS 👋

Vou fazer algumas perguntas pra configurar seu sistema de memória.
São rápidas — depois disso, todo agente que você usar vai saber quem você é,
o que está fazendo, e o que já foi decidido.

Vamos lá?
```

### 2. Identidade (salva em empresa.md)

Pergunte uma de cada vez. Aguarde a resposta antes da próxima.

1. "Qual seu nome?"
2. "Qual sua visão? O que você quer construir ou resolver?"
3. "Qual seu negócio principal? Descreve em 1 linha."
4. "Qual sua principal oferta? O que você vende ou entrega?"
5. "Quem é seu cliente ideal?"
6. "Qual seu tom de voz? Como você se comunica?"

Após responder todas, escreva `memoria/empresa.md` substituindo os placeholders pelos dados fornecidos. Mantenha a estrutura do arquivo.

### 3. Projetos (salva em projetos.md)

1. "Qual projeto você vai trabalhar agora? Pode ser mais de um, mas vamos começar com o principal."
2. "Qual o status desse projeto? (ideação, MVP, vivo, escala)"
3. "Qual a stack ou ferramentas que você usa?"
4. "Qual o próximo passo que você precisa fazer?"

Após responder, escreva `memoria/projetos.md` com os projetos informados.

### 4. Primeira decisão (salva em decisoes.md)

1. "Tem alguma decisão importante que você já tomou sobre esse projeto e quer registrar?"

Se sim, adicione em `memoria/decisoes.md`. Se não, pergunte se pode pular.

### 5. Ativar o presente (salva em ativo.md)

Escreva `memoria/ativo.md` com:

```markdown
# Ativo

## Contexto da sessão

- **Data:** $(date +%Y-%m-%d)
- **Sessão anterior:** (nenhuma — onboarding concluído)
- **Foco:** [projeto principal informado na entrevista]

## Em andamento

- Configuração inicial do starter kit concluída

## Próximo (contexto)

- [próximo passo informado na entrevista]
```

### 6. Finalização

```
✅ Pronto! Seu sistema de memória está configurado.

Agora, sempre que você abrir uma sessão:
- O agente vai saber quem você é e o que faz
- Vai lembrar o que foi decidido
- Vai capturar insights e regras automaticamente
- Vai arquivar tudo no final

Bora trabalhar? O que você quer fazer agora?
```

## Output

`memoria/empresa.md`, `memoria/projetos.md`, `memoria/decisoes.md` e `memoria/ativo.md` preenchidos com dados reais. Próxima execução do session-start não vai mais triggerar onboard.
