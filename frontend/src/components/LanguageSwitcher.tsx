import { useLocale } from '../LocaleContext'
import { locales, pathForLocale, type Locale } from '../content'

const LABEL: Record<Locale, string> = { id: 'ID', en: 'EN' }
const FULL: Record<Locale, string> = { id: 'Bahasa Indonesia', en: 'English' }

export default function LanguageSwitcher({ solid }: { solid: boolean }) {
  const { locale, route, setLocale, t } = useLocale()
  const currentSlug = route.name === 'sector-detail' ? route.slug : undefined

  return (
    <div
      role="group"
      aria-label={t.a11y.languageSwitch}
      className={`flex items-center gap-0.5 rounded-full p-0.5 ring-1 ${
        solid ? 'bg-navy-50 ring-navy-100' : 'bg-white/10 ring-white/25'
      }`}
    >
      {locales.map((code) => {
        const isActive = code === locale

        return (
          <a
            key={code}
            href={pathForLocale(code, currentSlug)}
            hrefLang={code}
            aria-current={isActive ? 'true' : undefined}
            title={FULL[code]}
            onClick={(e) => {
              // Ganti bahasa tanpa memuat ulang halaman; href tetap ada agar
              // bisa dibuka di tab baru dan terbaca mesin pencari.
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
              e.preventDefault()
              setLocale(code)
            }}
            className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
              isActive
                ? 'bg-teal text-white'
                : solid
                  ? 'text-navy/70 hover:text-teal-text'
                  : 'text-white/80 hover:text-white'
            }`}
          >
            {LABEL[code]}
          </a>
        )
      })}
    </div>
  )
}
