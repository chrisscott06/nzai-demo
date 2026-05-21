# STATUS.md — nzai-demo

**Last updated:** 21 May 2026

## Current state
Brief 00 (Project setup + cream-register mini-template) **complete**, archived.

## What ships
- Vite 8.0.12 + React 19.2.6 + Tailwind v4 + Stolzl/Inter/DM Serif/IBM Plex Mono. Dev server locked on port 5180.
- Three-tier token system in `src/tokens/`: `anchors`, `themes/theme.core`, `methodology`, `colors`, `fonts` (now includes the five-token editorial type scale), `motion`.
- `@theme` block in `src/index.css` mirrors the JS tokens: fonts, ten-token type scale per design spec, five-token cream-register type scale, three-tier colours, motion tokens.
- `@layer base` body defaults (Inter on `theme.base` with `theme.body`) + `nza-entry` keyframe for `motion.entry`.
- Three demo pages in the cream/dark editorial register:
  - `/` Home — two-column narrative + donut placeholder + pop-out exec summary card
  - `/explainers` chapter opener — title + sub-page card grid
  - `/explainers/carbon-accounting` — page-heading + coral-underlined subheading + four-para narrative + graphic placeholder, split panel
- `TopNav` (two-bar primary + secondary, three-logo lockup placeholders right) + `BodyPageLayout` (cream wrapper). No react-router-dom; `useState`-driven nav in `App.jsx`.
- No JetBrains Mono anywhere. Falsifiability greps pass: zero raw hex in JSX outside `src/tokens/`, zero arbitrary `text-[N]` sizes.

## Known limitations / next-brief candidates
- Inventory, Strategy chapters not built — primary nav highlights them but they fall back to the Explainers opener.
- Logo lockup is three placeholder rectangles labelled "Client Logo" / "Net Zero Advisory" / "Partner Logo". Real per-client SVG lockups land later.
- "Donut" on Home is a CSS circle, not a real chart. Recharts/D3 integration deferred.
- Modal, Drawer, MethodologyAccordion, RiskIndicator, ScrollHint and the rest of the design-spec component library not built. Brief 01 (when written) extends.
- Spec drafting bugs noted for Claude Chat:
  - Type scale: spec says "nine tokens", lists ten. All ten implemented as design-spec tokens; the editorial register uses the five-token sub-scale.
  - Mono font: spec's family table lists JetBrains Mono; prose immediately below says IBM Plex Mono. Resolved in favour of IBM Plex (matches Chris's standing instruction).

## Where to look
- Pages: `src/pages/`
- Components: `src/components/`
- Tokens: `src/tokens/`
- Theme: `src/index.css` `@theme` block
- This brief's record: `docs/briefs/archive/00_project_setup_COMPLETED.md`
