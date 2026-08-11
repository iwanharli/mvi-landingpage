import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { useT } from '../LocaleContext'

export default function Why() {
  const { why } = useT()

  return (
    <section id="why" className="bg-navy py-20 sm:py-28">
      <div className="mvi-container">
        <SectionHeading
          light={why.headingLight}
          bold={why.headingBold}
          desc={why.desc}
          invert
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {why.items.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 100} className="flex">
              <article className="group flex w-full flex-col overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/10 hover:ring-teal/40 sm:flex-row">
                <div className="sm:w-2/5 sm:shrink-0">
                  <img
                    src={w.image}
                    alt=""
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
                  />
                </div>
                <div className="flex-1 p-7">
                  <h3 className="text-lg font-bold leading-snug text-white">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-100 sm:text-base">
                    {w.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
