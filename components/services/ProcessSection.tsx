import { CheckCircle } from "lucide-react"

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Audit",
      description:
        "We analyze your current marketing performance, identify gaps, and uncover opportunities for growth.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We create a custom marketing roadmap aligned with your business goals and target audience.",
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute the strategy across channels, optimizing for maximum performance and ROI.",
    },
    {
      number: "04",
      title: "Optimization & Scaling",
      description: "We continuously refine and scale what works, eliminating what doesn't to maximize results.",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
          <p className="text-xl text-muted-foreground">
            Our systematic approach ensures consistent results and continuous improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-background rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-primary/5 rounded-xl border border-primary/20 p-6 flex items-start gap-4">
          <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="text-xl font-bold mb-2">Our Commitment</h3>
            <p className="text-muted-foreground">
              We believe in transparency and accountability. Every strategy comes with clear KPIs, regular reporting,
              and continuous optimization to ensure we're always driving toward your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
