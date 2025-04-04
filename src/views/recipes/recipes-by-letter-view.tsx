"use client";

import { useEffect, useMemo, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { searchRecipesByFirstLetter } from "@/api/recipes";
import RecipeSection from "@/components/recipes-section";

export default function RecipesByLetterView() {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [filterValue, setFilterValue] = useState("A");
  
  const letters = useMemo(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), [])

  useEffect(() => {
    const fetchFF = async () => {
      const res = await searchRecipesByFirstLetter(filterValue)
      setFilteredRecipes(res);
    };
    if (filterValue) fetchFF();
  }, [filterValue]);

  return (
    <div className="mt-[80px] mx-auto px-4 max-w-7xl">
      <div className="flex">
        <ScrollArea className="max-w-7xl mx-auto whitespace-nowrap">
          <div className="flex w-max space-x-4 py-4">
            {letters.map((item, index) => (
              <span
                className={`bg-${
                  item === filterValue ? "[#fff]" : "[#eee]"
                } cursor-pointer w-10 h-10 rounded-full inline-flex items-center justify-center hover:scale-125 transition-all duration-300`}
                key={index}
                onClick={() => setFilterValue(item)}
              >
                <span>{item}</span>
              </span>
            ))}
          </div>
          <ScrollBar className="opacity-0" orientation="horizontal" />
        </ScrollArea>
      </div>
      { filteredRecipes && <RecipeSection grid recipes={filteredRecipes}/> }
    </div>
  );
}
