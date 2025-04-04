"use client";
import { filterRecipes } from "@/api/filtered-recipes";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import RecipeSection from "@/components/recipes-section";
import { RecipeProps } from "@/types/recipes";

interface CuisinesProps {
  cuisines: Array<{
    strArea: string;
    strCode: string;
  }>;
}

export default function CuisinesView({ cuisines }: CuisinesProps) {
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const [filterValue, setFilterValue] = useState("American");

  useEffect(() => {
    const fetchFF = async () => {
      const res : Array<RecipeProps> = await filterRecipes("a", filterValue);
      setFilteredRecipes(res);
    };
    if (filterValue) fetchFF();
  }, [filterValue]);

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex">
        <ScrollArea className="container whitespace-nowrap">
          <div className="flex w-max space-x-4 p-4">
            {cuisines.map((item, index) => (
              <span
                className={`bg-${
                  item.strArea === filterValue ? "[#fff]" : "[#eee]"
                } cursor-pointer rounded-[20px] py-2 px-3  inline-flex gap-2 items-center`}
                key={index}
                onClick={() => setFilterValue(item.strArea)}
              >
                <span>{item.strArea}</span>
                <Icon
                  className="rounded-full"
                  icon={`flagpack:${item?.strCode ?? "us"}`}
                />
              </span>
            ))}
          </div>
          <ScrollBar className="opacity-0" orientation="horizontal" />
        </ScrollArea>
      </div>
      { filteredRecipes && <RecipeSection grid recipes={filteredRecipes} />}
    </div>
  );
}
