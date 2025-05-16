"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Plus, Minus } from "lucide-react"

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "While some improvements can be seen within weeks, meaningful results typically take 2-3 months. Our approach focuses on building sustainable growth systems rather than quick fixes. We establish clear KPIs and reporting from day one so you can track progress throughout our partnership.",
    },
    {
      question: "What makes QuantumPulse different from other agencies?",
      answer:
        "Unlike traditional agencies that focus on vanity metrics, we build systematic marketing engines that drive measurable business outcomes. Our data-driven approach, specialized expertise in performance marketing, and focus on ROI set us apart. We don't just run campaigns—we build growth systems.",
    },
    {
      question: "Do you work with businesses in specific industries?",
      answer:
        "We specialize in working with e-commerce, SaaS, and B2B companies. Our methodologies are particularly effective for businesses with AOVs above $100 and those looking to scale their digital marketing efforts efficiently. We've developed industry-specific playbooks that accelerate results.",
    },
    {
      question: "What's your pricing structure?",
      answer:
        "We offer customized packages based on your specific needs and goals. Our engagements typically start at $5,000/month for comprehensive marketing management. We also offer project-based work for specific initiatives like funnel audits or analytics setup. Contact us for a personalized quote.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our services and approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-xl overflow-hidden">
                <button
                  className="flex items-center justify-between w-full p-6 text-left bg-card hover:bg-card-foreground/5 transition-colors"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-muted-foreground">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">Have more questions? We're here to help.</p>
            <Link href="/faq" className="inline-flex items-center text-primary hover:underline font-medium mr-6">
              View all FAQs
              <ArrowRight className="ml-2" size={16} />
            </Link>
            <Link href="/contact" className="inline-flex items-center text-primary hover:underline font-medium">
              Contact us
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
