# Plan (current state only)

Last updated: 2026-10-14

Deploy flow (verified 2026-10-14 via response headers and GitHub deployments API): PRs get Vercel Preview deployments; merges to `main` get Production. Not verified: whether Vercel is wired via Git integration vs. CLI (deployments appear per push, so Git integration is likely).

## Done / deployed
- Personal developer profile site (Next.js pages: home, resume, contact-me), live at https://gabrielruss.dev on Vercel.
- Latest production deploy: 2026-10-02, from `main` at `cc0774e` (merge of PR #41, `oct2026`).

## Built, not deployed
- None known.

## Next up
1. Fix typos on the live site (all in `components/Resume.tsx`; confirmed present on https://gabrielruss.dev/resume on 2026-10-14). Not yet fixed.
   - "Febuary" -> "February": line 190 (Capacity) and line 228 (LeaseQuery).
   - "Lead" -> "Led" (past tense): lines 173, 176 (Calendly) and line 210 (Capacity).
   - Line 210 also: "large scale features" -> "large-scale features".
   - Optional polish: heading "Full Time Developer" -> "Full-Time" (line 331); inconsistent "Aug"/"August" and "Oct" month abbreviations; inconsistent "front-end"/"frontend" and "Back-End"/"backend".
   - Not live, code only: `ContainerSeperator` component name is misspelled (8 references).

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
