"use client";
import {
  fetchAllCategories,
  fetchAllCuisines,
  fetchAllIngredients,
  fetchDetailedMealCategories,
  filterRecipes,
} from "@/api/filtered-recipes";
import {
  fetchAllRecipes,
  fetchRandomRecipe,
  fetchRecipeById,
  searchRecipesByFirstLetter,
} from "@/api/recipes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/recipe-card/recipe-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Test() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    const fetchFF = async () => {
      const res = await filterRecipes("a", filterValue);
      console.log(res)
      setFilteredRecipes(res);
    };
    if (filterValue) fetchFF();
  }, [filterValue]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllCuisines();
      // console.log(res);
      setRecipes(res);
    };
    // const fetchData = async () => {
    //   const res = await fetchRandomRecipe()
    //   console.log(res)
    //   setRecipes([res])
    // }
    fetchData();
  }, []);

  return (
    <div className="mx-auto container">
      <div className="flex pb-6">
      <ScrollArea className="container whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {/* {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))} */}
        {recipes.map((item, index) => (
          <span
            className={`bg-${item.strArea === filterValue ? '[#fff]' : '[#eee]'} cursor-pointer rounded-[20px] py-2 px-3  inline-flex gap-2 items-center`}
            key={index}
            onClick={() => setFilterValue(item.strArea)}
          >
            <span>{item.strArea}</span>
            <Icon
              className="rounded-full"
              icon={`flagpack:${item?.strCode ?? "us"}`}
            />
            {/* <p className="text-red-600">{item.strCategoryDescription}</p>
                    <Image src={item.strCategoryThumb} alt={item.strCategory} width={100} height={100} /> */}
          </span>
        ))}
      </div>
      <ScrollBar className="opacity-0" orientation="horizontal" />
    </ScrollArea>
      </div>
      {filteredRecipes && (
        <div className=" container my-6 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-red-500">
          {filteredRecipes.map((recipe) => (
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
                console.log(`Navigating to recipe ${recipe.id}`);
              }}
            />
            // <span key={item.idMeal}>
            //     <Button>{item.strMeal}</Button>
            // </span>
          ))}
        </div>
      )}
    </div>
  );
}
