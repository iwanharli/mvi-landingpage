import { useEffect, useState } from 'react'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
import { useLocale, InternalLink } from '../LocaleContext'
import type { NavItem } from '../content'

/**
 * Section mana yang sedang dibaca pengunjung, untuk menyorot item menu yang
 * cocok. Dianggap "aktif" section yang berpotongan dengan pita horizontal di
 * 45%-50% tinggi viewport — pita ini kira-kira sejajar mata saat scroll,
 * bukan sekadar section yang baru mulai muncul di bawah layar.
 */
function useActiveSection(navItems: NavItem[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) {
      setActive(null)
      return
    }

    const elements = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return

        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        )
        setActive(topMost.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [navItems, enabled])

  return active
}

export default function Navbar() {
  const { locale, route, t } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Halaman detail sektor tidak punya hero gelap di baliknya, jadi navbar
  // selalu tampil solid di sana.
  const onDetailPage = route.name !== 'home'
  const solid = scrolled || open || onDetailPage
  const homePath = locale === 'en' ? '/en' : ''
  const activeId = useActiveSection(t.nav, route.name === 'home')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mvi-container flex items-center justify-between py-4">
        <InternalLink href={homePath || '/'} className="shrink-0" onClick={() => setOpen(false)}>
          {/* h-16 => ~253px lebar, memenuhi minimum 240px untuk lockup bertagline */}
          <Logo variant={solid ? 'primary' : 'reverse'} className="h-12 sm:h-16" />
        </InternalLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {t.nav.map((item) => {
            const isActive = activeId === item.href.slice(1)

            return (
              <InternalLink
                key={item.href}
                href={homePath + item.href}
                aria-current={isActive ? 'true' : undefined}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? solid
                      ? 'font-semibold text-teal-text'
                      : 'font-semibold text-teal'
                    : solid
                      ? 'text-navy hover:text-teal-text'
                      : 'text-white hover:text-teal'
                }`}
              >
                {item.label}
              </InternalLink>
            )
          })}
          <LanguageSwitcher solid={solid} />
          <InternalLink
            href={`${homePath}#contact`}
            className="rounded-full bg-teal px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
          >
            {t.navCta}
          </InternalLink>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher solid={solid} />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={t.a11y.openMenu}
            aria-expanded={open}
            className={solid ? 'text-navy' : 'text-white'}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-navy-100 bg-white lg:hidden">
          <div className="mvi-container flex flex-col py-2">
            {t.nav.map((item) => {
              const isActive = activeId === item.href.slice(1)

              return (
                <InternalLink
                  key={item.href}
                  href={homePath + item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex items-center gap-2 border-b border-navy-100 py-3 text-sm last:border-0 ${
                    isActive ? 'font-semibold text-teal-text' : 'font-medium text-navy'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 shrink-0 rounded-full bg-teal transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  {item.label}
                </InternalLink>
              )
            })}
            <InternalLink
              href={`${homePath}#contact`}
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-teal px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {t.navCta}
            </InternalLink>
          </div>
        </nav>
      )}
    </header>
  )
}
