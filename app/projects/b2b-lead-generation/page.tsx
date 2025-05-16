import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, TrendingUp, Target, BarChart, LineChart, PieChart, Zap, Mail, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "B2B Lead Generation Campaign | QuantumPulse Digital",
  description:
    "See how we helped a professional services firm increase qualified leads by 124% and reduce cost per lead by 42% through strategic marketing automation.",
}

export default function B2BLeadGenerationCaseStudy() {
  const results = [
    {
      metric: "Qualified Leads",
      before: "+55%",
      after: "+124%",
      improvement: "+124%",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      metric: "Cost Per Lead",
      before: "$118",
      after: "$68",
      improvement: "-42%",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      metric: "Lead-to-Sale",
      before: "8%",
      after: "12%",
      improvement: "+50%",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      metric: "Revenue Growth",
      before: "+12%",
      after: "+38%",
      improvement: "+217%",
      icon: <PieChart className="h-6 w-6" />,
    },
  ]

  const approach = [
    {
      title: "Audience Segmentation",
      description:
        "We developed detailed buyer personas and segmented the audience based on industry, role, and buying stage.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Content Strategy",
      description:
        "We created targeted content assets for each stage of the buyer's journey to nurture leads effectively.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Marketing Automation",
      description:
        "We implemented automated workflows to deliver the right content to the right person at the right time.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Lead Scoring",
      description:
        "We developed a sophisticated lead scoring system to prioritize sales follow-up based on engagement signals.",
      icon: <Mail className="h-6 w-6" />,
    },
  ]

  return (
    <>
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              B2B Case Study
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Services Lead Generation Campaign</h1>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-card rounded-full text-sm">B2B Services</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">Marketing Automation</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">Email Marketing</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A professional services firm specializing in corporate consulting was struggling to generate a
                  consistent flow of qualified leads. Their existing lead generation efforts were producing inconsistent
                  results, and their sales team was spending too much time on unqualified prospects.
                </p>
                <p className="text-lg text-muted-foreground">
                  They needed a systematic approach to lead generation that would deliver a steady stream of
                  high-quality leads while reducing the cost per acquisition.
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
                    <h3 className="text-xl font-bold mb-3">LinkedIn Advertising Campaign</h3>
                    <p className="text-muted-foreground mb-4">
                      We developed a targeted LinkedIn advertising campaign to reach decision-makers in specific
                      industries.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created custom audience segments based on industry, company size, and job title</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Developed industry-specific content offers to drive form submissions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Implemented A/B testing for ad creative and landing pages</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Lead Nurturing Workflow</h3>
                    <p className="text-muted-foreground mb-4">
                      We built a sophisticated lead nurturing workflow to move prospects through the funnel.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created a 6-part email sequence with targeted content for each buyer persona</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Implemented behavioral triggers to adapt content based on engagement</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Developed case study webinars for mid-funnel prospects</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Lead Scoring System</h3>
                    <p className="text-muted-foreground mb-4">
                      We implemented a comprehensive lead scoring system to prioritize sales follow-up.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>
                          Assigned point values to different engagement activities (email opens, clicks, form
                          submissions)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created automated alerts for sales when leads reached qualification thresholds</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Integrated with CRM to provide sales team with engagement history</span>
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
              <h3 className="text-xl font-bold mb-3">Persona-Based Content Works</h3>
              <p className="text-muted-foreground">
                Content tailored to specific buyer personas generated 3.2x higher engagement than generic content.
              </p>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Lead Scoring Improves Efficiency</h3>
              <p className="text-muted-foreground">
                Sales team reported 68% less time spent on unqualified leads after implementing the scoring system.
              </p>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Multi-Channel Approach is Key</h3>
              <p className="text-muted-foreground">
                Leads that engaged across multiple channels (LinkedIn, email, webinar) converted at 2.4x the rate of
                single-channel leads.
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
              Ready to transform your <br />
              <span className="gradient-text">lead generation strategy?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free 30-minute strategy session to identify your biggest lead generation opportunities.
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
