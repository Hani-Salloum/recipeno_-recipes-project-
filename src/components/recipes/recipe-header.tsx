"use client";

import { Globe, Tag, ChefHat } from "lucide-react";

interface RecipeHeaderProps {
  strCategory: string;
  strArea: string;
  strMeal: string;
  strTag: string;
}

export default function RecipeHeader({
  strCategory,
  strArea,
  strMeal,
  strTag,
}: RecipeHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        {strMeal}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
        A delicious {strCategory} recipe from {strArea} cuisine. This {strMeal}{" "}
        is perfect for any occasion and will impress your guests with its
        amazing flavors.
      </p>

      <div className="flex flex-wrap items-center gap-3 my-5">
        {strCategory && (
          <span className="inline-flex items-center text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">
            <ChefHat className="mr-1.5 h-3.5 w-3.5" />
            {strCategory}
          </span>
        )}
        {strArea && (
          <span className="inline-flex items-center text-xs font-medium bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-full shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
            <Globe className="mr-1.5 h-3.5 w-3.5" />
            {strArea}
          </span>
        )}
        {strTag &&
          strTag.split(",").map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center text-xs font-medium bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-full shadow-sm border border-zinc-200/50 dark:border-zinc-700/50"
            >
              <Tag className="mr-1.5 h-3.5 w-3.5" />
              {tag.trim()}
            </span>
          ))}
      </div>
    </div>
  );
}
