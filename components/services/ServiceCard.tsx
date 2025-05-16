import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"

interface ServiceFeature {
  id: string
  title: string
  description: string
  icon: string
  image: string
  features: string[]
}

interface ServiceCardProps {
  service: ServiceFeature
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6 flex-grow">
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
