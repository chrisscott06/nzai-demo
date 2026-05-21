import BodyPageLayout from '../components/BodyPageLayout';

/**
 * Home — equivalent of EOC's landing page, in the cream/dark editorial register.
 * Two-column layout: narrative left (placeholder report title + lead + buttons),
 * donut/graphic placeholder right. Pop-out executive-summary card.
 *
 * Per Chris's 2026-05-21 cream redirect.
 */
export default function Home({ onNavigate }) {
  return (
    <BodyPageLayout activePrimary="home" activeSecondary={null} onNavigate={onNavigate}>
      <div className="h-full max-w-7xl mx-auto px-8 py-12 grid gap-16" style={{ gridTemplateColumns: 'minmax(360px, 520px) 1fr' }}>
        {/* Left — narrative */}
        <div className="flex flex-col justify-center min-h-0">
          <p className="font-heading text-subheading text-theme-accent-primary uppercase tracking-widest mb-4">
            Net Zero Strategy
          </p>
          <h1 className="font-heading text-chapter text-theme-base mb-6">
            A working demonstration of the NZA Report Template.
          </h1>
          <p className="font-body text-body text-theme-base/70 mb-3">
            This is the cream/dark editorial register applied to a placeholder
            net-zero strategy report. The structure mirrors EOC's pattern —
            two-bar nav, body-content-left, graphic-right — using the
            nzai-demo token system end to end.
          </p>
          <p className="font-body text-body text-theme-base/70 mb-8">
            Baseline year 2024/25 · 156 placeholder employees · 9 placeholder
            offices · 7 placeholder countries.
          </p>

          {/* Action stack */}
          <div className="flex flex-col gap-3 w-[260px]">
            <button
              type="button"
              onClick={() => onNavigate('explainers')}
              className="font-heading text-body font-medium px-4 py-3 rounded-lg bg-theme-accent-primary text-nza-cream hover:bg-theme-accent-primary/90 transition-colors text-left"
            >
              Take me to the strategy →
            </button>
            <button
              type="button"
              onClick={() => onNavigate('explainers')}
              className="font-heading text-body font-medium px-4 py-3 rounded-lg border border-theme-base/20 text-theme-base/70 hover:bg-theme-base/5 transition-colors text-left"
            >
              Let me explore →
            </button>
          </div>
        </div>

        {/* Right — donut placeholder + pop-out exec summary card */}
        <div className="relative flex items-center justify-center min-h-0">
          {/* Donut placeholder — circular border with internal hub */}
          <div className="w-[380px] h-[380px] rounded-full border-[24px] border-theme-base/10 flex items-center justify-center">
            <div className="text-center">
              <div className="font-heading text-chapter text-theme-base">488</div>
              <div className="font-mono text-body text-theme-base/50 mt-1">
                tCO₂e
              </div>
              <div className="font-heading text-xs uppercase tracking-widest text-theme-base/40 mt-2">
                Inventory · Placeholder
              </div>
            </div>
          </div>

          {/* Pop-out exec summary card — bottom-right, anchored to donut */}
          <div className="absolute bottom-6 -right-4 max-w-[280px] bg-theme-base text-nza-cream rounded-xl shadow-2xl px-5 py-4">
            <div className="font-heading text-xs uppercase tracking-widest text-theme-accent-primary mb-2">
              Executive Summary
            </div>
            <p className="font-body text-body text-nza-cream/80 leading-snug">
              Placeholder pop-out. In a real report this card carries the
              one-paragraph strategic narrative the client wants on the cover.
            </p>
          </div>
        </div>
      </div>
    </BodyPageLayout>
  );
}
