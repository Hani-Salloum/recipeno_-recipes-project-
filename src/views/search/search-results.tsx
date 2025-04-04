import SearchForm from "@/components/search-form"
import { RecipeProps} from '@/types/recipes'
import RecipeSection from "@/components/recipes-section"

export default function SearchResults({
    searchValue,
    recipes,
  }: {
    searchValue: string,
    recipes: RecipeProps[],
  }) {

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 min-h-screen">
      <SearchForm />
      
      <RecipeSection
        grid
        title={`Search Results For ${ searchValue }:`}
        description={ !recipes.length ? 'There is no recipes ....' : '' }
        recipes={recipes}
      />
    </div>
  )
}

