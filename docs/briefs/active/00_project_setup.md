# Brief 00 — Project setup: nzai-demo

**Author:** Claude Chat (architect)
**Authorised by:** Chris Scott
**Status:** Authorised + in-flight (Part 1 onward, 2026-05-21)
**Date opened:** 2026-05-21

---

## Amendments — applied in Part 1 before code work

1. **Part 1.10 — `gh` CLI unavailable.** The `gh repo create` command is replaced with a direct `git remote add` + `git push -u origin main`. The GitHub repo already exists at `https://github.com/chrisscott06/nzai-demo` and is **public** (Chris's deliberate choice for sanity-checking — overrides the brief's "private" assumption).
2. **Part 4.4 CLAUDE.md draft — React version + repo visibility.** "React 18" is a draft guess; the actual version is read from `package.json` after Part 1's `npm install` completes. Repo visibility line updated to "public" to match reality.

Both lines edited in this file below. CLAUDE.md authored in Part 4 reflects the actuals.

---
**Target outcome:** `C:\Users\ChrisScott\Dev\nzai-demo` is a working React + Vite + Tailwind v4 project, set up fresh (no EOC code copied), with the NZA Studio token system in place per the [NZA Report Template v1 design specification](https://www.notion.so/367d645e05cc810c94b9de261048d84f), the Bible's discipline scaffolding established, fonts installed (Stolzl, Inter, DM Serif Display, IBM Plex Mono — explicitly NOT JetBrains Mono), and a confirmed-working dev server rendering a minimal "hello world" page that exercises the token system.

After this brief lands: Chris has a clean, opinionated foundation ready for follow-on briefs (Brief 01 template structure, Brief 02 section types, Brief 03 demo content, Brief 04 hosting). Nothing in this brief copies code from EOC; the EOC repo is referenced visually only.

---

## BEFORE DOING ANYTHING

0. **Confirm working directory.** This brief runs in `C:\Users\ChrisScott\Dev\nzai-demo`. If Claude Code is launched from anywhere else, stop. Close the session, relaunch from the correct directory.
1. Read this entire brief.
2. Read the [NZA Report Template v1 design specification](https://www.notion.so/367d645e05cc810c94b9de261048d84f) end to end. **The design spec is canonical.** If this brief and the spec disagree, the spec wins.
3. Read the Bible if not already cached this session: https://www.notion.so/32dd645e05cc813b881edd454053e238
4. Confirm `nzai-demo` is empty or near-empty. `dir` should show nothing meaningful inside. If files exist that aren't `.git/` or trivial config, stop and surface to Chris.
5. Confirm GitHub CLI is authenticated: `gh auth status`. If not, stop and prompt Chris.
6. **Do NOT clone, copy, or reference EOC's source code.** EOC at `C:\Users\ChrisScott\Dev\nza-eoc-nzr` is a visual reference only. Opening the deployed report in a browser for visual comparison is fine; reading EOC's source files for implementation is not.
7. Do not begin Part 1 until checks 0–6 pass.

---

## Scope statement

This brief initialises `nzai-demo` as a fresh React + Vite + Tailwind v4 project implementing the NZA Studio token architecture and the foundations of the NZA Report Template v1 design specification. **It does not build the template's components or pages** — those are Brief 01.

Specifically, this brief delivers:

- A new git repo at `C:\Users\ChrisScott\Dev\nzai-demo`
- A new GitHub remote (`chrisscott06/nzai-demo`, private)
- A fresh Vite + React + Tailwind v4 project initialised from scratch
- The `src/tokens/` directory implementing NZA Studio's three-tier architecture
- The `@theme` block in `src/index.css` mirroring the tokens
- Fonts installed: Stolzl (Book 400, Medium 500), Inter (variable), DM Serif Display, IBM Plex Mono
- A minimal "hello world" page that uses the token system end-to-end
- Bible discipline scaffolding: `CLAUDE.md`, `STATUS.md`, `docs/briefs/`, `docs/audit/`
- A confirmed-working dev server

What this brief does NOT do:
- Touch the EOC NZR repo in any way
- Copy any code from EOC
- Build the seven page archetypes (Brief 01)
- Build the 12 canonical components (Brief 01)
- Build any section types (Brief 02)
- Build demo content (Brief 03)

---

## Operational mode — plough through

Five Parts plus close. End-to-end run in a single session. Chris's confirmation at Part 6 close is the only sign-off point. Stop and surface only for conditions in "When to escalate" below.

---

## Principles

1. **Build fresh, not copy.** The template is initialised from scratch. EOC informs the *design*, not the *code*.
2. **Design spec is canonical.** Every decision in this brief implements the design spec. If something in the spec needs implementing and isn't in this brief, surface; don't improvise.
3. **Tokens before components.** Token system in place before any component is built. This is the inverse of EOC's accidental history (tokens retrofitted) and the EOC audit problem.
4. **Falsifiability: minimal page renders correctly.** A single page exercises the token system end-to-end — fonts loaded, colours via tokens, page chrome rendered, 8px grid respected.
5. **No `npm install` from Claude Code.** Standard Bible rule. Chris runs npm operations locally.
6. **JetBrains Mono is explicitly excluded.** Per Chris's direction. Mono role is IBM Plex Mono. Do not import, install, or reference JetBrains Mono anywhere.

---

## Falsifiability

The acceptance criterion is a working "hello world" page demonstrating every part of the foundation:

- **Fonts loaded:** Stolzl Medium, Stolzl Book, Inter, DM Serif Display, IBM Plex Mono — all visible
- **Tokens active:** `theme.base` for background, `theme.body` for text, `theme.accents.primary` for an accent stripe, `nzaCoral` for a CTA
- **Page chrome rendered:** masthead with NZA mark + descriptor + section identifier; footer with NZA Consultancy Ltd + page reference; vertical "DEMO" wordmark on the left edge
- **8px grid respected:** all spacing in dev tools is a multiple of 8 (or 4/2 for hairlines)
- **No raw hex anywhere:** grep across `src/` shows no `#` followed by 3/6 hex characters outside `src/tokens/`
- **No JetBrains Mono:** grep across the codebase for `JetBrains` returns zero

Browser verification at Part 5 confirms all of the above.

---

## Parts

### Part 1 — Initialise Vite + React + Tailwind v4 project

**Goal:** A fresh, empty React + Vite + Tailwind v4 project exists in `nzai-demo`, with no EOC code anywhere.

**Files touched:**
- Everything in `C:\Users\ChrisScott\Dev\nzai-demo` (created)

**Steps:**

1.1 Initialise the Vite project. From inside `nzai-demo`:

```
npm create vite@latest . -- --template react
```

This scaffolds files. Chris should be ready to confirm any prompts.

1.2 **Surface to Chris:** "Please run `npm install` in `C:\Users\ChrisScott\Dev\nzai-demo`. I cannot run this myself (Process Rule 4). Tell me when it completes." Wait for confirmation.

1.3 Install Tailwind v4. Add to `package.json` dependencies:

```json
"tailwindcss": "^4.0.0",
"@tailwindcss/vite": "^4.0.0"
```

Surface to Chris to run `npm install --force` locally after the edit.

1.4 Configure Vite for Tailwind v4. Edit `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

1.5 Create initial `src/index.css`:

```css
@import "tailwindcss";

@theme {
  /* Token mirrors land here in Part 2 */
}
```

1.6 Replace Vite's default `src/App.jsx` with a placeholder:

```jsx
export default function App() {
  return <div>Placeholder — replaced in Part 5</div>;
}
```

1.7 Surface to Chris: confirm `npm run dev` starts and serves the placeholder.

1.8 Create `.gitignore`:

```
node_modules/
dist/
build/
.env
.env.local
.env.*.local
*.db
*.db-wal
*.db-shm
docs/audit/screenshots/
.DS_Store
Thumbs.db
.vscode/
.idea/
*.log
```

1.9 Initialise git and create initial commit:

```
git init
git branch -m main
git add -A
git commit -m "Brief 00 Part 1: Initialise Vite + React + Tailwind v4

Fresh project scaffolded with Vite's React template. Tailwind v4
added with @tailwindcss/vite plugin. Initial src/index.css imports
tailwindcss; empty @theme block awaits Part 2.

Placeholder src/App.jsx; minimal page lands in Part 5.

.gitignore per Bible standards.

No EOC code copied. Fresh foundation per the NZA Report Template
v1 design specification."
```

1.10 Connect to the existing GitHub remote and push:

```
git remote add origin https://github.com/chrisscott06/nzai-demo.git
git push -u origin main
```

(Amended: original step used `gh repo create`. The repo already exists at `chrisscott06/nzai-demo` as a public repo — Chris's deliberate sanity-checking choice. `gh` CLI is not installed locally.)

**Checkpoint criteria:**
- Fresh Vite + React + Tailwind v4 project in `nzai-demo`
- `npm install` complete (Chris confirms)
- `npm run dev` serves the placeholder
- One commit on `main`, pushed to `chrisscott06/nzai-demo` private repo
- No EOC code anywhere

---

### Part 2 — Token system

**Goal:** NZA Studio's three-tier token architecture implemented per the design spec.

**Files touched:**
- `src/tokens/anchors.js` (new)
- `src/tokens/themes/theme.core.js` (new)
- `src/tokens/methodology.js` (new)
- `src/tokens/colors.js` (new)
- `src/tokens/fonts.js` (new)
- `src/tokens/motion.js` (new)
- `src/index.css` (`@theme` block populated)

**Steps:**

2.1 Create `src/tokens/anchors.js`:

```javascript
export const anchors = {
  nzaCoral: '#E8725C',
  nzaCream: '#EDE5D8',
};
```

2.2 Create `src/tokens/themes/theme.core.js`:

```javascript
import { anchors } from '../anchors.js';

export const theme = {
  name: 'nza-core',
  base: '#1A2440',
  accents: {
    primary: '#F08080',
    secondary: '#A896C4',
  },
  cta: anchors.nzaCoral,
  body: anchors.nzaCream,
};
```

2.3 Create `src/tokens/methodology.js`:

```javascript
export const risk = {
  low: '#8FCB85',
  moderate: '#E8A13C',
  major: '#D9464B',
  severe: '#4C3D6B',
  noData: '#A9C5DA',
};

export const scopes = {
  scope12: '#5BBFB5',
  scope3: '#534E86',
};

export const dq = {
  activityBased: '#22C55E',
  supplierSpecific: '#3B82F6',
  industryAverage: '#F2A93B',
  proxy: '#EF4444',
};

export const categoricalThemes = {
  estate: '#5B7B9A',
  travel: '#F2A93B',
  supplyChain: '#347373',
  commuting: '#D4891F',
};
```

2.4 Create `src/tokens/colors.js`:

```javascript
// Active palette: NZA Core theme.
// To switch theme (PABLO, NZ:AI, decodED), change the import below.

import { theme } from './themes/theme.core.js';
import { anchors } from './anchors.js';
import { risk, scopes, dq, categoricalThemes } from './methodology.js';

export { theme, anchors, risk, scopes, dq, categoricalThemes };
```

2.5 Create `src/tokens/fonts.js`:

```javascript
// Font family constants for use in SVG inline styles, Recharts props, etc.
// Tailwind classes (font-heading, font-body, etc.) are defined via @theme.
//
// JetBrains Mono is explicitly NOT used. Mono role is IBM Plex Mono.

export const FONT_HEADING = "'Stolzl', sans-serif";        // Stolzl Medium 500
export const FONT_HERO = "'Stolzl', sans-serif";           // Stolzl Book 400
export const FONT_BODY = "'Inter', system-ui, sans-serif"; // Inter variable
export const FONT_DISPLAY = "'DM Serif Display', serif";   // Editorial accents
export const FONT_MONO = "'IBM Plex Mono', ui-monospace, monospace"; // NOT JetBrains
```

2.6 Create `src/tokens/motion.js`:

```javascript
// Motion tokens per the NZA Report Template v1 design specification.
// Four named motion patterns: motion.entry, motion.cascade, motion.transition, motion.chapter.
// Framer-motion variants will be created in Brief 01.

export const EASE_STANDARD = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const EASE_GENTLE = 'cubic-bezier(0.4, 0, 0.6, 1)';

export const DURATION_INSTANT = '150ms';
export const DURATION_ENTRY = '250ms';
export const DURATION_CASCADE = '350ms';
export const DURATION_TRANSITION = '500ms';
export const DURATION_CHAPTER = '700ms';
```

2.7 Populate `src/index.css` `@theme` block:

```css
@import "tailwindcss";

@theme {
  /* === Fonts === */
  --font-heading: 'Stolzl', sans-serif;
  --font-hero: 'Stolzl', sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-display: 'DM Serif Display', serif;
  --font-mono: 'IBM Plex Mono', ui-monospace, monospace;

  /* === Anchors === */
  --color-nza-coral: #E8725C;
  --color-nza-cream: #EDE5D8;

  /* === Active theme — NZA Core === */
  --color-theme-base: #1A2440;
  --color-theme-accent-primary: #F08080;
  --color-theme-accent-secondary: #A896C4;
  --color-theme-cta: #E8725C;
  --color-theme-body: #EDE5D8;

  /* === Methodology — risk === */
  --color-risk-low: #8FCB85;
  --color-risk-moderate: #E8A13C;
  --color-risk-major: #D9464B;
  --color-risk-severe: #4C3D6B;
  --color-risk-no-data: #A9C5DA;

  /* === Methodology — scopes === */
  --color-scope-12: #5BBFB5;
  --color-scope-3: #534E86;

  /* === Methodology — data quality === */
  --color-dq-activity-based: #22C55E;
  --color-dq-supplier-specific: #3B82F6;
  --color-dq-industry-average: #F2A93B;
  --color-dq-proxy: #EF4444;

  /* === Methodology — categorical themes (carbon inventory) === */
  --color-categorical-estate: #5B7B9A;
  --color-categorical-travel: #F2A93B;
  --color-categorical-supply-chain: #347373;
  --color-categorical-commuting: #D4891F;

  /* === Motion tokens === */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-gentle: cubic-bezier(0.4, 0, 0.6, 1);

  --duration-instant: 150ms;
  --duration-entry: 250ms;
  --duration-cascade: 350ms;
  --duration-transition: 500ms;
  --duration-chapter: 700ms;
}
```

2.8 Surface to Chris: confirm dev server still runs and placeholder still renders. No visible change yet.

2.9 Commit:

```
git add -A
git commit -m "Brief 00 Part 2: Token system per NZA Studio three-tier architecture

src/tokens/ implements anchors (Tier 1), themes/theme.core (Tier 2),
methodology (Tier 3), colors.js as the single entry point.

fonts.js declares font family constants. JetBrains Mono is
explicitly excluded; FONT_MONO is IBM Plex Mono.

motion.js declares the four motion patterns' tokens per the
design spec.

@theme block mirrors the JS tokens. Tailwind v4 generates classes:
- font-heading / font-hero / font-body / font-display / font-mono
- bg-theme-base / text-theme-body / bg-theme-accent-primary / etc.
- bg-risk-major / text-scope-3 / bg-categorical-estate / etc.

No visible change yet — Part 5 adds the page that uses them.

Reference: NZA Report Template v1 design specification."

git push
```

**Checkpoint criteria:**
- Six token files exist with correct content
- `@theme` block populated
- `npm run dev` still runs (Chris confirms)
- Tailwind classes available (test via dev tools)
- JetBrains referenced nowhere (`grep -r "JetBrains" src/` returns zero)

---

### Part 3 — Install fonts

**Goal:** All four required fonts load correctly.

**Files touched:**
- `src/fonts/` (new directory) — Stolzl files
- `src/fonts.css` (new) — `@font-face` for Stolzl
- `index.html` — `<link>` for Google Fonts
- `src/index.css` — import `fonts.css`

**Steps:**

3.1 **Surface to Chris:** "Stolzl is proprietary. Please drop the Stolzl font files (Book 400 and Medium 500, woff2 preferred) into `src/fonts/`. Suggested names: `Stolzl-Book.woff2`, `Stolzl-Medium.woff2`. Tell me when in place." Wait for confirmation. If unavailable immediately, Part 3 pauses and remaining parts use system-ui as a temporary heading fallback.

3.2 Once files in place, create `src/fonts.css`:

```css
@font-face {
  font-family: 'Stolzl';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url('/src/fonts/Stolzl-Book.woff2') format('woff2');
}

@font-face {
  font-family: 'Stolzl';
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src: url('/src/fonts/Stolzl-Medium.woff2') format('woff2');
}
```

3.3 Import `fonts.css` from `src/index.css`:

```css
@import "tailwindcss";
@import "./fonts.css";

@theme {
  /* ...token mirrors... */
}
```

3.4 Add Google Fonts to `index.html`. In `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=DM+Serif+Display&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**The Google Fonts URL must NOT include JetBrains Mono.** Verify before committing.

3.5 Set body default styles in `src/index.css`. After `@theme`:

```css
@layer base {
  body {
    font-family: var(--font-body);
    background-color: var(--color-theme-base);
    color: var(--color-theme-body);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 500;
  }
}
```

3.6 Surface to Chris: confirm body text appears in Inter (not system-ui) in browser.

3.7 Commit:

```
git add -A
git commit -m "Brief 00 Part 3: Install fonts

Stolzl self-hosted via @font-face in src/fonts.css (Book 400 +
Medium 500, woff2 supplied by Chris).

Inter, DM Serif Display, IBM Plex Mono loaded via Google Fonts in
index.html. Inter is variable (300–700).

JetBrains Mono is NOT loaded. Mono role is IBM Plex Mono only.

@layer base sets body to Inter on theme.base; headings to
Stolzl Medium.

Browser verification: body text renders in Inter."

git push
```

**Checkpoint criteria:**
- Stolzl files in `src/fonts/` (Chris confirms)
- `src/fonts.css` has @font-face for Book + Medium
- Google Fonts link includes Inter, DM Serif Display, IBM Plex Mono — NOT JetBrains
- Body text in Inter (Chris verifies)
- No JetBrains references anywhere

---

### Part 4 — Bible discipline scaffolding

**Goal:** Discipline pattern in place from day one.

**Files touched:**
- `CLAUDE.md` (new)
- `STATUS.md` (new)
- `docs/briefs/active/` (new, with `.gitkeep`)
- `docs/briefs/archive/` (new, with `.gitkeep`)
- `docs/briefs/current.md` (new)
- `docs/audit/` (new, with `.gitkeep`)
- `docs/briefs/active/00_project_setup.md` (this brief lands here)

**Steps:**

4.1 Create directory structure:

```
mkdir -p docs/briefs/active
mkdir -p docs/briefs/archive
mkdir -p docs/audit
touch docs/briefs/active/.gitkeep
touch docs/briefs/archive/.gitkeep
touch docs/audit/.gitkeep
```

4.2 Land this brief at `docs/briefs/active/00_project_setup.md`.

4.3 Create `docs/briefs/current.md`:

```markdown
# Current brief

**Active:** Brief 00 — Project setup (`docs/briefs/active/00_project_setup.md`)

## History

(brief archive populates here at close)
```

4.4 Create `CLAUDE.md` at project root:

```markdown
# CLAUDE.md — nzai-demo

Read by Claude Code at the start of every session. Updated as briefs add Module Scopes or amend Process Rules.

## What this project is

`nzai-demo` is the NZA Report Template v1 implementation, plus an interactive net zero strategy demo built on top of it. The template is the canonical starting point for every NZA web-based client report; the demo is a fictional-client sales asset.

References:
- NZA Report Template v1 design specification: https://www.notion.so/367d645e05cc810c94b9de261048d84f
- NZA Studio: https://www.notion.so/349d645e05cc81e99ed6f09a9866bed9
- NZA Brand: https://www.notion.so/349d645e05cc81de9123ca8a68258d3a

## Environment

- **Local path:** `C:\Users\ChrisScott\Dev\nzai-demo`
- **GitHub:** `chrisscott06/nzai-demo` (public)
- **Dev server:** `npm run dev` (default Vite port, typically 5173)
- **Stack:** React <READ FROM package.json> + Vite <ditto> + Tailwind v4

> When authoring CLAUDE.md in Part 4, read the actual React and Vite versions from `package.json` and substitute. Do not guess. (Amendment 2.)

## Process Rules

### Rule 1 — Brief discipline
Every non-trivial body of work is a brief in `docs/briefs/active/<NN>_<topic>.md`. Briefs land on disk as Part 1's first commit. `docs/briefs/current.md` tracks the active brief. On close, brief moves to `docs/briefs/archive/` with `_COMPLETED.md` suffix.

### Rule 2 — Session-start reconciliation
At session start, Claude Code runs:
- `ls docs/briefs/active/`
- `cat docs/briefs/current.md`
- `tail -50 STATUS.md`
- `git log --oneline -20`

Cross-check that all four agree. If any disagree, first commit is the cleanup.

### Rule 3 — One Part = one commit
Each Part is one commit including STATUS.md update (and audit-doc update if applicable). No partial commits.

### Rule 4 — No `npm install` from Claude Code
Claude Code runs on Linux; npm packages are platform-specific. Add to `package.json` only and tell Chris to run `npm install` locally.

### Rule 5 — Browser verification at brief close
Every brief has a falsifiability target verified in browser. Code-side reasoning misses UX-layer issues.

### Rule 6 — Notion design notes are canonical
For non-trivial work, the architectural decision lives in a Notion design note BEFORE the brief is written. The note wins on disagreement. The NZA Report Template v1 design specification is canonical for this project.

### Rule 7 — JetBrains Mono is excluded
Mono role is IBM Plex Mono. JetBrains Mono is not imported, installed, or referenced. If a future component appears to need a monospace font, use IBM Plex Mono via `FONT_MONO` or `font-mono`.

## Design system reference

Token architecture in `src/tokens/`:
- `anchors.js` — Tier 1 (NZA Coral, NZA Cream)
- `themes/theme.core.js` — Tier 2 (active theme: NZA Core)
- `methodology.js` — Tier 3 (risk, scopes, DQ, categorical)
- `colors.js` — active palette entry point
- `fonts.js` — font family constants
- `motion.js` — motion tokens

Tailwind classes generated from `@theme` block in `src/index.css`. Three-tier colour system, closed type scale (9 tokens), closed opacity ladder (5 tiers), closed surface alpha set (2 tiers), four named motion patterns.

Full architectural detail: https://www.notion.so/367d645e05cc810c94b9de261048d84f

## What not to touch

- Token files (`src/tokens/`) without a brief authorising the change
- `@theme` block in `src/index.css` without a brief
- Page archetype definitions (once Brief 01 lands them)
- Anything that would introduce JetBrains Mono

## Lessons applied from PABLO 2.0 / NZA-Sim / EOC audit

- Develop locally; not on OneDrive
- Folder names no spaces
- Old code deleted before new written
- No `npm install` from Claude Code
- Briefs land on disk before any work begins
- Audit before fix
- Visual fidelity is the falsifiability target for refactor work
- Every input change produces a predictable visible change
- Boundary-mismatch as a recurring bug family
```

4.5 Create `STATUS.md` at project root:

```markdown
# STATUS.md — nzai-demo

Updated after every completed Part. Bridges sessions.

## Current state

**Last commit:** <SHA, updated as commit lands>
**Brief:** Brief 00 — Project setup (Part 4 of 5)
**State:** Fresh Vite + React + Tailwind v4 project initialised. Token system in place. Fonts installed (Stolzl, Inter, DM Serif Display, IBM Plex Mono). Discipline scaffolding established.

## What works

- Vite + React + Tailwind v4 boots cleanly
- Token system implemented (anchors, theme.core, methodology, colors, fonts, motion)
- @theme block populated; Tailwind classes available
- Stolzl Book + Medium loaded via @font-face
- Inter, DM Serif Display, IBM Plex Mono loaded via Google Fonts
- JetBrains Mono explicitly excluded
- CLAUDE.md, STATUS.md, docs/ scaffolding in place

## What's pending

- Part 5: minimal page exercising the token system
- Part 6: walkthrough + close
- Brief 01 (follow-on): seven page archetypes + 12 canonical components
- Brief 02 (follow-on): section types
- Brief 03 (follow-on): demo content (fictional Meridian-style client)
- Brief 04 (follow-on): hosting, password, analytics

## Known issues

None.

## Suggestions

- IBM Plex Mono confirmed per Brief 00; revisit if a better candidate emerges in Brief 01
- Build-time @theme generation from JS tokens (currently manual mirroring) — deferred
```

4.6 Commit:

```
git add -A
git commit -m "Brief 00 Part 4: Bible discipline scaffolding

CLAUDE.md at project root with Process Rules 1–7, environment
details, design system reference, lessons applied.

STATUS.md with current state, what works, what's pending.

docs/briefs/{active,archive}/ and docs/audit/ created with
.gitkeep placeholders.

docs/briefs/current.md points at this brief.

Brief itself at docs/briefs/active/00_project_setup.md."

git push
```

**Checkpoint criteria:**
- `CLAUDE.md` and `STATUS.md` exist with correct content
- `docs/briefs/active/00_project_setup.md` is this brief
- `docs/briefs/current.md` points correctly
- `docs/briefs/archive/` and `docs/audit/` exist
- Commits pushed

---

### Part 5 — Minimal "hello world" page

**Goal:** A single page using every part of the foundation. Confirms the system works end-to-end.

**Files touched:**
- `src/App.jsx` (replaced)
- `STATUS.md` (updated)

**Steps:**

5.1 Replace `src/App.jsx`:

```jsx
export default function App() {
  return (
    <div className="fixed inset-0 bg-theme-base text-theme-body overflow-hidden">
      {/* Masthead */}
      <header className="absolute top-0 left-0 right-0 h-12 border-b border-nza-cream/10 flex items-center justify-between px-12">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border border-nza-cream/30" aria-label="NZA mark placeholder" />
          <span className="font-heading text-xs uppercase tracking-widest text-nza-cream/70">
            Net Zero Advisory
          </span>
        </div>
        <div className="font-heading text-xs uppercase tracking-widest text-theme-accent-primary">
          Project Setup <span className="ml-3 text-nza-cream/50">0.0</span>
        </div>
      </header>

      {/* Vertical client wordmark — left edge */}
      <div className="absolute left-0 top-12 bottom-8 w-8 flex items-center justify-center">
        <span className="font-heading text-xs uppercase tracking-widest text-nza-cream/30 -rotate-90 whitespace-nowrap">
          Demo
        </span>
      </div>

      {/* Content area */}
      <main className="absolute top-12 bottom-8 left-8 right-0 flex items-center justify-center px-24">
        <div className="max-w-2xl space-y-8">
          <p className="font-hero text-sm text-theme-accent-primary uppercase tracking-widest">
            NZA Report Template v1
          </p>
          <h1 className="font-heading text-5xl text-nza-cream">
            Foundation in place
          </h1>
          <div className="h-0.5 w-24 bg-theme-accent-primary" />
          <p className="font-body text-base text-nza-cream/70 leading-relaxed">
            Token system implemented per NZA Studio's three-tier architecture.
            Fonts loaded: Stolzl, Inter, DM Serif Display, IBM Plex Mono.
            Discipline scaffolding established. Ready for Brief 01 — template
            structure.
          </p>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <span className="font-display text-4xl text-nza-cream">01</span>
              <span className="font-body text-xs text-nza-cream/50 ml-2 uppercase tracking-widest">
                Brief
              </span>
            </div>
            <div className="font-mono text-xs text-nza-cream/50">
              NZA-XX-XX-RP-X-0001_P01
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <div className="w-3 h-3 rounded-full bg-risk-low" aria-label="Low risk" />
            <div className="w-3 h-3 rounded-full bg-risk-moderate" aria-label="Moderate risk" />
            <div className="w-3 h-3 rounded-full bg-risk-major" aria-label="Major risk" />
            <span className="font-body text-xs text-nza-cream/50 ml-2">
              Methodology colours active
            </span>
          </div>

          <button className="bg-nza-coral text-nza-cream font-heading text-sm uppercase tracking-widest px-6 py-3 rounded mt-4">
            Start a Conversation
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 h-8 border-t border-nza-cream/10 flex items-center justify-between px-12">
        <span className="font-heading text-xs uppercase tracking-widest text-nza-cream/50">
          NZA Consultancy Ltd
        </span>
        <span className="font-heading text-xs uppercase tracking-widest text-nza-cream/50">
          Demo  |  Project Setup  |  NZA-XX-XX-RP-X-0001_P01  |  01
        </span>
      </footer>
    </div>
  );
}
```

This is single-file, single-page. It does NOT use canonical components — those come in Brief 01. It DOES use every part of the token system, font system, and page chrome pattern from the design spec.

5.2 Surface to Chris: verify in browser that the page renders correctly. Specifically:
- Landscape canvas fills viewport; no scrollbars
- Masthead, footer, vertical wordmark positioned correctly
- All five fonts visible (Stolzl heading, Stolzl Book lead, Inter body, DM Serif "01", IBM Plex Mono doc ref)
- Three methodology dots in correct colours (green, amber, red)
- Coral CTA button
- Accent stripe in pink/coral (`theme.accents.primary`)

5.3 Run the falsifiability checks:

```
# No raw hex outside src/tokens/ and src/index.css:
grep -rn "#[0-9a-fA-F]\{3,6\}" src/ --include="*.jsx" --include="*.css" | grep -v "src/tokens/" | grep -v "fonts.css" | grep -v "@theme"

# No JetBrains anywhere:
grep -rn "JetBrains" .
```

Both should return zero results.

5.4 Update `STATUS.md`:
- Last commit: <SHA>
- State: minimal page renders; token system verified end-to-end; ready to close
- Pending: Part 6 close

5.5 Commit:

```
git add -A
git commit -m "Brief 00 Part 5: Minimal page exercising token system

src/App.jsx renders a single landscape canvas demonstrating the
foundation:

- Fixed landscape canvas (no page scroll)
- Masthead with NZA mark area + descriptor + section identifier
- Vertical 'DEMO' wordmark on left edge
- Footer with NZA Consultancy Ltd + doc ref + page number
- All five fonts loaded and visible: Stolzl Medium, Stolzl Book,
  Inter, DM Serif Display, IBM Plex Mono
- Token system used end-to-end: bg-theme-base, text-theme-body,
  bg-nza-coral, bg-theme-accent-primary, bg-risk-{low,moderate,major}
- Three methodology colour dots
- Coral CTA (nzaCoral anchor)
- Accent stripe (theme.accents.primary)

Falsifiability verified:
- grep for raw hex outside src/tokens/ returns zero
- grep for JetBrains returns zero
- All spacing is 8px-grid Tailwind tokens

Page demonstrates foundation; canonical components come in Brief 01."

git push
```

**Checkpoint criteria:**
- Page renders correctly (Chris verifies)
- Five fonts visible
- No raw hex in `src/`
- Methodology dots in correct colours
- No JetBrains references
- Page chrome per design spec

---

### Part 6 — Walkthrough + close

**Goal:** Chris confirms Brief 00 is complete. Brief archived.

**Files touched:**
- `docs/briefs/active/00_project_setup.md` → `docs/briefs/archive/00_project_setup_COMPLETED.md`
- `docs/briefs/current.md` — pointer updated to "No active brief"
- `STATUS.md` — final close-out

**Walkthrough Chris runs (12 items):**

1. `C:\Users\ChrisScott\Dev\nzai-demo` exists with a fresh Vite + React + Tailwind v4 project
2. GitHub repo `chrisscott06/nzai-demo` exists (private) with 5+ commits pushed
3. `src/tokens/` directory exists with all six files
4. `src/index.css` `@theme` block has all token custom properties
5. `npm run dev` starts cleanly; renders the page
6. Page shows landscape canvas with no scrollbars
7. All five fonts visible: Stolzl Medium heading, Stolzl Book lead, Inter body, DM Serif Display "01", IBM Plex Mono doc ref
8. Three methodology colour dots render correctly (green, amber, red)
9. Coral CTA button + pink/coral accent stripe render correctly
10. `grep -rn "#[0-9a-fA-F]\{3,6\}" src/ --include="*.jsx"` returns zero outside `src/tokens/`
11. `grep -rn "JetBrains" .` returns zero
12. `CLAUDE.md` and `STATUS.md` reflect the foundation state correctly

If all 12 pass → close commit.
If anything fails → log, fix, re-verify.

**Final report Claude Code produces after sign-off:**

1. GitHub repo URL: `https://github.com/chrisscott06/nzai-demo`
2. Local path: `C:\Users\ChrisScott\Dev\nzai-demo`
3. Commits on main: 6 (Parts 1–5 + Close)
4. Stack: Vite + React + Tailwind v4 + Stolzl/Inter/DM Serif/IBM Plex Mono
5. EOC repo state: untouched (no code copied; visual reference only)
6. Token system: implemented per NZA Studio three-tier architecture
7. JetBrains Mono: confirmed zero references
8. Discipline scaffolding: in place
9. Falsifiability: minimal page exercises every part of the foundation
10. Ready for: Brief 01 — template structure

**Commit message (after sign-off):**

```
Brief 00 close: nzai-demo foundation complete

Fresh Vite + React + Tailwind v4 project at
C:\Users\ChrisScott\Dev\nzai-demo, remote at
https://github.com/chrisscott06/nzai-demo (private).

Token system implements NZA Studio's three-tier architecture
(anchors, themes/theme.core, methodology). Fonts: Stolzl Book +
Medium, Inter variable, DM Serif Display, IBM Plex Mono.
JetBrains Mono explicitly excluded.

Discipline scaffolding (CLAUDE.md, STATUS.md, docs/) per Bible
established from day one.

Minimal hello-world page demonstrates token system end-to-end:
landscape canvas, page chrome, all five fonts, three methodology
colours, coral CTA, accent stripe.

EOC repo untouched throughout. No code copied. Visual reference only.

Brief archived. Ready for Brief 01: template structure
(page archetypes and canonical components).
```

---

## What MUST NOT happen in this brief

- **No code copied from EOC.** Visual reference only.
- **No JetBrains Mono.** Anywhere. Mono role is IBM Plex Mono.
- **No new themes beyond NZA Core.** PABLO, NZ:AI, decodED later.
- **No canonical components built.** PreviewBanner, Modal, Drawer, RiskIndicator etc. are Brief 01.
- **No page archetypes implemented.** Cover, Contents, SectionDivider etc. are Brief 01. Part 5's page is a demonstration, not an archetype.
- **No `npm install` from Claude Code.** Chris runs all npm locally.
- **No partial commits.** Five Parts, five commits, plus close.
- **No skipping browser verification.** Part 6 has a 12-item walkthrough.
- **No design improvisation.** Design spec is canonical. If something needs implementing and isn't in the spec, surface to Chris before improvising.

---

## When to escalate

Pause and surface to Chris if:

- The fresh Vite + React + Tailwind v4 project fails to initialise (likely Node version or v4 compatibility surprise)
- Stolzl font files are unavailable (Part 3 pauses; remaining parts proceed with system-ui fallback for headings until supplied)
- Tailwind v4's `@theme` block doesn't behave as expected (v4 is recent; behaviour may differ from v3 documentation)
- `gh repo create` fails (likely authentication or naming collision)
- The minimal page fails to render despite correct code (suggests a deeper Vite/Tailwind issue worth diagnosing)
- Any temptation arises to copy code from EOC or import JetBrains Mono — non-starters; surface immediately

Otherwise, plough through Parts 1–5, walkthrough at Part 6.

---

## Notes on what comes next

Once Brief 00 closes, the queued follow-on briefs (in order):

- **Brief 01 — Template structure.** The seven page archetypes (Cover, Contents, SectionDivider, NarrativeOnly, NarrativePlusData, DataFocused, Comparison/Matrix) and the 12 canonical components (PageShell, SplitPanel, Callout, RiskIndicator, DataQualityBadge, MethodologyAccordion, StatBlock, Modal, Drawer, ScrollHint, etc.). Replaces the minimal Part 5 page with proper archetypes.
- **Brief 02 — Section types.** Executive summary, data quality / methodology, emissions inventory, the trajectory, interventions / strategy, financials, next steps. Built using Brief 01's components.
- **Brief 03 — Demo content.** Fictional Meridian-style client, realistic data, narrative arc. The sales asset.
- **Brief 04 — Hosting, password, analytics, conversion.** Production deployment with engagement tracking.

Brief 00 is the foundation everything else builds on. Standing by for authorisation to begin Part 1.
