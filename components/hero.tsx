import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { basePath } from "@/lib/base-path"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`${basePath}/images/hero-food.jpg`}
          alt="Pyszne domowe dania z kuchni Lęborki Garmaż"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24">
        <div className="max-w-3xl mx-auto text-center">          

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6 text-balance">
            Poznaj świeże dania prosto z naszej kuchni
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-card/90 leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
            Każdego dnia przygotowujemy dla Ciebie domowe posiłki z najwyższej jakości składników. 
            Tradycyjne receptury, świeże produkty i smak jak u babci – to nasza filozofia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-base font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link href="#oferta">
                Zobacz naszą ofertę
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base font-medium border-card/30 text-card hover:bg-card/10 hover:text-card bg-transparent"
            >
              <Link href="#sklepy">
                Znajdź nas
              </Link>
            </Button>
          </div>
        </div>
      </div>      
    </section>
  )
}
