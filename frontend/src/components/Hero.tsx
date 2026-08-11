import { useT } from '../LocaleContext'

export default function Hero() {
  const t = useT()
  const { hero } = t

  return (
    <section
      id="hero"
      className="relative h-[88svh] min-h-[660px] max-h-[860px] w-full overflow-hidden sm:h-[92svh]"
    >
      <img
        src={hero.image}
        alt=""
        fetchPriority="high"
        className="mvi-ken-burns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy/70 to-navy-900/90" />

      <div className="relative mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-6 pt-20 text-center">
        <p
          className="mvi-fade-up mx-auto mb-5 w-full max-w-sm text-xs font-bold uppercase tracking-[0.25em] text-teal sm:max-w-none"
          style={{ animationDelay: '120ms' }}
        >
          {hero.eyebrow}
        </p>
        <h1
          className="mvi-fade-up mx-auto w-full max-w-sm text-2xl font-extrabold leading-tight text-white min-[420px]:text-3xl sm:max-w-4xl sm:text-4xl lg:text-5xl"
          style={{ animationDelay: '240ms' }}
        >
          {hero.headline}
        </h1>
        <p
          className="mvi-fade-up mx-auto mt-6 w-full max-w-sm text-sm leading-relaxed text-navy-100 sm:max-w-3xl sm:text-base"
          style={{ animationDelay: '400ms' }}
        >
          {hero.sub}
        </p>
        <div
          className="mvi-fade-up mx-auto mt-10 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row"
          style={{ animationDelay: '560ms' }}
        >
          <a
            href="#contact"
            className="block rounded-full bg-teal px-7 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-teal/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-xl hover:shadow-teal/30"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#services"
            className="block rounded-full border border-white/60 px-7 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-navy"
          >
            {hero.secondaryCta}
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label={hero.scrollLabel}
        className="mvi-fade-up absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
        style={{ animationDelay: '760ms' }}
      >
        <svg
          className="mvi-nudge"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  )
}
