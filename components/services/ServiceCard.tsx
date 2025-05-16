import Link from "next/link"
import { ArrowRight, Check, BarChart3, LineChart, PieChart, Workflow, FileText, Share2 } from "lucide-react"

interface ServiceFeature {
  id: string
  title: string
  description: string
  iconName: string
  features: string[]
}

interface ServiceCardProps {
  service: ServiceFeature
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  // Map service.iconName to the appropriate Lucide icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ppc":
        return <BarChart3 className="h-12 w-12 text-primary" />
      case "cro":
        return <LineChart className="h-12 w-12 text-primary" />
      case "analytics":
        return <PieChart className="h-12 w-12 text-primary" />
      case "automation":
        return <Workflow className="h-12 w-12 text-primary" />
      case "content":
        return <FileText className="h-12 w-12 text-primary" />
      case "social":
        return <Share2 className="h-12 w-12 text-primary" />
      default:
        return <BarChart3 className="h-12 w-12 text-primary" />
    }
  }

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="mb-4">{getIcon(service.iconName)}</div>
        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
        <p className="text-muted-foreground mb-6">{service.description}</p>

        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-primary mr-2 mt-1 flex-shrink-0" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 pt-0 mt-auto">
        <Link
          href={`/services/${service.id}`}
          className="inline-flex items-center text-primary hover:underline font-medium"
        >
          Learn more
          <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
