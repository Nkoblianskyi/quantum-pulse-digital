import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"

interface BlogPostHeaderProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  author: {
    name: string
    role: string
    image: string
  }
  category: string
  image: string
}

const BlogPostHeader = ({ title, excerpt, date, readTime, author, category, image }: BlogPostHeaderProps) => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="mb-6">
        <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
          {category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{excerpt}</p>

        <div className="flex items-center">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image src={author.image || "/placeholder.svg"} alt={author.name} fill className="object-cover" />
          </div>
          <div>
            <div className="font-bold flex items-center">
              <User size={14} className="mr-2 text-muted-foreground" />
              {author.name}
            </div>
            <div className="text-muted-foreground text-sm">{author.role}</div>
          </div>
          <div className="ml-auto flex items-center text-muted-foreground text-sm">
            <Calendar size={14} className="mr-2" />
            <span>{date}</span>
            <span className="mx-2">•</span>
            <Clock size={14} className="mr-2" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden border border-border h-[400px] md:h-[500px]">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
    </div>
  )
}

export default BlogPostHeader
