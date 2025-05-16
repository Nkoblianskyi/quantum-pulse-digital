import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const BlogGrid = () => {
  const blogPosts = [
    {
      slug: "meta-cpm-trends-2025",
      title: "Meta CPMs Grew 11% in Q1 2025: What This Means for Advertisers",
      excerpt:
        "Rising ad costs on Meta platforms require more efficient targeting and creative strategies to maintain ROAS. Here's how to adapt.",
      date: "April 15, 2025",
      readTime: "7 min read",
      image: "/cded010fa13e880d09d4855bc4400c46.jpg",
      category: "Paid Media",
    },
    {
      slug: "google-smart-bidding-strategies",
      title: "Mastering Smart Bidding: Strategies for 2025",
      excerpt:
        "With Smart Bidding now the default, learn how to restructure your campaigns and leverage automation for better performance.",
      date: "April 2, 2025",
      readTime: "9 min read",
      image: "/e1622fd7a76542f5446dac64ea819945.jpg",
      category: "Paid Media",
    },
    {
      slug: "page-speed-conversion-impact",
      title: "The 2.3 Second Rule: How Page Speed Impacts Conversion Rates",
      excerpt:
        "Our research shows 60% of users bounce if pages don't load within 2.3 seconds. Learn how to optimize your site speed for better conversions.",
      date: "March 22, 2025",
      readTime: "6 min read",
      image: "/e0a9f18b5be8e55ac6573b6dab4fc79a.jpg",
      category: "Conversion Optimization",
    },
    {
      slug: "ai-marketing-applications",
      title: "5 Practical Applications of AI in Digital Marketing",
      excerpt:
        "Beyond the hype, discover how AI is delivering real results in campaign optimization, content creation, and customer insights.",
      date: "March 10, 2025",
      readTime: "8 min read",
      image: "/5e0e7ff317e33ffd9d675c63cad10110.jpg",
      category: "Data & Analytics",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar size={14} className="mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>

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

export default BlogGrid
