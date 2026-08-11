import Reveal from './Reveal'
import { useT } from '../LocaleContext'

export default function About() {
  const { about } = useT()

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-linear-to-b from-white via-navy-50/40 to-white py-20 sm:py-28"
    >
      {/* Latar aurora: tiga bidang warna buram yang mengapung sangat pelan */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="mvi-aurora-a absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-teal/12 blur-3xl" />
        <div className="mvi-aurora-b absolute -right-20 top-1/4 h-[30rem] w-[30rem] rounded-full bg-navy/10 blur-3xl" />
        <div className="mvi-aurora-c absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-teal/8 blur-3xl" />
      </div>

      <div className="mvi-container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-text">
                {about.eyebrow}
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-snug text-navy sm:text-3xl lg:text-4xl">
                {about.heading}
              </h2>
              <div className="mt-6 h-1 w-16 rounded-full bg-teal" />

              <p className="mt-8 text-base leading-relaxed text-navy sm:text-lg">
                {about.body[0]}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-navy/70 sm:text-base">
                {about.body[1]}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2">
                {about.standards.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-navy-100 bg-navy-50 px-3.5 py-1.5 text-xs font-semibold text-navy/70 transition-colors duration-300 hover:border-teal/40 hover:text-teal-text"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -bottom-5 -right-5 hidden h-40 w-40 rounded-2xl bg-teal/10 lg:block" />
              <img
                src={about.image}
                alt=""
                loading="lazy"
                className="relative aspect-4/3 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </Reveal>
        </div>

        {/* Visi & Misi */}
        <div className="mt-20 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-2xl bg-navy p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
                {about.visionLabel}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-white sm:text-lg">
                {about.vision}
              </p>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <div className="h-full rounded-2xl border border-navy-100 bg-navy-50 p-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-teal-text">
                {about.missionLabel}
              </h3>
              <ol className="mt-5 space-y-5">
                {about.mission.map((m, i) => (
                  <li key={m} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-navy/80 sm:text-base">
                      {m}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
