import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to all articles
        </Link>
      </div>
      {children}
    </div>
  )
}
