import BlogCard from "./blog-card"
import SectionHeading from "../section-heading"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
}

interface BlogSectionProps {
  title: string
  description?: string
  posts: BlogPost[]
}

export default function BlogSection({ title, description, posts }: BlogSectionProps) {
  // Ensure we have exactly 3 posts
  const displayPosts = posts.slice(0, 3)

  return (
    <section className="py-12">
      <SectionHeading title={title} description={description} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Featured blog post - spans 7 columns */}
        <div className="md:col-span-7">
          <BlogCard key={displayPosts[0].id} {...displayPosts[0]} isFeature={true} className="h-full" />
        </div>

        {/* Two smaller blog posts stacked - span 5 columns */}
        <div className="md:col-span-5 grid grid-cols-1 gap-6">
          {displayPosts.slice(1, 3).map((post) => (
            <BlogCard key={post.id} {...post} className="h-full" />
          ))}
        </div>
      </div>
    </section>
  )
}

