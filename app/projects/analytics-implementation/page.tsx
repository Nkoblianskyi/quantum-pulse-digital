import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, TrendingUp, BarChart, LineChart, PieChart, Zap, Database, BarChart2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cross-Platform Analytics Implementation | QuantumPulse Digital",
  description:
    "See how we helped a multi-channel retailer improve data accuracy by 32% and marketing ROI by 45% through comprehensive analytics implementation.",
}

export default function AnalyticsImplementationCaseStudy() {
  const results = [
    {
      metric: "Data Accuracy",
      before: "74%",
      after: "98%",
      improvement: "+32%",
      icon: <Database className="h-6 w-6" />,
    },
    {
      metric: "Marketing ROI",
      before: "+18%",
      after: "+45%",
      improvement: "+150%",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      metric: "Decision Speed",
      before: "10 days",
      after: "3 days",
      improvement: "-70%",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      metric: "Reporting Time",
      before: "24 hours",
      after: "Real-time",
      improvement: "-100%",
      icon: <BarChart className="h-6 w-6" />,
    },
  ]

  const approach = [
    {
      title: "Analytics Audit",
      description:
        "We conducted a comprehensive audit of existing tracking implementation and data collection practices.",
      icon: <Database className="h-6 w-6" />,
    },
    {
      title: "Measurement Strategy",
      description: "We developed a custom measurement framework aligned with business objectives and KPIs.",
      icon: <BarChart2 className="h-6 w-6" />,
    },
    {
      title: "Implementation Plan",
      description: "We created a detailed implementation roadmap with prioritized tracking requirements.",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      title: "Data Visualization",
      description: "We built custom dashboards and reports to make data accessible and actionable.",
      icon: <PieChart className="h-6 w-6" />,
    },
  ]

  return (
    <>
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Analytics Case Study
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Multi-Channel Retailer Analytics Implementation</h1>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-card rounded-full text-sm">Retail</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">Analytics Setup</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">GA4</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">Data Studio</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A multi-channel retailer with both online and brick-and-mortar stores was struggling with fragmented
                  and inaccurate data. Their existing analytics setup couldn't provide a unified view of customer
                  behavior across channels, leading to poor marketing decisions and wasted ad spend.
                </p>
                <p className="text-lg text-muted-foreground">
                  They needed a comprehensive analytics implementation that would provide accurate, actionable data
                  across all customer touchpoints and marketing channels.
                </p>
              </div>

              <div className="bg-card rounded-xl border border-border p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {approach.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-8">
                <h2 className="text-2xl font-bold mb-6">Implementation Details</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">GA4 Implementation</h3>
                    <p className="text-muted-foreground mb-4">
                      We implemented Google Analytics 4 with enhanced e-commerce tracking and custom event parameters.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Set up cross-domain tracking to maintain user journey across multiple domains</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Implemented enhanced e-commerce tracking for detailed purchase funnel analysis</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created custom dimensions for user segmentation and analysis</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Server-Side Tracking</h3>
                    <p className="text-muted-foreground mb-4">
                      We implemented server-side tracking to improve data accuracy and reduce client-side load.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Set up Google Tag Manager server-side container for improved data collection</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>
                          Implemented first-party cookies to improve data collection in privacy-focused browsers
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created custom server-side tracking for offline conversions</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Custom Dashboards</h3>
                    <p className="text-muted-foreground mb-4">
                      We built custom dashboards to make data accessible and actionable for different stakeholders.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created executive dashboard with high-level KPIs and business metrics</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Built marketing channel performance dashboard with ROAS and attribution insights</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Developed product performance dashboard with inventory and sales data integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border p-6 mb-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Results</h2>

                <div className="space-y-6">
                  {results.map((result, index) => (
                    <div key={index} className="bg-background rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="bg-primary/10 text-primary rounded-lg w-10 h-10 flex items-center justify-center mr-3">
                          {result.icon}
                        </div>
                        <h3 className="font-bold">{result.metric}</h3>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Before</div>
                          <div className="text-lg font-medium">{result.before}</div>
                        </div>

                        <div>
                          <div className="text-xs text-muted-foreground mb-1">After</div>
                          <div className="text-lg font-medium">{result.after}</div>
                        </div>

                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Change</div>
                          <div className="text-lg font-medium text-primary">{result.improvement}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-bold mb-2">Timeline</h3>
                  <p className="text-muted-foreground mb-4">
                    Implementation completed in <span className="font-medium text-foreground">45 days</span>, with
                    results measured after 90 days.
                  </p>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[50%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Start</span>
                    <span>45 days</span>
                    <span>90 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Learnings</h2>
            <p className="text-xl text-muted-foreground">
              Insights from this project that can be applied to similar challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Data Quality Over Quantity</h3>
              <p className="text-muted-foreground">
                Focusing on collecting accurate, relevant data proved more valuable than tracking everything possible.
              </p>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Stakeholder-Specific Reporting</h3>
              <p className="text-muted-foreground">
                Creating role-specific dashboards increased data adoption across the organization by 320%.
              </p>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Server-Side Tracking Benefits</h3>
              <p className="text-muted-foreground">
                Server-side implementation improved data accuracy by 24% and reduced page load time by 0.8 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to unlock the power of <br />
              <span className="gradient-text">accurate, actionable data?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free 30-minute analytics audit to identify your biggest data opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center"
              >
                Get a free analytics audit
                <ArrowRight className="ml-2" size={18} />
              </Link>

              <Link
                href="/projects"
                className="px-8 py-4 rounded-full border border-border bg-transparent hover:bg-card-foreground/5 transition-colors text-lg flex items-center"
              >
                View more case studies
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
