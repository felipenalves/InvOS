# Lab — Testar CLI como comprador

> Sandbox isolado pra testar o fluxo `invos init/install/update/doctor`.

## Sandbox

```
/Users/felipealves/FelipeOS/projetos/Felipe.aiOS/projetos/invos-TEST
```

## Rodar

```bash
bash /Users/felipealves/FelipeOS/projetos/Felipe.aiOS/projetos/invos-TEST/scripts/lab-user-flow.sh
```

O script:

1. Cria `user-home/` via `invos init`
2. Roda `invos doctor` (valida 6/6 files, 7/7 dirs)
3. Simula dados do usuário (USER MARKER)
4. Roda `invos update` e verifica que USER foi preservado
5. Cria `user-existing-app/` com README.md
6. Roda `invos install` e verifica que README foi preservado
7. Roda `doctor` no existing app

Exit 0 = tudo ok.

## Reset

```bash
bash /Users/felipealves/FelipeOS/projetos/Felipe.aiOS/projetos/invos-TEST/scripts/lab-reset.sh
```

Remove `user-home/` e `user-existing-app/`.
