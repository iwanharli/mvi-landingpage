import Logo from './Logo'
import { useLocale, InternalLink } from '../LocaleContext'
import { sectorPath } from '../content'

type Link = { label: string; href: string }

export default function Footer() {
  const { locale, t } = useLocale()
  const { contact, footer } = t
  const homePath = locale === 'en' ? '/en' : ''

  const navLinks: Link[] = t.nav.map((n) => ({ label: n.label, href: homePath + n.href }))
  const serviceLinks: Link[] = t.services.items.map((s) => ({
    label: s.short,
    href: `${homePath}#services`,
  }))
  const sectorLinks: Link[] = t.sectors.items.map((s) => ({
    label: s.title,
    href: sectorPath(locale, s.slug),
  }))
  const hasPhone = !contact.phone.toLowerCase().includes('x')

  return (
    <footer className="border-t border-white/10 bg-navy-900 py-14">
      <div className="mvi-container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="reverse" className="h-16" />
            <p className="mt-5 text-sm font-semibold text-white">
              {contact.company}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-navy-100/70">
              {contact.address}
            </p>

            <ul className="mt-5 space-y-2 text-sm">
              {contact.emails.map((e) => (
                <li key={e}>
                  <a
                    href={`mailto:${e}`}
                    className="text-navy-100/80 transition-colors hover:text-teal"
                  >
                    {e}
                  </a>
                </li>
              ))}
              {hasPhone && (
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                    className="text-navy-100/80 transition-colors hover:text-teal"
                  >
                    {contact.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <FooterCol title={footer.navTitle} links={navLinks} />
          <FooterCol title={footer.servicesTitle} links={serviceLinks} />
          <FooterCol title={footer.sectorsTitle} links={sectorLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-navy-100/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {contact.company}. {footer.rights}
          </p>
          <p>
            {contact.linkedinLabel}: {contact.linkedin}
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: Link[] }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <InternalLink
              href={l.href}
              className="text-sm leading-snug text-navy-100/80 transition-colors hover:text-teal"
            >
              {l.label}
            </InternalLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
