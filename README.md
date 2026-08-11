# MVI Landing Page

Landing page PT Mitra Verifikasi Indonesia (MVI) — Global Conformity Partner. Situs statis React + Tailwind, dua bahasa (Indonesia/Inggris), dengan halaman detail regulasi per sektor ekspor.

## Menjalankan

```bash
./run.sh          # dev server -> http://localhost:5173
./run.sh build    # build produksi -> frontend/dist
./run.sh preview  # build lalu serve hasil build
```

## Struktur

```
frontend/
├── src/
│   ├── content/        # naskah id.ts & en.ts, satu tipe bersama (types.ts)
│   ├── components/      # section-section beranda
│   ├── pages/            # halaman detail sektor
│   ├── LocaleContext.tsx # locale + router path gabungan
│   └── App.tsx
├── scripts/
│   └── build-locales.ts  # postbuild: HTML statis per rute untuk SEO
└── public/img/            # aset gambar terproses (WebP)
```

## Bahasa & rute

- `/` — beranda ID, `/en` — beranda EN
- `/sektor/:slug` (ID) dan `/en/sectors/:slug` (EN) — detail regulasi per sektor

Setiap rute mendapat `index.html` statis sendiri saat build (lihat `frontend/scripts/build-locales.ts`) supaya title, description, canonical, dan hreflang terbaca crawler tanpa menjalankan JavaScript.

## Catatan

- Logo di `frontend/public/img/logo-mvi*.png` adalah hasil olahan dari aset desainer, bukan file SVG master resmi (`MVI_Master_Logo_Primary.svg`) sesuai spec grafimetri v1.0 — ganti begitu file master tersedia.
- Domain produksi masih placeholder `https://mvi-id.com` di `frontend/index.html` dan `frontend/src/LocaleContext.tsx` — sesuaikan sebelum go-live.
