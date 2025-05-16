"use client"

import { Twitter, Linkedin, Facebook, Link } from "lucide-react"

interface SharePostProps {
  title: string
  url: string
}

const SharePost = ({ title, url }: SharePostProps) => {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    alert("Link copied to clipboard!")
  }

  return (
    <div className="max-w-3xl mx-auto my-12 border-t border-b border-border py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-lg font-bold">Share this article</div>
        <div className="flex space-x-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-full p-3 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter size={20} />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-full p-3 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-full p-3 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Share on Facebook"
          >
            <Facebook size={20} />
          </a>
          <button
            onClick={copyToClipboard}
            className="bg-card rounded-full p-3 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Copy link"
          >
            <Link size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SharePost
