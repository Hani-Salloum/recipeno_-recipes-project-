// // 'use client'

import { RecipeProps } from "@/types/recipes";

// export const isFavourite = (id: string) => {
//     console.log(window)
//     console.log(localStorage.getItem('favItems'))
//     if(typeof window !== 'undefined' && localStorage.getItem('favItems')) {
//         const favs = JSON.parse(localStorage.getItem('favItems') || '') || []
//         return favs.find((item: any) => item.id = id)
//     }

//     return false
// }

// export const fetchFavourites = () => {
//     if( typeof window !== 'undefined' && localStorage.getItem('favItems')) {
//         const favs = JSON.parse(localStorage.getItem('favItems') || '') || []
//         return favs
//     } 
    
//     return []
// }

// export const addFavourite = (recipe: object) => {
//     console.log(recipe)
//     if(typeof window !== 'undefined' && localStorage.getItem('favItems')) {
//         const favs = JSON.parse(localStorage.getItem('favItems') || '') || []
//         favs.push(recipe)
//         localStorage.setItem('favItems', JSON.stringify(favs))
//     }
// }

// export const removeFavourite = (id: string) => {
//     if(typeof window !== 'undefined' && localStorage.getItem('favItems')) {
//         const favs = JSON.parse(localStorage.getItem('favItems') || '') || []
//         const newFav = favs.filter((item: any) => item.id !== id)
//         localStorage.setItem('favItems', JSON.stringify(newFav))
//     }
// }

  
  const getLocalStorage = (key: string): string | null => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(key);
  };
  
  const setLocalStorage = (key: string, value: unknown): void => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const fetchFavourites =  (): RecipeProps[] => {
    try {
      const stored = getLocalStorage("favItems");
      return stored ? (JSON.parse(stored) as RecipeProps[]) : [];
    } catch (error) {
      console.error("Error parsing favourites:", error);
      return [];
    }
  };
  
  export const isFavourite = (id: string): boolean => {
    const favs = fetchFavourites();
    return favs.some((item) => item.idMeal === id); // ✅ use comparison not assignment
  };
  
  export const addFavourite = (recipe: RecipeProps): void => {
    const favs = fetchFavourites();
    const exists = favs.some((item) => item.idMeal === recipe.idMeal);
    if (!exists) {
      favs.push(recipe);
      setLocalStorage("favItems", favs);
    }
  };
  
  export const removeFavourite = (id: string): void => {
    const favs = fetchFavourites();
    const updated = favs.filter((item) => item.idMeal !== id);
    setLocalStorage("favItems", updated);
  };
  