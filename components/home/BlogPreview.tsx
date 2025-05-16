import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

const BlogPreview = () => {
  const posts = [
    {
      id: "post-1",
      title: "The Future of First-Party Data in Digital Marketing",
      excerpt:
        "As third-party cookies phase out, first-party data strategies become essential for effective targeting and personalization.",
      date: "May 10, 2025",
      image: "/3145bec948c0a5ad359c443a8ecdd5d8.jpg",
      slug: "/blog/future-of-first-party-data",
    },
    {
      id: "post-2",
      title: "Conversion Rate Optimization: Beyond the Basics",
      excerpt: "Advanced techniques to identify and fix conversion bottlenecks in your marketing funnel.",
      date: "April 28, 2025",
      image: "/8d90d58b459e47be812dc180b7730fc3.jpg",
      slug: "/blog/advanced-cro-techniques",
    },
  ]

  return (
    <section className="py-20 bg-card clip-path-diagonal">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-xl text-muted-foreground">Actionable marketing strategies and analysis from our team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={post.slug}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar size={14} className="mr-2" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>

                <p className="text-muted-foreground mb-4">{post.excerpt}</p>

                <div className="flex items-center text-primary font-medium">
                  Read more
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-full border border-border hover:bg-card-foreground/5 transition-colors"
          >
            Explore all insights
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
