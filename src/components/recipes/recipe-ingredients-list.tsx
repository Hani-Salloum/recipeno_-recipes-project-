"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { IngredientWithMeasure } from "@/types/recipes";


interface RecipeIngredientsProps {
  measuresAndIngredients: IngredientWithMeasure[];
}

export default function RecipeIngredients({
  measuresAndIngredients,
}: RecipeIngredientsProps) {
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>([]);

  const toggleIngredient = (ingredient: string) => {
    setCheckedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  return (
    <ul className="space-y-2">
      {measuresAndIngredients.map(({ ingredient, measure }, index) => (
        <li
          key={index}
          className={cn(
            "flex items-start p-4 rounded-xl transition-all cursor-pointer",
            checkedIngredients.includes(ingredient)
              ? "bg-white/50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 backdrop-blur-sm"
              : "hover:bg-white/30 dark:hover:bg-zinc-800/30 hover:shadow-sm"
          )}
          onClick={() => toggleIngredient(ingredient)}
        >
          <div className="flex-shrink-0 mr-3 mt-0.5">
            <div
              className={cn(
                "h-5 w-5 rounded-full flex items-center justify-center transition-all",
                checkedIngredients.includes(ingredient)
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-2 border-zinc-300 dark:border-zinc-600"
              )}
            >
              {checkedIngredients.includes(ingredient) && (
                <Check className="h-3.5 w-3.5" />
              )}
            </div>
          </div>
          <div>
            <span
              className={cn(
                "font-medium block",
                checkedIngredients.includes(ingredient) && "line-through"
              )}
            >
              {ingredient}
            </span>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {measure}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
