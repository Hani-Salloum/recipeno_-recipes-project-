"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RecipeCard from "../recipe-card/recipe-card";
import { RecipeProps } from "@/types/recipes";

interface RecipesScrollProps {
  recipes: RecipeProps[];
}

export default function RecipesScroll({
  recipes
}: RecipesScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
        {/* Scroll buttons for mobile/tablet */}
        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-sm h-8 w-8 ${
              !canScrollLeft ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-sm h-8 w-8 ${
              !canScrollRight ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Scrollable container for mobile, grid for desktop */}
        <div
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 md:overflow-visible md:pb-0 snap-x snap-mandatory scrollbar-hide"
          onScroll={checkScrollButtons}
        >
          {recipes.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="min-w-[280px] md:min-w-0 snap-start"
            >
              <RecipeCard
                key={recipe.idMeal}
                id={recipe.idMeal}
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                tag={recipe.strTag}
                cookTime={recipe.strTime}
                rating={parseFloat(recipe.strRating)}
                isFavorite={false}
                onFavoriteToggle={(id, isFavorite) => {
                  console.log(`Recipe ${id} favorite status: ${isFavorite}`);
                }}
                onClick={() => {
                  console.log(`Navigating to recipe ${recipe.idMeal}`);
                }}
              />
            </div>
          ))}
        </div>
      </div>
  );
}
