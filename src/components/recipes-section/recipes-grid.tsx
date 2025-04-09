"use client";
import RecipeCard from "@/components/recipe-card/recipe-card";
import { RecipeProps } from "@/types/recipes";
import { useLocalStorage } from '@uidotdev/usehooks'


interface RecipesGridProps {
  recipes: Array<RecipeProps>;
}

export default function RecipesGrid({ recipes }: RecipesGridProps) {
  const [ favItems ] = useLocalStorage<RecipeProps[]>('favItems', [])

  const isFavorite = (id: string): boolean => {
    return favItems.some((item) => item.idMeal === id); // ✅ use comparison not assignment
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-500">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          id={recipe.idMeal}
          title={recipe.strMeal}
          image={recipe.strMealThumb}
          tag={recipe.strTag}
          cookTime={recipe.strTime}
          rating={parseFloat(recipe.strRating)}
          isFavorite={isFavorite(recipe.idMeal)}
          onFavoriteToggle={(id, isFavorite) => {
            console.log(`Recipe ${id} favorite status: ${isFavorite}`);
          }}
        />
      ))}
    </div>
  );
}
