import { BarChartIcon as ChartBar, Lightbulb, Microscope, Users, Zap, BarChart } from "lucide-react"

const CoreValues = () => {
  const values = [
    {
      icon: <ChartBar className="h-8 w-8" />,
      title: "Data-Driven Decisions",
      description:
        "We believe in making decisions based on data, not assumptions. Every strategy we develop is rooted in analytics and measurable outcomes.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Systematic Innovation",
      description:
        "We approach innovation methodically, testing new ideas with a structured framework that minimizes risk and maximizes impact.",
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Relentless Optimization",
      description:
        "We're never satisfied with 'good enough.' We continuously analyze, refine, and improve to drive ever-better results.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client Partnership",
      description:
        "We view ourselves as an extension of our clients' teams, aligning our goals with their business objectives and growth targets.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Execution Excellence",
      description:
        "We believe that strategy without execution is meaningless. We pride ourselves on flawless implementation and attention to detail.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Transparent Reporting",
      description:
        "We provide clear, honest reporting that shows both successes and areas for improvement, ensuring accountability at every step.",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The principles that guide our work</h2>
          <p className="text-xl text-muted-foreground">
            These core values define our approach to digital marketing and shape how we work with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-background rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="bg-primary/10 text-primary rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues
