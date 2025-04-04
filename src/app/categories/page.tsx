import { fetchAllCategories } from "@/api/filtered-recipes"
import CategoriesView from "@/views/categories/categories-view"

const getData = async () => {
  const res = await fetchAllCategories()
  return res || []
}

export default async function RecipePage() {
  const categories = await getData()

  return <CategoriesView categories={categories} />
}

