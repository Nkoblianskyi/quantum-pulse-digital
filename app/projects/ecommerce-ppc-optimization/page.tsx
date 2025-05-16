import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, TrendingUp, Target, BarChart, LineChart, PieChart, Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-commerce PPC Campaign Optimization | QuantumPulse Digital",
  description:
    "See how we helped a fashion retailer increase ROAS by 217% through strategic PPC campaign optimization and funnel improvements.",
}

export default function EcommercePPCCaseStudy() {
  const results = [
    {
      metric: "ROAS",
      before: "1.2x",
      after: "3.8x",
      improvement: "+217%",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      metric: "Conversion Rate",
      before: "1.8%",
      after: "4.7%",
      improvement: "+161%",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      metric: "Cost Per Acquisition",
      before: "$46",
      after: "$28.50",
      improvement: "-38%",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      metric: "Revenue",
      before: "$120K/mo",
      after: "$380K/mo",
      improvement: "+217%",
      icon: <PieChart className="h-6 w-6" />,
    },
  ]

  const approach = [
    {
      title: "Comprehensive Account Audit",
      description:
        "We conducted a deep dive into the existing campaign structure, identifying inefficiencies and opportunities for improvement.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Advanced Audience Segmentation",
      description:
        "We restructured audience targeting based on purchase intent signals and customer lifetime value predictions.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Creative Optimization",
      description:
        "We developed a systematic A/B testing framework for ad creative, improving click-through rates by 68%.",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      title: "Landing Page Optimization",
      description:
        "We redesigned key landing pages with a focus on conversion rate optimization, reducing bounce rates by 42%.",
      icon: <LineChart className="h-6 w-6" />,
    },
  ]

  return (
    <>
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              E-commerce Case Study
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Fashion Retailer PPC Campaign Optimization</h1>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-card rounded-full text-sm">E-commerce</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">PPC Management</span>
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A growing fashion retailer was struggling with rising customer acquisition costs and diminishing
                  returns from their digital advertising campaigns. Their ROAS had dropped to 1.2x, making scaling
                  impossible and threatening the profitability of their online channel.
                </p>
                <p className="text-lg text-muted-foreground">
                  They needed a comprehensive overhaul of their PPC strategy to improve efficiency and restore
                  profitability while maintaining sales volume.
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
                    <h3 className="text-xl font-bold mb-3">Campaign Restructuring</h3>
                    <p className="text-muted-foreground mb-4">
                      We completely rebuilt the campaign architecture using a SKAG (Single Keyword Ad Group) approach
                      for high-value products and a more consolidated structure for broader categories.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>
                          Implemented granular campaign structure with dedicated budgets for high-ROAS segments
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Developed custom bidding strategies based on product margin and inventory levels</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Audience Strategy</h3>
                    <p className="text-muted-foreground mb-4">
                      We built a sophisticated audience targeting framework that leveraged first-party data and
                      platform-specific signals.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>
                          Created custom audience segments based on purchase history, browsing behavior, and engagement
                          levels
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>
                          Implemented lookalike audiences with varying similarity thresholds for prospecting campaigns
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Creative Optimization</h3>
                    <p className="text-muted-foreground mb-4">
                      We established a systematic creative testing framework to continuously improve ad performance.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>
                          Developed a matrix of value propositions, CTAs, and visual elements for structured testing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>
                          Created dynamic ad templates that automatically featured best-selling products and promotions
                        </span>
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
                    Results achieved within <span className="font-medium text-foreground">90 days</span> of
                    implementation.
                  </p>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[75%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Start</span>
                    <span>30 days</span>
                    <span>60 days</span>
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
              <h3 className="text-xl font-bold mb-3">Audience Precision Beats Scale</h3>
              <p className="text-muted-foreground">
                Narrower, more precisely targeted audiences consistently outperformed broader targeting, even with
                smaller reach.
              </p>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Creative Consistency Matters</h3>
              <p className="text-muted-foreground">
                Maintaining visual and messaging consistency from ad to landing page significantly improved conversion
                rates.
              </p>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Data-Driven Budget Allocation</h3>
              <p className="text-muted-foreground">
                Dynamic budget reallocation based on real-time performance metrics led to significant efficiency gains.
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
              Ready for similar results for <br />
              <span className="gradient-text">your business?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free 30-minute strategy session to identify your biggest marketing opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center"
              >
                Get a free consultation
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
