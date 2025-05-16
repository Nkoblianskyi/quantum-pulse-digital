"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search, Zap, BarChart, Lightbulb, Users, DollarSign, Clock } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type FAQCategory = {
  id: string
  name: string
  icon: React.ReactNode
  questions: FAQItem[]
}

type FAQItem = {
  question: string
  answer: string
}

const faqCategories: FAQCategory[] = [
  {
    id: "services",
    name: "Our Services",
    icon: <Zap className="h-5 w-5" />,
    questions: [
      {
        question: "What services does QuantumPulse Digital offer?",
        answer:
          "We offer a comprehensive range of digital marketing services including PPC Management, Conversion Rate Optimization, Analytics & Data, Marketing Automation, Content Marketing, and Social Media Marketing. Each service is tailored to meet your specific business goals and objectives.",
      },
      {
        question: "Do you offer customized marketing strategies?",
        answer:
          "We believe in creating tailored strategies for each client. We begin with a comprehensive analysis of your business, industry, competitors, and goals to develop a customized marketing plan designed to achieve your specific objectives.",
      },
      {
        question: "Can you help with specific platforms like Google Ads or Facebook?",
        answer:
          "Yes, we specialize in all major advertising platforms including Google Ads, Microsoft Ads, Facebook/Instagram Ads, LinkedIn Ads, TikTok Ads, and more. Our team includes certified specialists for each platform to ensure you get expert management of your campaigns.",
      },
      {
        question: "Do you offer website development services?",
        answer:
          "While our primary focus is on digital marketing, we do offer website optimization services as part of our Conversion Rate Optimization (CRO) package. For full website development, we work with trusted partners and can coordinate the project as part of a comprehensive marketing strategy.",
      },
      {
        question: "Can you help with e-commerce marketing specifically?",
        answer:
          "We have extensive experience with e-commerce marketing across various platforms including Shopify, WooCommerce, and Magento. Our strategies include shopping campaigns, dynamic remarketing, product feed optimization, and conversion rate optimization specifically for e-commerce businesses.",
      },
    ],
  },
  {
    id: "results",
    name: "Results & Reporting",
    icon: <BarChart className="h-5 w-5" />,
    questions: [
      {
        question: "How long does it take to see results from digital marketing efforts?",
        answer:
          "The timeline for results varies depending on the service and your specific goals. PPC campaigns can show immediate traffic increases, while SEO and content marketing typically take 3-6 months to demonstrate significant results. During our initial consultation, we'll provide a realistic timeline based on your unique situation.",
      },
      {
        question: "What metrics do you track to measure success?",
        answer:
          "We track a variety of metrics depending on your goals, including but not limited to: conversion rates, cost per acquisition, return on ad spend (ROAS), organic traffic growth, engagement rates, and ultimately, revenue impact. We provide transparent reporting and focus on the metrics that matter most to your business.",
      },
      {
        question: "How often will I receive reports on campaign performance?",
        answer:
          "We provide monthly comprehensive reports detailing performance metrics, insights, and recommendations. Additionally, you'll have access to a real-time dashboard where you can monitor campaign performance at any time. For clients with more active campaigns, we can arrange weekly check-ins and reports as needed.",
      },
      {
        question: "What kind of ROI can I expect from working with you?",
        answer:
          "ROI varies based on industry, competition, and your specific business model. However, our goal is always to deliver positive ROI as quickly as possible. Many of our clients see a positive return within the first 3 months of working with us. During our initial strategy session, we'll discuss realistic expectations based on your specific situation and industry benchmarks.",
      },
      {
        question: "How do you attribute conversions across multiple channels?",
        answer:
          "We implement advanced attribution modeling to understand how different channels contribute to conversions. Depending on your business, we may use multi-touch attribution models, data-driven attribution, or custom attribution models. We also integrate with your CRM when possible to track the full customer journey from first touch to sale.",
      },
    ],
  },
  {
    id: "process",
    name: "Our Process",
    icon: <Lightbulb className="h-5 w-5" />,
    questions: [
      {
        question: "How do you stay current with digital marketing trends?",
        answer:
          "Our team is committed to continuous learning and professional development. We regularly participate in industry conferences, certification programs, and training sessions. We also conduct ongoing research and testing to ensure our strategies leverage the latest trends and technologies in digital marketing.",
      },
      {
        question: "What does the onboarding process look like?",
        answer:
          "Our onboarding process typically takes 1-2 weeks and includes: 1) An initial discovery call to understand your business and goals, 2) Account access setup and tracking implementation, 3) Comprehensive audit of existing marketing efforts, 4) Strategy development and presentation, and 5) Campaign build-out and launch. Throughout this process, we maintain clear communication and set expectations for deliverables and timelines.",
      },
      {
        question: "Do you require long-term contracts?",
        answer:
          "We typically work on 6-month contracts to allow sufficient time to implement strategies and demonstrate results. However, we understand that flexibility is important, so we also offer 3-month starter packages for certain services. All contracts include a 30-day notice period should you wish to terminate the service.",
      },
      {
        question: "How often will we communicate about ongoing campaigns?",
        answer:
          "Communication frequency depends on your preference and the stage of your campaigns. Generally, we schedule monthly strategy calls to review performance and discuss next steps. However, we're always available via email or phone for urgent matters, and many clients opt for weekly check-ins during the initial launch phase of new campaigns.",
      },
      {
        question: "What happens if a campaign isn't performing well?",
        answer:
          "We monitor campaigns daily and make proactive adjustments when performance isn't meeting expectations. If a campaign consistently underperforms, we'll conduct a thorough analysis to identify the root causes and develop an action plan. This might involve testing new creative, adjusting targeting, or pivoting strategy. We believe in transparency and will always communicate challenges along with our plan to address them.",
      },
    ],
  },
  {
    id: "team",
    name: "Our Team",
    icon: <Users className="h-5 w-5" />,
    questions: [
      {
        question: "Who will be working on my account?",
        answer:
          "You'll be assigned a dedicated account manager who serves as your primary point of contact. Behind them is a team of specialists including PPC experts, data analysts, content creators, and CRO specialists who collaborate on your strategy. We maintain a low client-to-manager ratio to ensure personalized attention for each account.",
      },
      {
        question: "What qualifications do your team members have?",
        answer:
          "Our team members hold certifications from Google, Meta, Microsoft, HubSpot, and other industry leaders. Many have advanced degrees in marketing, data science, or related fields. We prioritize both technical expertise and strategic thinking when building our team, and all team members undergo continuous training to stay current with industry developments.",
      },
      {
        question: "Will I be able to speak directly with the specialists working on my campaigns?",
        answer:
          "Yes, while your account manager will coordinate most communication, we encourage direct conversations with our specialists during strategy sessions and technical discussions. This ensures clear communication and allows you to benefit directly from their expertise.",
      },
      {
        question: "Do you outsource any of your work?",
        answer:
          "We complete all strategic work and campaign management in-house with our core team. For certain specialized tasks like advanced video production or translation services, we may work with trusted partners, but this is always discussed with clients in advance and overseen by our team to maintain quality standards.",
      },
      {
        question: "How many clients does each account manager handle?",
        answer:
          "To ensure high-quality service, our account managers typically handle no more than 8-10 clients at a time. This allows them to develop deep knowledge of each client's business and provide proactive, strategic support rather than just reactive account maintenance.",
      },
    ],
  },
  {
    id: "pricing",
    name: "Pricing & Billing",
    icon: <DollarSign className="h-5 w-5" />,
    questions: [
      {
        question: "How is your pricing structured?",
        answer:
          "We offer several pricing models to suit different needs: 1) Monthly retainer packages based on service scope and complexity, 2) Performance-based pricing with a base fee plus performance incentives, and 3) Project-based pricing for one-time initiatives. During our consultation, we'll recommend the most appropriate model for your specific needs and budget.",
      },
      {
        question: "What's your minimum monthly investment?",
        answer:
          "Our managed service packages typically start at 3,000 per month, which includes strategy development, implementation, and ongoing optimization. This doesn't include ad spend, which is paid directly to the advertising platforms. For smaller businesses, we offer scaled-down packages starting at 1,500 per month with a more focused scope.",
      },
      {
        question: "Do you charge setup fees?",
        answer:
          "For most ongoing service packages, we waive setup fees for clients committing to at least a 6-month engagement. For shorter-term projects or clients requiring extensive initial work (such as rebuilding tracking systems or migrating from another platform), a one-time setup fee may apply. This will be clearly outlined in your proposal.",
      },
      {
        question: "How do you handle ad spend management?",
        answer:
          "Ad spend is paid directly to the advertising platforms (Google, Meta, etc.) through your company accounts. We provide recommendations on budget allocation and help set up billing, but you maintain full control and visibility of your ad spend. Our management fee is separate from your ad spend.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept credit cards, ACH transfers, and wire transfers. We typically bill monthly at the beginning of each service period. For annual contracts paid upfront, we offer a 10% discount on our management fees.",
      },
    ],
  },
  {
    id: "getting-started",
    name: "Getting Started",
    icon: <Clock className="h-5 w-5" />,
    questions: [
      {
        question: "How do I get started working with QuantumPulse Digital?",
        answer:
          "The process begins with a discovery call where we learn about your business, goals, and current marketing efforts. Following this, we'll prepare a proposal tailored to your needs. Once approved, we begin our onboarding process with account access, tracking setup, and strategy development. Contact us through our website or call directly to schedule your initial consultation.",
      },
      {
        question: "What information do you need from me to get started?",
        answer:
          "To get started effectively, we typically need: 1) Access to existing marketing platforms and analytics, 2) Information about your target audience and ideal customer, 3) Details about your products/services and pricing, 4) Past performance data if available, 5) Information about your sales process and conversion tracking, and 6) Your specific goals and KPIs. We provide a detailed onboarding checklist to make this process smooth.",
      },
      {
        question: "How quickly can you start working on my campaigns?",
        answer:
          "After signing the agreement, we can typically begin work within 3-5 business days. The full setup and launch process usually takes 2-3 weeks, depending on the complexity of your campaigns and how quickly we receive necessary information and access from your team. For urgent needs, we offer expedited onboarding for an additional fee.",
      },
      {
        question: "Do I need to have existing marketing campaigns to work with you?",
        answer:
          "No, we work with clients at all stages. Whether you're looking to optimize existing campaigns or build a digital marketing strategy from scratch, we can help. For new campaigns, our process includes additional market research and competitive analysis to establish a strong foundation.",
      },
      {
        question: "Can we do a trial period before committing long-term?",
        answer:
          "While we don't offer free trials (as meaningful results require proper strategy and implementation time), we do offer 3-month starter packages for clients who want to experience our process before committing to a longer engagement. These packages include all core services but with a more focused scope.",
      },
    ],
  },
]

export default function FAQCategories() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({})

  const toggleFAQ = (categoryId: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId] === index ? null : index,
    }))
  }

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <Tabs defaultValue="services" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                <span className="hidden md:inline">All</span>
              </TabsTrigger>
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-4">
            <div className="space-y-12">
              {faqCategories.map((category) => (
                <div key={category.id}>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    {category.icon}
                    {category.name}
                  </h3>
                  <div className="space-y-4">
                    {category.questions.map((item, index) => (
                      <div key={index} className="bg-card rounded-lg shadow-md overflow-hidden gradient-border">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                          onClick={() => toggleFAQ(category.id, index)}
                          aria-expanded={openItems[category.id] === index}
                        >
                          <span className="font-medium text-lg">{item.question}</span>
                          {openItems[category.id] === index ? (
                            <ChevronUp className="h-5 w-5 text-primary" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          )}
                        </button>

                        <div
                          className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                            openItems[category.id] === index ? "max-h-96 pb-6" : "max-h-0"
                          }`}
                        >
                          <p className="text-muted-foreground">{item.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {faqCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-4">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                {category.icon}
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.questions.map((item, index) => (
                  <div key={index} className="bg-card rounded-lg shadow-md overflow-hidden gradient-border">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => toggleFAQ(category.id, index)}
                      aria-expanded={openItems[category.id] === index}
                    >
                      <span className="font-medium text-lg">{item.question}</span>
                      {openItems[category.id] === index ? (
                        <ChevronUp className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      )}
                    </button>

                    <div
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                        openItems[category.id] === index ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
