import IngredientInfoCard from "@/components/ingredients/ingredient-info-card";
import RecipeSection from "@/components/recipes-section";
import { IngredientType } from "@/types/ingredients";
import { RecipeProps } from "@/types/recipes";

interface SingleIngredientProps {
    ingredient: IngredientType | undefined;
    recipes: RecipeProps[];
}

export default function SingleIngredientView({ ingredient, recipes }: SingleIngredientProps) {
    return <div className="max-w-7xl mx-auto px-4 my-[80px]">
        <IngredientInfoCard {...ingredient} />
        <RecipeSection
            grid
            title={`Recipes with ${ingredient?.strIngredient}`}
            description="All recipes that contains this ingredient"
            recipes={recipes}
        />
    </div>
}