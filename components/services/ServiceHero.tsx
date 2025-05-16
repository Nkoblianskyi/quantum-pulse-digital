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
        </div>
      </div>
    </section>
  )
}

export default ServiceHero
