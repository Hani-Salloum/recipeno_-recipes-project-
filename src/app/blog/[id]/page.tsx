import { fetchBlogById, fetchBlogs } from "@/api/blogs";
import { fetchAllRecipes } from "@/api/recipes";
import { BlogType } from "@/types/blogs";
import { RecipeProps } from "@/types/recipes";
import BlogPostView from "@/views/blogs/single-blog-view";

const getData = async (id: string) => {
  const relatedBlogs : BlogType[] = await fetchBlogs(3)
  const post: BlogType | undefined= await fetchBlogById(id)
  const relatedRecipes: RecipeProps[] = await fetchAllRecipes(null, 3)

  return { post, relatedBlogs, relatedRecipes }
}

export default async function Home({ params }: { params: Promise<{ id: string }> } ) {
  const data  = await getData((await params).id)

  return (
    <>
      <BlogPostView { ...data } />
    </>
  );
}
