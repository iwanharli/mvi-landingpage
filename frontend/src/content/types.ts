export type Locale = 'id' | 'en'

export type NavItem = { label: string; href: string }

export type Service = {
  title: string
  short: string
  subtitle: string
  desc: string
  image: string
}

export type Advantage = { title: string; desc: string; image: string }

export type TimelineEntry = { date: string; label: string; done?: boolean }
export type FaqEntry = { q: string; a: string }

export type SectorDetail = {
  regulationName: string
  regulationSummary: string
  intro: string[]
  timeline: TimelineEntry[]
  requiredDataHeading: string
  requiredData: { label: string; desc: string }[]
  faqHeading: string
  faq: FaqEntry[]
  sourcesHeading: string
  sources: { label: string; url: string }[]
  ctaHeading: string
  ctaDesc: string
}

export type Sector = {
  slug: string
  title: string
  mandate: string
  desc: string
  image: string
  detail: SectorDetail
}

export type Step = { n: string; title: string; desc: string; image: string }

export type Content = {
  /** Kode bahasa untuk atribut lang & og:locale */
  htmlLang: string
  ogLocale: string
  meta: { title: string; description: string }
  nav: NavItem[]
  navCta: string
  hero: {
    eyebrow: string
    headline: string
    sub: string
    primaryCta: string
    secondaryCta: string
    image: string
    scrollLabel: string
  }
  trust: { eyebrow: string; line: string; ariaLabel: string }
  about: {
    eyebrow: string
    heading: string
    image: string
    standards: string[]
    body: string[]
    visionLabel: string
    vision: string
    missionLabel: string
    mission: string[]
  }
  services: {
    headingLight: string
    headingBold: string
    desc: string
    tablistLabel: string
    cta: string
    items: Service[]
  }
  why: {
    headingLight: string
    headingBold: string
    desc: string
    items: Advantage[]
  }
  sectors: {
    headingLight: string
    headingBold: string
    desc: string
    items: Sector[]
  }
  how: {
    headingLight: string
    headingBold: string
    desc: string
    items: Step[]
  }
  contact: {
    slogan: string
    company: string
    addressLabel: string
    address: string
    emailLabel: string
    emails: string[]
    phoneLabel: string
    phone: string
    linkedinLabel: string
    linkedin: string
  }
  footer: {
    navTitle: string
    servicesTitle: string
    sectorsTitle: string
    rights: string
  }
  a11y: {
    home: string
    openMenu: string
    backToTop: string
    languageSwitch: string
  }
  sectorPage: {
    /** Segmen path: 'sektor' (id) / 'sectors' (en) */
    pathSegment: string
    backLabel: string
    regulationLabel: string
    detailCta: string
  }
}
