import { fetchBlogById, fetchBlogs } from "@/api/blogs";
import { fetchAllRecipes } from "@/api/recipes";
import BlogPostView from "@/views/blogs/single-blog-view";

const getData = async (id: string) => {
  const relatedBlogs = await fetchBlogs(3)
  const post = await fetchBlogById(id)
  const relatedRecipes = await fetchAllRecipes(null, 3)

  return { post, relatedBlogs, relatedRecipes }
}

export default async function Home({ params }: { params: { id: string } }) {
  const data  = await getData((await params).id)

  return (
    <BlogPostView { ...data } />
  );
}
