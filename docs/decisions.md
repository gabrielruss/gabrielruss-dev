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

## 2026-10-28: Mobile nav scales to fit instead of dropping a link
- **Partly superseded 2026-10-28:** the 500px rules mentioned here (hide resume on inner pages, collapse links when home is scrolled) were replaced; see "Phone nav shows the other pages" below.
- **Decision:** Below a new `break_nav` breakpoint (700px) the nav text scales with the viewport and the nav's side padding drops from 5rem to 0.8rem, so all five links (name, resume, project, github, contact me) fit on one line from 320px up. The existing 500px rules (hide resume on inner pages, collapse links when the home page is scrolled) are kept.
- **Reasoning:** The fourth link pushed "contact me" off-screen. The nav wrapper's fixed 5rem side padding (100px of a phone screen) was the bigger problem; the old 3-link layout only fit by a narrow margin, and the overflow also appeared between 501 and ~550px (wrapped text, clipped "contact").
- **Alternatives rejected:** removing or merging a link (loses navigation); a hamburger menu (more than the fix needs); horizontal scrolling the nav.
- **Verified how:** headless Firefox, the built site embedded in iframes at 320, 360, 390, 414, 500, 501, 520, 560, 620, 700, 701, 900, and 1200px, in three states (inner page, home top, home scrolled). Not verified: real devices, Safari, Chrome.

## 2026-10-28: Phone nav shows the other pages
- **Decision:** At 500px and below, the nav shows every link except the one for the current page, on every page and at every scroll position. The homepage scroll-based swapping (name fading in, middle links collapsing) is disabled there. Above 500px the nav is unchanged: five links, current page underlined, name fading in as the homepage scrolls.
- **Reasoning:** Five links do not fit on a phone, and the old rules gave the homepage two nav states with different padding and gaps (links shifted as you scrolled) and hid the current-page underline on `/resume`. Four links always fit, and showing only pages you are not on is what the owner wanted.
- **Alternatives rejected:** a menu button (extra tap, hides the options); icon-only links (new assets, does not hide the current page); applying this at all sizes (desktop has room for five links and the scroll-in name is intentional).
- **Verified how:** headless Firefox, built site in iframes at 320, 360, 390, 414, 500 (phone rules) and 501, 600, 900, 1200 (unchanged rules), on `/`, `/resume`, `/dlams`, `/contact-me`, scrolled and not. Not verified: real devices, Safari, Chrome.

## 2026-10-28: Cap the "practices" list width on small screens
- **Decision:** In `ImportantToMe.tsx`, below 700px the list's `max-width` is `100vw - 6rem` (the wrapper's side padding), and on phones the grid column minimum is `min(25rem, 100%)`.
- **Reasoning:** The homepage was up to 21px wider than a phone screen (60px wrapper padding plus a `90vw` list), which lets touch browsers pan the page sideways and is the likely reason the sticky nav appeared to scroll with the page. `html { overflow-x: hidden }` hides the scrollbar but does not stop that.
- **Alternatives rejected:** leaving it to `overflow-x: hidden`; shrinking the wrapper padding (changes the section's look more).
- **Known leftover:** 9px overflow at 320px from the hero's teal rectangle (intentional design); not changed.
