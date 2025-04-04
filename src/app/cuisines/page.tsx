import { fetchAllCuisines } from "@/api/filtered-recipes"
import CuisinesView from "@/views/cuisines/cuisines-view"

const getData = async () => {
  const res = await fetchAllCuisines()
  return res || []
}

export default async function RecipePage() {
  const cuisines = await getData()

  return <CuisinesView cuisines={cuisines} />
}

