# INVOS

> Seu agente de IA para de te tratar como estranho toda vez que você abre o terminal.

## O problema

Você abre o terminal, chama o Claude, o Codex, o Grok — e o agente não sabe **nada** sobre você.

- Não sabe qual seu nome
- Não sabe o que você está fazendo hoje
- Não sabe o que você decidiu ontem
- Não sabe qual cliente você atende
- Não sabe que regra você aprendeu na última sessão

Toda sessão é uma primeira sessão. Você repete contexto, explica tudo de novo, perde tempo.

## O que isso resolve

Com o INVOS, na primeira linha que o agente lê, ele já sabe:

| Antes | Depois |
|-------|--------|
| "Quem é você?" | Já sabe seu nome, seu negócio, seu cliente |
| "O que você tá fazendo?" | Já leu o que está rolando hoje |
| "O que foi decidido ontem?" | Já viu as decisões da semana |
| "Já expliquei isso..." | Não repete — as regras estão salvas |

## Como funciona (em português simples)

```
1. VOCÊ CLONA → 2. RESPONDE 6 PERGUNTAS → 3. AGENTE JÁ SABE TUDO
```

Na primeira vez que você usa, o próprio agente te entrevista:
"Qual seu nome?", "Qual seu negócio?", "Qual seu cliente atual?"

Depois disso, toda sessão começa com ele sabendo quem você é e o que está fazendo.

## Quickstart

```bash
git clone <url> meu-projeto
cd meu-projeto
# Pronto. Abre seu agente de IA e começa.
```

O agente detecta que é a primeira vez e faz a entrevista sozinho. Você só responde.

## Pra quem é isso

- **Designer** que quer o agente sabendo dos clientes e prazos
- **Marketer** que gerencia campanhas e precisa de histórico
- **Mentor/Consultor** que atende vários clientes e não quer repetir contexto
- **Freelancer** que quer um "co-fundador digital" do próprio negócio
- Qualquer pessoa que presta serviço no digital e usa IA pra trabalhar

## Pré-requisitos

- Saber abrir o terminal
- Ter um agente de IA (Claude Code, Codex, OpenCode, Grok, Cursor — qualquer um)
- Git instalado

Zero dependências. Zero configuração manual.

## Arquivos do kit

| Arquivo | Pra que serve |
|---------|---------------|
| `AGENTS.md` | Instruções que todo agente de IA lê na inicialização |
| `SECURITY.md` | Regras pra não vazar chave, token ou dado de cliente |
| `.env.example` | Modelo das variáveis de ambiente (Notion, OpenAI, Supabase...) |
| `scripts/validar.sh` | Testa se o kit está configurado certo |
| `memoria/` | Seu cérebro digital — identidade, projetos, decisões, histórico |
| `.agents/skills/` | Habilidades do agente (iniciar, arquivar, capturar, auditar, humanizar)

## Bônus inclusos

Além da estrutura de memória, o kit já vem com **5 skills + 3 squads especializados**:

### Skills prontas

| Skill | O que faz | Problema que resolve |
|-------|-----------|---------------------|
| **humanizer** | Remove 25+ padrões de texto de IA em português | Seu conteúdo para de soar como robô |
| **stop-slop** | Remove padrões de texto de IA em inglês | Versão complementar em EN |
| **audit** | Escaneia seu sistema e dá nota de 0 a 100 | Você descobre o que está faltando no seu setup |
| **notion** | CLI/API do Notion integrada | Ler, escrever e buscar no Notion pelo agente |
| **pd-ikigai** | Encontra sua ideia de negócio lucrativa | Framework Patrick Dang pra validar nicho e preço |

### Squads especializados — seu time de elite

| Squad | Membros | O que faz |
|-------|---------|-----------|
| **advisory-board** | Naval, Dalio, Thiel, Munger, Sinek, Sivers + 6 | Conselho consultivo: diagnóstico, decisão, estratégia |
| **brand** | Dunford, Heyward, Neumeier, Haviv + 4 | Posicionamento, naming, identidade visual, coerência |
| **hormozi-squad** | 16 agentes Hormozi | Oferta, copy, hooks, leads, pricing, launch, escala |

106 arquivos, zero dependências. Só chamar pelo nome.

## Licença

MIT — use, modifique, venda, melhore.
