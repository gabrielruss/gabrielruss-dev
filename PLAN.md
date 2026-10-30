# Plan (current state only)

Last updated: 2026-10-27

Deploy flow: verified 2026-10-14 (response headers, GitHub deployments API) that branches/PRs get Vercel Preview deployments and that the PR #41 merge (`cc0774e`, 2026-10-02) got a Production deployment. **Observed 2026-10-27:** `main` (`00f689a`, includes the resume typo fixes) has a successful Preview deployment and no Production deployment, and https://gabrielruss.dev/resume still serves the old typos. Cause not determined (Vercel production-branch setting, a manual promote, or a pending build; the Vercel dashboard is the place to look). Not verified: whether Vercel is wired via Git integration vs. CLI.

## Done / deployed
- Personal developer profile site (Next.js pages: home, resume, contact-me), live at https://gabrielruss.dev on Vercel.
- Latest production deploy: 2026-10-02, from `main` at `cc0774e` (merge of PR #41, `oct2026`).

## Built, not deployed
- DLAMS project page (2026-10-14 to 2026-10-27, uncommitted on `add-dlams`; includes link card with teal offset rectangle, home section with single button): `/dlams` route + "project" nav link, "what i'm building" section on home below "what i'm good at", page with description, infrastructure flow diagram, Frontend and Backend icon sections. Verified: `tsc --noEmit` clean and `npm run build` passes (run 2026-10-27 in a scratch copy because a dev server was holding `.next`); server-rendered HTML contains the expected content and icons; the owner reviewed the layout in a browser and approved it (owner-reported, 2026-10-27). Mobile nav reworked 2026-10-28 (see `docs/decisions.md`): at 500px and below it shows every link except the current page's, with no scroll-based swapping. Checked in headless Firefox on all five pages states at 320 to 500px and on `/` and `/resume` at 501 to 1200px: links fit on one line and the 501px+ behavior is unchanged. Not verified: a real phone or Safari/Chrome.
- Resume typo/wording fixes and `ContainerSeparator` rename: committed and on `origin/main` as `00f689a`, Preview deployment succeeded 2026-10-14, but not in production as of 2026-10-27 (see deploy note above).

## Next up
1. **Get `main` into production.** The resume typo fixes (`00f689a`) are on `origin/main` but production still serves the old text (see deploy note above). Find out why there is no Production deployment (Vercel dashboard) and promote or fix it. After that, check https://gabrielruss.dev/resume for "Febuary" (should be gone).
2. **Ship the DLAMS project page** (branch `add-dlams`, not committed). Before committing: `components/Dlams.tsx`, `components/common/LinkCard.tsx`, and `components/sections/FeaturedProject.tsx` are untracked, and several other files are only partly staged, so `git add` them or the commit will not build (`sections/index.ts` imports `FeaturedProject`). Then push, check the Vercel Preview on a phone (nav is checked in Firefox only), merge.
   - Keep page content in sync with DLAMS: when it ships a "Coming soon" item (sharing UI, search, more item types), move it to "What it is" in `components/Dlams.tsx` and the home blurb in `components/sections/FeaturedProject.tsx`. Last synced 2026-10-29 (demo sandbox sessions).
3. **Migrate off styled-components** (large; not started). Needs a target (CSS Modules, Tailwind, or other) and a plan before any code. Until then, new UI follows the existing styled-components pattern. Affects every component under `components/`, `_app.tsx`, and `_document.tsx` (SSR style collection).
4. **Investigate other libraries to migrate off** (not started). Candidates to evaluate: Next 12 and React 17 (both several majors behind, and Babel is used instead of SWC because of `.babelrc`), `@types/react` 16 against React 17, `date-fns` (used for two calls), and the unused helpers. Output is a recommendation in `docs/decisions.md`, not changes.

## Known issues
- Homepage horizontal overflow on phones: fixed 2026-10-28 in `components/sections/ImportantToMe.tsx` (list capped to the screen width below 700px; grid column minimum capped on phones). Verified in headless Firefox: no overflow at 360, 390, 414, 500, 550, 600, 700, 900, 1200px. Still 9px over at 320px, from the hero's teal rectangle (`LongSquare` in `TitleCard.tsx`, positioned to stick out past the card); left as is, 320px is rare. Not verified: that this removed the owner's "nav scrolls a bit" on a touch device; recheck after the next push.
- Contrast (computed 2026-10-27, WCAG ratios from the theme hex values, not tested in a browser): `StyledLink` text (`aa_teal` #15A883) is 3.02:1 on white and about 2.5:1 on the grey link-card panel, below the 4.5:1 AA needs for normal text. It is an existing site-wide link color (resume, contact, new GitHub link on `/dlams`). `aaa_teal` #108467 is 4.65:1 on white and would pass. Not changed; needs the owner's call because it alters the site's look.
- Minor code quirks (unused helpers, relative icon path, duplicated `@font-face`, missing `rel` on `_blank` links): see "Observed quirks" in `docs/architecture.md`. Not fixed.
- None otherwise recorded. Build baseline: `npm run build` passed 2026-10-27 (Node v23.6.1, Next 12.3.4, 6 static pages) and `tsc --noEmit` is clean; only Node `punycode` DeprecationWarnings (Node 23 vs Next 12). Running `npm run build` while `next dev` is running corrupts `.next` (`jsxDEV is not a function`); stop the dev server or build elsewhere. No tests or lint exist.

## Open questions
- Raspberry Pi icon (`public/icons/raspberry-pi.svg`) includes the registered-trademark ® mark from the official logo. Remove it by editing the SVG, or keep it? Raspberry Pi's brand guidelines ask for the logo unmodified (not checked).
- Should the site-wide link color move from `aa_teal` to `aaa_teal` to pass AA (see Known issues)?

- Owner reported (2026-10-28, Firefox responsive mode) that the nav text sat closer to the top on scrolled-home than on `/resume` at phone width. Not reproduced in headless Firefox (identical nav box on both pages: 47.3px tall, 20px top padding). The phone nav no longer changes with scroll, and phone link top padding was tried at 3rem and 2.5rem on 2026-10-28; the current file has no phone-specific top padding, so it is the standard 2rem (identical on every page and scroll state in headless Firefox when last measured). Recheck after the next push. Possibly related: the nav's frosted background is translucent, so scrolled page text shows through behind the links; making it more opaque on phones is an option.

## Rules for updating this file
- Current state only; delete stale entries. History belongs in git or `docs/decisions.md`.
- Mark features "built" and "deployed" separately.
- Add unfixed bugs/risks to Known issues; remove when fixed.
- Move answered open questions to `docs/decisions.md`.
- Use absolute dates.
