#!/bin/bash
# Valida se o starter kit está configurado corretamente
#
# Modos:
#   bash scripts/validar.sh              → só estrutura (1–4). OK pro template de ship.
#   bash scripts/validar.sh --pos-onboard → estrutura + FAIL se placeholders restarem
#                                          (use depois do onboard / na máquina do comprador).

set -euo pipefail

POS_ONBOARD=0
for arg in "$@"; do
  case "$arg" in
    --pos-onboard) POS_ONBOARD=1 ;;
    -h|--help)
      echo "Uso: bash scripts/validar.sh [--pos-onboard]"
      echo "  (default)     estrutura do kit — template de ship deve passar"
      echo "  --pos-onboard estrutura + sem placeholders em memoria/"
      exit 0
      ;;
  esac
done

ERROS=0
echo "=== Validando INVOS Starter Kit ==="
if [ "$POS_ONBOARD" -eq 1 ]; then
  echo "Modo: estrutura + pós-onboard (sem placeholders)"
else
  echo "Modo: estrutura apenas (template de ship OK com placeholders)"
fi
echo ""

# 1. Arquivos essenciais
echo "1/5 — Arquivos essenciais:"
for f in AGENTS.md MEMORY.md README.md SECURITY.md .env.example; do
  if [ -f "$f" ]; then
    echo "  ✅ $f"
  else
    echo "  ❌ $f — FALTA"
    ERROS=$((ERROS+1))
  fi
done

# 2. .gitignore bloqueia .env
echo ""
echo "2/5 — Segurança:"
if grep -q "^\.env$" .gitignore 2>/dev/null; then
  echo "  ✅ .gitignore bloqueia .env"
else
  echo "  ❌ .gitignore NÃO bloqueia .env"
  ERROS=$((ERROS+1))
fi
if grep -q "^\.env\.\*" .gitignore 2>/dev/null; then
  echo "  ✅ .gitignore bloqueia .env.*"
else
  echo "  ❌ .gitignore NÃO bloqueia .env.*"
  ERROS=$((ERROS+1))
fi

# 3. Memoria completa
echo ""
echo "3/5 — Sistema de memória:"
for f in memoria/perfil.md memoria/empresa.md memoria/projetos.md memoria/decisoes.md memoria/insights.md memoria/ativo.md; do
  if [ -f "$f" ]; then
    echo "  ✅ $f"
  else
    echo "  ❌ $f — FALTA"
    ERROS=$((ERROS+1))
  fi
done

# 4. Skills
echo ""
echo "4/5 — Skills:"
for f in session-start session-end session-checkpoint onboard proposta; do
  if [ -f ".agents/skills/$f/SKILL.md" ]; then
    echo "  ✅ $f"
  else
    echo "  ❌ $f — FALTA"
    ERROS=$((ERROS+1))
  fi
done

echo ""
echo "4b — Clientes (prestador):"
if [ -f "clientes/README.md" ] && [ -f "clientes/_template/perfil.md" ]; then
  echo "  ✅ clientes/_template + README"
else
  echo "  ❌ clientes/ incompleto"
  ERROS=$((ERROS+1))
fi

# 5. Placeholders
echo ""
if [ "$POS_ONBOARD" -eq 1 ]; then
  echo "5/5 — Placeholders (pós-onboard — FAIL se restar template):"
  PH=0

  if [ -f memoria/empresa.md ]; then
    if grep -qE '\[seu nome\]|\[o que|PREENCHA' memoria/empresa.md 2>/dev/null; then
      echo "  ❌ memoria/empresa.md ainda tem placeholder ([seu nome] / [o que / PREENCHA)"
      PH=$((PH+1))
    else
      echo "  ✅ memoria/empresa.md sem placeholders bloqueantes"
    fi
  fi

  if [ -f memoria/projetos.md ]; then
    if grep -qE 'PREENCHA|\[descrição' memoria/projetos.md 2>/dev/null; then
      echo "  ❌ memoria/projetos.md ainda tem placeholder (PREENCHA / [descrição)"
      PH=$((PH+1))
    else
      echo "  ✅ memoria/projetos.md sem placeholders bloqueantes"
    fi
  fi

  if [ -f memoria/perfil.md ]; then
    if grep -qE '\[Seu Nome\]|PREENCHA|\[Escreva aqui' memoria/perfil.md 2>/dev/null; then
      echo "  ❌ memoria/perfil.md ainda tem placeholder ([Seu Nome] / PREENCHA / [Escreva aqui)"
      PH=$((PH+1))
    else
      echo "  ✅ memoria/perfil.md sem placeholders bloqueantes"
    fi
  fi

  if [ -f memoria/ativo.md ]; then
    if grep -q 'primeira sessão' memoria/ativo.md 2>/dev/null || grep -qF '$(date' memoria/ativo.md 2>/dev/null; then
      echo "  ❌ memoria/ativo.md ainda marca first-run (\"primeira sessão\") ou tem literal \$(date"
      PH=$((PH+1))
    else
      echo "  ✅ memoria/ativo.md sem first-run / literal date"
    fi
  fi

  if [ "$PH" -gt 0 ]; then
    ERROS=$((ERROS+PH))
    echo "  → Rode o onboard e revalide com --pos-onboard"
  fi
else
  echo "5/5 — Primeiro uso? (informativo — não falha no modo estrutura)"
  if grep -qE '\[o que|\[seu nome\]|PREENCHA' memoria/empresa.md 2>/dev/null \
    || grep -q 'primeira sessão' memoria/ativo.md 2>/dev/null; then
    echo "  🔄 AINDA É TEMPLATE — primeiro uso vai disparar onboard"
    echo "  ℹ️  Pra validar memória preenchida: bash scripts/validar.sh --pos-onboard"
  else
    echo "  ✅ Já configurado (sem placeholders óbvios em empresa/ativo)"
  fi
fi

echo ""
if [ $ERROS -eq 0 ]; then
  echo "=== ✅ Kit válido! Pronto pra usar. ==="
  exit 0
else
  echo "=== ❌ $ERROS erro(s) encontrado(s) ==="
  exit 1
fi
