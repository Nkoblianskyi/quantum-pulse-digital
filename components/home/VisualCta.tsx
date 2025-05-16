import Link from "next/link"
import { ArrowRight } from "lucide-react"

const VisualCta = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            There's a reason your funnel is leaking. <br />
            <span className="gradient-text">Let's fix it — together.</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free 30-minute strategy session to identify your biggest marketing opportunities.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium text-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            Request a Free Audit
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default VisualCta
