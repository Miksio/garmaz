"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { basePath } from "@/lib/base-path"

const ofertaItems = [
  { label: "Garmaż", href: "#garmaz" },
  { label: "Dania w słoikach", href: "#sloiki" },
  { label: "Oferta świąteczna", href: "#swiateczna" },
  { label: "Catering", href: "#catering" },
]

const navItems = [
  { label: "Strona główna", href: "#" },
  { label: "Lokalizacja", href: "#Lokalizacja" },  
  { label: "Kontakt", href: "#kontakt" }, 
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileOfertaOpen, setIsMobileOfertaOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3">            
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-transparent ring-0">
              <img
                src={`${basePath}/LogoGarmaz.jpg`}
                alt="Lęborki Garmaż logo"
                className="w-full h-full object-cover"
              />
            </div>
             <span className={cn(
               "font-serif text-xl font-semibold transition-colors",
               isScrolled ? "text-foreground" : "text-card"
             )}>
               Lęborski Garmaż
             </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="#"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-card/10",
                isScrolled ? "text-foreground hover:bg-muted" : "text-card hover:bg-card/20"
              )}
            >
              Strona główna
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-card/10",
                    isScrolled ? "text-foreground hover:bg-muted" : "text-card hover:bg-card/20"
                  )}
                >
                  Oferta
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                {ofertaItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                  isScrolled ? "text-foreground hover:bg-muted" : "text-card hover:bg-card/20"
                )}
              >
                {item.label}
              </Link>
            ))}
            {/* Phone Number CTA */}
            <a
              href="tel:+48598624890"
              className={cn(
                "ml-2 flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all",
                isScrolled 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-card text-foreground hover:bg-card/90"
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+48 59 862 48 90</span>
              <span className="xl:hidden">Zadzwoń</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden",
              isScrolled ? "text-foreground" : "text-card"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col pt-4 space-y-1">
              <Link
                href="#"
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Strona główna
              </Link>

              <div>
                <button
                  onClick={() => setIsMobileOfertaOpen(!isMobileOfertaOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                >
                  Oferta
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isMobileOfertaOpen && "rotate-180")} />
                </button>
                {isMobileOfertaOpen && (
                  <div className="pl-4 space-y-1">
                    {ofertaItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
