// Font family constants for use in SVG inline styles, Recharts props, and
// any other place where a Tailwind class won't reach. Tailwind classes
// (font-heading, font-body, etc.) are generated from @theme in index.css.
//
// JetBrains Mono is explicitly NOT used. Mono role is IBM Plex Mono.
// (Design spec § Typography — family table contains a drafting bug listing
// JetBrains; the prose immediately below resolves to IBM Plex Mono. This
// file follows the prose and Chris's standing instruction.)

export const FONT_HEADING = "'Stolzl', sans-serif";        // Stolzl Medium 500
export const FONT_HERO = "'Stolzl', sans-serif";           // Stolzl Book 400
export const FONT_BODY = "'Inter', system-ui, sans-serif"; // Inter variable
export const FONT_DISPLAY = "'DM Serif Display', serif";   // Editorial accents
export const FONT_MONO = "'IBM Plex Mono', ui-monospace, monospace";
