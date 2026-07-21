# INVOS

**Seu agente de IA para de te tratar como estranho.**

Site e compra: **[inovadigitalid.com/invos](https://inovadigitalid.com/invos)** · R$97 · acesso imediato

---

## Em uma frase

O INVOS é uma **pasta no seu computador** (e no GitHub) onde fica a memória do seu negócio.  
Você abre essa pasta em **qualquer** agente de IA (Cursor, Claude no terminal, Codex, Grok…).  
Na primeira vez ele te faz umas perguntas. Nas próximas, **já sabe quem você é** e no que você está trabalhando.

Não é curso. Não é Notion. Não é mais um app pra instalar.  
É o jeito simples de a IA **lembrar** de você entre uma sessão e outra.

---

## Pra quem é (incluindo se você é leigo)

Se você:

- está **começando** a usar IA no terminal / no Cursor / no Claude Code  
- cansa de **explicar de novo** quem você é e o que faz  
- presta serviço (design, marketing, consultoria…) **ou** está construindo algo  
- quer algo **simples**, sem configuração de engenheiro  

…o INVOS foi feito pra você.

Você **não** precisa saber programar.  
Você precisa: baixar/abrir uma pasta e **responder perguntas em português**.

---

## O problema (do jeito que acontece)

1. Você abre o terminal ou o Cursor.  
2. Chama a IA.  
3. Ela pergunta: *“Em que posso ajudar?”*  
4. Você reexplica o negócio, o cliente, o que decidiu ontem.  
5. Amanhã: **tudo de novo.**

Isso não é “usar mal a IA”. É a IA **sem memória** do seu contexto.

---

## O que muda com o INVOS

| Antes | Depois |
|--------|--------|
| Toda sessão começa do zero | A sessão começa já te conhecendo |
| Você repete o mesmo briefing | Está gravado em arquivos na pasta `memoria/` |
| Troca de ferramenta = recomeçar | **Mesma pasta** no Claude, Cursor, Grok… |
| “O que eu estava fazendo?” | O arquivo **ativo** diz o foco de hoje |

**Promessa real (v1):** gestão de contexto — o que você faz **hoje**, o que vem **depois**, e o que a **próxima sessão** precisa saber. Em qualquer harness.

---

## Como funciona (3 passos)

```
1. Você abre a pasta do INVOS no seu agente
2. Na primeira vez: entrevista curta (uma pergunta por vez)
3. Nas próximas vezes: a IA já leu sua memória e segue o trabalho
```

As respostas viram arquivos de texto na pasta `memoria/` (empresa, perfil, projetos, o que está em andamento).  
Isso **viaja com você**: notebook, outro PC, outro agente — se a pasta (ou o GitHub) for o mesmo.

---

## Site e compra

| | |
|--|--|
| **Página de vendas** | https://inovadigitalid.com/invos |
| **Preço** | R$97 (pagamento único na Hotmart) |
| **O que você recebe** | Acesso a este repositório (e/ou ZIP) com memória + skills + bônus |
| **Garantia** | 7 dias (conforme a página) |

Já comprou? Use o e-mail da Hotmart / área do aluno e o link de acesso ao repo.  
Depois siga o **Começar do zero** abaixo.

---

## Começar do zero (passo a passo de leigo)

### O que você precisa ter

1. **Um agente de IA** que abre pastas de projeto, por exemplo:
   - [Cursor](https://cursor.com)  
   - Claude Code (no terminal)  
   - Codex, OpenCode, Grok, etc.  
2. Este kit (ZIP da Hotmart **ou** clone deste GitHub, depois da compra).  
3. Uns **10 minutos** na primeira vez.

Não precisa instalar Node, Docker nem “deploy”. Zero dependências mágicas.

### Opção A — veio o ZIP

No terminal (ou extraindo pelo Finder):

```bash
unzip invos-kit.zip -d meu-invos
cd meu-invos
```

Depois abra a pasta `meu-invos` no seu agente (no Cursor: *Open Folder*).

### Opção B — veio o GitHub (recomendado se quiser acessar de qualquer lugar)

```bash
git clone https://github.com/felipenalves/invos.git meu-invos
cd meu-invos
```

(Use a URL que a Hotmart / o convite te passou, se for diferente.)

Abra a pasta `meu-invos` no agente.

### Primeira sessão (entrevista)

1. Abra o chat do agente **dentro dessa pasta**.  
2. Se ele não começar sozinho, diga:  
   **“Roda o onboard do INVOS”** ou **“Me entrevista pra configurar a memória”**.  
3. Responda **uma pergunta por vez** (nome, o que você faz, projeto atual…).  
4. No fim ele grava os arquivos em `memoria/` e confirma o que foi salvo.

Não precisa editar arquivo na mão se o agente gravar certo.

### Segunda sessão (a prova de que funcionou)

1. Feche o chat / abra de novo **na mesma pasta**.  
2. Pergunte:  
   **“Quem eu sou e no que estou trabalhando?”**  
3. **Passou** se ele responder com seu nome, negócio e projeto **sem** recomeçar a entrevista.

Se falhar:

```bash
bash scripts/validar.sh --pos-onboard
```

Se o comando acusar erro, a memória ainda está incompleta — peça de novo o onboard.

---

## Prova em 3 minutos (checklist)

1. Pasta do INVOS aberta no agente  
2. Entrevista feita  
3. Nova sessão  
4. Pergunta: *Quem eu sou e no que estou trabalhando?*  
5. Resposta vem da memória, sem re-entrevista  

Isso é o “wow” do produto. O resto é bônus.

---

## O que tem dentro (sem jargão demais)

| Pasta / arquivo | Em português claro |
|-----------------|-------------------|
| `memoria/` | **Seu cérebro digital** — quem você é, empresa, projetos, decisões, o que está rolando agora |
| `AGENTS.md` | Regras que **qualquer** agente lê ao abrir o projeto |
| `.agents/skills/` | “Modos” do agente: começar sessão, terminar, gravar decisão, entrevista inicial… |
| `scripts/validar.sh` | Teste automático se o kit está ok |
| `SECURITY.md` | O que **nunca** colocar no Git (senhas, chaves de API) |
| `.agents/squads/` | **Bônus** — times de especialistas (estratégia, marca, ofertas). Não precisa no dia 1 |

### Core (é o produto)

- Memória em `memoria/`  
- Loop de sessão: começar → trabalhar → gravar o que importou → fechar  
- Onboard na primeira vez  

### Bônus (já vem no pacote; use depois)

Skills extras (humanizer, audit, notion…) e 3 squads (advisory-board, brand, hormozi).  
**Não** são obrigatórios pro agente te conhecer.

---

## Trabalhar de qualquer lugar

1. Suas informações ficam **nos arquivos** deste repositório.  
2. Se você usa GitHub: `git push` no fim do dia no seu notebook → `git pull` no outro PC.  
3. Abre a **mesma pasta** em outro agente → ele lê a mesma memória.

Por isso o INVOS é um repositório, não um login em site.

---

## O que o INVOS **não** é

- Não é curso com aulas  
- Não é substituto de mentoria  
- Não é app na nuvem com conta  
- Não é “instalar 50 ferramentas”  
- Não é um monstro cheio de agente pra configurar no dia 1  

v1 = **memória e contexto**.  
No futuro (v2) entram mais agentes/fluxos — sem abandonar a simplicidade.

---

## Comandos úteis (quando quiser)

```bash
# Kit com estrutura ok? (template / ship)
bash scripts/validar.sh

# Depois do onboard: memória preenchida de verdade?
bash scripts/validar.sh --pos-onboard
```

---

## Segurança (leia 30 segundos)

- **Não** coloque senha, token ou chave de API nos arquivos da pasta `memoria/` nem no Git.  
- Use `.env` local se precisar (já está no ignore).  
- Detalhes: [SECURITY.md](./SECURITY.md)

---

## Dúvidas rápidas

**Preciso saber programar?**  
Não. Precisa abrir a pasta e conversar com o agente.

**Funciona só no Claude?**  
Não. Qualquer agente que leia a pasta do projeto (Cursor, Claude Code, Codex, Grok, OpenCode…).

**E se eu errar na entrevista?**  
Peça pro agente atualizar o arquivo certo em `memoria/` (ex.: “muda minha oferta principal para…”).

**Onde compro / vejo a oferta completa?**  
https://inovadigitalid.com/invos

---

## Licença

MIT — use e adapte no seu fluxo.

---

*Produto da INV · [inovadigitalid.com/invos](https://inovadigitalid.com/invos)*
