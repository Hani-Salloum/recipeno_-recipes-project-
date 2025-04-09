import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import RecipeImage from "@/components/recipes/recipe-image"
import RecipeSource from "@/components/recipes/recipe-source"
import RecipeHeader from "@/components/recipes/recipe-header"
import RecipeTabs from "@/components/recipes/recipe-tabs"
import RecipeYoutubeVideo from "@/components/recipes/recipe-youtube-video"
import { RecipeProps } from "@/types/recipes"
import RecipeSection from "@/components/recipes-section"

export default function RecipeView({
  // idMeal,
  strMeal,
  strCategory,
  strTag,
  strArea,
  strInstructions,
  strMealThumb,
  strYoutube,
  strRating,
  strTime,
  strSource,
  measuresAndIngredients,
  relatedRecipes
}: RecipeProps) {

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 min-h-screen">
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

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Left column - Image and quick info */}
        <div className="lg:col-span-2">
          <div className="sticky top-8">
            <RecipeImage { ...{strMeal, strMealThumb, strRating, strTime} } />

            <div className="space-y-6">
              {/* Source link - only if it exists */}
              {strSource && (
                <RecipeSource strSource={strSource} />
              )}
            </div>
          </div>
        </div>

        {/* Right column - Recipe details */}
        <div className="lg:col-span-3">
          <RecipeHeader { ...{ strCategory, strArea, strMeal, strTag }} />          
          <RecipeTabs { ...{ strInstructions, measuresAndIngredients } } />
          <RecipeYoutubeVideo { ...{ strMeal, strYoutube } } />
        </div>
      </div>
      
      <RecipeSection title="Related Recipes:" recipes={relatedRecipes || []} />
    </div>
  )
}

