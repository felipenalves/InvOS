# Clientes

Pasta do **prestador de serviço**: um cliente (ou lead quente) = uma subpasta.

Assim o agente não mistura o João com a Maria, e a skill **proposta** usa o contexto certo.

## Criar cliente novo

1. Copie a pasta `_template` e renomeie (slug simples, sem espaço):

```bash
cp -R clientes/_template clientes/nome-do-cliente
```

2. Preencha `perfil.md` (e o resto quando souber).
3. No agente, diga: **“Cliente atual: nome-do-cliente”** ou **“Abre o cliente nome-do-cliente”**.

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
