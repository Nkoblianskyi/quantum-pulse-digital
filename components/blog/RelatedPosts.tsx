import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface RelatedPost {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
}

interface RelatedPostsProps {
  posts: RelatedPost[]
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  return (
    <div className="max-w-4xl mx-auto my-20">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </div>
            </div>

            <div className="p-6 flex-grow">
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center text-primary font-medium text-sm">
                Read article
                <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={14} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedPosts
