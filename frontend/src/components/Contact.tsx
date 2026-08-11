import { useT } from '../LocaleContext'

export default function Contact() {
  const { contact, hero } = useT()
  const hasPhone = !contact.phone.toLowerCase().includes('x')

  return (
    <section id="contact" className="bg-navy-900 py-20 sm:py-28">
      <div className="mvi-container">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
              {contact.slogan}
            </h2>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${contact.emails[0]}`}
                className="rounded-full bg-teal px-7 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/40 px-7 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-navy"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          <dl className="space-y-6 rounded-2xl bg-white/5 p-8 text-sm text-navy-100 ring-1 ring-white/10 sm:text-base">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
                {contact.addressLabel}
              </dt>
              <dd className="mt-2 leading-relaxed">{contact.address}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
                {contact.emailLabel}
              </dt>
              <dd className="mt-2 flex flex-col gap-1">
                {contact.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="hover:text-white">
                    {e}
                  </a>
                ))}
              </dd>
            </div>
            {hasPhone && (
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
                  {contact.phoneLabel}
                </dt>
                <dd className="mt-2">{contact.phone}</dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </section>
  )
}
