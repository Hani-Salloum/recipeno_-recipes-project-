import { fetchAllIngredients, filterRecipes } from "@/api/filtered-recipes"
import SingleIngredientView from "@/views/ingredients/single-ingredient-view"

const getData = async (name: string) => {
  const recipes = await filterRecipes('i', name)

  const ingredients: Array<{
    strIngredient: string;
    strDescription: string;
  }> = await fetchAllIngredients() || []

  const ingredient = ingredients?.find(item => item.strIngredient === name.split('%20').join(' '))
  console.log(ingredient)

  return { ingredient, recipes }
}

interface PageProps {
  params: { name: string };
}

export default async function RecipePage({ params }: PageProps) {
  const {recipes, ingredient} = await getData(params.name)

  return <SingleIngredientView {...{ recipes, ingredient }} />
}

