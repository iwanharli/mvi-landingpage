import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import { useLocale, InternalLink } from '../LocaleContext'
import { findSector } from '../content'

export default function SectorDetail({ slug }: { slug: string }) {
  const { locale, t, setPageMeta } = useLocale()
  const sector = findSector(locale, slug)

  useEffect(() => {
    if (!sector) return

    setPageMeta({
      title: `${sector.title} — ${t.meta.title}`,
      description: sector.detail.regulationSummary,
      canonicalPath: `${locale === 'en' ? '/en' : ''}/${t.sectorPage.pathSegment}/${slug}`,
    })

    return () => setPageMeta(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sector, locale])

  if (!sector) {
    return (
      <section className="mvi-container flex min-h-[70vh] flex-col items-center justify-center py-28 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-text">404</p>
        <h1 className="mt-4 text-2xl font-bold text-navy">
          {locale === 'en' ? 'Page not found' : 'Halaman tidak ditemukan'}
        </h1>
        <InternalLink
          href={locale === 'en' ? '/en' : '/'}
          className="mt-8 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
        >
          {locale === 'en' ? 'Back to home' : 'Kembali ke beranda'}
        </InternalLink>
      </section>
    )
  }

  const { detail } = sector

  return (
    <article>
      {/* Header */}
      <header className="relative overflow-hidden bg-navy pb-16 pt-32 sm:pb-20 sm:pt-40">
        <img
          src={sector.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/70" />

        <div className="mvi-container relative">
          <InternalLink
            href={locale === 'en' ? '/en#sectors' : '/#sectors'}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            {t.sectorPage.backLabel}
          </InternalLink>

          <p className="mvi-fade-up mt-6 text-xs font-bold uppercase tracking-[0.22em] text-teal">
            {sector.mandate}
          </p>
          <h1 className="mvi-fade-up mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {sector.title}
          </h1>
          <p className="mvi-fade-up mt-6 max-w-2xl text-sm leading-relaxed text-navy-100 sm:text-base">
            {sector.desc}
          </p>
        </div>
      </header>

      {/* Ringkasan regulasi */}
      <section className="border-b border-navy-100 bg-white py-10 sm:py-12">
        <div className="mvi-container">
          <Reveal>
            <div className="rounded-2xl border border-teal/25 bg-teal/5 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-text">
                {t.sectorPage.regulationLabel}
              </p>
              <h2 className="mt-2 text-lg font-bold text-navy sm:text-xl">
                {detail.regulationName}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-navy/75 sm:text-base">
                {detail.regulationSummary}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Narasi + Linimasa berdampingan */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mvi-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="space-y-5">
                {detail.intro.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-navy/75 sm:text-base">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl bg-navy-50 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-navy sm:text-2xl">
                  {locale === 'en' ? 'Regulatory Timeline' : 'Linimasa Regulasi'}
                </h2>

                <ol className="relative mt-8 space-y-7 border-l-2 border-navy-100 pl-7">
                  {detail.timeline.map((entry) => (
                    <li key={entry.date} className="relative">
                      <span
                        className={`absolute -left-[2.15rem] flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-navy-50 ${
                          entry.done ? 'bg-navy/40' : 'bg-teal'
                        }`}
                      >
                        <span className="h-2 w-2 rounded-full bg-white" />
                      </span>
                      <p className="text-xs font-bold uppercase tracking-wide text-teal-text">
                        {entry.date}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-navy/80">
                        {entry.label}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Data wajib */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mvi-container">
          <Reveal>
            <h2 className="text-xl font-bold text-navy sm:text-2xl">
              {detail.requiredDataHeading}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {detail.requiredData.map((d, i) => (
              <Reveal key={d.label} delay={(i % 2) * 100}>
                <div className="h-full rounded-2xl border border-navy-100 bg-navy-50 p-6">
                  <h3 className="text-base font-bold text-navy">{d.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/70">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="mvi-container">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="text-xl font-bold text-navy sm:text-2xl">{detail.faqHeading}</h2>
            </Reveal>

            <div className="mt-8 space-y-4">
              {detail.faq.map((f, i) => (
                <Reveal key={f.q} delay={i * 90}>
                  <details className="group rounded-xl border border-navy-100 bg-white p-5 open:shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-navy sm:text-base">
                      {f.q}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 text-teal transition-transform duration-300 group-open:rotate-45"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-navy/70">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sumber */}
      <section className="bg-white py-12 sm:py-14">
        <div className="mvi-container">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-text">
              {detail.sourcesHeading}
            </p>
            <ul className="mt-4 space-y-2">
              {detail.sources.map((src) => (
                <li key={src.url}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-start gap-1.5 text-sm text-navy/65 underline decoration-navy-100 underline-offset-4 transition-colors hover:text-teal-text hover:decoration-teal/50"
                  >
                    {src.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true">
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16 sm:py-20">
        <div className="mvi-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-bold text-white sm:text-2xl">{detail.ctaHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-100 sm:text-base">
              {detail.ctaDesc}
            </p>
            <InternalLink
              href={locale === 'en' ? '/en#contact' : '/#contact'}
              className="mt-8 inline-flex rounded-full bg-teal px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600"
            >
              {t.hero.primaryCta}
            </InternalLink>
          </div>
        </div>
      </section>
    </article>
  )
}
