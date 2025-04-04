import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  className?: string
  isFeature?: boolean
}

export default function BlogCard({
  id,
  title,
  excerpt,
  image,
  date,
  className,
  isFeature = false,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${id}`}
      className={cn(
        "group block overflow-hidden rounded-2xl bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md shadow-md border border-white/20 dark:border-zinc-700/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        className,
      )}
    >
      <div className={cn("flex flex-col md:flex-row h-full", isFeature && "md:flex-col")}>
        <div
          className={cn(
            "relative overflow-hidden",
            isFeature ? "md:aspect-[16/9] aspect-[3/2]" : "aspect-[3/2] md:w-2/5",
          )}
        >
          <Image
            src={image || "/logo.jpg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70" />
        </div>

        <div className={cn("p-5 flex flex-col justify-between", !isFeature && "md:w-3/5")}>
          <div>
            <div className="flex items-center text-xs text-zinc-500 dark:text-zinc-400 mb-3">
              <Calendar className="h-3.5 w-3.5 mr-1.5" />
              {date}
            </div>

            <h3
              className={cn(
                "font-bold text-zinc-800 dark:text-zinc-100 group-hover:text-primary transition-colors duration-200 line-clamp-2 mb-2",
                isFeature ? "text-xl md:text-2xl" : "text-lg",
              )}
            >
              {title}
            </h3>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2 mb-4">{excerpt}</p>
          </div>

          <div className="flex items-center text-primary font-medium text-sm mt-auto group-hover:underline">
            Read more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}

