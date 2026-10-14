# Decisions

Append-only. Each entry: date, decision, reasoning, alternatives rejected.
When a decision changes, add a new entry and mark the old one "superseded by <date/title>".

## 2026-10-14: Adopt "document as we go"
- **Decision:** Keep `CLAUDE.md`, `PLAN.md`, `docs/decisions.md`, `.github/copilot-instructions.md`, and git-ignored `.private/ops-notes.md` as project memory across AI sessions.
- **Reasoning:** Docs are the continuity between sessions; the repo had none beyond a one-line README.
- **Alternatives rejected:** Keeping notes only in chat/memory (not shared, not versioned).

## 2026-10-14: Record deploy flow as discovered, not designed
- **Decision:** Document that `main` -> Vercel Production, other branches/PRs -> Vercel Preview.
- **Reasoning:** Observed from `server: Vercel` on https://gabrielruss.dev and GitHub deployments (Production ref `cc0774e` is on `main`; Preview refs are PR branches). No config files in repo; settings live in the Vercel dashboard.
- **Alternatives rejected:** none; this describes existing behavior.
