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
- **O que ficou pendente:** o que não deu tempo (com **dono** e **desde**)
- **Regras aprendidas:** lições que devem virar regra permanente
- **Mudanças de projeto / cliente:** status alterado? `_index` atualizado?
- **Contexto restante:** informação que a próxima sessão precisa saber

### 2. Verificar trabalho não commitado

Se o repositório tem alterações não commitadas, avise e pergunte se quer commitar.

### 3. Salvar histórico

Arquivo **só** `memoria/historico/YYYY-MM-DD.md` (data real ISO).

**Mesmo dia, 2º+ “fim”:** se o arquivo do dia **já existe**, **não sobrescreva**.  
Append uma seção `## Sessão 2 (HH:MM)` (ou 3…) com Feito/Pendente da sessão atual.  
Só crie o arquivo do zero se ainda não existir.

```bash
# pseudo: se existe → append; senão → cria com o bloco abaixo
```

Conteúdo de **nova** sessão do dia (ou 1ª do dia):

```markdown
# YYYY-MM-DD

## Foco
[objetivo principal]

## Feito
- [lista do que foi concluído, com links se houver]

## Pendente
- [task · dono: agente|humano · desde: YYYY-MM-DD · done quando: …]

## Decisões
- [decisões importantes]

## Regras novas
- [se houver]

## Links
- [PRs, deploys, docs, issues]

## Projetos / clientes afetados
- [quais]
```

### 4. Atualizar `memoria/decisoes.md`

Se decisões foram tomadas, adicione linhas na tabela correta:

```
| [Decisão] | DD-MM | [Contexto] |
```

### 5. Atualizar `memoria/projetos.md` e `clientes/_index.md`

Se status de projeto ou cliente mudou, atualize a linha relevante (não reescreva o arquivo inteiro).

**Obrigatório — alinhar “Próximo” com a verdade:**
- Se `_index` tem `pagto=pago` e o projeto ainda diz “enviar proposta” / “fechar deal” → reescreva **Próximo** para a entrega (ex: wire/landing/kickoff).  
- Se deal perdeu / pausou → espelhe no bloco do projeto.

### 6. Atualizar `memoria/ativo.md` (sempre reescrever — não deixar lixo da sessão)

Substitua o arquivo com estado **da próxima abertura**. Regras:

1. **Data** = dia real ISO de **hoje** (quando roda o end).  
2. **Sessão anterior** = data de hoje + resumo de 1 linha do que fechou (nunca “nenhuma” se houve trabalho).  
3. **Foco / Missão** = o que falta **amanhã**, não “onboard” se o onboard já terminou.  
4. **Proibido** deixar: `primeira sessão`, `PREENCHA`, missão “Configuração inicial do kit” se memória já está preenchida.  
5. Filas: só o que **ainda está aberto**; itens done **saem**. Abertas **migram** com o mesmo `desde`.  
6. **Clientes (ponte):** slug em foco + 1 linha do `_index` (status/pagto).

```markdown
# Ativo

> Sessão atual. Fila com dono. Sem task órfã.

## Contexto da sessão

- **Data:** YYYY-MM-DD
- **Sessão anterior:** YYYY-MM-DD — [resumo 1 linha do que fechou]
- **Foco:** [próximo trabalho real do negócio]
- **Missão do dia:** [1 frase acionável]
- **Done quando:** [critério binário]
- **Dono da missão:** agente | humano

## Fila agente

- [ ] … · desde: YYYY-MM-DD · done quando: …

## Fila humana

- [ ] … · desde: YYYY-MM-DD · done quando: …

## Em andamento

[nada — sessão anterior arquivada]

## Clientes (ponte)

- Índice: clientes/_index.md
- Cliente em foco: [slug ou nenhum]
- Estado: [ex: clinica-x pago · próximo wire]

## Regras ativas

[herdadas + novas]
```

### 7. Registrar regras novas

Se lição foi aprendida:

```bash
cat > memoria/regras/$(date +%Y%m%d)-nome-da-regra.md << 'EOF'
# [Nome]

**Gatilho:** [quando se aplica]
**Criada em:** YYYY-MM-DD
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
ls memoria/empresa.md memoria/projetos.md memoria/ativo.md clientes/_index.md > /dev/null 2>&1 || echo "FALHA"
ls memoria/regras/ > /dev/null 2>&1 || echo "FALHA: regras vazias"
```

## Output

Sessão arquivada. Filas abertas migradas. Projetos/clientes atualizados. Regras salvas.
