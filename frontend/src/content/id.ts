import type { Content } from './types'

export const id: Content = {
  htmlLang: 'id',
  ogLocale: 'id_ID',
  meta: {
    title: 'PT Mitra Verifikasi Indonesia — Global Conformity Partner',
    description:
      'MVI menyediakan solusi end-to-end Digital Product Passport (DPP) dan agregasi data rantai pasok untuk memastikan kepatuhan produk ekspor Indonesia terhadap regulasi Uni Eropa (ESPR & EU Battery Regulation).',
  },

  nav: [
    { label: 'Beranda', href: '#hero' },
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Solusi Sektor', href: '#sectors' },
    { label: 'Cara Kerja', href: '#how' },
    { label: 'Kontak', href: '#contact' },
  ],
  navCta: 'Konsultasi',

  hero: {
    eyebrow: 'Global Conformity Partner',
    headline: 'Jembatan Terpercaya Produk Ekspor Indonesia Menuju Pasar Global.',
    sub: 'PT Mitra Verifikasi Indonesia (MVI) menyediakan solusi End-to-End Digital Product Passport (DPP) dan Agregasi Data Rantai Pasok Terintegrasi guna memastikan kepatuhan regulasi Uni Eropa (ESPR & EU Battery Mandate).',
    primaryCta: 'Konsultasi Kepatuhan DPP',
    secondaryCta: 'Pelajari Solusi MVI Gateway',
    image: '/img/hero.webp',
    scrollLabel: 'Gulir ke bawah',
  },

  trust: {
    ariaLabel: 'Standar dan regulasi',
    eyebrow: 'Infrastruktur kepatuhan',
    line: 'Dibangun untuk rantai pasok ekspor yang siap diverifikasi.',
  },

  about: {
    eyebrow: 'Tentang Kami',
    heading: 'PT Mitra Verifikasi Indonesia',
    image: '/img/about.webp',
    standards: ['GS1', 'JSON-LD', 'eIDAS 2.0', 'ISO/IEC 15459', 'ESPR', 'ISO 27001'],
    body: [
      'PT Mitra Verifikasi Indonesia (MVI) adalah perusahaan teknologi dan agregator data rantai pasok terdepan di Indonesia yang berfokus pada standardisasi, keterlacakan (traceability), dan verifikasi digital untuk produk ekspor nasional.',
      'Melalui integrasi arsitektur data modern berbasis standar internasional (GS1, JSON-LD, eIDAS 2.0) dan kolaborasi strategis bersama lembaga Testing, Inspection, & Certification (TIC) nasional, MVI hadir untuk memastikan produk manufaktur dan komoditas unggulan Indonesia memenuhi standar ketat Ecodesign for Sustainable Products Regulation (ESPR) serta regulasi keberlanjutan global lainnya.',
    ],
    visionLabel: 'Visi',
    vision:
      'Menjadi penyedia infrastruktur Digital Product Passport dan agregator data rantai pasok terpercaya nomor satu di Asia Tenggara yang menghubungkan industri lokal dengan ekosistem perdagangan global.',
    missionLabel: 'Misi',
    mission: [
      'Menghubungkan data rantai pasok hulu ke hilir (Tier-1 to Tier-N) secara transparan, aman, dan mudah diakses.',
      'Mendampingi eksportir Indonesia dalam mengukur dan membuktikan klaim sirkularitas serta jejak karbon produk secara legal.',
      'Menyediakan platform middleware yang terinteroperabilitas penuh dengan EU DPP Registry dan ekosistem SaaS global.',
    ],
  },

  services: {
    headingLight: 'Layanan',
    headingBold: 'Unggulan Kami',
    desc: 'Solusi end-to-end dari pengumpulan data rantai pasok hingga penerbitan Digital Product Passport.',
    tablistLabel: 'Layanan unggulan MVI',
    cta: 'Diskusikan Kebutuhan',
    items: [
      {
        title: 'MVI Gateway',
        short: 'MVI Gateway',
        subtitle: 'Integration & Tier-N Data Aggregation',
        desc: 'Pengumpulan dan digitalisasi data dari rantai pasok paling dasar (Tier-2 to Tier-N). Kami mempermudah pabrik, pemasok bahan baku, dan UMKM lokal mengunggah data produksi, konsumsi energi, dan keabsahan material melalui Lightweight Intake App yang intuitif.',
        image: '/img/services/gateway.webp',
      },
      {
        title: 'DPP Engine',
        short: 'DPP Engine',
        subtitle: 'Schema Standardization',
        desc: 'Otomatisasi pengolahan data mentah industri menjadi format terstruktur yang diwajibkan Uni Eropa (JSON-LD, GS1 Digital Link, dan Unique Product Identifier). Data eksportir siap dikirim via API ke EU Central Registry.',
        image: '/img/services/dpp-engine.webp',
      },
      {
        title: 'Joint LCA & Compliance Verification',
        short: 'Joint LCA & Verification',
        subtitle: 'Konsorsium TIC',
        desc: 'Bekerja sama dengan lembaga inspeksi dan verifikasi tepercaya nasional, kami memfasilitasi perhitungan Life Cycle Assessment (LCA), Product Carbon Footprint (PCF), serta pemetaan kandungan bahan berbahaya (REACH) yang terakurasi dan sah secara hukum internasional.',
        image: '/img/services/lca.webp',
      },
      {
        title: 'Enterprise ERP & Global Platform Connector',
        short: 'ERP & Platform Connector',
        subtitle: 'API Network',
        desc: 'Menyediakan jaringan API yang menjembatani sistem internal eksportir (ERP/PLM) dengan platform DPP global terkemuka di Eropa dan Amerika Serikat.',
        image: '/img/services/erp.webp',
      },
    ],
  },

  why: {
    headingLight: 'Mengapa',
    headingBold: 'Memilih MVI',
    desc: 'Empat alasan eksportir Indonesia mempercayakan kepatuhan DPP mereka kepada kami.',
    items: [
      {
        title: 'Interoperabel & Sesuai Standar UE',
        desc: 'Sistem MVI dibangun berdasarkan kerangka teknis resmi Uni Eropa (eIDAS 2.0, GS1, dan ISO/IEC 15459), menjamin data produk Anda diterima oleh Bea Cukai Eropa.',
        image: '/img/why/interoperabel.webp',
      },
      {
        title: 'Aksesibel untuk Pemasok Lokal',
        desc: 'Tidak perlu investasi software mahal di tingkat pemasok bahan baku. Platform kami didesain lightweight agar dapat digunakan oleh rantai pasok skala menengah dan kecil di Indonesia.',
        image: '/img/why/aksesibel.webp',
      },
      {
        title: 'Keamanan & Kedaulatan Data',
        desc: 'Mengadopsi standar keamanan ISO 27001 dan enkripsi ketat. Data rahasia bisnis eksportir tetap terlindungi melalui kontrol akses bertingkat (Access Control Rights).',
        image: '/img/why/keamanan.webp',
      },
      {
        title: 'Legitimasi Ekosistem Lokal',
        desc: 'Didukung oleh kemitraan konsorsium strategis bersama lembaga audit BUMN terakreditasi, memberikan kepastian validasi yang kuat di mata pembeli (offtakers) Eropa.',
        image: '/img/why/legitimasi.webp',
      },
    ],
  },

  sectors: {
    headingLight: 'Solusi',
    headingBold: 'Sektor Industri',
    desc: 'Penyesuaian mandat regulasi Uni Eropa untuk setiap kategori produk ekspor.',
    items: [
      {
        slug: 'baterai-ev',
        title: 'Industri Baterai & Kendaraan Listrik (EV)',
        mandate: 'Memenuhi Mandat EU Battery Regulation 2027.',
        desc: 'Penelusuran asal-usul mineral kritis (nikel, kobalt), kalkulasi jejak karbon sel baterai, serta persentase daur ulang bahan baku secara real-time.',
        image: '/img/sectors/ev.webp',
        detail: {
          regulationName: 'EU Battery Regulation (EU) 2023/1542',
          regulationSummary:
            'Mewajibkan Paspor Baterai Digital untuk baterai EV, LMT, dan baterai industri berkapasitas di atas 2 kWh yang dipasarkan di Uni Eropa, dapat diakses melalui QR code pada unit fisik.',
          intro: [
            'Sejak 18 Februari 2025, deklarasi jejak karbon telah wajib untuk baterai EV yang dipasarkan di Uni Eropa. Mulai 18 Februari 2027, seluruh baterai EV, Light Means of Transport (LMT), dan baterai industri berkapasitas di atas 2 kWh wajib memiliki Paspor Baterai Digital yang dapat diakses lewat QR code pada unit fisiknya.',
            'Paspor ini adalah catatan data terstruktur dan machine-readable yang memuat komposisi material, jejak karbon manufaktur, kandungan daur ulang, status kesehatan (state of health), serta deklarasi uji tuntas rantai pasok (supply chain due diligence) untuk mineral kritis seperti nikel, kobalt, dan litium.',
            'Bagi eksportir Indonesia yang memasok sel baterai, komponen, atau kendaraan listrik ke Uni Eropa, ini berarti data produksi dan asal-usul mineral harus terdokumentasi secara terstruktur jauh sebelum tenggat berlaku, bukan disusun mendadak menjelang pengiriman.',
          ],
          timeline: [
            { date: '18 Feb 2025', label: 'Deklarasi jejak karbon wajib untuk baterai EV.', done: true },
            {
              date: '18 Feb 2027',
              label: 'Paspor Baterai Digital wajib untuk baterai EV, LMT, dan baterai industri >2 kWh.',
            },
            {
              date: '18 Agu 2031',
              label: 'Ambang minimum kandungan daur ulang berlaku: 16% kobalt, 85% timbal, 6% litium, 6% nikel.',
            },
          ],
          requiredDataHeading: 'Data yang Wajib Disiapkan',
          requiredData: [
            { label: 'Jejak karbon manufaktur', desc: 'Dihitung dalam kg CO2-ekuivalen per kWh kapasitas baterai, sesuai metodologi yang ditetapkan regulasi.' },
            { label: 'Kandungan daur ulang', desc: 'Persentase aktual kobalt, timbal, litium, dan nikel daur ulang pada tiap unit baterai.' },
            { label: 'Uji tuntas rantai pasok', desc: 'Deklarasi asal-usul mineral kritis, termasuk risiko sosial dan lingkungan di titik penambangan.' },
            { label: 'Status kesehatan & performa', desc: 'Data siklus hidup baterai untuk mendukung penggunaan ulang (second-life) dan daur ulang di akhir masa pakai.' },
          ],
          faqHeading: 'Pertanyaan Umum',
          faq: [
            {
              q: 'Apakah produsen komponen baterai di Indonesia juga terdampak, bukan hanya perakit unit jadi?',
              a: 'Ya. Data yang wajib masuk ke paspor mencakup seluruh rantai pasok hulu, termasuk pemasok sel, katoda, dan mineral mentah, bukan hanya entitas yang menempatkan produk jadi di pasar Uni Eropa.',
            },
            {
              q: 'Berapa lama waktu yang realistis untuk mempersiapkan data ini?',
              a: 'Mengingat tenggat 18 Februari 2027 dan kompleksitas menelusuri data hingga ke Tier-N, MVI merekomendasikan proses onboarding data dimulai minimal 12–18 bulan sebelum tenggat.',
            },
          ],
          sourcesHeading: 'Sumber Rujukan',
          sources: [
            { label: 'EU Battery Passport Guide — Requirements, Timeline & Compliance (dpp-tool.com)', url: 'https://dpp-tool.com/en/guide/battery-passport/' },
            { label: 'EU Battery Passport Requirements & Feb 2027 Deadline (MyProductPassport)', url: 'https://myproductpassport.eu/blog/battery-passport-requirements-under-espr' },
            { label: 'Battery Regulation EU: Battery Passports (Circularise)', url: 'https://www.circularise.com/blogs/battery-regulation-eu-what-you-need-to-know-about-battery-passports' },
          ],
          ctaHeading: 'Siapkan Paspor Baterai Digital Anda',
          ctaDesc: 'Diskusikan kesiapan data mineral kritis dan jejak karbon produk baterai Anda bersama tim kepatuhan MVI.',
        },
      },
      {
        slug: 'tekstil',
        title: 'Tekstil, Pakaian, & Alas Kaki (TPT)',
        mandate: 'Memenuhi Mandat ESPR Textiles & Footwear.',
        desc: 'Pelacakan rantai pasok serat kain, pengujian zat kimia berbahaya (REACH), indikator durabilitas, serta instruksi daur ulang produk untuk brand mode global.',
        image: '/img/sectors/tpt.webp',
        detail: {
          regulationName: 'ESPR, Delegated Act Tekstil (Ecodesign for Sustainable Products Regulation)',
          regulationSummary:
            'Rancangan delegated act khusus tekstil ditargetkan disahkan pada 2027, dengan kepatuhan wajib Paspor Produk Digital paling cepat berlaku 2028, mencakup pakaian, aksesori mode, dan tekstil rumah tangga.',
          intro: [
            'Uni Eropa tengah menyusun delegated act khusus tekstil di bawah payung ESPR. Berdasarkan jadwal resmi, studi persiapan dan konsultasi pemangku kepentingan berlangsung sepanjang 2025–2026, dengan delegated act ditargetkan disahkan pada 2027. Karena delegated act baru berlaku paling cepat 18 bulan setelah disahkan, kepatuhan wajib untuk produk tekstil realistisnya baru berlaku 2028.',
            'Cakupannya diperkirakan luas, meliputi pakaian, aksesori mode, dan tekstil rumah tangga. Alas kaki dinilai terpisah; studi khusus Komisi Eropa untuk sektor ini ditargetkan rampung akhir 2027.',
            'Paspor Produk Digital ini berlaku untuk setiap brand atau peritel yang menjual produk tekstil di pasar Uni Eropa, termasuk brand internasional serta merek skala UMKM. Bagi produsen dan eksportir tekstil Indonesia, jendela waktu hingga 2028 idealnya dipakai untuk membangun infrastruktur data terlebih dahulu, bukan menunggu regulasi final disahkan.',
          ],
          timeline: [
            { date: '2025–2026', label: 'Studi persiapan dan konsultasi pemangku kepentingan untuk delegated act tekstil.', done: true },
            { date: '2027 (target)', label: 'Delegated act tekstil ditargetkan disahkan Komisi Eropa.' },
            { date: 'Akhir 2027', label: 'Studi khusus Komisi Eropa untuk sektor alas kaki ditargetkan rampung.' },
            { date: '2028 (paling cepat)', label: 'Kepatuhan wajib Paspor Produk Digital untuk tekstil mulai berlaku.' },
          ],
          requiredDataHeading: 'Data yang Perlu Disiapkan Sejak Dini',
          requiredData: [
            { label: 'Rantai pasok serat', desc: 'Penelusuran asal serat kain dari pemasok bahan baku hingga unit produksi akhir.' },
            { label: 'Uji zat kimia berbahaya', desc: 'Kepatuhan REACH atas kandungan zat kimia terbatas dan berbahaya dalam material tekstil.' },
            { label: 'Indikator durabilitas', desc: 'Data ketahanan produk yang menjadi bagian penilaian ecodesign ESPR.' },
            { label: 'Instruksi daur ulang', desc: 'Informasi komposisi material dan panduan daur ulang di akhir masa pakai produk.' },
          ],
          faqHeading: 'Pertanyaan Umum',
          faq: [
            {
              q: 'Karena kepatuhan baru wajib 2028, apakah eksportir tekstil Indonesia bisa menunggu dulu?',
              a: 'Secara regulasi masih ada waktu, tetapi brand-brand Eropa besar sudah mulai mensyaratkan kesiapan data traceability sejak sekarang sebagai bagian uji tuntas pemasok mereka sendiri. Menunggu delegated act final berisiko membuat eksportir tertinggal dari kompetitor yang sudah mulai membangun data.',
            },
            {
              q: 'Apakah alas kaki termasuk dalam mandat yang sama dengan tekstil?',
              a: 'Tidak sepenuhnya. Alas kaki dinilai lewat studi Komisi Eropa terpisah yang ditargetkan rampung akhir 2027, sehingga jadwal dan kemungkinan persyaratannya bisa berbeda dari tekstil pakaian.',
            },
          ],
          sourcesHeading: 'Sumber Rujukan',
          sources: [
            { label: 'ESPR Crash Course — Textiles (Carbonfact)', url: 'https://www.carbonfact.com/blog/policy/espr-textile' },
            { label: 'EU Digital Product Passport ESPR Explained (COSH!)', url: 'https://cosh.eco/en/articles/eu-digital-product-passport-espr-explained-fashion-textiles' },
            { label: 'How Fashion Brands Can Prepare for the EU DPP (TrusTrace)', url: 'https://trustrace.com/knowledge-hub/how-fashion-brands-can-prepare-for-the-eu-digital-product-passport-a-practical-guide-1' },
          ],
          ctaHeading: 'Bangun Kesiapan Data Tekstil Anda Sejak Sekarang',
          ctaDesc: 'Mulai infrastruktur traceability serat dan kepatuhan REACH sebelum delegated act tekstil disahkan.',
        },
      },
      {
        slug: 'furnitur-kayu',
        title: 'Furnitur & Komoditas Kayu',
        mandate: 'Memenuhi Mandat EU Deforestation Regulation (EUDR).',
        desc: 'Uji tuntas anti-deforestasi dengan data geolokasi, integrasi bukti kelestarian bahan baku kayu/rotan, dan kesiapan sirkularitas produk.',
        image: '/img/sectors/kayu.webp',
        detail: {
          regulationName: 'EU Deforestation Regulation, EUDR (EU) 2023/1115',
          regulationSummary:
            'Mewajibkan produk kayu dan turunannya (termasuk furnitur kayu) yang dipasarkan atau diekspor dari Uni Eropa terbukti bebas deforestasi, legal, dan tertelusur hingga titik geolokasi asal bahan baku. Tenggat kepatuhan perusahaan besar dan menengah: 30 Desember 2026.',
          intro: [
            'EUDR mewajibkan bahwa komoditas dan produk turunannya yang dipasarkan atau diekspor dari Uni Eropa terbukti bebas deforestasi, legal secara hukum negara asal, dan tertelusur ke sumbernya. Regulasi ini mencakup tujuh komoditas termasuk kayu, dengan cakupan produk turunan yang luas.',
            'Furnitur kayu termasuk dalam cakupan EUDR. Secara spesifik, produk kayu dan turunannya dicakup di bawah kode HS 4401–4421, meliputi kayu mentah, kayu gergajian, kayu lapis, komponen furnitur kayu, pulp, dan produk terkait lainnya.',
            'Tenggat kepatuhan bagi perusahaan besar dan menengah adalah 30 Desember 2026 (diperpanjang dari target awal 2025). Indonesia diklasifikasikan sebagai negara berisiko standar (standard risk), kategori default yang berlaku bagi mayoritas negara pengekspor utama. Sejumlah importir kayu Eropa telah memutus hubungan dengan pemasok yang terindikasi deforestasi menjelang berlakunya regulasi ini, menandakan pasar sudah mulai menyeleksi pemasok lebih ketat sebelum tenggat resmi tiba.',
          ],
          timeline: [
            { date: '2023', label: 'EUDR (EU) 2023/1115 mulai berlaku sebagai regulasi Uni Eropa.', done: true },
            { date: '2025', label: 'Tenggat awal kepatuhan diperpanjang ke akhir 2026.', done: true },
            {
              date: '30 Des 2026',
              label: 'Tenggat kepatuhan wajib bagi perusahaan besar dan menengah, termasuk eksportir furnitur kayu Indonesia.',
            },
          ],
          requiredDataHeading: 'Data yang Wajib Disiapkan',
          requiredData: [
            { label: 'Geolokasi bidang lahan', desc: 'Koordinat GPS presisi untuk setiap petak hutan atau konsesi tempat kayu dipanen; pemetaan poligon untuk area hutan yang lebih luas.' },
            { label: 'Pernyataan uji tuntas (due diligence statement)', desc: 'Dokumen formal yang membuktikan produk bebas deforestasi dan legal, didukung data geolokasi terverifikasi.' },
            { label: 'Bukti kelestarian bahan baku', desc: 'Dokumentasi asal-usul kayu dan rotan yang mendukung klaim produksi berkelanjutan.' },
            { label: 'Indikator sirkularitas produk', desc: 'Data kemudahan perbaikan (repairability index) dan potensi daur ulang furnitur di akhir masa pakai.' },
          ],
          faqHeading: 'Pertanyaan Umum',
          faq: [
            {
              q: 'Apakah UMKM produsen furnitur juga wajib patuh pada tenggat 30 Desember 2026?',
              a: 'Tenggat tersebut berlaku untuk operator besar dan menengah. Namun karena UMKM biasanya menjadi pemasok bagi eksportir besar, data geolokasi dan legalitas kayu tetap akan diminta oleh mitra dagang mereka sebagai bagian rantai pasok yang harus dibuktikan.',
            },
            {
              q: 'Mengapa data geolokasi presisi begitu ditekankan dibanding sekadar sertifikat legalitas kayu?',
              a: 'EUDR mensyaratkan pembuktian langsung ke titik asal, bukan hanya dokumen legalitas administratif. Koordinat GPS memungkinkan verifikasi silang terhadap data deforestasi satelit, sehingga sertifikat saja tidak lagi cukup tanpa titik geolokasi yang terverifikasi.',
            },
          ],
          sourcesHeading: 'Sumber Rujukan',
          sources: [
            { label: 'EU Deforestation Regulation (EUDR): The Complete Guide 2026', url: 'https://theovervieweffect.nl/insights/a-deep-dive-into-the-eu-deforestation-regulation-eudr/' },
            { label: 'EUDR Furniture Compliance (TraceXTech)', url: 'https://tracextech.com/eudr-furniture-compliance/' },
            { label: 'EU deforestation law nudges timber trade, Indonesia probe shows (Mongabay)', url: 'https://news.mongabay.com/2026/04/eu-deforestation-law-nudges-timber-trade-indonesia-probe-shows-but-risks-persist/' },
          ],
          ctaHeading: 'Petakan Geolokasi Rantai Pasok Kayu Anda',
          ctaDesc: 'Persiapkan data due diligence EUDR sebelum tenggat 30 Desember 2026 bersama tim kepatuhan MVI.',
        },
      },
    ],
  },

  how: {
    headingLight: 'Cara Kerja',
    headingBold: 'MVI Gateway',
    desc: 'Empat tahap dari input data pemasok hingga paspor digital terbit di EU DPP Registry.',
    items: [
      {
        n: '01',
        title: 'Data Intake',
        desc: 'Pemasok lokal menginput data operasional dan mengunggah dokumen bukti melalui portal MVI.',
        image: '/img/how/intake.webp',
      },
      {
        n: '02',
        title: 'Audit & Calculation',
        desc: 'MVI bersama mitra konsorsium TIC memverifikasi data dan menghitung jejak karbon/LCA.',
        image: '/img/how/audit.webp',
      },
      {
        n: '03',
        title: 'Data Transformation',
        desc: 'MVI Engine mengubah data menjadi format digital GS1 Digital Link & JSON-LD.',
        image: '/img/how/transform.webp',
      },
      {
        n: '04',
        title: 'Passport Generation',
        desc: 'Paspor Digital Produk diterbitkan dan dihubungkan ke QR Code/NFC fisik serta dikirimkan ke EU DPP Registry.',
        image: '/img/how/passport.webp',
      },
    ],
  },

  contact: {
    slogan:
      'Gunakan MVI Gateway hari ini. Amankan Pasar Ekspor Anda, Sambut Masa Depan Perdagangan Berkelanjutan.',
    company: 'PT Mitra Verifikasi Indonesia (MVI)',
    addressLabel: 'Kantor',
    address:
      'Graha Surveyor Indonesia, Jl. Jend. Gatot Subroto, Lt.19 Kav. 56, Jakarta 12950',
    emailLabel: 'Email',
    emails: ['info@mvi-id.com', 'compliance@mvi-id.com'],
    phoneLabel: 'Telepon / WhatsApp',
    phone: '+62 8xx-xxxx-xxxx',
    linkedinLabel: 'LinkedIn',
    linkedin: 'PT Mitra Verifikasi Indonesia',
  },

  footer: {
    navTitle: 'Navigasi',
    servicesTitle: 'Layanan',
    sectorsTitle: 'Sektor',
    rights: 'Seluruh hak cipta dilindungi.',
  },

  a11y: {
    home: 'MVI beranda',
    openMenu: 'Buka menu',
    backToTop: 'Kembali ke atas',
    languageSwitch: 'Ganti bahasa',
  },

  sectorPage: {
    pathSegment: 'sektor',
    backLabel: 'Kembali ke Solusi Sektor',
    regulationLabel: 'Regulasi Terkait',
    detailCta: 'Pelajari selengkapnya',
  },
}
