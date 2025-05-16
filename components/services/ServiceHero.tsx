import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ServiceHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Data-Driven Marketing <span className="gradient-text">Systems</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We don't just run campaigns — we build systematic engines that drive predictable, measurable growth.
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
              View our case studies
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
