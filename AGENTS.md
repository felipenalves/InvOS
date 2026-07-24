# AGENTS.md — INVOS (sistema operacional do negócio)

Regras de operação **multi-harness** (Claude Code, Codex, Cursor, Grok, OpenCode, Gemini…).  
`CLAUDE.md` só aponta pra cá (`@AGENTS.md`). Não invente regras fora deste arquivo + `_memoria/`.

Esse arquivo é editável. O `/instalar` **complementa o final** com regras do perfil — não apaga o boot.

---

## Contexto do negócio

No **início de toda conversa**, ler (quando existirem e estiverem preenchidos):

1. `_memoria/empresa.md` — quem é o usuário, o que faz, como funciona o negócio  
2. `_memoria/preferencias.md` — tom de voz, estilo de escrita, o que evitar  
3. `_memoria/estrategia.md` — foco atual, prioridades, prazos  

Usar como base pra qualquer resposta ou decisão. Ao priorizar, considerar o foco em `estrategia.md`.

Pra tarefa visual (carrossel, post, landing): consultar `marca/design-guide.md`.

**Não** listar o que foi lido. Só usar o contexto.

### Primeira vez

Se a memória ainda for placeholder / vazia → skill **`instalar`** antes de qualquer outra coisa.

---

## Fluxo de trabalho

1. Antes de executar: se existir skill relevante em **`.agents/skills/`** (canônico), **seguir a skill**.  
   Claude Code também vê as mesmas skills via symlink em `.claude/skills/`.
2. Se não houver skill, executar a tarefa.  
3. Se a tarefa for **repetível**, perguntar:  
   > "Isso pode virar uma skill pra próxima vez. Quer que eu crie?"  
   → `mapear-rotinas` se sim.

Não perguntar em tarefa pontual ou pergunta simples.

---

## Aprender com correções

Correção permanente (“sempre…”, “não faça…”, “prefiro…”, “da próxima vez…”):

> "Quer que eu salve isso pra não precisar repetir?"

| Tipo | Onde |
|------|------|
| Negócio (clientes, serviços, mercado) | `_memoria/empresa.md` |
| Preferências / tom | `_memoria/preferencias.md` |
| Prioridades / foco | `_memoria/estrategia.md` |
| Regra de comportamento do workspace | **este** `AGENTS.md` (final do arquivo, seção do perfil) |

Uma linha nova. Não reformatar o arquivo inteiro. Confirmar a linha salva.

Só perguntar quando a info tiver valor duradouro (não em correção óbvia de contexto).

---

## Manter contexto atualizado

Ao terminar tarefa que mudou algo relevante (cliente, foco, processo, skill, estrutura):

> "Isso mudou algo no teu contexto. Quer que eu atualize a memória?"

| Mudança | Onde |
|---------|------|
| Cliente, serviço, equipe, ferramenta | `_memoria/empresa.md` |
| Prioridade / foco | `_memoria/estrategia.md` |
| Tom / estilo | `_memoria/preferencias.md` |
| Pasta / regra de organização / skill | `AGENTS.md` |
| Visual | `marca/design-guide.md` |

Mostrar o diff antes de salvar. **Não** perguntar em tarefa pontual sem impacto.

Dica: `/atualizar` pra varredura completa.

---

## Criação de skills

Quando o usuário pedir skill nova:

1. Ver se já existe skill em `.agents/skills/`  
2. Local do projeto → `.agents/skills/<nome>/SKILL.md` + symlink em `.claude/skills/<nome>` apontando pra ela
3. Calibrar com `_memoria/empresa.md` e `preferencias.md`  
4. Arquivos de apoio dentro da pasta da skill  

---

## Squads (opcional — times multi-agente)

Pasta: **`.agents/squads/`** (mapa: `README.md`).

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
- Mudança mínima que resolve.

---

## Perfil do negócio

*(Preenchido / adaptado pelo `/instalar` a partir de `templates/perfis/`. Não apague o boot acima.)*
