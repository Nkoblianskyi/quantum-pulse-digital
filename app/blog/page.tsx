import BlogHero from "@/components/blog/BlogHero"
import FeaturedPosts from "@/components/blog/FeaturedPosts"
import BlogGrid from "@/components/blog/BlogGrid"
import NewsletterSignup from "@/components/blog/NewsletterSignup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | QuantumPulse Digital",
  description:
    "Explore our latest insights, strategies, and analysis on digital marketing trends, data-driven approaches, and growth tactics.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <FeaturedPosts />
      <BlogGrid />
      <NewsletterSignup />
    </>
  )
}
