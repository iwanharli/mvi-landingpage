import { id } from './id'
import { en } from './en'
import type { Content, Locale, Sector } from './types'

export type {
  Content,
  Locale,
  Service,
  Advantage,
  Sector,
  SectorDetail,
  Step,
  NavItem,
} from './types'

export const locales: Locale[] = ['id', 'en']
export const defaultLocale: Locale = 'id'

export const dictionaries: Record<Locale, Content> = { id, en }

/** Bahasa Inggris disajikan di /en; bahasa Indonesia di root. */
export function localeFromPath(pathname: string): Locale {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : defaultLocale
}

export function sectorPath(locale: Locale, slug: string): string {
  const prefix = locale === 'en' ? '/en' : ''
  return `${prefix}/${dictionaries[locale].sectorPage.pathSegment}/${slug}`
}

export function findSector(locale: Locale, slug: string): Sector | undefined {
  return dictionaries[locale].sectors.items.find((s) => s.slug === slug)
}

/**
 * Path beranda untuk bahasa target. Bila slug diberikan (mis. saat berada
 * di halaman detail sektor), navigasi mengarah ke padanan halaman itu di
 * bahasa lain — bukan melempar pengunjung kembali ke beranda.
 */
export function pathForLocale(locale: Locale, currentSlug?: string): string {
  if (currentSlug) {
    const fromLocale: Locale = locale === 'en' ? 'id' : 'en'
    const index = dictionaries[fromLocale].sectors.items.findIndex(
      (s) => s.slug === currentSlug,
    )
    if (index !== -1) {
      const targetSlug = dictionaries[locale].sectors.items[index]?.slug
      if (targetSlug) return sectorPath(locale, targetSlug)
    }
  }

  return locale === 'en' ? '/en' : '/'
}
