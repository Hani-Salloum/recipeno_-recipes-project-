"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Calendar, Share2, Bookmark, BookmarkCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BlogType } from "@/types/blogs"

interface BlogPostProps {
  post: BlogType
}

export default function BlogPost({ post }: BlogPostProps) {
  const [isSaved, setIsSaved] = useState(false)
  const [readingTime, setReadingTime] = useState("5 min read")

  // Calculate reading time based on description length
  useEffect(() => {
    if (post.description) {
      // Strip HTML tags for word count
      const text = post.description.replace(/<[^>]*>/g, "")
      const words = text.split(/\s+/).length
      const time = Math.ceil(words / 200) // Assuming 200 words per minute reading speed
      setReadingTime(`${time} min read`)
    }
  }, [post.description])

  return (
    <article className="bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md rounded-2xl shadow-md border border-white/20 dark:border-zinc-700/30 overflow-hidden">
            {/* Featured image */}
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={post.image || "/placeholder.svg?height=600&width=1200"}
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                <div className="flex items-center text-zinc-500 dark:text-zinc-400">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  {post.date}
                </div>

                <div className="flex items-center">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                <div className="text-zinc-500 dark:text-zinc-400">{readingTime}</div>
              </div>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">{post.title}</h1>

              {/* Excerpt */}
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">{post.excerpt}</p>

              {/* Action buttons */}
              <div className="flex gap-3 mb-8">
                <Button variant="outline" size="sm" className="rounded-full">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className={cn("rounded-full", isSaved && "text-primary border-primary")}
                  onClick={() => setIsSaved(!isSaved)}
                >
                  {isSaved ? (
                    <>
                      <BookmarkCheck className="h-4 w-4 mr-2" />
                      Saved
                    </>
                  ) : (
                    <>
                      <Bookmark className="h-4 w-4 mr-2" />
                      Save
                    </>
                  )}
                </Button>
              </div>

              {/* Main content - HTML description */}
              <div
                className="prose prose-zinc dark:prose-invert max-w-none prose-img:rounded-xl prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary"
                style={{ all: 'revert' }}
                dangerouslySetInnerHTML={{ __html: post.description }}
              />
            </div>
          </article>
  )
}

