# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds the Cloudflare Worker TypeScript source. Entry points include `src/worker.ts`, while feature modules live in `src/common/`, `src/cores/`, `src/protocols/`, and `src/types/`.
- `src/assets/` contains bundled assets used by the panel UI.
- `docs/` hosts documentation assets (images, site content).
- `scripts/` contains build tooling (notably `scripts/build.js`).
- `tools/cleanip/` includes helper tooling for Clean IP workflows.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run check` runs `tsc --noEmit` for strict TypeScript validation.
- `npm run build` runs `node scripts/build.js` to produce the Worker bundle.

## Coding Style & Naming Conventions
- Indentation is 4 spaces; use semicolons and single quotes for strings.
- TypeScript is `strict` (see `tsconfig.json`); keep types explicit when helpful.
- Use camelCase for functions/variables, PascalCase for types/classes.
- Prefer path aliases defined in `tsconfig.json` (e.g., `@common`, `@vless`) instead of deep relative imports.

## Testing Guidelines
- No automated test framework is configured today.
- Use `npm run check` as the baseline gate. If you add tests, place them under a new `tests/` directory and name files `*.test.ts` or `*.spec.ts`.

## Commit & Pull Request Guidelines
- Commit messages are short and imperative; optional scopes appear in parentheses.
- Examples: `Fix(TypeCheckErr)`, `Feat(CleanIP UI): Add CleanIP Service UI`, `Add Clean IP geo labels`.
- PRs should include a clear summary, rationale, and linked issues. Add screenshots/GIFs for UI changes (panel, docs assets).

## Configuration & Security Tips
- Cloudflare Worker environment variables are required for runtime config (e.g., `UUID`, `TR_PASS`, `PROXY_IP`, `SUB_PATH`).
- Secrets and passwords should be stored in Worker KV or environment bindings, never committed to the repo.
