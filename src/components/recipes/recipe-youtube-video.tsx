"use client";

import { Youtube } from "lucide-react";

interface RecipeYoutubeVideoProps {
  strMeal: string;
  strYoutube: string;
}

export default function RecipeYoutubeVideo({
  strMeal,
  strYoutube,
}: RecipeYoutubeVideoProps) {
  // Parse YouTube URL to get video ID
  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return null;
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11
      ? `https://www.youtube.com/embed/${match[7]}`
      : null;
  };

  const youtubeEmbedUrl = getYoutubeEmbedUrl(strYoutube);

  return youtubeEmbedUrl ? (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Youtube className="mr-2 h-5 w-5 text-red-500" />
        Video Tutorial
      </h2>
      <div className="aspect-video rounded-2xl overflow-hidden bg-white/20 dark:bg-zinc-800/20 backdrop-blur-sm shadow-md">
        <iframe
          src={youtubeEmbedUrl}
          title={`${strMeal} video tutorial`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  ) : null;
}
