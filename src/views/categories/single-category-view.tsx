import RecipeSection from "@/components/recipes-section";
import { RecipeProps } from "@/types/recipes";

interface SingleCategoryProps {
    categoryName: string;
    recipes: Array<RecipeProps>;
}

export default function SingleCategoryView({ recipes, categoryName }: SingleCategoryProps) {
    return <div className="max-w-7xl px-4 mx-auto my-[80px]">
        <RecipeSection 
            grid
            title={`${categoryName} Recipes:`}
            description="All the recipes from this category"
            recipes={recipes}
        />
    </div>
}