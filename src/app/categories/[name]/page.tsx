import { filterRecipes } from "@/api/filtered-recipes"
import SingleCategoryView from "@/views/categories/single-category-view"

const getData = async (name: string) => {
  const recipes = await filterRecipes('c', name)

  return recipes
}

interface PageProps {
  params: { name: string };
}

export default async function RecipePage({ params }: PageProps) {
  const recipes = await getData(params.name)

  return <SingleCategoryView recipes={recipes} categoryName={params.name.split('%20').join(' ')} />
}

