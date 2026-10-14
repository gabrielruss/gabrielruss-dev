# Conventions and commands

Stack, versions, and structure: see `docs/architecture.md`.

## Commands
- `npm run dev`: dev server
- `npm run build`: production build
- `npm run start`: serve production build
- No test, lint, or typecheck scripts are defined.

## Conventions
- Prettier (`.prettierrc`): single quotes, ES5 trailing commas. Match surrounding style.
- Styling: styled-components via `import { styled } from '<rel>/styles'` (typed theme). Theme tokens live in `components/styles/index.ts`; `1rem = 10px`.
- Components live in `components/`; barrel files (`index.ts`) in `common/`, `sections/`, `hooks/`, `styles/components/`.
- Pages in `pages/` are thin wrappers around a component.
- Ask before changing the styling approach or adding dependencies.
