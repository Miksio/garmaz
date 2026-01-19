import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { OfferTiles } from "@/components/offer-tiles"
import { QualitySection } from "@/components/quality-section"
import { Gallery } from "@/components/gallery"
import { StoresSection } from "@/components/stores-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <OfferTiles />
      <QualitySection />
      <Gallery />
      <StoresSection />
      <Footer />
    </main>
  )
}
