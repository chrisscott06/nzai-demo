# CLAUDE.md — nzai-demo

## What this is
The NZA Report Template v1 implementation + a three-page cream/dark editorial demo (Home, Explainers chapter opener, Carbon Accounting content page).

References:
- NZA Report Template v1 design specification: https://www.notion.so/367d645e05cc810c94b9de261048d84f
- NZA Bible: https://www.notion.so/32dd645e05cc813b881edd454053e238
- NZA Studio: https://www.notion.so/349d645e05cc81e99ed6f09a9866bed9

## Environment
- **Local path:** `C:\Users\ChrisScott\Dev\nzai-demo`
- **GitHub:** `chrisscott06/nzai-demo` (public)
- **Dev server:** `npm run dev` → `http://localhost:5180/` (port locked via `vite.config.js`)
- **Stack:** React 19.2.6, Vite 8.0.12, Tailwind v4. **No React Router, no Framer Motion** — `useState`-driven navigation in `App.jsx`, CSS keyframe (`.nza-entry`) for `motion.entry`.

## Where things live
- `src/tokens/` — three-tier token system (anchors / themes / methodology / colors / fonts / motion). `fonts.js` includes both font family constants and the five-token editorial type scale.
- `src/index.css` — Tailwind import + `@theme` block (fonts, ten-token design-spec type scale, five-token editorial type scale, colours, motion) + `@layer base` body defaults + `nza-entry` keyframe.
- `src/fonts.css` — Stolzl Book + Medium `@font-face` (source files in `src/fonts/stolzl/`).
- `src/components/` — `TopNav` (two-bar primary + secondary), `BodyPageLayout` (cream-register page wrapper).
- `src/pages/` — `Home`, `Explainers` (chapter opener), `CarbonAccounting`.
- `src/App.jsx` — `useState`-driven `(primary, secondary)` navigation dispatch.
- `docs/briefs/` — active + archive briefs; `current.md` tracks the active brief.

## Non-negotiable rules
1. **Brief discipline.** Briefs land at `docs/briefs/active/<NN>_<topic>.md` as Part 1's first commit. On close, move to `docs/briefs/archive/` with `_COMPLETED.md` suffix.
2. **No `npm install` from Claude Code.** Add to `package.json` only; Chris runs install locally.
3. **No JetBrains Mono.** Mono role is IBM Plex Mono.
4. **Tokens, not raw hex.** Every colour in components flows through `src/tokens/`. No `#xxxxxx` in `.jsx` outside `src/tokens/`.
5. **Closed type scale.** Only the tokens defined in `@theme`. No arbitrary `text-[N]` sizes in JSX.
6. **Cream/dark editorial register for the demo.** Page bodies use the five-token editorial type scale (`text-chapter`, `text-chapter-sub`, `text-page-heading`, `text-subheading`, `text-body`). Shared chrome may use the broader design-spec scale (`text-xs`, `text-sm`).
7. **Design spec wins.** If implementation and the design specification disagree, the spec wins — implementation gets corrected.

## What not to touch without authorisation
- `src/tokens/` (theme decisions)
- `@theme` block in `src/index.css`
- The seven Process-Rule items above

## EOC repo
`C:\Users\ChrisScott\Dev\nza-eoc-nzr` is the structural reference for visual patterns (used during Brief 00 to model TopNav and the cream/dark register). **Read-only — never modify, commit, or push EOC from this project.**

## Status
See `STATUS.md`.
