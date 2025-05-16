import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ProjectsHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real Results for <span className="gradient-text">Real Businesses</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses achieve measurable growth.
          </p>

        </div>
      </div>
    </section>
  )
}

export default ProjectsHero
