// app/recipes/[id]/page.tsx

import { filterRecipes } from "@/api/filtered-recipes"
import { fetchRecipeById } from "@/api/recipes"
import RecipeView from "@/views/recipes/recipe-view"

const getData = async (id: string) => {
  const recipe = await fetchRecipeById(id) || {}
  const relatedRecipes = await filterRecipes('c', recipe.strCategory, 4) || []
  return { recipe, relatedRecipes }
}

interface PageProps { params: Promise<{ id: string }> }


export default async function RecipePage({ params }: PageProps) {
  const {recipe, relatedRecipes} = await getData((await params).id)

  return <RecipeView {...recipe} relatedRecipes={relatedRecipes} />
}

