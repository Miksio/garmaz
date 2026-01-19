import Link from "next/link"
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Garmaż", href: "#garmaz" },
  { label: "Dania w słoikach", href: "#sloiki" },
  { label: "Oferta świąteczna", href: "#swiateczna" },
  { label: "Nasze sklepy", href: "#sklepy" },
  { label: "Współpraca", href: "#wspolpraca" },
]

const partnerLogos = [
  { name: "Pyszne.pl", placeholder: true },
  { name: "Glovo", placeholder: true },
  { name: "Uber Eats", placeholder: true },
]

export function Footer() {
  return (
    <footer id="kontakt" className="bg-foreground text-card">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">L</span>
              </div>
              <span className="font-serif text-xl font-semibold text-card">
                Lęborki Garmaż
              </span>
            </Link>
            <p className="text-card/70 text-sm leading-relaxed">
              Domowe smaki prosto z serca Lęborka. Codziennie świeże dania 
              przygotowywane z pasją i z najlepszych składników od lokalnych dostawców.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5">Kontakt</h4>
            <div className="space-y-4">
              <div>
                <p className="text-card font-medium mb-1">Lęborki Garmaż Sp. z o.o.</p>
              </div>
              <div className="flex items-start gap-3 text-card/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>ul. Staromiejska 12<br />84-300 Lębork</span>
              </div>
              <div className="flex items-center gap-3 text-card/70 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+48591234567" className="hover:text-primary transition-colors">
                  +48 59 123 45 67
                </a>
              </div>
              <div className="flex items-center gap-3 text-card/70 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:kontakt@leborkigarmaz.pl" className="hover:text-primary transition-colors">
                  kontakt@leborkigarmaz.pl
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5">Na skróty</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-card/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners & Social */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5">Zobacz i zamów</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="px-4 py-2 bg-card/10 rounded-lg text-card/60 text-xs font-medium"
                >
                  {partner.name}
                </div>
              ))}
            </div>

            <h4 className="font-serif text-lg font-semibold mb-4">Obserwuj nas</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center text-card/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center text-card/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-card/10">
        <div className="container mx-auto px-4 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-card/50 text-xs">
            <p>© 2026 Lęborki Garmaż. Wszelkie prawa zastrzeżone.</p>
            <div className="flex items-center gap-4">
              <Link href="#rodo" className="hover:text-card transition-colors">
                Polityka prywatności
              </Link>
              <span>|</span>
              <Link href="#rodo" className="hover:text-card transition-colors">
                RODO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
