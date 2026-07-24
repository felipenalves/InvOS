#!/usr/bin/env bash
# Smoke: estado vivo — deals pagos no _index não devem coexistir com "enviar proposta" + primeira sessão.
set -euo pipefail
INDEX="clientes/_index.md"
PROJETOS="memoria/projetos.md"
ATIVO="memoria/ativo.md"
[[ -f "$INDEX" && -f "$PROJETOS" ]] || { echo "FAIL: falta index ou projetos"; exit 1; }

PAID=$(grep -E '^\| [a-z0-9-]+ \|' "$INDEX" | grep -i '| pago |' | awk -F'|' '{gsub(/^ +| +$/,"",$2); print $2}' || true)
if [[ -z "${PAID// }" ]]; then
  echo "OK: nenhum deal pago no _index"
  exit 0
fi
FAIL=0
if echo "$PAID" | grep -q . && grep -qiE 'enviar proposta|fechar deal' "$PROJETOS"; then
  # se projetos ainda tem enviar proposta E menciona algum slug pago
  for slug in $PAID; do
    if grep -qi "$slug" "$PROJETOS" 2>/dev/null && grep -qiE 'enviar proposta|fechar deal' "$PROJETOS"; then
      echo "FAIL: slug pago '$slug' e projetos ainda tem 'enviar proposta/fechar deal'"
      FAIL=1
    fi
  done
fi
if [[ -f "$ATIVO" ]] && grep -qi 'primeira sessão' "$ATIVO" && [[ -n "$PAID" ]]; then
  echo "FAIL: deal pago mas ativo tem 'primeira sessão'"
  FAIL=1
fi
if [[ $FAIL -eq 0 ]]; then
  echo "OK: estado vivo coerente (pagos: $PAID)"
  exit 0
fi
exit 1
