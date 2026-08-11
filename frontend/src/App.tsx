import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import About from './components/About'
import Services from './components/Services'
import Why from './components/Why'
import Sectors from './components/Sectors'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'
import SectorDetail from './pages/SectorDetail'
import { useLocale } from './LocaleContext'

function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Why />
      <Sectors />
      <HowItWorks />
      <Contact />
    </main>
  )
}

export default function App() {
  const { route } = useLocale()

  // Navigasi lintas halaman ke beranda dengan hash (mis. dari halaman detail
  // sektor ke "/#contact") perlu menunggu Home ter-mount dulu baru scroll,
  // karena target elemennya belum ada di DOM saat pushState terjadi.
  useEffect(() => {
    if (route.name !== 'home' || !window.location.hash) return

    const id = window.location.hash.slice(1)
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView()
    })
    return () => cancelAnimationFrame(raf)
  }, [route])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      {route.name === 'sector-detail' ? (
        <main>
          <SectorDetail slug={route.slug} />
        </main>
      ) : (
        <Home />
      )}
      <Footer />
      <BackToTop />
    </>
  )
}
