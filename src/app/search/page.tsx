import { fetchAllRecipes } from "@/api/recipes"
import SearchResults from "@/views/search/search-results"

const getData = async (search: string) => {
  const res = await fetchAllRecipes(search, 500)
  return res || []
}

export default async function RecipePage({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string }>
  }) {
    const searchValue = (await searchParams).query
  const recipes = await getData(searchValue)

  return <SearchResults recipes={recipes} searchValue={searchValue} />
}

