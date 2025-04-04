import { filterRecipes } from "@/api/filtered-recipes"
import SingleCategoryView from "@/views/categories/single-category-view"

const getData = async (name: string) => {
  const recipes = await filterRecipes('c', name)

  return recipes
}

interface PageProps { params: Promise<{ name: string }> }

export default async function RecipePage({ params }: PageProps) {
  const name = (await params).name
  const recipes = await getData(name)

  return <SingleCategoryView recipes={recipes} categoryName={name.split('%20').join(' ')} />
}

