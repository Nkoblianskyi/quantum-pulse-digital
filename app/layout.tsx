import type React from "react"
import type { Metadata } from "next"
import { Roboto  , Space_Grotesk } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import CookieBanner from "@/components/CookieBanner"

const inter = Roboto  ({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "QuantumPulse Digital | Data-Driven Marketing Agency",
    template: "%s | QuantumPulse Digital",
  },
  description:
    "QuantumPulse Digital helps businesses achieve measurable growth through data-driven digital marketing strategies and innovative solutions.",
  metadataBase: new URL("https://quantumpulsedigital.com"),
  openGraph: {
    title: "QuantumPulse Digital | Data-Driven Marketing Agency",
    description:
      "QuantumPulse Digital helps businesses achieve measurable growth through data-driven digital marketing strategies and innovative solutions.",
    url: "https://quantumpulsedigital.com",
    siteName: "QuantumPulse Digital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuantumPulse Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumPulse Digital | Data-Driven Marketing Agency",
    description:
      "QuantumPulse Digital helps businesses achieve measurable growth through data-driven digital marketing strategies and innovative solutions.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-[72px]">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
