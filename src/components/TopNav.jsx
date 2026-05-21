/**
 * TopNav — two-bar top navigation in the cream/dark editorial register.
 *
 * Bar 1 (primary):
 *   - Left: chapter links (Home, Explainers, Inventory, Strategy)
 *   - Right: three-logo lockup (Client × NZA × Partner placeholders)
 *   - Active primary item: coral
 *
 * Bar 2 (secondary):
 *   - Sub-page tabs for the active chapter (when available)
 *   - Active sub-tab: coral underline
 *   - Empty for chapters without sub-pages (e.g. Home)
 *
 * Modelled on EOC's Navigation + SubNav pair, re-skinned for cream + tokens.
 */

const PRIMARY_NAV = [
  { key: 'home',       label: 'Home' },
  { key: 'explainers', label: 'Explainers' },
  { key: 'inventory',  label: 'Inventory' },
  { key: 'strategy',   label: 'Strategy' },
];

const SECONDARY_NAV = {
  explainers: [
    { key: 'carbon-accounting', label: 'Carbon Accounting' },
    { key: 'net-zero',          label: 'Net Zero' },
    { key: 'interventions',     label: 'Interventions' },
    { key: 'data-quality',      label: 'Data Quality' },
    { key: 'methodology',       label: 'Methodology' },
  ],
  inventory: [
    { key: 'overview',   label: 'Overview' },
    { key: 'map',        label: 'Map' },
    { key: 'themes',     label: 'Themes' },
    { key: 'leadership', label: 'Leadership' },
  ],
  strategy: [
    { key: 'setting-the-target',    label: 'Setting the Target' },
    { key: 'the-trajectory',        label: 'The Trajectory' },
    { key: 'the-plan',              label: 'The Plan' },
    { key: 'explore-interventions', label: 'Explore Interventions' },
    { key: 'next-steps',            label: 'Next Steps' },
  ],
};

function LogoLockup() {
  // Three placeholder logo rectangles. Real lockups replace these in a
  // per-client fork (image imports through Vite get content-hashed).
  return (
    <div className="flex items-center gap-3 shrink-0 ml-auto" aria-label="Co-brand lockup">
      <span className="font-heading text-xs uppercase tracking-widest text-theme-base/40 border border-theme-base/20 px-2 py-1 rounded">
        Client Logo
      </span>
      <span className="font-light text-theme-base/20">×</span>
      <span className="font-heading text-xs uppercase tracking-widest text-theme-base/60 border border-theme-base/30 px-2 py-1 rounded">
        Net Zero Advisory
      </span>
      <span className="font-light text-theme-base/20">×</span>
      <span className="font-heading text-xs uppercase tracking-widest text-theme-base/40 border border-theme-base/20 px-2 py-1 rounded">
        Partner Logo
      </span>
    </div>
  );
}

export default function TopNav({
  activePrimary,    // 'home' | 'explainers' | 'inventory' | 'strategy'
  activeSecondary,  // sub-page key, or null
  onNavigate,       // (primaryKey, secondaryKey?) => void
}) {
  const subTabs = SECONDARY_NAV[activePrimary] || [];

  return (
    <>
      {/* Primary bar — fixed top, cream-on-cream with subtle divider */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nza-cream border-b border-theme-base/10 px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          <ul className="flex items-center gap-6">
            {PRIMARY_NAV.map(({ key, label }) => {
              const active = key === activePrimary;
              return (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => onNavigate(key)}
                    className={
                      'font-heading text-sm font-medium transition-colors ' +
                      (active
                        ? 'text-theme-accent-primary'
                        : 'text-theme-base/60 hover:text-theme-base')
                    }
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
          <LogoLockup />
        </div>
      </nav>

      {/* Secondary bar — only when the chapter has sub-pages */}
      {subTabs.length > 0 && (
        <div className="fixed top-[52px] left-0 right-0 z-40 bg-nza-cream border-b border-theme-base/10 px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-6 overflow-x-auto">
            {subTabs.map(({ key, label }) => {
              const active = key === activeSecondary;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onNavigate(activePrimary, key)}
                  className={
                    'font-heading text-sm font-medium py-3 whitespace-nowrap transition-colors border-b-2 -mb-px ' +
                    (active
                      ? 'text-theme-accent-primary border-theme-accent-primary'
                      : 'text-theme-base/50 hover:text-theme-base border-transparent')
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
