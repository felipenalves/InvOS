#!/bin/bash
# Valida se o starter kit está configurado corretamente
# Uso: bash scripts/validar.sh

ERROS=0
echo "=== Validando INV Starter Kit ==="
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
if grep -q "^\\.env$" .gitignore 2>/dev/null; then
  echo "  ✅ .gitignore bloqueia .env"
else
  echo "  ❌ .gitignore NÃO bloqueia .env"
  ERROS=$((ERROS+1))
fi
if grep -q "^\\.env\\.\\*" .gitignore 2>/dev/null; then
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
for f in session-start session-end session-checkpoint onboard; do
  if [ -f ".agents/skills/$f/SKILL.md" ]; then
    echo "  ✅ $f"
  else
    echo "  ❌ $f — FALTA"
    ERROS=$((ERROS+1))
  fi
done

# 5. Placeholders (empresa ainda é template?)
echo ""
echo "5/5 — Primeiro uso?"
if grep -q '\[o que\|\[seu nome\]' memoria/empresa.md 2>/dev/null; then
  echo "  🔄 AINDA É TEMPLATE — primeiro uso vai disparar onboard"
else
  echo "  ✅ Já configurado"
fi

echo ""
if [ $ERROS -eq 0 ]; then
  echo "=== ✅ Kit válido! Pronto pra usar. ==="
else
  echo "=== ❌ $ERROS erro(s) encontrado(s) ==="
  exit 1
fi
