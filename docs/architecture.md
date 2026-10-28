# Architecture

Verified 2026-10-14 by reading the source. Describes what the code does, not what it should do.

## Tech and versions
Declared ranges are from `package.json`; installed versions were read from `node_modules` on 2026-10-14.

| Tech | Declared | Installed | Role |
|---|---|---|---|
| Next.js | ^12.3.4 | 12.3.4 | Framework, pages router, SSR/static |
| React / ReactDOM | ^17.0.2 | 17.0.2 | UI |
| styled-components | ^5.3.11 | 5.3.11 | Styling (CSS-in-JS), SSR via `ServerStyleSheet` |
| date-fns | ^2.30.0 | 2.30.0 | `differenceInMonths`, `differenceInYears` |
| @vercel/analytics | ^1.0.2 | 1.0.2 | Page analytics, rendered in `_app` |
| TypeScript | ^4.9.5 | 4.9.5 | Types (`strict: false`) |
| babel-plugin-styled-components | ^1.13.3 | not checked | `.babelrc` plugin, `ssr: true` |
| @types/react | ^16.14.45 | not checked | Note: major 16 types against React 17 |
| @types/node | ^14.18.54 | not checked | |
| @types/styled-components | ^5.1.26 | not checked | |

- Local Node when checked: v23.6.1. No `engines` field or `.nvmrc`; the Vercel Node version was not checked.
- Prettier config (`.prettierrc`): single quotes, ES5 trailing commas. Prettier is not in `package.json`, so no script enforces it.
- Package manager: npm (`package-lock.json`).
- `.babelrc` presence means Next uses Babel, not SWC, for this app.

## Scripts
`dev`, `build`, `start` only. No test, lint, or typecheck scripts.

## Routes (`pages/`)
| Route | File | Renders |
|---|---|---|
| `/` | `pages/index.tsx` | `components/Home.tsx` |
| `/resume` | `pages/resume.tsx` | `components/Resume.tsx` |
| `/contact-me` | `pages/contact-me.tsx` | `components/ContactMe.tsx` |
| `/dlams` | `pages/dlams.tsx` | `components/Dlams.tsx` |

All static content; no API routes, no data fetching (`getStaticProps`/`getServerSideProps`), no env vars.

## App shell
- `pages/_app.tsx`: class `App`. Wraps every page in `ThemeProvider` (theme from `components/styles`), renders `<Meta />` (head tags), `<Page>`, and `<Analytics />`. Declares the `overpass-regular` `@font-face` via `<style jsx global>`.
- `pages/_document.tsx`: collects styled-components styles with `ServerStyleSheet` for SSR; sets `<html lang="en">`; repeats the same `@font-face` block.
- `components/Page.tsx`: global styles, sticky `Nav`, `TriangleOverlay` background, then page content in a `main` (max width = `break_large`).

## Components (`components/`)
- `Home.tsx`: composes `TitleCard`, `Time`, `Skills` (x3, icon grids), `ImportantToMe`, `WhatsNext`, separated by `ContainerSeparator`.
- `Resume.tsx` (368 lines): hard-coded resume content; "years of experience" computed with `differenceInYears`; download link from `util/_constants`.
- `Dlams.tsx`: DLAMS project page. Blurb, a `LinkCard` to the live demo, boxed "What it is" and "Coming soon" lists (a mini roadmap), an infrastructure flow diagram (CSS grid boxes and arrows; stacks vertically below `break_medium`), and Frontend/Backend icon grids with text chips for lesser tech, then a GitHub source link above the closing `</DLAMS>` tag. Content is hard-coded and mirrors `~/Code/dlams/DLAMS-PLAN.md` and `docs/architecture.md`; last synced against them 2026-10-27. Update it when DLAMS ships something listed under "Coming soon".
- `ContactMe.tsx`: LinkedIn and `mailto:` links.
- `Nav.tsx`: sticky nav (links: name, resume, project (-> `/dlams`), github, contact me; mobile rules in `Nav.tsx` use `:nth-child` positions, so adding a link means revisiting them); shows the name link once scrolled past ~half viewport (scroll listener); uses `ActiveLink` to add `selected` class; external GitHub link.
- `sections/`: `TitleCard`, `FeaturedProject` (home section matching the other sections, with a single button linking to `/dlams`), `Time` (uses `TimeSince` for dev/father/married durations from hard-coded dates), `Skills`, `ImportantToMe`, `WhatsNext`, `TriangleOverlay`. Barrel: `sections/index.ts` (note `TitleCard` is also imported directly in `Home.tsx`).
- `common/`: `Header` (responsive font sizes via `calc`), `LinkCard` (LinkedIn-style "featured link" card: image left, title/URL/description right, whole card is one external link; a teal rectangle sits behind it offset down-right like the home-page name card, and on hover/focus the card slides right and down over it, with no motion under `prefers-reduced-motion`; stacks below `break_medium`), `Icon` (img from `./icons/<name>.<png|svg>`), `Meta`, `ActiveLink`, `TimeSince`, `RandomTriangle`. Barrel: `common/index.ts`.
- `styles/index.ts`: `theme` (colors, breakpoints 1366/900/500px, font), typed `styled` (theme colors include `caution` yellow for status badges and `muted` #595959, 5.8:1 on the link-card panel, for secondary text), `GlobalStyle` (html font-size 10px, so 1rem = 10px). `styles/components/`: shared styled pieces (`FrostedGlass`, `StyledContainer`, `IconGrid`, `StyledLink`, `StyledButton`, `ContainerSeparator`, `StyledBorderContainer`, `StatusBadge`).
- `util/_helpers.ts`: `randomNumberPlease(max, min)`, `debounce`, `throttle`. `util/_constants.ts`: resume Google Drive links.
- `hooks/useInterval.ts`: exported, not used.

## Background animation
`TriangleOverlay` creates 15 `RandomTriangle`s (fixed-position, clip-path triangles, 6 theme colors) with random position/size/opacity/rotation. Every 5s one random triangle gets new props; CSS transitions (2s) animate the change, and a 150s spin animation runs continuously.

## Static assets (`public/`)
- `static/`: Overpass regular+bold fonts (ttf/woff/woff2), `favicon.ico`, `biglogo.png` (OG/Twitter image), `dlams-preview.png` (1600x787 DLAMS wordmark, used by the link card on `/dlams`; resized from the owner's 5120x2520 screenshot).
- `icons/`: tech and UI icons (png/svg) used by `Icon`. SVGs for vite, fastapi, postgresql, docker, github-actions, raspberry-pi, tailwindcss, tanstack-query, nginx, sqlalchemy are from Simple Icons v13.21.0 (CC0), each given its official brand color via a `fill` attribute on `<svg>`. Exception: `vite.svg` is the classic full-color (purple gradient + yellow bolt) logo from the Vite repo at tag v5.4.0 (`docs/public/logo.svg`, MIT), because Simple Icons only has a single-color silhouette and Vite's current logo has white brackets that vanish on a white background.

## External dependencies
- DLAMS repo and live app links (`Dlams.tsx` constants).
- Resume file hosted on Google Drive (ID in `util/_constants.ts`, a share link, not a secret).
- Vercel (hosting and analytics); see `PLAN.md`.

## Observed quirks (not fixed)
- `useInterval`, `debounce`, `throttle`, `RESUME_VIEW_LINK`, and the `overpass-bold` font files are unused.
- `Icon` uses a relative `./icons/...` path, which works on `/` and top-level routes but would break on nested routes.
- `@font-face` is duplicated in `_app.tsx` and `_document.tsx`.
- Several `ActiveLink`/nav `<a>` children use the legacy `<Link><a>` pattern (valid in Next 12).
- Several links with `target="_blank"` lack `rel="noopener"`.
