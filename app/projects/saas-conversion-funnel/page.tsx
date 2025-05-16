import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, TrendingUp, BarChart, LineChart, PieChart, Zap, Users, Layers } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SaaS Conversion Funnel Redesign | QuantumPulse Digital",
  description:
    "See how we helped a B2B software company increase trial signups by 86% and improve trial-to-paid conversion by 45% through strategic funnel optimization.",
}

export default function SaaSConversionFunnelCaseStudy() {
  const results = [
    {
      metric: "Trial Signups",
      before: "+46%",
      after: "+86%",
      improvement: "+86%",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      metric: "Trial-to-Paid",
      before: "22%",
      after: "32%",
      improvement: "+45%",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      metric: "Customer Acquisition Cost",
      before: "650",
      after: "420",
      improvement: "-35%",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      metric: "Annual Recurring Revenue",
      before: "1.2",
      after: "2.8",
      improvement: "+133%",
      icon: <PieChart className="h-6 w-6" />,
    },
  ]

  const approach = [
    {
      title: "User Journey Mapping",
      description:
        "We conducted extensive user research to identify friction points and opportunities in the conversion funnel.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Conversion Funnel Analysis",
      description: "We analyzed each step of the funnel to identify where users were dropping off and why.",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "A/B Testing Framework",
      description: "We implemented a systematic testing framework to validate all changes and measure their impact.",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      title: "UX/UI Redesign",
      description: "We redesigned key touchpoints with a focus on clarity, simplicity, and user motivation.",
      icon: <Zap className="h-6 w-6" />,
    },
  ]

  return (
    <>
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              SaaS Case Study
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">B2B Software Company Conversion Funnel Redesign</h1>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-card rounded-full text-sm">SaaS</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">Conversion Optimization</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">UX Design</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">A/B Testing</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A B2B SaaS company was struggling with low conversion rates throughout their funnel. Despite driving
                  significant traffic to their website, they were experiencing high bounce rates on their landing pages,
                  low trial signup rates, and poor trial-to-paid conversion.
                </p>
                <p className="text-lg text-muted-foreground">
                  They needed a comprehensive overhaul of their conversion funnel to improve efficiency at each stage
                  and increase their overall customer acquisition effectiveness.
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
                    <h3 className="text-xl font-bold mb-3">Landing Page Optimization</h3>
                    <p className="text-muted-foreground mb-4">
                      We redesigned the main landing pages with a focus on clear value proposition, social proof, and
                      simplified call-to-action.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Simplified messaging to focus on key benefits rather than features</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Added customer testimonials and case studies to build trust</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Reduced form fields from 9 to 4, increasing form completion rates by 62%</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Trial Experience Redesign</h3>
                    <p className="text-muted-foreground mb-4">
                      We completely revamped the trial onboarding experience to help users reach their "aha moment"
                      faster.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created an interactive onboarding wizard that guides users to key features</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Implemented progress tracking to encourage feature exploration</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Added contextual help and tooltips to reduce support requests</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Email Nurture Sequence</h3>
                    <p className="text-muted-foreground mb-4">
                      We developed a behavior-based email sequence to nurture trial users toward conversion.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created targeted emails based on user behavior and feature usage</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Implemented case study showcases relevant to the user's industry</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Added personalized check-ins from customer success team for high-value prospects</span>
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
                    Results achieved within <span className="font-medium text-foreground">60 days</span> of
                    implementation.
                  </p>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[100%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Start</span>
                    <span>30 days</span>
                    <span>60 days</span>
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
              <h3 className="text-xl font-bold mb-3">Simplicity Drives Conversion</h3>
              <p className="text-muted-foreground">
                Reducing complexity in both messaging and user interface led to significant improvements in conversion
                rates.
              </p>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Guided Onboarding is Critical</h3>
              <p className="text-muted-foreground">
                Users who completed the guided onboarding process were 3.2x more likely to convert to paid customers.
              </p>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Behavioral Targeting Works</h3>
              <p className="text-muted-foreground">
                Email sequences triggered by specific user behaviors had 2.8x higher engagement than time-based
                sequences.
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
              Ready to optimize your <br />
              <span className="gradient-text">conversion funnel?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free 30-minute strategy session to identify your biggest conversion opportunities.
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
