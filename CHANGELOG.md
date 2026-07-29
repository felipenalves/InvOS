# Changelog

Todas as mudanças notáveis no INVOS. Formato baseado em [Keep a Changelog](https://keepachangelog.com/).

## [2.0.4] - 2026-07-29

### Fixed
- Symlinks Windows: fallback para copyFileSync quando symlinkSync falha (EPERM)
- Symlinks stale: limpeza automática de symlinks quebrados em `.claude/skills/`
- Dead code removido no `install.js` — loop simplificado
- `.env` não vaza mais em subpastas do bundle (SKIP recursivo)
- `.env.example` não é mais sobrescrito em updates
- Doctor: threshold reduzido de 5 para 1 (só erro se zero skills)
- Doctor `--fix` só roda quando há issues reais
- Stack traces completas em erros CLI
- Comparação de paths normalizada com `path.resolve()`
- Race condition (TOCTOU) no install tratada com try/catch

## [2.0.3] - 2026-07-29

### Fixed
- Templates de memória (`empresa.md`, `estrategia.md`) limpos — dados preenchidos incorretamente removidos

## [2.0.2] - 2026-07-28

### Fixed
- 8 findings de segurança corrigidos
- README atualizado
- Manifesto open-source

## [2.0.1] - 2026-07-27

### Added
- Kit INVOS v2 sincronizado do monorepo
- ASCII art logo
- Reenquadramento como AI co-founder

## [2.0.0] - 2026-07-26

### Added
- INVOS v2: novo kit, novo README, MIT license
- CLI: bundle kit para npm publish (`npx invos` de qualquer máquina)
- Skills: carrossel, humanizer, SEO, ads, notion, youtube-summarizer
- Squads: advisory-board, brand, hormozi-squad
- Comandos: init, install, update, doctor
