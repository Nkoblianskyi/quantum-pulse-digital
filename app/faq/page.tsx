import type { Metadata } from "next"
import FAQHero from "@/components/faq/FAQHero"
import FAQCategories from "@/components/faq/FAQCategories"
import ContactCTA from "@/components/faq/ContactCTA"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | QuantumPulse Digital",
  description:
    "Find answers to common questions about our digital marketing services, processes, and how we can help your business achieve measurable results.",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <FAQHero />
      <FAQCategories />
      <ContactCTA />
    </div>
  )
}
