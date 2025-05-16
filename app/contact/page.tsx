import type { Metadata } from "next"
import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import FAQ from "@/components/contact/FAQ"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with QuantumPulse Digital for data-driven marketing solutions that deliver measurable results for your business.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <FAQ />
    </div>
  )
}
