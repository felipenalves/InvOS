---
task: "Validate and Publish"
order: 1
input:
  - slides rendered or HTML em output/slides/
  - carousel-draft.md (legenda)
  - review-final.md se existir
output:
  - publish-handoff.md / publish-report.md
  - conteudo/carrosseis/$SLUG/ pack final
---

# Validate and Publish (INVOS)

Fecha o pack **pronto pro dono postar em minutos**. Só tenta API se existir e o user pedir.

## Process

1. **Confirmar aprovação**  
   - Copy e imagens aprovados nos checkpoints (ou modo turbo documentado).  
   - Se review existe e é REJECT → corrigir antes.

2. **Validar arquivos**  
   - 2–10 slides  
   - Preferir PNG 1080×1350 (ou 1080×1440) em `rendered/`  
   - Se só HTML: handoff “abrir HTML / print” ou rodar render se Chrome disponível  
   - Legenda &lt; 2200 chars; hook forte nos primeiros 125 chars  

3. **Montar pack em `conteudo/carrosseis/$SLUG/`**  
   - caption.txt  
   - PNGs numerados  
   - publish-handoff.md com checklist de 3 linhas  

4. **Publicação**  
   - **Default:** não auto-postar. Entregar pack +  

```text
⚠️ Sua vez (2 min): Instagram → carrossel → subir slides na ordem → colar caption.txt
```

   - **Se** user disser “publica” **e** houver integração real (Composio/skill IG) conectada: seguir protocolo da integração; senão reportar falha honesta e manter handoff.  
   - **Nunca** inventar URL de post.

5. **Atualizar INVOS**  
   - `conteudo/_fila.md` → status  
   - Opcional: linha em squad `_memory/memories.md`  

## confirmation_gate

Não executar publish em API sem frase explícita do user (“publica”, “pode postar”, “confirma publicação”).
