import { fetchAllIngredients, filterRecipes } from "@/api/filtered-recipes"
import { IngredientType } from "@/types/ingredients"
import { RecipeProps } from "@/types/recipes"
import SingleIngredientView from "@/views/ingredients/single-ingredient-view"

const getData = async (name: string) => {
  const recipes : RecipeProps[] = await filterRecipes('i', name)

  const ingredients: IngredientType[] = await fetchAllIngredients() || []

  const ingredient: IngredientType | undefined = ingredients?.find(item => item.strIngredient === name.split('%20').join(' '))

  return { ingredient, recipes }
}

interface PageProps { params: Promise<{ name: string }> }


export default async function RecipePage({ params }: PageProps) {
  const {recipes, ingredient} = await getData((await params).name)

  return <SingleIngredientView {...{ recipes, ingredient }} />
}

