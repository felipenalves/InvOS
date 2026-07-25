# AGENTS.md — INVOS (sistema operacional do negócio)

Regras de operação **multi-harness** (Claude Code, Codex, Cursor, Grok, OpenCode, Gemini…).  
`CLAUDE.md` só aponta pra cá (`@AGENTS.md`). Não invente regras fora deste arquivo + `_memoria/`.

Esse arquivo é **editável**. O `/instalar` **complementa o final** com regras do perfil — **não apaga** o boot abaixo.

---

## Contexto do negócio

No **início de toda conversa**, ler (quando existirem e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio  
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar  
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos  

Usar como base pra **qualquer** resposta ou decisão. Ao sugerir prioridades, formatos ou abordagens, considerar o foco atual em **`estrategia.md`**.

Pra **qualquer** tarefa visual (carrossel, post, landing): consultar **`marca/design-guide.md`** como referência de estilo.

**Não** listar o que foi lido nem confirmar a leitura. Só usar o contexto.

### Primeira vez

Se a memória ainda for placeholder / vazia → skill **`instalar`** **antes** de qualquer outra coisa.

Sessão cheia (opcional): skill **`abrir`** se existir e o user quiser boot ritual — o mínimo acima já basta.

---

## Fluxo de trabalho

1. Antes de executar: se existir skill relevante em **`.agents/skills/`** (canônico), **seguir a skill**.  
   Claude Code também vê as mesmas skills via symlink em `.claude/skills/`.  
2. Se não houver skill, executar a tarefa normalmente.  
3. Se a tarefa **não tinha skill** mas parece **repetível** (o usuário provavelmente vai pedir de novo):

> "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"

→ skill **`mapear-rotinas`** se sim.

Não perguntar em tarefa pontual ou pergunta simples. Só quando o padrão de repetição for **claro**.

---

## Aprender com correções

Quando o usuário corrigir algo, melhorar uma resposta ou der instrução que parece **permanente**  
(frases como “na verdade é assim”, “não faça mais isso”, “prefiro assim”, “sempre que…”, “evita…”, “da próxima vez…”):

> "Quer que eu salve isso pra não precisar repetir?"

Se sim, identificar onde faz mais sentido:

| Tipo | Onde |
|------|------|
| Negócio (clientes, serviços, mercado) | `_memoria/empresa.md` |
| Preferências / tom / o que evitar | `_memoria/preferencias.md` |
| Prioridades / foco / prazos | `_memoria/estrategia.md` |
| Regra de comportamento do workspace | **este** `AGENTS.md` (final do arquivo, seção do perfil) |

Salvar com **uma linha nova** clara. **Não** reformatar o arquivo inteiro.  
Confirmar **mostrando a linha** adicionada.

Não perguntar se a correção for óbvia de contexto imediato (ex.: “o arquivo se chama X”).  
Só quando a informação tiver valor **duradouro**.

---

## Manter contexto atualizado

Ao terminar uma tarefa que **mudou** algo relevante (cliente novo, skill nova, mudança de foco, processo novo, ferramenta instalada, estrutura alterada):

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

| Mudança | Onde |
|---------|------|
| Cliente, serviço, ferramenta, equipe | `_memoria/empresa.md` |
| Prioridade ou foco | `_memoria/estrategia.md` |
| Tom ou estilo | `_memoria/preferencias.md` |
| Pasta / regra de organização / skill | `AGENTS.md` e/ou skill em `.agents/skills/` |
| Visual (cores, fontes, logo) | `marca/design-guide.md` |

Mostrar o que vai mudar **antes** de salvar. Só a linha relevante.

**Quando NÃO perguntar:**
- Tarefas pontuais sem impacto (email avulso, um post)  
- Perguntas simples ou conversas sem ação  
- Mudanças já salvas no bloco “Aprender com correções”

**Dica:** `/atualizar` pra varredura completa quando houver dúvida.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Ver se já existe em `.agents/skills/` (e templates em `templates/` se houver)  
2. Local do projeto → `.agents/skills/<nome>/SKILL.md` + symlink em `.claude/skills/<nome>`  
3. Calibrar com `_memoria/empresa.md` e `_memoria/preferencias.md`  
4. Arquivos de apoio **dentro** da pasta da skill  
5. Craft claro e previsível (description + passos; sem fábrica de eval desnecessária)

---

## Squads (opcional — times multi-agente)

Pasta: **`.agents/squads/`** (mapa: `README.md` se existir).

| Squad | Uso |
|-------|-----|
| `advisory-board` | Conselho pra decisão / direção |
| `brand` | Posicionamento e identidade |
| `hormozi-squad` | Oferta, leads, growth |

Carrossel IG = skill **`/carrossel`**. Não use advisory/hormozi pra “fazer o post”.

---

## Comportamento

- `_memoria/` e dados do negócio são **reais**, não demo.  
- Não commit/push sozinho — skill **`salvar`** quando o user pedir.  
- Não vazar secrets.  
- Mudança **mínima** que resolve.

---

## Perfil do negócio

*(Preenchido / adaptado pelo `/instalar` a partir de `templates/perfis/`. Não apague o boot acima.)*
