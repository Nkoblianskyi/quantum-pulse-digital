import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, BarChart, Target, Zap, LineChart, PieChart, TrendingUp } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PPC Management Services | QuantumPulse Digital",
  description:
    "Our data-driven PPC management services maximize ROAS across Google, Meta, and other platforms through advanced targeting and optimization.",
}

export default function PPCManagementPage() {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Advanced Audience Targeting",
      description: "Precision targeting based on demographics, interests, behaviors, and custom intent signals.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Campaign Structure Optimization",
      description: "Strategic account organization for maximum control, insights, and performance.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Creative Optimization",
      description: "Data-driven ad creative development and testing to maximize engagement and conversions.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Bid Management Strategy",
      description: "Sophisticated bidding strategies that balance volume and efficiency to meet business goals.",
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Cross-Channel Integration",
      description: "Cohesive strategy across Google, Meta, LinkedIn, and other platforms for maximum reach.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Reporting",
      description: "Comprehensive reporting dashboards with actionable insights and recommendations.",
    },
  ]

  const platforms = [
    "Google Ads",
    "Meta Ads (Facebook & Instagram)",
    "LinkedIn Ads",
    "TikTok Ads",
    "Microsoft Ads",
    "YouTube Ads",
    "Amazon Advertising",
  ]

  const process = [
    {
      number: "01",
      title: "Account Audit & Strategy",
      description: "We analyze your current PPC performance, identify opportunities, and develop a custom strategy.",
    },
    {
      number: "02",
      title: "Campaign Setup & Launch",
      description: "We build optimized campaign structures, create compelling ad creative, and launch your campaigns.",
    },
    {
      number: "03",
      title: "Optimization & Testing",
      description: "We continuously test and refine targeting, bidding, and creative to improve performance.",
    },
    {
      number: "04",
      title: "Scaling & Expansion",
      description: "We scale successful campaigns and expand to new channels and audiences for continued growth.",
    },
  ]

  return (
    <>
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                PPC Management
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Data-Driven Paid Advertising Campaigns</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We create and manage high-performance paid advertising campaigns that maximize ROAS across Google, Meta,
                and other platforms.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1" size={20} />
                  <span>Strategic campaign structure for maximum control and insights</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1" size={20} />
                  <span>Advanced audience targeting and segmentation</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1" size={20} />
                  <span>Continuous testing and optimization for improved performance</span>
                </div>
                <div className="flex items-start">
                  <Check className="text-primary mr-3 mt-1" size={20} />
                  <span>Comprehensive reporting and actionable insights</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 inline-flex items-center"
              >
                Get a free PPC audit
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-border">
              <Image
                src="/placeholder-4w0ap.png"
                alt="PPC Management Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive PPC Management</h2>
            <p className="text-xl text-muted-foreground">
              Our PPC management services include everything you need to maximize your advertising ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                Platforms We Work With
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Cross-Platform Expertise</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We manage campaigns across all major advertising platforms to reach your audience wherever they are.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {platforms.map((platform, index) => (
                  <div key={index} className="flex items-center bg-card rounded-lg p-4 border border-border">
                    <Check className="text-primary mr-3" size={20} />
                    <span>{platform}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-border">
              <Image
                src="/placeholder-13x3k.png"
                alt="Advertising Platforms"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Deliver Results</h2>
            <p className="text-xl text-muted-foreground">
              Our systematic approach ensures consistent performance and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((step) => (
              <div
                key={step.number}
                className="bg-background rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your <br />
              <span className="gradient-text">paid advertising performance?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free 30-minute PPC audit to identify your biggest opportunities for improvement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center"
              >
                Get a free PPC audit
                <ArrowRight className="ml-2" size={18} />
              </Link>

              <Link
                href="/projects"
                className="px-8 py-4 rounded-full border border-border bg-transparent hover:bg-card-foreground/5 transition-colors text-lg flex items-center"
              >
                View our case studies
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
