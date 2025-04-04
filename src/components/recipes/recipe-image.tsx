"use client";

import Image from "next/image";
import {
  Clock,
  Star,
} from "lucide-react";

interface RecipeImageProps {
  strMeal: string;
  strMealThumb: string;
  strRating: string;
  strTime: string;
}

export default function RecipeImage({
  strMeal,
  strMealThumb,
  strRating,
  strTime,
}: RecipeImageProps) {
  return (
    <div className="rounded-2xl overflow-hidden relative aspect-[4/3] mb-6 shadow-md transition-all hover:shadow-lg">
      <Image
        src={strMealThumb || "/logo.jpg?height=600&width=800"}
        alt={strMeal}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 hover:scale-105"
        priority
      />

      {/* Rating badge */}
      {strRating && (
        <div className="absolute top-4 left-4 flex items-center bg-white/15 backdrop-blur-md rounded-full px-3 py-1.5 shadow-sm border border-white/20">
          <Star className="h-4 w-4 text-amber-400 fill-amber-400 mr-1.5" />
          <span className="text-white text-xs font-medium tracking-wide">
            {strRating}
          </span>
        </div>
      )}

      {/* Time badge */}
      {strTime && (
        <div className="absolute top-4 right-4 flex items-center bg-white/15 backdrop-blur-md rounded-full px-3 py-1.5 shadow-sm border border-white/20">
          <Clock className="h-4 w-4 text-white mr-1.5" />
          <span className="text-white text-xs font-medium tracking-wide">
            {strTime}
          </span>
        </div>
      )}
    </div>
  );
}
