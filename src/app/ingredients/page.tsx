import { fetchAllIngredients } from "@/api/filtered-recipes"
import IngredientsView from "@/views/ingredients/ingredients-view"

const getData = async () => {
  const res = await fetchAllIngredients()
  return res || []
}

export default async function RecipePage() {
  const ingredients = await getData()

  return <IngredientsView ingredients={ingredients} />
}

