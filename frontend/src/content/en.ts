import type { Content } from './types'

export const en: Content = {
  htmlLang: 'en',
  ogLocale: 'en_US',
  meta: {
    title: 'PT Mitra Verifikasi Indonesia — Global Conformity Partner',
    description:
      'MVI delivers end-to-end Digital Product Passport (DPP) infrastructure and supply chain data aggregation, ensuring Indonesian export products meet EU regulations (ESPR & the EU Battery Regulation).',
  },

  nav: [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Sector Solutions', href: '#sectors' },
    { label: 'How It Works', href: '#how' },
    { label: 'Contact', href: '#contact' },
  ],
  navCta: 'Get in Touch',

  hero: {
    eyebrow: 'Global Conformity Partner',
    headline: "The Trusted Bridge for Indonesia's Exports to Global Markets.",
    sub: 'PT Mitra Verifikasi Indonesia (MVI) provides end-to-end Digital Product Passport (DPP) solutions and integrated supply chain data aggregation to ensure compliance with European Union regulations (ESPR & the EU Battery Regulation).',
    primaryCta: 'Request a DPP Compliance Consultation',
    secondaryCta: 'Explore MVI Gateway',
    image: '/img/hero.webp',
    scrollLabel: 'Scroll down',
  },

  trust: {
    ariaLabel: 'Standards and regulations',
    eyebrow: 'Compliance infrastructure',
    line: 'Built for export supply chains that are ready to be verified.',
  },

  about: {
    eyebrow: 'About Us',
    heading: 'PT Mitra Verifikasi Indonesia',
    image: '/img/about.webp',
    standards: ['GS1', 'JSON-LD', 'eIDAS 2.0', 'ISO/IEC 15459', 'ESPR', 'ISO 27001'],
    body: [
      "PT Mitra Verifikasi Indonesia (MVI) is Indonesia's leading technology company and supply chain data aggregator, focused on standardisation, traceability, and digital verification for national export products.",
      'By integrating a modern data architecture built on international standards (GS1, JSON-LD, eIDAS 2.0) and partnering strategically with national Testing, Inspection & Certification (TIC) bodies, MVI ensures that Indonesian manufactured goods and flagship commodities meet the stringent requirements of the Ecodesign for Sustainable Products Regulation (ESPR) and other global sustainability regulations.',
    ],
    visionLabel: 'Vision',
    vision:
      "To become Southeast Asia's most trusted Digital Product Passport infrastructure provider and supply chain data aggregator, connecting local industry to the global trade ecosystem.",
    missionLabel: 'Mission',
    mission: [
      'Connect supply chain data from upstream to downstream (Tier-1 to Tier-N) transparently, securely, and accessibly.',
      'Support Indonesian exporters in measuring and substantiating circularity claims and product carbon footprints in a legally defensible way.',
      'Provide middleware that is fully interoperable with the EU DPP Registry and the global SaaS ecosystem.',
    ],
  },

  services: {
    headingLight: 'Our Core',
    headingBold: 'Services',
    desc: 'End-to-end solutions, from supply chain data collection through to Digital Product Passport issuance.',
    tablistLabel: 'MVI core services',
    cta: 'Discuss Your Needs',
    items: [
      {
        title: 'MVI Gateway',
        short: 'MVI Gateway',
        subtitle: 'Integration & Tier-N Data Aggregation',
        desc: 'Collection and digitisation of data from the deepest tiers of the supply chain (Tier-2 to Tier-N). We make it straightforward for factories, raw material suppliers, and local SMEs to submit production data, energy consumption, and material provenance through an intuitive Lightweight Intake App.',
        image: '/img/services/gateway.webp',
      },
      {
        title: 'DPP Engine',
        short: 'DPP Engine',
        subtitle: 'Schema Standardization',
        desc: 'Automated processing of raw industrial data into the structured formats mandated by the European Union (JSON-LD, GS1 Digital Link, and Unique Product Identifier). Exporter data is ready to transmit via API to the EU Central Registry.',
        image: '/img/services/dpp-engine.webp',
      },
      {
        title: 'Joint LCA & Compliance Verification',
        short: 'Joint LCA & Verification',
        subtitle: 'TIC Consortium',
        desc: 'Working alongside trusted national inspection and verification bodies, we facilitate Life Cycle Assessment (LCA) and Product Carbon Footprint (PCF) calculations, as well as hazardous substance mapping (REACH), accredited and valid under international law.',
        image: '/img/services/lca.webp',
      },
      {
        title: 'Enterprise ERP & Global Platform Connector',
        short: 'ERP & Platform Connector',
        subtitle: 'API Network',
        desc: 'An API network bridging exporters’ internal systems (ERP/PLM) with leading global DPP platforms across Europe and the United States.',
        image: '/img/services/erp.webp',
      },
    ],
  },

  why: {
    headingLight: 'Why',
    headingBold: 'Choose MVI',
    desc: 'Four reasons Indonesian exporters trust us with their DPP compliance.',
    items: [
      {
        title: 'Interoperable & EU-Compliant',
        desc: 'MVI is built on the European Union’s official technical frameworks (eIDAS 2.0, GS1, and ISO/IEC 15459), ensuring your product data is accepted by European customs authorities.',
        image: '/img/why/interoperabel.webp',
      },
      {
        title: 'Accessible to Local Suppliers',
        desc: 'No expensive software investment required at the raw material supplier level. Our platform is designed to be lightweight so that small and medium-sized supply chains across Indonesia can use it.',
        image: '/img/why/aksesibel.webp',
      },
      {
        title: 'Security & Data Sovereignty',
        desc: 'ISO 27001 security standards and strict encryption. Exporters’ commercially sensitive data stays protected through tiered Access Control Rights.',
        image: '/img/why/keamanan.webp',
      },
      {
        title: 'Local Ecosystem Legitimacy',
        desc: 'Backed by strategic consortium partnerships with accredited state-owned audit institutions, giving European offtakers strong assurance of validation.',
        image: '/img/why/legitimasi.webp',
      },
    ],
  },

  sectors: {
    headingLight: 'Sector',
    headingBold: 'Solutions',
    desc: 'European Union regulatory mandates tailored to each category of export product.',
    items: [
      {
        slug: 'battery-ev',
        title: 'Battery & Electric Vehicle (EV) Industry',
        mandate: 'Meeting the EU Battery Regulation 2027 mandate.',
        desc: 'Tracing the origin of critical minerals (nickel, cobalt), calculating battery cell carbon footprints, and reporting recycled content percentages in real time.',
        image: '/img/sectors/ev.webp',
        detail: {
          regulationName: 'EU Battery Regulation (EU) 2023/1542',
          regulationSummary:
            'Requires a Digital Battery Passport for EV, LMT, and industrial batteries above 2 kWh placed on the EU market, accessible via a QR code on the physical unit.',
          intro: [
            'Since 18 February 2025, carbon footprint declarations have been mandatory for EV batteries placed on the EU market. From 18 February 2027, all EV batteries, Light Means of Transport (LMT) batteries, and industrial batteries above 2 kWh must carry a Digital Battery Passport accessible via a QR code on the physical unit.',
            'The passport is a structured, machine-readable data record covering material composition, manufacturing carbon footprint, recycled content, state of health, and supply chain due diligence declarations for critical minerals such as nickel, cobalt, and lithium.',
            'For Indonesian exporters supplying battery cells, components, or electric vehicles to the EU, this means production data and mineral provenance need to be structured well ahead of the deadline, not assembled at the last minute before shipment.',
          ],
          timeline: [
            { date: '18 Feb 2025', label: 'Carbon footprint declaration becomes mandatory for EV batteries.', done: true },
            {
              date: '18 Feb 2027',
              label: 'Digital Battery Passport mandatory for EV, LMT, and industrial batteries above 2 kWh.',
            },
            {
              date: '18 Aug 2031',
              label: 'Minimum recycled content thresholds apply: 16% cobalt, 85% lead, 6% lithium, 6% nickel.',
            },
          ],
          requiredDataHeading: 'Data You Need to Prepare',
          requiredData: [
            { label: 'Manufacturing carbon footprint', desc: 'Calculated in kg CO2-equivalent per kWh of battery capacity, per the methodology set out in the regulation.' },
            { label: 'Recycled content', desc: 'Actual percentage of recycled cobalt, lead, lithium, and nickel in each battery unit.' },
            { label: 'Supply chain due diligence', desc: 'Declaration of critical mineral origin, including social and environmental risk at the point of extraction.' },
            { label: 'State of health & performance', desc: 'Lifecycle data supporting second-life reuse and end-of-life recycling.' },
          ],
          faqHeading: 'Frequently Asked Questions',
          faq: [
            {
              q: 'Are Indonesian battery component manufacturers affected, or only finished-unit assemblers?',
              a: 'Yes, they are affected. Passport data must cover the entire upstream supply chain, including cell, cathode, and raw mineral suppliers, not only the entity placing the finished product on the EU market.',
            },
            {
              q: 'How much lead time is realistic to prepare this data?',
              a: 'Given the 18 February 2027 deadline and the complexity of tracing data down to Tier-N suppliers, MVI recommends starting the data onboarding process at least 12–18 months before the deadline.',
            },
          ],
          sourcesHeading: 'Sources',
          sources: [
            { label: 'EU Battery Passport Guide — Requirements, Timeline & Compliance (dpp-tool.com)', url: 'https://dpp-tool.com/en/guide/battery-passport/' },
            { label: 'EU Battery Passport Requirements & Feb 2027 Deadline (MyProductPassport)', url: 'https://myproductpassport.eu/blog/battery-passport-requirements-under-espr' },
            { label: 'Battery Regulation EU: Battery Passports (Circularise)', url: 'https://www.circularise.com/blogs/battery-regulation-eu-what-you-need-to-know-about-battery-passports' },
          ],
          ctaHeading: 'Prepare Your Digital Battery Passport',
          ctaDesc: 'Discuss the readiness of your critical mineral and carbon footprint data with the MVI compliance team.',
        },
      },
      {
        slug: 'textiles',
        title: 'Textiles, Apparel & Footwear',
        mandate: 'Meeting the ESPR Textiles & Footwear mandate.',
        desc: 'Fibre supply chain tracing, hazardous chemical testing (REACH), durability indicators, and product recycling instructions for global fashion brands.',
        image: '/img/sectors/tpt.webp',
        detail: {
          regulationName: 'ESPR, Textiles Delegated Act (Ecodesign for Sustainable Products Regulation)',
          regulationSummary:
            'A dedicated textiles delegated act is targeted for adoption in 2027, with mandatory Digital Product Passport compliance expected no earlier than 2028, covering clothing, fashion accessories, and home textiles.',
          intro: [
            'The European Union is developing a dedicated textiles delegated act under the ESPR framework. Preparatory studies and stakeholder consultation are running through 2025–2026, with the delegated act targeted for adoption in 2027. Because a delegated act cannot take effect earlier than 18 months after adoption, mandatory compliance for textile products is realistically no earlier than 2028.',
            'Scope is expected to be broad: clothing, fashion accessories, and home textiles. Footwear is being assessed separately; a dedicated European Commission study on footwear is targeted for completion by end-2027.',
            'This Digital Product Passport applies to any brand or retailer selling textile products in the EU market, including international brands and SME labels. For Indonesian textile manufacturers and exporters, the window through 2028 is best used to build data infrastructure now, rather than waiting for the final regulation to be adopted.',
          ],
          timeline: [
            { date: '2025–2026', label: 'Preparatory studies and stakeholder consultation for the textiles delegated act.', done: true },
            { date: '2027 (target)', label: 'Textiles delegated act targeted for adoption by the European Commission.' },
            { date: 'End 2027', label: 'Dedicated European Commission study on footwear targeted for completion.' },
            { date: '2028 (earliest)', label: 'Mandatory Digital Product Passport compliance for textiles takes effect.' },
          ],
          requiredDataHeading: 'Data to Prepare Early',
          requiredData: [
            { label: 'Fibre supply chain', desc: 'Tracing fabric fibre origin from raw material suppliers through to final production.' },
            { label: 'Hazardous chemical testing', desc: 'REACH compliance for restricted and hazardous substances in textile materials.' },
            { label: 'Durability indicators', desc: 'Product durability data forming part of the ESPR ecodesign assessment.' },
            { label: 'Recycling instructions', desc: 'Material composition data and end-of-life recycling guidance.' },
          ],
          faqHeading: 'Frequently Asked Questions',
          faq: [
            {
              q: 'Since compliance is only mandatory from 2028, can Indonesian textile exporters afford to wait?',
              a: 'Legally there is still time, but major European brands are already requiring traceability data readiness now as part of their own supplier due diligence. Waiting for the final delegated act risks leaving exporters behind competitors who are already building their data infrastructure.',
            },
            {
              q: 'Is footwear covered under the same mandate as apparel textiles?',
              a: 'Not entirely. Footwear is being assessed through a separate European Commission study targeted for completion by end-2027, so its timeline and specific requirements may differ from apparel textiles.',
            },
          ],
          sourcesHeading: 'Sources',
          sources: [
            { label: 'ESPR Crash Course — Textiles (Carbonfact)', url: 'https://www.carbonfact.com/blog/policy/espr-textile' },
            { label: 'EU Digital Product Passport ESPR Explained (COSH!)', url: 'https://cosh.eco/en/articles/eu-digital-product-passport-espr-explained-fashion-textiles' },
            { label: 'How Fashion Brands Can Prepare for the EU DPP (TrusTrace)', url: 'https://trustrace.com/knowledge-hub/how-fashion-brands-can-prepare-for-the-eu-digital-product-passport-a-practical-guide-1' },
          ],
          ctaHeading: 'Build Your Textile Data Readiness Now',
          ctaDesc: 'Start fibre traceability and REACH compliance infrastructure ahead of the textiles delegated act.',
        },
      },
      {
        slug: 'timber-furniture',
        title: 'Furniture & Timber Commodities',
        mandate: 'Meeting the EU Deforestation Regulation (EUDR) mandate.',
        desc: 'Anti-deforestation due diligence with geolocation data, sustainable timber and rattan sourcing evidence, and product circularity readiness.',
        image: '/img/sectors/kayu.webp',
        detail: {
          regulationName: 'EU Deforestation Regulation, EUDR (EU) 2023/1115',
          regulationSummary:
            'Requires timber products and derivatives (including wooden furniture) placed on or exported from the EU market to be proven deforestation-free, legally produced, and traceable to a geolocated origin. Compliance deadline for large and medium operators: 30 December 2026.',
          intro: [
            'The EUDR requires that commodities and their derived products placed on or exported from the EU market are proven deforestation-free, legally produced under the laws of the country of origin, and traceable to their source. The regulation covers seven commodities, including wood, with a broad scope of derived products.',
            'Wooden furniture falls within EUDR scope. Specifically, timber products and derivatives are covered under HS codes 4401-4421, including raw timber, sawn wood, plywood, wooden furniture components, pulp, and related products.',
            'The compliance deadline for large and medium companies is 30 December 2026 (extended from an original 2025 target). Indonesia is classified as standard risk, the default category applied to most major exporting countries. Several European timber importers have already cut ties with suppliers linked to deforestation ahead of the deadline, signalling that the market is screening suppliers more strictly well before the official cut-off.',
          ],
          timeline: [
            { date: '2023', label: 'EUDR (EU) 2023/1115 enters into force as EU law.', done: true },
            { date: '2025', label: 'Original compliance deadline extended to end of 2026.', done: true },
            {
              date: '30 Dec 2026',
              label: 'Mandatory compliance deadline for large and medium companies, including Indonesian timber furniture exporters.',
            },
          ],
          requiredDataHeading: 'Data You Need to Prepare',
          requiredData: [
            { label: 'Plot geolocation', desc: 'Precise GPS coordinates for every forest plot or concession where timber was harvested; polygon mapping for larger forest areas.' },
            { label: 'Due diligence statement', desc: 'A formal document proving the product is deforestation-free and legally produced, backed by verified geolocation data.' },
            { label: 'Sustainable sourcing evidence', desc: 'Documentation of timber and rattan origin supporting sustainable production claims.' },
            { label: 'Product circularity indicators', desc: 'Repairability index data and end-of-life recycling potential for furniture products.' },
          ],
          faqHeading: 'Frequently Asked Questions',
          faq: [
            {
              q: 'Are small furniture manufacturers also bound by the 30 December 2026 deadline?',
              a: 'The deadline formally applies to large and medium operators. However, because SMEs typically supply larger exporters, geolocation and timber legality data will still be requested by their trading partners as part of a supply chain that must be proven compliant.',
            },
            {
              q: 'Why is precise geolocation data emphasised over a simple timber legality certificate?',
              a: 'The EUDR requires proof traced directly to the point of origin, not just administrative legality documents. GPS coordinates allow cross-verification against satellite deforestation data, so a certificate alone is no longer sufficient without a verified geolocation point.',
            },
          ],
          sourcesHeading: 'Sources',
          sources: [
            { label: 'EU Deforestation Regulation (EUDR): The Complete Guide 2026', url: 'https://theovervieweffect.nl/insights/a-deep-dive-into-the-eu-deforestation-regulation-eudr/' },
            { label: 'EUDR Furniture Compliance (TraceXTech)', url: 'https://tracextech.com/eudr-furniture-compliance/' },
            { label: 'EU deforestation law nudges timber trade, Indonesia probe shows (Mongabay)', url: 'https://news.mongabay.com/2026/04/eu-deforestation-law-nudges-timber-trade-indonesia-probe-shows-but-risks-persist/' },
          ],
          ctaHeading: 'Map Your Timber Supply Chain Geolocation',
          ctaDesc: 'Prepare your EUDR due diligence data ahead of the 30 December 2026 deadline with the MVI compliance team.',
        },
      },
    ],
  },

  how: {
    headingLight: 'How',
    headingBold: 'MVI Gateway Works',
    desc: 'Four stages, from supplier data input through to passport issuance in the EU DPP Registry.',
    items: [
      {
        n: '01',
        title: 'Data Intake',
        desc: 'Local suppliers enter operational data and upload supporting documentation through the MVI portal.',
        image: '/img/how/intake.webp',
      },
      {
        n: '02',
        title: 'Audit & Calculation',
        desc: 'MVI and its TIC consortium partners verify the data and calculate carbon footprint and LCA figures.',
        image: '/img/how/audit.webp',
      },
      {
        n: '03',
        title: 'Data Transformation',
        desc: 'The MVI Engine converts the data into GS1 Digital Link and JSON-LD digital formats.',
        image: '/img/how/transform.webp',
      },
      {
        n: '04',
        title: 'Passport Generation',
        desc: 'The Digital Product Passport is issued, linked to a physical QR code or NFC tag, and transmitted to the EU DPP Registry.',
        image: '/img/how/passport.webp',
      },
    ],
  },

  contact: {
    slogan:
      'Start using MVI Gateway today. Secure your export markets and step into the future of sustainable trade.',
    company: 'PT Mitra Verifikasi Indonesia (MVI)',
    addressLabel: 'Office',
    address:
      'Graha Surveyor Indonesia, Jl. Jend. Gatot Subroto, 19th Floor, Kav. 56, Jakarta 12950, Indonesia',
    emailLabel: 'Email',
    emails: ['info@mvi-id.com', 'compliance@mvi-id.com'],
    phoneLabel: 'Phone / WhatsApp',
    phone: '+62 8xx-xxxx-xxxx',
    linkedinLabel: 'LinkedIn',
    linkedin: 'PT Mitra Verifikasi Indonesia',
  },

  footer: {
    navTitle: 'Navigation',
    servicesTitle: 'Services',
    sectorsTitle: 'Sectors',
    rights: 'All rights reserved.',
  },

  a11y: {
    home: 'MVI home',
    openMenu: 'Open menu',
    backToTop: 'Back to top',
    languageSwitch: 'Switch language',
  },

  sectorPage: {
    pathSegment: 'sectors',
    backLabel: 'Back to Sector Solutions',
    regulationLabel: 'Applicable Regulation',
    detailCta: 'Learn more',
  },
}
