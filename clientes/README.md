# Clientes

Pasta do **prestador de serviço**: um cliente (ou lead quente) = uma subpasta.

Assim o agente não mistura o João com a Maria, e a skill **proposta** usa o contexto certo.

## Índice (boot)

| Arquivo | Pra quê |
|---------|---------|
| `clientes/_index.md` | Pipeline: status, **valor**, **pagto**, próximo, dono, desde. Boot. |
| `clientes/<slug>/` | Ficha + suporte + propostas + arquivos daquele cliente. |

Não coloque HTML/PDF/imagem de cliente na raiz — só em `clientes/<slug>/arquivos/`.  
Logo **sua** (prestador) → `marca/assets/`, não aqui.

## Criar cliente novo

### Instrução pro agente (preferido)

1. Defina slug: minúsculo, hífen, sem acento (`clinica-vida`, `ana-studio`).  
2. **Duplique** o template — **nunca** preencha `_template` com dados reais:

```bash
cp -R clientes/_template "clientes/<slug>"
```

3. Escreva os dados em `clientes/<slug>/perfil.md` (e contexto se o user der).  
4. **Adicione 1 linha** em `clientes/_index.md` (status, próximo, dono, desde).  
5. Confirme o path.  
6. Setup geral do kit: ver `COMECE-AQUI.md` (passo 4).

### Na mão (humano)

```bash
cp -R clientes/_template clientes/nome-do-cliente
# edite clientes/nome-do-cliente/perfil.md
# edite clientes/_index.md — uma linha no pipeline
```

Depois no chat: **“Cliente atual: nome-do-cliente”**.

## Estrutura de cada cliente

| Path | Pra quê |
|------|---------|
| `perfil.md` | Quem é, o que compra, status, **próximo passo + dono** |
| `contexto.md` | Histórico curto, combinados, decisões |
| `entregas.md` | Log do que saiu / prazos (tabela) |
| `propostas/` | **HTML pronto pra enviar** (`YYYY-MM-DD.html`) + MD opcional |
| `arquivos/` | PDF exportado, imagens, anexos **desse** cliente |

## Dono da task

- **agente** — redigir proposta, atualizar ficha, gerar arquivo em `arquivos/`, organizar contexto  
- **humano** — enviar DM de verdade, ligar, assinar, cobrar, decidir preço final  

Toda linha do `_index` e do `ativo` precisa de dono. Sem dono = inválida.

## O que NÃO colocar aqui

- Senha, token, cartão, dado bancário completo  
- Toda a vida do cliente (só o que mexe no serviço **agora**)  
- CRM completo com 20 campos — se não usa, não inventa  
- Entregas de um cliente misturadas na pasta de outro  

## Frases úteis pro agente

- “Cria o cliente Ana Studio a partir do template: designer, lead, quer site.”  
- “O que importa hoje no cliente X?”  
- “Gera proposta pro cliente X com este brief: …”  
- “Salva esse PDF na pasta do cliente X.”  
