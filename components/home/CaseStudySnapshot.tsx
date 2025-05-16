import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

const CaseStudySnapshot = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
                Case Study
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How we transformed an e-commerce store's marketing funnel
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3">The Challenge</h3>
                  <p className="text-muted-foreground">
                    An e-commerce store was struggling with high ad costs and low conversion rates. Their ROAS was
                    hovering around 1.2, making scaling impossible.
                  </p>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3">Our Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Comprehensive funnel audit to identify conversion bottlenecks</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Restructured ad campaigns with refined audience targeting</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Implemented A/B testing on landing pages and checkout flow</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Created automated email sequences for cart abandonment</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="text-xl font-bold mb-3">The Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">3.8x</div>
                      <div className="text-sm text-muted-foreground">ROAS</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">+112%</div>
                      <div className="text-sm text-muted-foreground">Conversion Rate</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">-38%</div>
                      <div className="text-sm text-muted-foreground">CPA</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Within 60 days, the client was able to scale their ad spend by 2.5x while maintaining profitability.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                View all case studies
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden border border-border">
                <Image
                  src="/c882101d49cb19902d4da9311578a262.jpg"
                  alt="E-commerce case study results"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl border border-border shadow-xl">
                <div className="text-3xl font-bold text-primary">217%</div>
                <div className="text-sm text-muted-foreground">Revenue Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudySnapshot
