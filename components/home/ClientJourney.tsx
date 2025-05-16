import { ArrowRight, CheckCircle, Clock, FileText, BarChart2, Zap, Target } from "lucide-react"
import Link from "next/link"

const ClientJourney = () => {
  const steps = [
    {
      id: "step-1",
      icon: <FileText className="h-8 w-8" />,
      title: "Discovery & Audit",
      description: "We analyze your current marketing performance, identify gaps, and uncover opportunities.",
      duration: "1-2 weeks",
    },
    {
      id: "step-2",
      icon: <Target className="h-8 w-8" />,
      title: "Strategy Development",
      description: "We create a custom marketing roadmap aligned with your business goals and target audience.",
      duration: "1 week",
    },
    {
      id: "step-3",
      icon: <Zap className="h-8 w-8" />,
      title: "Implementation",
      description: "We execute the strategy across channels, optimizing for maximum performance.",
      duration: "2-4 weeks",
    },
    {
      id: "step-4",
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Optimization & Scaling",
      description: "We continuously refine and scale what works, eliminating what doesn't.",
      duration: "Ongoing",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Growth Journey</h2>
          <p className="text-xl text-muted-foreground">
            A systematic approach to transforming your digital marketing performance.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}
          <div className="absolute top-24 left-1/2 w-0.5 h-[calc(100%-120px)] bg-gradient-to-b from-primary via-secondary to-primary hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 relative">
                  <div
                    className={`bg-card rounded-xl border border-border p-6 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                  >
                    <div className="bg-primary/10 text-primary rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                      {step.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>

                    <div className="flex items-center text-muted-foreground">
                      <Clock size={16} className="mr-2" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  {/* Circle connector */}
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0 md:top-6 md:right-0 md:mr-[-12px] md:translate-y-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 hidden md:flex">
                    <div className="w-3 h-3 rounded-full bg-background"></div>
                  </div>
                </div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <CheckCircle size={18} className="mr-2" />
              <span>Ready to start your journey?</span>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Schedule a discovery call
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientJourney
