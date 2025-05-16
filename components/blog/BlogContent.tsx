import type React from "react"
interface BlogContentProps {
  children: React.ReactNode
}

const BlogContent = ({ children }: BlogContentProps) => {
  return (
    <div className="max-w-3xl mx-auto">
      <article className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:border prose-img:border-border max-w-none">
        {children}
      </article>
    </div>
  )
}

export default BlogContent
