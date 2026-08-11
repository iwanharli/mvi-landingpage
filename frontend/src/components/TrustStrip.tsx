import { useT } from '../LocaleContext'

export default function TrustStrip() {
  const t = useT()

  return (
    <section
      aria-label={t.trust.ariaLabel}
      className="border-y border-navy-100 bg-linear-to-r from-white via-navy-50/60 to-white"
    >
      <div className="mvi-container grid gap-6 py-7 md:grid-cols-[0.85fr_2fr] md:items-center md:gap-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-text">
            {t.trust.eyebrow}
          </p>
          <p className="mt-2 text-sm font-semibold leading-snug text-navy">
            {t.trust.line}
          </p>
        </div>

        <div className="mvi-marquee-viewport overflow-hidden">
          <ul className="mvi-marquee-track flex items-center gap-3">
            {/* Salinan pertama: dibaca pembaca layar */}
            {t.about.standards.map((standard) => (
              <Badge key={standard} label={standard} />
            ))}
            {/* Salinan kedua: hanya untuk kemulusan loop */}
            {t.about.standards.map((standard) => (
              <Badge key={`dup-${standard}`} label={standard} duplicate />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Badge({ label, duplicate = false }: { label: string; duplicate?: boolean }) {
  return (
    <li
      aria-hidden={duplicate || undefined}
      className={`flex min-h-12 shrink-0 items-center justify-center whitespace-nowrap rounded-lg border border-navy-100 bg-white px-5 text-center text-sm font-bold text-navy/75 shadow-xs transition-colors duration-300 hover:border-teal/50 hover:text-teal-text ${
        duplicate ? 'mvi-marquee-dup' : ''
      }`}
    >
      {label}
    </li>
  )
}
