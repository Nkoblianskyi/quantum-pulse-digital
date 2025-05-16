"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "What services does QuantumPulse Digital offer?",
    answer:
      "We offer a comprehensive range of digital marketing services including PPC Management, Conversion Rate Optimization, Analytics & Data, Marketing Automation, Content Marketing, and Social Media Marketing. Each service is tailored to meet your specific business goals and objectives.",
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer:
      "The timeline for results varies depending on the service and your specific goals. PPC campaigns can show immediate traffic increases, while SEO and content marketing typically take 3-6 months to demonstrate significant results. During our initial consultation, we'll provide a realistic timeline based on your unique situation.",
  },
  {
    question: "Do you offer customized marketing strategies?",
    answer:
      "We believe in creating tailored strategies for each client. We begin with a comprehensive analysis of your business, industry, competitors, and goals to develop a customized marketing plan designed to achieve your specific objectives.",
  },
  {
    question: "What metrics do you track to measure success?",
    answer:
      "We track a variety of metrics depending on your goals, including but not limited to: conversion rates, cost per acquisition, return on ad spend (ROAS), organic traffic growth, engagement rates, and ultimately, revenue impact. We provide transparent reporting and focus on the metrics that matter most to your business.",
  },
  {
    question: "How do you stay current with digital marketing trends?",
    answer:
      "Our team is committed to continuous learning and professional development. We regularly participate in industry conferences, certification programs, and training sessions. We also conduct ongoing research and testing to ensure our strategies leverage the latest trends and technologies in digital marketing.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-lg">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
