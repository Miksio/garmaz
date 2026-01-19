import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { basePath } from "@/lib/base-path"
import './globals.css'

const _dmSans = DM_Sans({ subsets: ["latin", "latin-ext"] });
const _playfairDisplay = Playfair_Display({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: 'Lęborki Garmaż - Świeże dania prosto z naszej kuchni',
  description: 'Lęborki Garmaż - lokalna marka oferująca świeże, domowe dania przygotowywane codziennie z najwyższej jakości składników. Garmaż, dania w słoikach, catering i oferta świąteczna.',
  generator: 'v0.app',
  keywords: ['garmaż', 'dania gotowe', 'kuchnia polska', 'Lębork', 'catering', 'dania w słoikach'],
   icons: {
    icon: [
      { url: `${basePath}/LogoGarmaz.jpg` }, // główna ikona (plik w public/)
    ],
    apple: `${basePath}/LogoGarmaz.jpg`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
