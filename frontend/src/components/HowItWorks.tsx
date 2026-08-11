import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { useT } from '../LocaleContext'

export default function HowItWorks() {
  const { how } = useT()

  return (
    <section id="how" className="bg-navy-50 py-20 sm:py-28">
      <div className="mvi-container">
        <SectionHeading
          light={how.headingLight}
          bold={how.headingBold}
          desc={how.desc}
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {how.items.map((s, i) => (
            <li key={s.n} className="relative flex">
              <Reveal delay={i * 90} className="flex w-full">
                <article className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className="relative">
                    <img
                      src={s.image}
                      alt=""
                      loading="lazy"
                      className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Tint navy tipis agar keempat foto terasa satu keluarga */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-navy/25 mix-blend-multiply"
                    />
                    <span className="absolute -bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-sm font-bold text-white shadow-lg ring-4 ring-white">
                      {s.n}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col px-6 pb-7 pt-10">
                    <h3 className="text-base font-bold text-navy">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>

              {/* Penghubung antar tahap */}
              {i < how.items.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-4 top-20 z-10 hidden text-teal-text lg:block"
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
