# gabrielruss.dev: read me first

Read in this order:

1. `PLAN.md`: current state, next up, known issues, open questions
2. `docs/decisions.md`: why things are the way they are (dated, append-only)
3. `docs/architecture.md`: tech + versions, structure, how it works, quirks
4. `.github/copilot-instructions.md`: commands and conventions
5. `.private/ops-notes.md`: git-ignored ops notes (may not exist on a fresh clone)

Easy-to-miss rules:

- This repo is **public**. No secrets, hostnames, or infra layout in tracked files; those go in `.private/ops-notes.md`.
- Keep docs current in the same session as the change. Update rules are in `PLAN.md`.
- Leave changes uncommitted unless asked. Never push unless asked.
- Ask before installing packages, running generators/CLIs, or changing styling.
- Don't record a check as passed unless it was actually run.
