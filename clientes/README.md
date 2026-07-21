# Clientes

Pasta do **prestador de serviço**: um cliente (ou lead quente) = uma subpasta.

Assim o agente não mistura o João com a Maria, e a skill **proposta** usa o contexto certo.

## Criar cliente novo

### Instrução pro agente (preferido)

1. Defina slug: minúsculo, hífen, sem acento (`clinica-vida`, `ana-studio`).  
2. **Duplique** o template — **nunca** preencha `_template` com dados reais:

```bash
cp -R clientes/_template "clientes/<slug>"
```

3. Escreva os dados em `clientes/<slug>/perfil.md` (e contexto se o user der).  
4. Confirme o path.  
5. Setup geral do kit: ver `COMECE-AQUI.md` (passo 4).

### Na mão (humano)

```bash
cp -R clientes/_template clientes/nome-do-cliente
# edite clientes/nome-do-cliente/perfil.md
```

Depois no chat: **“Cliente atual: nome-do-cliente”**.

## Estrutura de cada cliente

| Arquivo | Pra quê |
|---------|---------|
| `perfil.md` | Quem é, o que compra, status, contato |
| `contexto.md` | Histórico curto, combinados, decisões |
| `entregas.md` | O que já saiu / prazos |
| `propostas/` | Propostas geradas (a skill salva aqui) |

## O que NÃO colocar aqui

- Senha, token, cartão, dado bancário completo  
- Toda a vida do cliente (só o que mexe no serviço **agora**)  
- CRM completo com 20 campos — se não usa, não inventa  

## Frases úteis pro agente

- “Cria o cliente Ana Studio a partir do template: designer, lead, quer site.”  
- “O que importa hoje no cliente X?”  
- “Gera proposta pro cliente X com este brief: …”  
