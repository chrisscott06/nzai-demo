import BodyPageLayout from '../components/BodyPageLayout';

/**
 * CarbonAccounting — Explainers sub-page in the cream/dark editorial register.
 * Body-content-left + graphic-right split. Body scrollable; graphic fixed.
 *
 * Per Chris's redirect: page heading, subheading with coral underline,
 * three or four placeholder paragraphs of plausible emissions narrative.
 */
export default function CarbonAccounting({ onNavigate }) {
  return (
    <BodyPageLayout
      activePrimary="explainers"
      activeSecondary="carbon-accounting"
      onNavigate={onNavigate}
    >
      <div
        className="h-full max-w-7xl mx-auto px-8 py-10 grid gap-10"
        style={{ gridTemplateColumns: 'minmax(320px, 420px) 1fr' }}
      >
        {/* Left — narrative, scrollable */}
        <div className="h-full overflow-y-auto pr-4">
          <h1 className="font-heading text-page-heading text-theme-base mb-8">
            How Carbon Accounting Works
          </h1>

          <h2 className="font-heading text-subheading text-theme-base inline-block">
            What this means for Demo Client
          </h2>
          <div className="h-0.5 w-16 bg-theme-accent-primary mt-2 mb-5" />

          <div className="space-y-4 font-body text-body text-theme-base/75">
            <p>
              Carbon accounting follows a simple principle: every business
              activity has a climate impact, and that impact can be measured.
              Count the activity, apply a conversion factor, and the result
              is expressed in kilograms of carbon dioxide equivalent
              (kgCO₂e). A kilowatt-hour of electricity, a kilometre of
              flight travel, a pound spent with a supplier — each has a
              corresponding factor that translates it into a climate impact.
            </p>
            <p>
              The Greenhouse Gas Protocol organises emissions into three
              scopes. Scope 1 covers direct emissions from sources the
              business owns or controls — boilers, vehicles, on-site fuel
              combustion. Scope 2 covers indirect emissions from purchased
              electricity. Scope 3 covers everything else in the value chain
              — procurement, business travel, staff commuting, the
              buildings the firm leases but does not own.
            </p>
            <p>
              For Demo Client, like most professional services firms, the
              centre of gravity is Scope 3. There is no Scope 1 inventory
              to speak of: no owned vehicles, no on-site combustion. Scope
              2 sits at about 4 percent of the total. The remaining 96
              percent is distributed across procurement, travel, and
              commuting in proportions the rest of this report explores.
            </p>
            <p>
              The fourth dimension — beyond value chain emissions — sits
              outside the formal inventory but inside the firm's
              influence. The buildings Demo Client designs or specifies
              carry far more embodied carbon than the firm's operational
              footprint. Those emissions belong to the client's inventory;
              the influence belongs to Demo Client. Walking the walk on
              operational carbon is what earns the credibility to lead on
              design carbon.
            </p>
          </div>
        </div>

        {/* Right — graphic placeholder, fixed */}
        <div className="h-full">
          <div className="h-full w-full bg-theme-base/[0.03] border border-theme-base/15 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="font-heading text-subheading text-theme-base/60 mb-2">
                Greenhouse Gases Diagram
              </div>
              <div className="font-heading text-xs uppercase tracking-widest text-theme-base/40">
                Scope 1 · Scope 2 · Scope 3 — placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </BodyPageLayout>
  );
}
