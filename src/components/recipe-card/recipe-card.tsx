"use client";

import type React from "react";

import { useState } from "react";
import { Heart, Star, Clock, UtensilsCrossed } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { addFavourite, removeFavourite } from "@/utils/favourites";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  rating: number;
  isFavorite?: boolean;
  tag?: string ;
  cookTime?: string;
  onFavoriteToggle?: (id: string, isFavorite: boolean) => void;
  onClick?: () => void;
}

export default function RecipeCard({
  id,
  title,
  image,
  rating,
  isFavorite = false,
  tag,
  cookTime,
  onFavoriteToggle,
}: // onClick,
RecipeCardProps) {
  const [favorite, setFavorite] = useState(isFavorite);
  const [isHovering, setIsHovering] = useState(false);

  const router = useRouter();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newFavoriteState = !favorite;
    setFavorite(newFavoriteState);
    if (newFavoriteState) {
      addFavourite({
        idMeal: id,
        strMeal: title,
        strMealThumb: image,
        strTag: tag,
        strTime: cookTime || '30min',
        strRating: rating.toString(),
      });
    } else {
      removeFavourite(id);
    }
    onFavoriteToggle?.(id, newFavoriteState);
  };

  const handleClick = () => {
    router.push(`/recipes/${id}`);
  };

  return (
    <Card
      className="overflow-hidden py-0 gap-0 group transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl cursor-pointer relative h-full border-0 rounded-xl bg-white dark:bg-zinc-800"
      onClick={handleClick}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-[5/4] overflow-hidden rounded-t-xl">
        <div className="relative w-full h-full">
          <Image
            src={image || "/logo.jpg?height=300&width=400"}
            alt={title}
            fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority={false}
          />
        </div>

        {/* Glass morphism rating badge */}
        <div className="absolute top-3 left-3 flex items-center bg-white/15 backdrop-blur-md rounded-full px-3 py-1.5 shadow-sm border border-white/20">
          <Star className="h-4 w-4 text-amber-400 fill-amber-400 mr-1.5" />
          <span className="text-white text-xs font-medium tracking-wide">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Favorite button with animations */}
        <button
          className={cn(
            "absolute top-3 right-3 backdrop-blur-md rounded-full p-2.5 transition-all duration-300 z-10",
            "hover:scale-110 active:scale-95",
            favorite
              ? "bg-white/20 shadow-sm"
              : "bg-white/15 shadow-sm border border-white/20"
          )}
          onClick={handleFavoriteClick}
          aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={cn(
              "h-5 w-5 transition-all duration-300",
              favorite ? "text-red-500 fill-red-500" : "text-white"
            )}
          />
        </button>

        {/* Modern gradient overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500",
            isHovering ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      <div className="p-5 relative">
        <h3 className="font-medium text-base md:text-lg tracking-tight line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>

        {/* Category tags - adds modern touch */}
        <div className="flex gap-2 mt-3">
          <span className="inline-flex items-center text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-full">
            <UtensilsCrossed className="mr-1 h-3.5 w-3.5" />
            {tag}
          </span>
          <span className="inline-flex items-center text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-full">
            <Clock className="mr-1 h-3.5 w-3.5" />
            {cookTime}
          </span>
        </div>
      </div>
    </Card>
  );
}
