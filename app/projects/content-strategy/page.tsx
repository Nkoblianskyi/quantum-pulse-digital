import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, TrendingUp, BarChart, LineChart, PieChart, FileText, Search, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Content Marketing Strategy | QuantumPulse Digital",
  description:
    "See how we helped a financial services provider increase organic traffic by 215% and lead quality by 40% through strategic content marketing.",
}

export default function ContentStrategyCaseStudy() {
  const results = [
    {
      metric: "Organic Traffic",
      before: "+42%",
      after: "+215%",
      improvement: "+412%",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      metric: "Lead Quality",
      before: "Baseline",
      after: "+40%",
      improvement: "+40%",
      icon: <Users className="h-6 w-6" />,
    },
    {
      metric: "Content ROI",
      before: "114%",
      after: "320%",
      improvement: "+180%",
      icon: <PieChart className="h-6 w-6" />,
    },
    {
      metric: "Keyword Rankings",
      before: "18",
      after: "86",
      improvement: "+378%",
      icon: <Search className="h-6 w-6" />,
    },
  ]

  const approach = [
    {
      title: "Content Audit",
      description:
        "We analyzed existing content performance and identified gaps and opportunities in the content strategy.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      title: "Keyword Research",
      description: "We conducted comprehensive keyword research to identify high-value topics and search terms.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Content Calendar",
      description: "We developed a strategic content calendar aligned with business goals and audience needs.",
      icon: <BarChart className="h-6 w-6" />,
    },
    {
      title: "Performance Tracking",
      description: "We implemented robust tracking to measure content performance and ROI.",
      icon: <LineChart className="h-6 w-6" />,
    },
  ]

  return (
    <>
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Content Case Study
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Services Content Marketing Strategy</h1>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 bg-card rounded-full text-sm">Finance</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">Content Strategy</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">SEO</span>
              <span className="px-3 py-1 bg-card rounded-full text-sm">Lead Generation</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A financial services provider was struggling to generate quality leads through their content marketing
                  efforts. Their existing content was not resonating with their target audience, resulting in low
                  engagement and poor conversion rates.
                </p>
                <p className="text-lg text-muted-foreground">
                  They needed a comprehensive content strategy that would establish them as a thought leader in their
                  industry, drive organic traffic, and generate high-quality leads.
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
                    <h3 className="text-xl font-bold mb-3">Content Pillar Strategy</h3>
                    <p className="text-muted-foreground mb-4">
                      We developed a content pillar strategy focused on key financial topics relevant to their target
                      audience.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created 5 core content pillars with 8-10 supporting topics each</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Developed comprehensive pillar pages for each core topic</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Implemented internal linking strategy to boost SEO performance</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Content Creation Process</h3>
                    <p className="text-muted-foreground mb-4">
                      We established a systematic content creation process to ensure quality and consistency.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Developed detailed content briefs with keyword targets and audience insights</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created a content review workflow with subject matter expert input</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Implemented a content optimization process for existing assets</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Lead Generation Assets</h3>
                    <p className="text-muted-foreground mb-4">
                      We created high-value lead generation assets to capture contact information.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Developed 6 in-depth guides on key financial topics</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Created interactive financial calculators and tools</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                        <span>Produced a quarterly financial trends report with original research</span>
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
                    Initial results seen within <span className="font-medium text-foreground">3 months</span>, with full
                    impact measured after 6 months.
                  </p>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[50%]"></div>
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
              <h3 className="text-xl font-bold mb-3">Pillar Content Strategy Works</h3>
              <p className="text-muted-foreground">
                The pillar content approach resulted in 3.4x more organic traffic than standalone blog posts.
              </p>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Quality Over Quantity</h3>
              <p className="text-muted-foreground">
                Fewer, more comprehensive pieces outperformed a higher volume of shorter content by 215% in terms of
                engagement.
              </p>
            </div>

            <div className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-bold mb-3">Interactive Content Converts</h3>
              <p className="text-muted-foreground">
                Interactive tools and calculators had a 340% higher conversion rate than static downloadable assets.
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
              <span className="gradient-text">content marketing strategy?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free 30-minute content audit to identify your biggest content opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center"
              >
                Get a free content audit
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
