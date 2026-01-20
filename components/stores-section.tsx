"use client"

import { MapPin, Clock, Phone } from "lucide-react"

export function StoresSection() {
  return (
    <section id="sklepy" className="py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Odwiedź nas
            </h2>
            <p className="text-muted-foreground">
              Zapraszamy do naszego sklepu po świeże, domowe dania
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Address Card */}
            <div className="bg-card rounded-2xl shadow-lg p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                    Lęborski Garmaż
                  </h3>
                  <p className="text-muted-foreground">
                    ul. Gdańska 117<br />
                    84-300 Lębork
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Godziny otwarcia</h4>
                  <p className="text-muted-foreground text-sm">
                    Poniedziałek - Piątek: 8:00 - 18:00<br />
                    Sobota: 8:00 - 14:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                  <a 
                    href="tel:+48598624890" 
                    className="text-primary font-semibold text-lg hover:underline"
                  >
                    +48 59 862 48 90
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden h-[300px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2339.0!2d17.748!3d54.538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd9f0f0f0f0f0f%3A0x0!2zTMSZYm9yaywgR2RhxYRza2EgMTE3!5e0!3m2!1spl!2spl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja Lęborski Garmaż"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
