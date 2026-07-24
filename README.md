# INVOS

> O sistema operacional do seu negócio — memória + skills, no Claude Code.

Em poucos minutos o agente deixa de te tratar como estranho: sabe quem você é,
como fala, o que importa essa semana, e tem comandos prontos pra operação e
marketing.

---

## Ligar o sistema

### Pelo Claude (mais rápido)

Abre o Claude Code em qualquer pasta e cola:

```
Clona o repositório do INVOS na pasta atual, entra nela e roda o /instalar.
```

(Quando o `npx invos` estiver no ar, o fluxo vira um comando só — install + update.)

### Pelo terminal (recomendado)

```bash
npx invos@latest init --name meu-negocio
cd meu-negocio
# abre no Claude / Cursor / Grok e roda:
/instalar
```

Atualizar skills sem perder memória:

```bash
npx invos@latest update
```

(CLI em `packages/cli` — kit bundled no npm, sem token.)

O `/instalar` roda **uma vez**. Entrevista curta, monta a memória, escolhe o
perfil (solopreneur, freela, agência, empresa). Depois é uso diário.

Quando terminar, renomeia a pasta pro nome do **teu** negócio — não fica
"invos" pra sempre.

---

## O que é o núcleo

| Comando | Função |
|---------|--------|
| `/abrir` | Carrega memória no início da sessão |
| `/salvar` | Commit + push no GitHub |
| `/atualizar` | Alinha arquivos de contexto com o que mudou |
| `/novo-projeto` | Pasta isolada por cliente/iniciativa |
| `/mapear-rotinas` | O que você repete vira skill |

**Conteúdo / marketing** (quando fizer sentido pro teu perfil):  
`/carrossel` · `/publicar-tema` · `/seo` · `/responder-avaliacoes` · `/aprovar-post`

**Ads e produção:**  
`/anuncio-google` · `/relatorio-ads` · `/analisar-dados` · `/email-profissional`

Estrutura de pastas e ênfase (ex.: pasta de clientes) **depende do perfil**
que você escolhe no `/instalar` — não é um monólito único pra todo mundo.

---

## Como o INVOS pensa

- **`AGENTS.md`** — regras do agente (multi-harness). Fonte da verdade.  
- **`CLAUDE.md`** — só `@AGENTS.md` (Claude Code lê e segue pro SOT).  
- **`_memoria/`** — cérebro: empresa, voz, foco da semana. Poucos arquivos.  
- **`marca/`** — rosto: cores, fonte, logo; skills visuais leem daqui.  
- **`marketing/` · `saidas/` · `scripts/`** — o que o sistema produz.  
- **`.agents/skills/`** — skills canônicas (qualquer harness).  
- **`.claude/skills/`** — symlinks → `.agents/skills/` (só pra Claude Code achar).  
- **`.agents/squads/`** — times multi-agente (brand, advisory, hormozi). Carrossel = skill.

O sistema não substitui você. Guarda contexto e fecha loops que hoje ficam
abertos (faz → esquece → reexplica).

---

## Atualizações

INVOS evolui como app: skill nova, correção, melhoria de entrevista.

Quando o CLI estiver publicado, o fluxo da comunidade é:

```
npx invos update
```

Isso puxa o que é **kit** (skills, templates, docs de versão) e **não**
sobrescreve a tua memória real (`_memoria/`, clientes, marca).

Changelog / o que mudou em cada versão: pasta ou página de release
(comunidade + `CHANGELOG` no pack) — anuncia lá, roda o update.

---

## Licença

Uso autorizado pra quem comprou. Ver `LICENSE`.  
Teu negócio, teus dados, tuas skills personalizadas: teus.  
Revender o kit como produto: não.

---

## Suporte

Documente.club / canal da compra · produto da INV (Felipe Alves).
