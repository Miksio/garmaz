"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { basePath } from "@/lib/base-path"

const galleryImages = [
  { src: `${basePath}/images/gallery-1.jpg`, alt: "Bigos - tradycyjny polski przysmak" },
  { src: `${basePath}/images/gallery-2.jpg`, alt: "Domowe pierogi z cebulką" },
  { src: `${basePath}/images/gallery-3.jpg`, alt: "Dania w słoikach" },
  { src: `${basePath}/images/gallery-4.jpg`, alt: "Kotlet schabowy z ziemniakami" },
  { src: `${basePath}/images/gallery-5.jpg`, alt: "Gołąbki w sosie pomidorowym" },
  { src: `${basePath}/images/gallery-6.jpg`, alt: "Żurek z kiełbasą" },
  { src: `${basePath}/images/gallery-7.jpg`, alt: "Świąteczny karp" },
  { src: `${basePath}/images/gallery-8.jpg`, alt: "Rosół z domowym makaronem" },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nasze smaki
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Każde danie przygotowujemy z pasją i dbałością o detale. 
            Zobacz, co czeka na Ciebie w naszych sklepach.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setSelectedImage(image.src)}
              className={cn(
                "relative overflow-hidden rounded-xl group cursor-pointer",
                index === 0 && "md:col-span-2 md:row-span-2",
                index === 3 && "lg:col-span-2"
              )}
            >
              <div className={cn(
                "aspect-square",
                index === 0 && "md:aspect-auto md:h-full",
                index === 3 && "lg:aspect-[2/1]"
              )}>
                <Image
                  src={image.src || `${basePath}/placeholder.svg`}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-card text-sm font-medium bg-foreground/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {image.alt}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Powiększony obraz"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-card hover:text-primary transition-colors"
            aria-label="Zamknij"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl aspect-video">
            <Image
              src={selectedImage || `${basePath}/placeholder.svg`}
              alt="Powiększony obraz"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}
