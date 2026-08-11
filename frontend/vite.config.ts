import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Situs ini punya beberapa rute sisi-klien (/en, /sektor/:slug,
 * /en/sectors/:slug) tanpa berkas fisik masing-masing saat dev. Middleware
 * ini mengarahkan permintaan ke index.html; deteksi bahasa & rute dilakukan
 * di klien dari window.location.pathname (lihat LocaleContext).
 *
 * Untuk build produksi, setiap rute justru MEMILIKI index.html sendiri
 * (lihat scripts/build-locales.ts) demi SEO — middleware ini hanya untuk
 * kenyamanan development, bukan pengganti berkas statis itu.
 */
const CLIENT_ROUTE = /^\/(?:en(?:\/(?:sectors)\/[^/?#]+)?|sektor\/[^/?#]+)\/?(?:[?#]|$)/

function localeFallback(): Plugin {
  return {
    name: 'mvi-locale-fallback',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url && CLIENT_ROUTE.test(req.url)) req.url = '/index.html'
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        // Saat preview, dist/**/index.html per rute sudah ada dari postbuild
        // — cukup arahkan path tanpa trailing slash ke index.html-nya.
        if (req.url && CLIENT_ROUTE.test(req.url) && !req.url.endsWith('/')) {
          req.url = `${req.url}/index.html`
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), localeFallback()],
})
