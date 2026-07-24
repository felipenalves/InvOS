# Entrega INVOS quando o e-mail da Hotmart está engessado

## Problema
Hotmart não deixa editar o e-mail de entrega → comprador não recebe `npx invos`.

## Solução (oficial)
**Hotmart só cobra.** Entrega = webhook → **Resend** (e-mail nosso) + página de acesso.

```
PURCHASE_APPROVED
  → https://inovadigitalid.com/api/hotmart-invos
  → Resend envia e-mail com npx invos@latest init
```

## Env na Vercel (projeto inv.ai)

| Var | Obrigatória |
|-----|-------------|
| `HOTMART_HOTTOK` | Sim (já) |
| `RESEND_API_KEY` | **Sim** (entrega) |
| `RESEND_FROM` | Sim — domínio verificado no Resend, ex. `INVOS <onboarding@inovadigitalid.com>` |
| `INVOS_ACCESS_URL` | Opcional — default `https://inovadigitalid.com/invos-acesso` |

## Alternativas na Hotmart (sem editar e-mail)

1. **URL de redirecionamento pós-compra** (se existir no produto) → `https://inovadigitalid.com/invos-acesso`
2. **Arquivo / link de conteúdo** no produto → link da mesma página
3. **Área de membros** → post fixo com o comando `npx`

## Teste

1. Hotmart → histórico do webhook → reenviar último evento  
2. Ou compra teste  
3. Comprador recebe e-mail do Resend (não o genérico Hotmart)
