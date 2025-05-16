"use client"

import { useRouter } from "next/navigation"
import { ArrowRight, Mail } from "lucide-react"

const NewsletterSignup = () => {
  const router = useRouter()

  const handleContactRedirect = () => {
    router.push("/contact")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-background rounded-full px-4 py-2 mb-6">
            <Mail size={18} className="text-primary mr-2" />
            <span className="font-medium">Subscribe to our newsletter</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get the latest marketing insights <br />
            <span className="gradient-text">delivered to your inbox</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 12,000+ marketing professionals who receive our weekly insights on digital marketing trends,
            strategies, and tactics.
          </p>

          <div className="max-w-md mx-auto">
            <button
              onClick={handleContactRedirect}
              className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup
