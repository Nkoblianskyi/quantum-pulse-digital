import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

interface ProjectResult {
  metric: string
  value: string
  change: string
}

interface ProjectProps {
  id: string
  title: string
  client: string
  industry: string
  service: string
  image: string
  results: ProjectResult[]
  tags: string[]
  featured: boolean
}

interface ProjectCardProps {
  project: ProjectProps
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {project.featured && (
          <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Star size={14} className="mr-1" />
            Featured
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card to-transparent h-16"></div>
      </div>

      <div className="p-6 flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-primary/10 rounded-md text-primary text-xs font-medium">
            {project.industry}
          </span>
          <span className="px-2 py-1 bg-secondary/10 rounded-md text-secondary text-xs font-medium">
            {project.service}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.client}</p>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.results.map((result, index) => (
            <div key={index} className="bg-background rounded-lg p-2 text-center">
              <div className="text-xs text-muted-foreground mb-1">{result.metric}</div>
              <div className="text-lg font-bold">{result.value}</div>
              <div className="text-xs text-primary">{result.change}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs text-muted-foreground bg-background px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 pt-0 mt-auto border-t border-border">
        <div className="flex items-center text-primary font-medium">
          View case study
          <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
