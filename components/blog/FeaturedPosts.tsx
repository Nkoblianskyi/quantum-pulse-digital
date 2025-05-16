import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      slug: "future-of-first-party-data",
      title: "The Future of First-Party Data in Digital Marketing",
      excerpt:
        "As third-party cookies phase out, first-party data strategies become essential for effective targeting and personalization.",
      date: "May 10, 2025",
      readTime: "8 min read",
      image: "/d5113173059c3276c7f9317366c1909a.jpg",
      category: "Data & Analytics",
    },
    {
      slug: "advanced-cro-techniques",
      title: "Conversion Rate Optimization: Beyond the Basics",
      excerpt: "Advanced techniques to identify and fix conversion bottlenecks in your marketing funnel.",
      date: "April 28, 2025",
      readTime: "10 min read",
      image: "/4c49b03b35c5e97cff77def710ac2e8e.jpg",
      category: "Conversion Optimization",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
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
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>

                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                </div>

                <div className="p-6 pt-0 mt-auto border-t border-border">
                  <div className="flex items-center text-primary font-medium">
                    Read article
                    <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts
