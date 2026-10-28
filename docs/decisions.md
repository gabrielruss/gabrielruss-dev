# Decisions

Append-only. Each entry: date, decision, reasoning, alternatives rejected.
When a decision changes, add a new entry and mark the old one "superseded by <date/title>".

## 2026-10-14: Adopt "document as we go"
- **Decision:** Keep `CLAUDE.md`, `PLAN.md`, `docs/decisions.md`, `.github/copilot-instructions.md`, and git-ignored `.private/ops-notes.md` as project memory across AI sessions.
- **Reasoning:** Docs are the continuity between sessions; the repo had none beyond a one-line README.
- **Alternatives rejected:** Keeping notes only in chat/memory (not shared, not versioned).

## 2026-10-14: Record deploy flow as discovered, not designed
- **Partly superseded 2026-10-27:** "`main` -> Production" did not hold for `00f689a`; see `PLAN.md` deploy note.
- **Decision:** Document that `main` -> Vercel Production, other branches/PRs -> Vercel Preview.
- **Reasoning:** Observed from `server: Vercel` on https://gabrielruss.dev and GitHub deployments (Production ref `cc0774e` is on `main`; Preview refs are PR branches). No config files in repo; settings live in the Vercel dashboard.
- **Alternatives rejected:** none; this describes existing behavior.

## 2026-10-14: DLAMS project page at `/dlams`
- **Partly superseded 2026-10-27:** see "DLAMS page revisions" below (teaser card, "demo login coming soon" label).
- **Decision:** Add a top-level `/dlams` route and "project" nav link; a "what i'm building" teaser on the home page below "what i'm good at"; v1 content is description, infrastructure diagram, Frontend/Backend icon sections. Links to the public GitHub repo and the live app, labeled "demo login coming soon".
- **Reasoning:** Highlights a current project for hiring audiences. Short one-word route matches `resume`; it can move under `/projects` if more projects appear.
- **Alternatives rejected:** `/projects/dlams` with an index (more than v1 needs); an inline SVG diagram (harder to make responsive).
- **Public-repo note:** The page states the architecture at a high level (GitHub Actions runner on a Raspberry Pi, Docker, Nginx). No hostnames, ports, or server layout.

## 2026-10-14: Icon source for new tech icons
- **Decision:** Use Simple Icons SVGs (CC0) with brand-color fills, stored in `public/icons`.
- **Reasoning:** Consistent, license-clean, small; matches the existing colored logos.
- **Alternatives rejected:** hand-supplied images (slower); text-only badges (weaker for the intended audience). No shadcn/ui or Alembic icon exists in the set, so those are text chips.

## 2026-10-14: Build new UI with styled-components for now
- **Decision:** The DLAMS page uses styled-components like the rest of the site, even though migrating off it is planned (see `PLAN.md`).
- **Reasoning:** Consistency; the migration will cover everything at once.
- **Alternatives rejected:** starting the new page in another styling approach (would split the codebase before a target is chosen).

## 2026-10-27: Vite icon uses the classic logo, not Simple Icons
- **Decision:** `public/icons/vite.svg` is the classic purple/yellow Vite logo from the Vite repo (tag v5.4.0), not the Simple Icons silhouette.
- **Reasoning:** Owner expected the recognizable two-color logo. Vite's current logo (repo `main`) has white brackets and is invisible on this site's white background.
- **Alternatives rejected:** keeping the flat single-color icon; the current logo.

## 2026-10-27: DLAMS live-site link is a static featured-link card
- **Decision:** On `/dlams`, link to the live site with a `LinkCard` (image, title, URL, description) using a static image of the DLAMS wordmark, instead of an iframe or a screenshot service.
- **Reasoning:** Static image costs nothing per visit, cannot break, and the wordmark is the site's branding. The DLAMS site allows framing, but an iframe would load the whole app on every portfolio visit and land on the login screen.
- **Alternatives rejected:** live iframe; third-party screenshot service (dependency, rate limits); automated Playwright capture (needs package approval; revisit if the image goes stale).
- **Related, not done:** the DLAMS site has no `og:image`/`og:title` tags, so shared links to it show no preview. That fix belongs in the dlams repo.

## 2026-10-27: DLAMS page revisions
- **Decision:** (1) The home "what i'm building" section has no bordered card; it matches the other sections and ends in one button to `/dlams` (replaces the clickable teaser card). (2) The "demo login coming soon" label is gone: the DLAMS demo sign-in is live, so the link is a card to the site. (3) The page's "What it is" and "Coming soon" lists replace the two description paragraphs. (4) The GitHub link moved to the bottom of the page. (5) Link text colors in new components use AA-passing colors (`muted` #595959); the existing `aa_teal` link color fails AA and is left for the owner (see `PLAN.md`).
- **Reasoning:** Owner's design direction during review; content synced with the DLAMS docs on 2026-10-27.
- **Alternatives rejected:** keeping the bordered card (did not blend with other sections).
