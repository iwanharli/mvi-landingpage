import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { useLocale, InternalLink } from '../LocaleContext'
import { sectorPath } from '../content'

export default function Sectors() {
  const { locale, t } = useLocale()
  const { sectors } = t

  return (
    <section id="sectors" className="bg-white py-20 sm:py-28">
      <div className="mvi-container">
        <SectionHeading
          light={sectors.headingLight}
          bold={sectors.headingBold}
          desc={sectors.desc}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {sectors.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="flex">
              <InternalLink
                href={sectorPath(locale, s.slug)}
                className="group flex w-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-[13px] font-semibold uppercase tracking-wide text-teal-text sm:text-sm">
                    {s.mandate}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/70 sm:text-base">
                    {s.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-text">
                    {t.sectorPage.detailCta}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </InternalLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
