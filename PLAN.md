# Plan (current state only)

Last updated: 2026-10-14

Deploy flow (verified 2026-10-14 via response headers and GitHub deployments API): PRs get Vercel Preview deployments; merges to `main` get Production. Not verified: whether Vercel is wired via Git integration vs. CLI (deployments appear per push, so Git integration is likely).

## Done / deployed
- Personal developer profile site (Next.js pages: home, resume, contact-me), live at https://gabrielruss.dev on Vercel.
- Latest production deploy: 2026-10-02, from `main` at `cc0774e` (merge of PR #41, `oct2026`).

## Built, not deployed
- Resume typo and wording fixes (uncommitted on branch `oct2026`; production is on `main`).

## Next up
1. Deploy the resume typo/polish fixes (done in `components/Resume.tsx`, uncommitted, not deployed). Fixed 2026-10-14: "Febuary", "Lead"->"Led", "large-scale", "Full-Time", month abbreviations (Jan/Feb/...), "frontend"/"backend".
   - Also renamed `ContainerSeperator` -> `ContainerSeparator` (2026-10-14, code only, uncommitted).

## Known issues
- Minor code quirks (unused helpers, relative icon path, duplicated `@font-face`, missing `rel` on `_blank` links): see "Observed quirks" in `docs/architecture.md`. Not fixed.
- None otherwise recorded. `npm run build` passed on 2026-10-14 (Node v23.6.1, Next 12.3.4): 5 static pages generated, no errors. Only Node `punycode` DeprecationWarnings (Node 23 vs Next 12). No tests or lint exist, so those are unverified.

## Open questions
- Local `main` is behind `origin/main` (PR #41 merged on the remote only); pull before branching.

## Rules for updating this file
- Current state only; delete stale entries. History belongs in git or `docs/decisions.md`.
- Mark features "built" and "deployed" separately.
- Add unfixed bugs/risks to Known issues; remove when fixed.
- Move answered open questions to `docs/decisions.md`.
- Use absolute dates.
