import ServiceHero from "@/components/services/ServiceHero"
import ServiceCard from "@/components/services/ServiceCard"
import ProcessSection from "@/components/services/ProcessSection"
import TestimonialSlider from "@/components/services/TestimonialSlider"
import CTASection from "@/components/services/CTASection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | QuantumPulse Digital",
  description:
    "Explore our comprehensive range of data-driven digital marketing services designed to transform your online presence and drive measurable ROI.",
}

export default function ServicesPage() {
  const services = [
    {
      id: "ppc-management",
      title: "PPC Management",
      description:
        "Data-driven paid advertising campaigns that maximize ROAS across Google, Meta, and other platforms.",
      iconName: "ppc",
      features: [
        "Campaign structure optimization",
        "Advanced audience targeting",
        "A/B testing framework",
        "Bid management strategy",
        "Creative optimization",
        "Performance reporting",
      ],
    },
    {
      id: "conversion-optimization",
      title: "Conversion Optimization",
      description:
        "Transform your traffic into customers with our systematic approach to conversion rate optimization.",
      iconName: "cro",
      features: [
        "User journey mapping",
        "Conversion funnel analysis",
        "Landing page optimization",
        "Checkout flow enhancement",
        "Behavioral analytics",
        "Split testing framework",
      ],
    },
    {
      id: "analytics-setup",
      title: "Analytics Setup",
      description: "Comprehensive tracking implementation to capture every meaningful interaction and conversion.",
      iconName: "analytics",
      features: [
        "GA4 implementation",
        "Event tracking setup",
        "Custom dimension configuration",
        "E-commerce tracking",
        "Cross-domain tracking",
        "Data visualization dashboards",
      ],
    },
    {
      id: "marketing-automation",
      title: "Marketing Automation",
      description: "Streamline your marketing processes and nurture leads with personalized automation workflows.",
      iconName: "automation",
      features: [
        "Email sequence development",
        "Lead scoring implementation",
        "Behavioral triggers",
        "CRM integration",
        "Personalization strategy",
        "Performance analytics",
      ],
    },
    {
      id: "content-strategy",
      title: "Content Strategy",
      description: "Strategic content creation that attracts, engages, and converts your target audience.",
      iconName: "content",
      features: [
        "Content audit & gap analysis",
        "Keyword research & mapping",
        "Editorial calendar development",
        "Content performance tracking",
        "Conversion-focused copywriting",
        "Distribution strategy",
      ],
    },
    {
      id: "social-media-management",
      title: "Social Media Management",
      description: "Build brand awareness and engagement through strategic social media presence and campaigns.",
      iconName: "social",
      features: [
        "Platform strategy development",
        "Content calendar creation",
        "Community management",
        "Paid social campaigns",
        "Performance analytics",
        "Competitor analysis",
      ],
    },
  ]

  return (
    <>
      <ServiceHero />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Marketing Services</h2>
            <p className="text-xl text-muted-foreground">
              We offer end-to-end digital marketing solutions designed to drive measurable growth for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <TestimonialSlider />
      <CTASection />
    </>
  )
}
