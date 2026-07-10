---
name: session-end
description: Archive everything from the session. Write history, update ativo.md, update projetos.md, decisoes.md, save new rules. Run when user says "sessão encerrada", "acabou", "fim", or at session-start auto-archive.
---

# Session End

Arquiva a sessão atual no histórico e prepara o sistema para a próxima. Universal para qualquer harness.

## Sequence

### 1. Coletar estado completo da sessão

Resgate da memória recente:

- **Foco principal:** qual era o objetivo da sessão
- **O que foi feito:** tarefas concluídas, decisões, arquivos alterados
- **Links importantes:** URLs, PRs, issues, documentos criados
- **O que ficou pendente:** o que não deu tempo
- **Regras aprendidas:** lições que devem virar regra permanente
- **Mudanças de projeto:** status alterado?
- **Contexto restante:** informação que a próxima sessão precisa saber

### 2. Verificar trabalho não commitado

Se o repositório tem alterações não commitadas, avise e pergunte se quer commitar.

### 3. Salvar histórico

```bash
cat > memoria/historico/$(date +%Y-%m-%d).md << 'EOF'
# $(date +%Y-%m-%d)

## Foco
[objetivo principal]

## Feito
- [lista do que foi concluído, com links se houver]

## Pendente
- [lista do que ficou]

## Decisões
- [decisões importantes]

## Regras novas
- [se houver]

## Links
- [PRs, deploys, docs, issues]

## Projetos afetados
- [quais projetos foram alterados]
EOF
```

### 4. Atualizar `memoria/decisoes.md`

Se decisões foram tomadas, adicione linhas na tabela correta:

```
| [Decisão] | $(date +%d-%m) | [Contexto] |
```

### 5. Atualizar `memoria/projetos.md`

Se status de projeto mudou, atualize a linha relevante.

### 6. Atualizar `memoria/ativo.md`

Substitua o conteúdo com estado limpo.

### 7. Registrar regras novas

Se lição foi aprendida:

```bash
cat > memoria/regras/$(date +%Y%m%d)-nome-da-regra.md << 'EOF'
# [Nome]

**Gatilho:** [quando se aplica]
**Criada em:** $(date +%Y-%m-%d)
**Origem:** sessão

## Regra

[descrição]

## Por quê

[contexto]
EOF
```

### 8. Perguntar se algo ficou de fora

"Tem algo que eu não capturei que você quer registrar?"

### 9. Verificar integridade

```bash
ls memoria/empresa.md memoria/projetos.md memoria/ativo.md > /dev/null 2>&1 || echo "FALHA"
ls memoria/regras/ > /dev/null 2>&1 || echo "FALHA: regras vazias"
```

## Output

Sessão arquivada. Ativo limpo. Projetos atualizados. Regras salvas.
