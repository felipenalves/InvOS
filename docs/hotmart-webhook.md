# Hotmart Webhook — INVOS

> Endpoint que recebe eventos do Hotmart (2.0.0) após compra do INVOS.

## URL canônica

```
https://inovadigitalid.com/api/hotmart-invos
```

## Como configurar no Hotmart

1. Acesse o **formulário do Hotmart** do produto INVOS
2. Aba **Webhook**
3. **URL:** `https://inovadigitalid.com/api/hotmart-invos`
4. **Versão:** 2.0.0
5. **Hottok:** o valor da env `HOTMART_HOTTOK` (opcional — gera 503 sem ele em produção)
6. **Eventos marcados:**
   - ✅ PURCHASE_APPROVED
   - ✅ COMPLETE (se houver)
   - ✅ REFUNDED
   - ✅ CHARGEBACK

## Eventos tratados

| Evento | Ação |
|--------|------|
| `PURCHASE_APPROVED` | Extrai buyer email/name, envia e-mail com instruções de instalação via Resend |
| `COMPLETE` | Mesmo que PURCHASE_APPROVED |
| `REFUNDED` | Log com tag `revoke` |
| `CHARGEBACK` | Log com tag `revoke` |

## Validação

- Header `X-Hottok` **ou** query param `hottok` — se `HOTMART_HOTTOK` estiver setado, o valor deve bater
- Se `HOTMART_HOTTOK` estiver vazio em produção (`VERCEL_ENV=production`): **503**
- Se vazio em dev: aceita com warning implícito

## Env vars necessárias

| Var | Obrigatória | Descrição |
|-----|-------------|-----------|
| `HOTMART_HOTTOK` | Sim (prod) | Token de validação do Hotmart form |
| `RESEND_API_KEY` | Não | Se presente, envia e-mail de onboarding ao comprador |
| `RESEND_FROM` | Não | Remetente do e-mail (default: INVOS <onboarding@inovadigitalid.com>) |
| `INVOS_GITHUB_URL` | Não | Link do repositório no e-mail (default: github.com/felipenalves/invos) |

## Body esperado (Hotmart 2.0.0)

```json
{
  "id": "evt_abc123",
  "event": "PURCHASE_APPROVED",
  "data": {
    "buyer": { "email": "comprador@email.com", "name": "João" },
    "product": { "id": 12345, "name": "INVOS — Business Memory for AI Agents" },
    "purchase": { "status": "approved", "transaction": "tx_abc" }
  }
}
```

## Response

```json
{ "ok": true, "event": "PURCHASE_APPROVED" }
```

Sempre 200 (a menos que validação falhe). Hotmart espera resposta rápida.

## Logs

Payload é logado com email/name mascarados (`***@***`). Eventos financeiros (REFUNDED/CHARGEBACK) são logados com tag `revoke`.

## Teste local

```bash
curl -X POST http://localhost:3000/api/hotmart-invos \
  -H "Content-Type: application/json" \
  -H "X-Hottok: meu-hottok-dev" \
  -d '{
    "id": "test_1",
    "event": "PURCHASE_APPROVED",
    "data": {
      "buyer": { "email": "teste@teste.com", "name": "Teste" },
      "product": { "id": 999, "name": "INVOS Dev" }
    }
  }'
```
