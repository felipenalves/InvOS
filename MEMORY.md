# MEMORY

> Este repositório usa `memoria/` como sistema de contexto universal.

| Arquivo | O que contém |
|---------|-------------|
| `memoria/perfil.md` | Sua essência, mentalidade, framework de criação |
| `memoria/empresa.md` | Visão, modelo de negócio, oferta |
| `memoria/projetos.md` | Projetos ativos e status |
| `memoria/decisoes.md` | Decisões organizadas por tópico |
| `memoria/insights.md` | Ideias e epifanias estratégicas |
| `memoria/ativo.md` | Sessão atual — o que está rolando agora |
| `memoria/regras/` | Lições aprendidas (um arquivo por regra) |
| `memoria/historico/` | Sessões anteriores arquivadas |
| `clientes/` | Um cliente por pasta (prestador) — ver `clientes/README.md` |
| `clientes/<slug>/propostas/` | Propostas geradas pela skill `proposta` |

## Boot sequence

Ver `AGENTS.md` → Required Context Order + rituais do prestador.

No início de sessão: skill `session-start` (memória).  
No dia a dia: “o que importa hoje?”, pasta do cliente, skill `proposta`.
