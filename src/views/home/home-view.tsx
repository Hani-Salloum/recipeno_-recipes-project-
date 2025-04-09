import SearchForm from "@/components/search-form"
import BlogSection from "@/components/blogs/blog-section"
import RecipeSection from "@/components/recipes-section"
import { RecipeProps } from "@/types/recipes"
import { BlogType } from "@/types/blogs"

interface HomeProps {
    trendingRecipes: Array<RecipeProps>;
    todaysPicksRecipes: Array<RecipeProps>;
    favoriteRecipes: Array<RecipeProps>;
    blogPosts: Array<BlogType>;
}

export default function HomeView({ blogPosts, trendingRecipes, todaysPicksRecipes, favoriteRecipes }: HomeProps) {

  return (
    <div className="my-[80px] min-h-screen">
      {/* Search section */}    
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Recipe</h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Search from thousands of delicious recipes for any meal, cuisine, or ingredient
            </p>
          </div>
          <SearchForm />
        </div>
      </section>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Blog section */}
        <BlogSection
          title="Latest From Our Blog"
          description="Cooking tips, techniques, and stories from our culinary experts"
          posts={blogPosts}
        />

        {/* Trending recipes section */}
        <RecipeSection
          title="Trending Recipes"
          description="Our most popular recipes this week"
          recipes={trendingRecipes}
          viewAllLink="/recipes"
        />

        {/* Today's picks section */}
        <RecipeSection
          title="Today's Picks"
          description="Curated recipes selected just for you"
          recipes={todaysPicksRecipes}
          viewAllLink="/recipes"
        />

        {/* Favorites section */}
        <RecipeSection
          title="Your Favorite Recipes"
          description="Quick access to recipes you've saved"
          recipes={favoriteRecipes}
          viewAllLink="/recipes"
          viewAllText="View all favorites"
        />
      </div>
    </div>
  )
}

