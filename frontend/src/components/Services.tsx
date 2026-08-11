import { useRef, useState } from 'react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { useT } from '../LocaleContext'

export default function Services() {
  const t = useT()
  const services = t.services.items
  const [active, setActive] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Navigasi panah antar tab, sesuai pola ARIA tabs
  function onKeyDown(e: React.KeyboardEvent) {
    const last = services.length - 1
    let next: number | null = null

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = last

    if (next !== null) {
      e.preventDefault()
      setActive(next)
      tabRefs.current[next]?.focus()
    }
  }

  return (
    <section id="services" className="bg-navy-50 py-20 sm:py-28">
      <div className="mvi-container">
        <SectionHeading
          light={t.services.headingLight}
          bold={t.services.headingBold}
          desc={t.services.desc}
        />

        <Reveal>
          <div className="mt-14 grid overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-100 lg:grid-cols-[minmax(17rem,0.85fr)_1.6fr]">
            {/* Daftar layanan */}
            <div
              role="tablist"
              aria-label={t.services.tablistLabel}
              onKeyDown={onKeyDown}
              className="grid gap-2 border-b border-navy-100 p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-1 lg:grid-rows-4 lg:border-b-0 lg:border-r"
            >
              {services.map((s, i) => {
                const isActive = i === active

                return (
                  <button
                    key={s.title}
                    ref={(el) => {
                      tabRefs.current[i] = el
                    }}
                    type="button"
                    role="tab"
                    id={`service-tab-${i}`}
                    aria-selected={isActive}
                    aria-controls="service-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`group flex h-full w-full items-start gap-4 rounded-xl p-4 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal lg:items-center ${
                      isActive
                        ? 'bg-navy text-white'
                        : 'bg-navy-50 text-navy hover:bg-navy-100'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors duration-300 lg:mt-0 ${
                        isActive
                          ? 'bg-teal text-white'
                          : 'bg-white text-teal-text ring-1 ring-navy-100'
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-bold leading-snug lg:text-lg">
                        {s.short}
                      </span>
                      <span
                        className={`mt-1 block text-[13px] leading-relaxed lg:text-sm ${
                          isActive ? 'text-navy-100' : 'text-navy/70'
                        }`}
                      >
                        {s.subtitle}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Semua panel ditumpuk pada sel grid yang sama, sehingga tinggi
                kontainer mengikuti panel terpanjang dan tidak berubah saat
                tab berganti. Panel non-aktif memakai `invisible` (bukan
                `hidden`) agar tetap menyumbang tinggi. */}
            <div className="grid">
              {services.map((s, i) => {
                const isActive = i === active

                return (
                  <article
                    key={s.title}
                    id={isActive ? 'service-panel' : undefined}
                    role="tabpanel"
                    aria-labelledby={`service-tab-${i}`}
                    aria-hidden={!isActive}
                    className={`col-start-1 row-start-1 grid transition-opacity duration-500 ease-out lg:grid-cols-2 ${
                      isActive ? 'opacity-100' : 'invisible opacity-0'
                    }`}
                  >
                    <div className="relative min-h-64 overflow-hidden sm:min-h-72 lg:min-h-0">
                      <img
                        src={s.image}
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-linear-to-t from-navy/60 via-navy/10 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-white/25"
                      />
                    </div>

                    <div className="relative flex flex-col justify-center p-7 pb-24 sm:p-10 sm:pb-28">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-text">
                        {s.subtitle}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold leading-snug text-navy sm:text-3xl">
                        {s.title}
                      </h3>
                      <div className="mt-5 h-1 w-12 rounded-full bg-teal" />
                      <p className="mt-6 text-sm leading-relaxed text-navy/70 sm:text-base">
                        {s.desc}
                      </p>
                      <a
                        href="#contact"
                        className="absolute bottom-7 right-7 inline-flex w-fit items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-lg hover:shadow-teal/25 sm:bottom-10 sm:right-10"
                      >
                        {t.services.cta}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
