/**
 * Postbuild: hasilkan HTML statis untuk /en dan setiap halaman detail
 * sektor, di kedua bahasa.
 *
 * Alasannya SEO. Title, description, canonical, dan hreflang memang sudah
 * diperbarui LocaleContext saat runtime, tapi banyak crawler dan pratinjau
 * tautan (LinkedIn, WhatsApp, hasil pencarian Google) membaca HTML mentah
 * tanpa menjalankan JavaScript. Dengan berkas statis per rute, setiap
 * halaman menyajikan meta yang benar langsung dari server — termasuk
 * pratinjau berbahasa Inggris untuk pembeli Eropa yang menerima tautan
 * /en/sectors/... secara langsung.
 *
 * Konten diimpor langsung dari src/content, bukan disalin manual, supaya
 * tidak ada risiko drift antara apa yang runtime tampilkan dan apa yang
 * dibaca crawler.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { dictionaries, type Locale } from '../src/content'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const SITE_URL = 'https://mvi-id.com'

const baseHtml = await readFile(resolve(dist, 'index.html'), 'utf8')

function render(opts: {
  lang: string
  ogLocale: string
  title: string
  description: string
  canonicalPath: string
  alternates: { hreflang: string; path: string }[]
}): string {
  let out = baseHtml

  const replace = (pattern: RegExp, value: string, label: string) => {
    if (!pattern.test(out)) {
      console.warn(`[build-locales] pola "${label}" tidak cocok, dilewati`)
      return
    }
    out = out.replace(pattern, value)
  }

  replace(/<html lang="[^"]*">/, `<html lang="${opts.lang}">`, 'html lang')
  replace(/<title>[^<]*<\/title>/, `<title>${opts.title}</title>`, 'title')
  replace(
    /(<meta\s+name="description"\s+content=")[^"]*(")/s,
    `$1${opts.description}$2`,
    'meta description',
  )
  replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1${SITE_URL}${opts.canonicalPath}$2`,
    'canonical',
  )
  replace(/(<meta property="og:locale" content=")[^"]*(")/, `$1${opts.ogLocale}$2`, 'og:locale')
  replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1${SITE_URL}${opts.canonicalPath}$2`,
    'og:url',
  )
  replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/s, `$1${opts.title}$2`, 'og:title')
  replace(
    /(<meta\s+property="og:description"\s+content=")[^"]*(")/s,
    `$1${opts.description}$2`,
    'og:description',
  )
  replace(
    /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/s,
    `$1${opts.title}$2`,
    'twitter:title',
  )
  replace(
    /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/s,
    `$1${opts.description}$2`,
    'twitter:description',
  )

  // Ganti blok hreflang bawaan index.html dengan alternates spesifik halaman ini
  const hreflangBlock = opts.alternates
    .map((a) => `    <link rel="alternate" hreflang="${a.hreflang}" href="${SITE_URL}${a.path}" />`)
    .join('\n')
  const defaultPath = opts.alternates.find((a) => a.hreflang === 'id')?.path ?? '/'
  const fullBlock = `${hreflangBlock}\n    <link rel="alternate" hreflang="x-default" href="${SITE_URL}${defaultPath}" />`

  out = out.replace(
    /(<!-- Dua bahasa: Indonesia di root, Inggris di \/en -->\n)[\s\S]*?(\n\s*<!-- Open Graph)/,
    `$1${fullBlock}$2`,
  )

  return out
}

async function writePage(filePath: string, html: string) {
  await mkdir(dirname(filePath), { recursive: true })
  await writeFile(filePath, html, 'utf8')
  console.log(`[build-locales] ${filePath.replace(dist + '/', 'dist/')}`)
}

// --- Beranda /en ---
{
  const t = dictionaries.en
  const html = render({
    lang: t.htmlLang,
    ogLocale: t.ogLocale,
    title: t.meta.title,
    description: t.meta.description,
    canonicalPath: '/en',
    alternates: [
      { hreflang: 'id', path: '/' },
      { hreflang: 'en', path: '/en' },
    ],
  })
  await writePage(resolve(dist, 'en/index.html'), html)
}

// --- Halaman detail sektor, kedua bahasa sekaligus (index array paralel) ---
const locales: Locale[] = ['id', 'en']
const sectorCount = dictionaries.id.sectors.items.length

for (let i = 0; i < sectorCount; i++) {
  const paths: Record<Locale, string> = { id: '', en: '' }
  for (const locale of locales) {
    const t = dictionaries[locale]
    const sector = t.sectors.items[i]
    const prefix = locale === 'en' ? '/en' : ''
    paths[locale] = `${prefix}/${t.sectorPage.pathSegment}/${sector.slug}`
  }

  for (const locale of locales) {
    const t = dictionaries[locale]
    const sector = t.sectors.items[i]

    const html = render({
      lang: t.htmlLang,
      ogLocale: t.ogLocale,
      title: `${sector.title} — ${t.meta.title}`,
      description: sector.detail.regulationSummary,
      canonicalPath: paths[locale],
      alternates: [
        { hreflang: 'id', path: paths.id },
        { hreflang: 'en', path: paths.en },
      ],
    })

    await writePage(resolve(dist + paths[locale], 'index.html'), html)
  }
}

console.log('[build-locales] selesai')
