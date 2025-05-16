import { notFound } from "next/navigation"
import { ArrowLeft, Check, BarChart3, LineChart, PieChart, Workflow, FileText, Share2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Service Not Found | QuantumPulse Digital",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: `${service.title} | QuantumPulse Digital`,
    description: service.description,
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  // Map service.iconName to the appropriate Lucide icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ppc":
        return <BarChart3 className="h-16 w-16 text-primary" />
      case "cro":
        return <LineChart className="h-16 w-16 text-primary" />
      case "analytics":
        return <PieChart className="h-16 w-16 text-primary" />
      case "automation":
        return <Workflow className="h-16 w-16 text-primary" />
      case "content":
        return <FileText className="h-16 w-16 text-primary" />
      case "social":
        return <Share2 className="h-16 w-16 text-primary" />
      default:
        return <BarChart3 className="h-16 w-16 text-primary" />
    }
  }

  return (
    <>
      <div className="bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2" size={16} />
            Back to Services
          </Link>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/3">
              <div className="mb-6">{getIcon(service.iconName)}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{service.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="text-primary mr-3 mt-1" size={20} />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-4">How Our {service.title} Service Works</h2>
              <p className="mb-6">
                Our approach to {service.title.toLowerCase()} is data-driven and results-focused. We begin with a
                comprehensive analysis of your current performance, identify opportunities for improvement, and develop
                a customized strategy tailored to your business goals.
              </p>

              <h2 className="text-2xl font-bold mb-4">Why Choose Our {service.title} Service</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-primary mr-3 mt-1" size={20} />
                  <span>Data-driven approach that focuses on measurable results</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-3 mt-1" size={20} />
                  <span>Experienced specialists with proven track records</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-3 mt-1" size={20} />
                  <span>Transparent reporting and regular performance reviews</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-3 mt-1" size={20} />
                  <span>Continuous optimization based on performance data</span>
                </li>
              </ul>
            </div>

            <div className="md:w-1/3 bg-card rounded-xl border border-border p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">
                Ready to improve your {service.title.toLowerCase()} performance?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation with our {service.title.toLowerCase()} specialists to discuss your goals
                and how we can help you achieve them.
              </p>
              <Button size="lg" className="w-full mb-4">
                Schedule a Consultation
              </Button>
              <p className="text-sm text-muted-foreground text-center">No obligation, just valuable insights</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions About {service.title}</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Get answers to common questions about our {service.title.toLowerCase()} services
            </p>

            <div className="space-y-6 text-left">
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">How long does it take to see results from {service.title}?</h3>
                <p>
                  The timeline for results varies depending on your specific situation, industry, and goals. Generally,
                  you can expect to see initial improvements within 4-6 weeks, with more significant results appearing
                  after 3-6 months of consistent optimization.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">How do you measure the success of {service.title}?</h3>
                <p>
                  We establish clear KPIs at the beginning of our engagement based on your business objectives. These
                  might include metrics like conversion rate, cost per acquisition, return on ad spend, or other
                  relevant performance indicators specific to your goals.
                </p>
              </div>

              <div className="border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer {service.title} as a standalone service?</h3>
                <p>
                  Yes, we offer {service.title.toLowerCase()} as both a standalone service and as part of a
                  comprehensive digital marketing strategy. We'll work with you to determine the best approach based on
                  your needs and objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your {service.title} Performance?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward improved results with our data-driven {service.title.toLowerCase()} services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Schedule a Consultation</Button>
            <Button size="lg" variant="outline">
              View Our Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

// Helper function to get service data by slug
function getServiceBySlug(slug: string) {
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

  return services.find((service) => service.id === slug)
}
