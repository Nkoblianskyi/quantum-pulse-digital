import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, TrendingUp, BarChart, LineChart, Instagram, Users, ShoppingBag } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Social Media Growth Campaign | QuantumPulse Digital",
  description:
    "See how we helped a consumer brand increase social media engagement by 186% and followers by 112K through strategic social media management.",
}

export default function SocialMediaCampaignCaseStudy() {
  const results = [
    {
      metric: "Engagement Rate",
      before: "1.2%",
      after: "3.4%",
      improvement: "+186%",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      metric: "Followers",
      before: "33K",
      after: "145K",
      improvement: "+340%",
      icon: <Users className="h-6 w-6" />,
    },
    {
      metric: "Social Revenue",
      before: "42/mo",
      after: "75/mo",
      improvement: "+78%",
      icon: <ShoppingBag className="h-6 w-6" />,
    },
    {
      metric: "Content Reach",
      before: "120K/mo",
      after: "1.8M/mo",
      improvement: "+1400%",
      icon: <Instagram className="h-6 w-6" />,
    },
  ]

  const approach = [
    {
      title: "Content Strategy",
      description: "We developed a comprehensive content strategy aligned with brand values and audience interests.",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      title: "Community Management",
      description: "We implemented a proactive community management approach to boost engagement and loyalty.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Influencer Partnerships",
      description: "We established strategic partnerships with relevant micro and macro influencers.",
      icon: <Instagram className="h-6 w-6" />,
    },
    {
      title: "Performance Analytics",
      description: "We set up robust tracking and reporting to measure ROI and optimize performance.",
      icon: <LineChart className="h-6 w-6" />,
    },
  ]

  return (
    <>
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Social Media Case Study
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consumer Brand Social Media Growth Campaign</h1>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-card rounded-full text-sm">Consumer Goods</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">Social Media Management</span>
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A consumer brand in the lifestyle sector was struggling to build a meaningful presence on social
                  media. Despite having quality products and a clear brand identity, they were experiencing low
                  engagement, slow follower growth, and minimal social-driven revenue.
                </p>
                <p className="text-lg text-muted-foreground">
                  They needed a comprehensive social media strategy that would build brand awareness, engage their
                  target audience, and drive measurable business results.
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
                    <h3 className="text-xl font-bold mb-3">Content Pillars & Calendar</h3>
                    <p className="text-muted-foreground mb-4">
                      We developed a strategic content framework to ensure consistent, engaging content.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created 5 content pillars aligned with brand values and audience interests</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Developed a 90-day content calendar with platform-specific content</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Implemented a content batch production process for efficiency</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Influencer Strategy</h3>
                    <p className="text-muted-foreground mb-4">
                      We developed a comprehensive influencer program to extend reach and build credibility.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Identified and partnered with 35 micro-influencers in the target niche</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created a brand ambassador program with performance-based incentives</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Developed collaborative content series with 3 macro-influencers</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Community Building</h3>
                    <p className="text-muted-foreground mb-4">
                      We implemented a proactive community management strategy to boost engagement.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created a user-generated content campaign with branded hashtag</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Implemented a community engagement protocol with response time targets</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Launched weekly interactive content series to drive participation</span>
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
                    Results achieved within <span className="font-medium text-foreground">6 months</span> of
                    implementation.
                  </p>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[100%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Start</span>
                    <span>3 months</span>
                    <span>6 months</span>
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
              <h3 className="text-xl font-bold mb-3">Consistency Drives Growth</h3>
              <p className="text-muted-foreground">
                Consistent posting schedule and visual identity increased average engagement by 186% across platforms.
              </p>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Micro-Influencers Deliver ROI</h3>
              <p className="text-muted-foreground">
                Micro-influencer collaborations delivered 3.2x higher engagement rate and 2.1x better conversion rate
                than macro-influencers.
              </p>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Community Management Matters</h3>
              <p className="text-muted-foreground">
                Accounts with active community management saw 78% higher follower retention and 112% more user-generated
                content.
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
              <span className="gradient-text">social media presence?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free 30-minute social media audit to identify your biggest growth opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center"
              >
                Get a free social media audit
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
