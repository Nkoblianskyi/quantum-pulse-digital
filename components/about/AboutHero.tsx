import Link from "next/link"
import { ArrowRight } from "lucide-react"

const AboutHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We're building the future of <span className="gradient-text">data-driven marketing</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            QuantumPulse Digital is a team of marketing strategists, data scientists, and creative thinkers dedicated to
            transforming how businesses approach digital growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center"
            >
              Work with us
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero
