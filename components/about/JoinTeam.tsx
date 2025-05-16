import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

const JoinTeam = () => {
  const benefits = [
    "Remote-first culture with flexible working hours",
    "Competitive salary and performance bonuses",
    "Continuous learning and development opportunities",
    "Regular team retreats and events",
    "Health and wellness benefits",
    "Collaborative and supportive work environment",
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
              Join Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Grow your career with us</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We're always looking for talented individuals who are passionate about data-driven marketing and want to
              make a real impact for our clients. Join our team of experts and help shape the future of digital
              marketing.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-primary mr-3 mt-1" size={20} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              href="/careers"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              View open positions
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden border border-border">
              <Image
                src="/9fc8069b4e9a1f66ef6005b487be8cf9.jpg"
                alt="QuantumPulse Digital team culture"
                width={600}
                height={450}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl border border-border shadow-xl">
              <div className="text-3xl font-bold gradient-text">Join us</div>
              <div className="text-sm text-muted-foreground">We're hiring!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinTeam
