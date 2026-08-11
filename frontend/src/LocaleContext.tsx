import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { dictionaries, localeFromPath, pathForLocale, type Content, type Locale } from './content'

/** Ganti dengan domain produksi sebelum go-live. Dipakai untuk canonical & hreflang. */
export const SITE_URL = 'https://mvi-id.com'

/**
 * Cookie penanda preferensi bahasa. Server (nginx) membaca cookie yang sama
 * untuk menentukan redirect otomatis pada kunjungan pertama ke "/" — lihat
 * blok `location = /` di config nginx. Begitu cookie ini ada (baik dari
 * tebakan negara di server atau klik manual di sini), tebakan negara tidak
 * lagi dipakai; preferensi eksplisit pengunjung selalu menang.
 */
const LANG_COOKIE = 'mvi_lang'

function setLangCookie(locale: Locale) {
  const oneYear = 60 * 60 * 24 * 365
  document.cookie = `${LANG_COOKIE}=${locale}; path=/; max-age=${oneYear}; SameSite=Lax; Secure`
}

function hasLangCookie(): boolean {
  return document.cookie.split('; ').some((c) => c.startsWith(`${LANG_COOKIE}=`))
}

/**
 * Router path sangat minim untuk situs kecil ini — dua jenis halaman saja
 * (beranda, detail sektor) dikali dua bahasa. Digabung satu context dengan
 * locale supaya path selalu jadi satu-satunya sumber kebenaran, tidak ada
 * dua state pathname terpisah yang berisiko tidak sinkron.
 */
export type Route = { name: 'home' } | { name: 'sector-detail'; slug: string }

function parseRoute(pathname: string): Route {
  const path = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  const match = path.match(/^\/(?:sektor|sectors)\/([^/]+)\/?$/)
  if (match) return { name: 'sector-detail', slug: match[1] }
  return { name: 'home' }
}

export type PageMeta = { title: string; description: string; canonicalPath: string }

type LocaleContextValue = {
  locale: Locale
  route: Route
  t: Content
  setLocale: (next: Locale) => void
  navigate: (path: string) => void
  /** Panggil dari halaman non-beranda untuk menimpa title/description/canonical. */
  setPageMeta: (meta: PageMeta | null) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState(window.location.pathname)
  const [pageMeta, setPageMeta] = useState<PageMeta | null>(null)

  const locale = useMemo(() => localeFromPath(pathname), [pathname])
  const route = useMemo(() => parseRoute(pathname), [pathname])
  const t = dictionaries[locale]

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = useCallback((path: string) => {
    window.history.pushState({}, '', path)

    // `pathname` state HARUS berupa path murni tanpa hash — localeFromPath
    // dan parseRoute mengetes pola terhadap awal string, jadi "/en#contact"
    // yang disimpan mentah akan gagal cocok dengan "/en" dan salah
    // terdeteksi sebagai locale default.
    const url = new URL(path, window.location.origin)
    setPathname(url.pathname)
    setPageMeta(null)

    if (url.hash) {
      const id = url.hash.slice(1)
      // Anchor di halaman yang sama: elemen sudah ada, cukup scroll langsung.
      // Anchor lintas halaman (mis. dari detail sektor ke beranda#contact):
      // Home belum ter-mount di frame ini; App menangani fallback-nya
      // lewat efek terpisah begitu route berubah menjadi 'home'.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView()
      })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [])

  const setLocale = useCallback(
    (next: Locale) => {
      setLangCookie(next)
      const slug = route.name === 'sector-detail' ? route.slug : undefined
      navigate(pathForLocale(next, slug))
    },
    [route, navigate],
  )

  // Kunjungan pertama tanpa preferensi tersimpan: catat bahasa yang sedang
  // ditampilkan (baik hasil tebakan negara di server maupun default) supaya
  // kunjungan berikutnya konsisten tanpa perlu server menebak ulang.
  useEffect(() => {
    if (!hasLangCookie()) setLangCookie(locale)
  }, [locale])

  // Sinkronkan atribut & meta dokumen dengan bahasa dan halaman aktif
  useEffect(() => {
    const canonicalPath = pageMeta?.canonicalPath ?? (locale === 'en' ? '/en' : '/')
    const title = pageMeta?.title ?? t.meta.title
    const description = pageMeta?.description ?? t.meta.description
    const canonical = SITE_URL + canonicalPath

    document.documentElement.lang = t.htmlLang
    document.title = title

    const set = (selector: string, attr: string, value: string) => {
      const el = document.head.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    set('meta[name="description"]', 'content', description)
    set('link[rel="canonical"]', 'href', canonical)
    set('meta[property="og:locale"]', 'content', t.ogLocale)
    set('meta[property="og:url"]', 'content', canonical)
    set('meta[property="og:title"]', 'content', title)
    set('meta[property="og:description"]', 'content', description)
    set('meta[name="twitter:title"]', 'content', title)
    set('meta[name="twitter:description"]', 'content', description)
  }, [locale, t, pageMeta])

  return (
    <LocaleContext.Provider value={{ locale, route, t, setLocale, navigate, setPageMeta }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale harus dipakai di dalam LocaleProvider')
  return ctx
}

/** Pintasan bila komponen hanya butuh teksnya saja. */
export function useT() {
  return useLocale().t
}

/**
 * Tautan internal: klik biasa berpindah tanpa reload lewat History API;
 * klik dengan modifier (buka tab baru, dsb) dibiarkan berjalan normal.
 */
export function InternalLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const { navigate } = useLocale()

  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        onClick?.()
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
        e.preventDefault()
        navigate(href)
      }}
    >
      {children}
    </a>
  )
}
