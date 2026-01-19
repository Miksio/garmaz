import Link from "next/link"
import { UtensilsCrossed, Gift, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const tiles = [
  {
    icon: UtensilsCrossed,
    title: "Oferta garmażu",
    description: "Codziennie świeże dania obiadowe, sałatki, zupy i przystawki przygotowywane z lokalnych składników.",
    href: "#garmaz",
  },
  {
    icon: Gift,
    title: "Dania w słoikach",
    description: "Nasze specjały zamknięte w słoikach – idealne na zapas, na wyjazd lub jako prezent.",
    href: "#sloiki",
  },
  {
    icon: Users,
    title: "O nas",
    description: "Poznaj naszą historię, zespół i filozofię gotowania. Tradycja i pasja w każdym daniu.",
    href: "#onas",
  },
]

export function OfferTiles() {
  return (
    <section id="oferta" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiles.map((tile) => {
            const Icon = tile.icon
            return (
              <Link key={tile.title} href={tile.href} className="group">
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 bg-card">
                  <CardContent className="p-8 lg:p-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-3">
                      {tile.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tile.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
