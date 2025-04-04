import Link from "next/link"
import {  ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlogCard from "@/components/blogs/blog-card"
import { RecipeProps } from "@/types/recipes"
import RecipeSection from "@/components/recipes-section"
import { BlogType } from "@/types/blogs"
import SectionHeading from "@/components/section-heading"
import BlogPost from "@/components/blogs/blog-post"

interface BlogPostProps {
  post: BlogType
  relatedBlogs: BlogType[]
  relatedRecipes: RecipeProps[]
}

export default function BlogPostView({ post, relatedBlogs, relatedRecipes }: BlogPostProps) {

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Back button */}
      <div className="mb-8">
        <Button
          variant="ghost"
          size="sm"
          className="group hover:bg-white/80 dark:hover:bg-zinc-800/80 backdrop-blur-sm rounded-full transition-all"
          asChild
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        {/* Main content - 5/6 of the page */}
        <div className="lg:col-span-4">
          <BlogPost post={post} />

          <div>
            <RecipeSection 
              grid
              title='Related Recipes :'
              recipes={relatedRecipes}
            />
          </div>
        </div>

        {/* Sidebar - 1/6 of the page */}
        <div className="lg:col-span-2">
          <div className="sticky top-24">
            <SectionHeading title="Related Blogs:" />

            <div className="space-y-4">
              {relatedBlogs.map((relatedPost) => (
                <BlogCard key={relatedPost.id} {...relatedPost} className="h-full"/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

