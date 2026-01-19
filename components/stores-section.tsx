import { MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stores = [
  {
    name: "Lęborski Garmaż",
    address: "Gdańska 117, 84-300 Lębork",
    hours: "Pon-Pt: 8:00-18:00, Sob: 8:00-14:00",
  },
]

// ...existing code...
export function StoresSection() {
  return (
    <section id="Lokalizacja" className="py-12 lg:py-16 bg-muted"> {/* zmniejszone pionowe padding */}
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10"> {/* mniejsze przerwy */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-4xl font-bold text-foreground mb-4">
            Lokalizacja
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Odwiedź nas w naszym garmażu i odkryj pełną ofertę 
            świeżych dań przygotowywanych codziennie.
          </p>
        </div>

        {/* Map (mniejsza, na środku) */}
        <div className="max-w-2xl mx-auto"> {/* mniejsza max-szerokość */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg"> {/* niższa wysokość mapy */}
            <iframe
              title="Mapa - Gdańska 117, Lębork"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.9631884868936!2d17.747186594438276!3d54.544402413926406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fddd9949b391a7%3A0x55d4bc5fc1543124!2zIkzEmWJvcnNraSBnYXJtYcW8Ig!5e1!3m2!1spl!2sus!4v1768832327557!5m2!1spl!2sus"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Sklep (teraz poniżej mapy, bez nachodzenia) */}
        <div className="mt-4 flex justify-center"> {/* normalny margin zamiast -mt */}
          <div className="w-full sm:w-64 lg:w-80"> {/* mniejszy rozmiar niż mapa */}
            <Card className="border-0 shadow-lg bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 font-serif text-lg">
                  <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4.5 h-4.5 text-primary" />
                  </div>
                  Sklep
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {stores.map((store) => (
                  <div key={store.name} className="pb-1">
                    <h4 className="font-semibold text-foreground mb-1">{store.name}</h4>
                    <p className="text-muted-foreground text-sm mb-1">{store.address}</p>
                    <p className="text-primary text-sm font-medium">{store.hours}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>        
      </div>
    </section>
  )
  
}