import TopNav from './TopNav';

/**
 * BodyPageLayout — cream-register page wrapper.
 *
 * Renders TopNav at the top and a content area below. Page never scrolls;
 * the children own their own scroll containers if needed (per design spec).
 *
 * Used by all three cream-register pages. Replaces the dark-register
 * PageShell that was discarded when the cream redirect landed.
 */
export default function BodyPageLayout({
  activePrimary,
  activeSecondary,
  onNavigate,
  children,
}) {
  const hasSub = !!activeSecondary || ['explainers', 'inventory', 'strategy'].includes(activePrimary);
  const contentTop = hasSub ? 'top-[97px]' : 'top-[52px]';

  return (
    <div className="fixed inset-0 bg-nza-cream text-theme-base overflow-hidden">
      <TopNav
        activePrimary={activePrimary}
        activeSecondary={activeSecondary}
        onNavigate={onNavigate}
      />
      <main className={`nza-entry absolute ${contentTop} bottom-0 left-0 right-0 overflow-hidden`}>
        {children}
      </main>
    </div>
  );
}
