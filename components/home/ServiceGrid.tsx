import Link from "next/link"
import { ArrowRight, Zap, Target, BarChart3, LineChart, PieChart, Lightbulb } from "lucide-react"

const ServiceGrid = () => {
  const services = [
    {
      id: "traffic-engine",
      title: "Traffic Engine",
      icon: <Zap className="h-8 w-8" />,
      description: "From CPC chaos to ROAS clarity",
      link: "/services/ppc-management",
    },
    {
      id: "funnel-audit",
      title: "Funnel Audit",
      icon: <Target className="h-8 w-8" />,
      description: "From leaky funnels to conversion machines",
      link: "/services/conversion-optimization",
    },
    {
      id: "creative-lab",
      title: "Creative Lab",
      icon: <Lightbulb className="h-8 w-8" />,
      description: "From ad fatigue to scroll-stopping assets",
      link: "/services/creative-services",
    },
    {
      id: "retention-matrix",
      title: "Retention Matrix",
      icon: <PieChart className="h-8 w-8" />,
      description: "From one-time buyers to loyal customers",
      link: "/services/marketing-automation",
    },
    {
      id: "performance-scaling",
      title: "Performance Scaling",
      icon: <LineChart className="h-8 w-8" />,
      description: "From growth ceiling to sustainable scaling",
      link: "/services/performance-marketing",
    },
    {
      id: "lead-magnet-factory",
      title: "Lead Magnet Factory",
      icon: <BarChart3 className="h-8 w-8" />,
      description: "From cold traffic to qualified leads",
      link: "/services/lead-generation",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Marketing Systems</h2>
          <p className="text-xl text-muted-foreground">
            We don't just run campaigns — we build systematic engines that drive predictable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="bg-primary/10 text-primary rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>

              <p className="text-muted-foreground mb-4">{service.description}</p>

              <div className="flex items-center text-primary font-medium">
                Learn more
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceGrid
