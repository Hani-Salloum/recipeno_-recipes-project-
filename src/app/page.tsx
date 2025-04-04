import { fetchBlogs } from "@/api/blogs";
import { fetchAllRecipes } from "@/api/recipes";
import HomeView from "@/views/home/home-view";

const getData = async () => {
  const trendingRecipes = await fetchAllRecipes(null, 8)
  const favoriteRecipes = await fetchAllRecipes(null, 8)
  const todaysPicksRecipes = await fetchAllRecipes(null, 8)
  const blogPosts = await fetchBlogs(3)

  return { trendingRecipes, favoriteRecipes, todaysPicksRecipes, blogPosts }
}

export default async function Home() {
  const data  = await getData()

  return (
        <HomeView { ...data } />
  );
}
