export interface IngredientWithMeasure {
    ingredient: string
    measure: string
}

export interface RecipeProps {
    idMeal: string
    strMeal: string
    strCategory?: string
    strTag?: string
    strArea?: string
    strInstructions?: string
    strMealThumb: string
    strYoutube?: string
    strRating: string
    strTime?: string
    strSource?: string
    measuresAndIngredients?: IngredientWithMeasure[]
    relatedRecipes?: RecipeProps[]
  }