import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import { basePath } from "@/lib/base-path"

export function QualitySection() {
  return (
    <section id="onas" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Najwyższa jakość, prawdziwy smak
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                W Lęborki Garmaż wierzymy, że dobre jedzenie to podstawa szczęśliwego życia. 
                Dlatego każdego dnia wstajemy przed świtem, by przygotować dla Ciebie 
                posiłki, które smakują jak domowe.
              </p>
              <p>
                Nasze receptury przekazywane są z pokolenia na pokolenie. Używamy tylko 
                lokalnych, świeżych składników od sprawdzonych dostawców. Żadnych 
                konserwantów, żadnych sztucznych dodatków – tylko prawdziwy, autentyczny smak.
              </p>
              <p>
                Zapraszamy do naszych sklepów i stoisk, gdzie codziennie czeka na Ciebie 
                bogaty wybór dań obiadowych, sałatek, zup i domowych wypieków.
              </p>
            </div>            
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={`${basePath}/images/quality-kitchen.jpg`}
                alt="Witryna z domowymi daniami w Lęborki Garmaż"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
