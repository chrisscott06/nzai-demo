import BodyPageLayout from '../components/BodyPageLayout';

const SUB_PAGES = [
  {
    key: 'carbon-accounting',
    title: 'Carbon Accounting',
    blurb: 'How the inventory is built, what counts as Scope 1, 2, 3, and where this firm sits in the standard.',
  },
  {
    key: 'net-zero',
    title: 'Net Zero',
    blurb: 'What net zero means in climate science, why it is not the same as carbon neutrality, and how SBTi frames it.',
  },
  {
    key: 'interventions',
    title: 'Interventions',
    blurb: 'Active Decarbonisation, Data Improvement, Governance — the three-component intervention pattern.',
  },
  {
    key: 'data-quality',
    title: 'Data Quality',
    blurb: 'Why some numbers carry more confidence than others, and how the inventory improves as data sharpens.',
  },
  {
    key: 'methodology',
    title: 'Methodology',
    blurb: 'Conversion factors, assumptions, limitations, and recommended improvements per emissions category.',
  },
];

/**
 * Explainers — chapter opener page in the cream/dark editorial register.
 * Per Chris's redirect: chapter title large, subtitle below, intro paragraph,
 * row of clickable cards for each sub-page.
 */
export default function Explainers({ onNavigate }) {
  return (
    <BodyPageLayout activePrimary="explainers" activeSecondary={null} onNavigate={onNavigate}>
      <div className="h-full max-w-7xl mx-auto px-8 py-12 overflow-y-auto">
        {/* Chapter header */}
        <div className="mb-10 max-w-3xl">
          <p className="font-heading text-subheading text-theme-accent-primary uppercase tracking-widest mb-3">
            Chapter 1
          </p>
          <h1 className="font-heading text-chapter text-theme-base mb-3">
            Explainers
          </h1>
          <p className="font-body text-chapter-sub text-theme-base/60 mb-6">
            The conceptual ground beneath the numbers — five short reads.
          </p>
          <p className="font-body text-body text-theme-base/70 max-w-2xl">
            Every number in this report sits on top of a methodology, a
            framework, and a set of assumptions. This chapter walks through
            them. Read in order or jump to a topic — each section stands on
            its own.
          </p>
        </div>

        {/* Sub-page cards — grid of five, each clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SUB_PAGES.map(({ key, title, blurb }) => (
            <button
              key={key}
              type="button"
              onClick={() => onNavigate('explainers', key)}
              className="text-left bg-nza-cream border border-theme-base/15 rounded-xl px-5 py-5 hover:border-theme-accent-primary/50 hover:bg-theme-base/[0.02] transition-all group"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="font-heading text-subheading text-theme-base group-hover:text-theme-accent-primary transition-colors">
                  {title}
                </h2>
                <span className="font-heading text-xs uppercase tracking-widest text-theme-base/40 group-hover:text-theme-accent-primary transition-colors">
                  Read →
                </span>
              </div>
              <p className="font-body text-body text-theme-base/65 leading-snug">
                {blurb}
              </p>
            </button>
          ))}
        </div>
      </div>
    </BodyPageLayout>
  );
}
