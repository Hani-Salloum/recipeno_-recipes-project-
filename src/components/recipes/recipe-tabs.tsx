"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RecipeIngredients from "./recipe-ingredients-list";
import RecipeInstructions from "./recipe-instructions";
import { IngredientWithMeasure } from "@/types/recipes";

interface RecipeTabsProps {
  strInstructions: string;
  measuresAndIngredients: IngredientWithMeasure[];
}

export default function RecipeTabs({
  strInstructions,
  measuresAndIngredients,
}: RecipeTabsProps) {
  return (
    <Tabs defaultValue="ingredients" className="mb-12">
      <TabsList className="grid w-full grid-cols-2  bg-[#eee] dark:bg-zinc-800/80 backdrop-blur-sm rounded-4xl">
        <TabsTrigger
          value="ingredients"
          className="m-0 rounded-4xl cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Ingredients
        </TabsTrigger>
        <TabsTrigger
          value="instructions"
          className="m-0 rounded-4xl cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Instructions
        </TabsTrigger>
      </TabsList>

      <TabsContent value="ingredients" className="pt-6">
        <RecipeIngredients measuresAndIngredients={measuresAndIngredients} />
      </TabsContent>

      <TabsContent value="instructions" className="pt-6">
        <RecipeInstructions strInstructions={strInstructions} />
      </TabsContent>
    </Tabs>
  );
}
