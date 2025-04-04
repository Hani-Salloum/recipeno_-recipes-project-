"use client";

interface RecipeSourceProps {
  strSource: string;
}

export default function RecipeSource({ strSource }: RecipeSourceProps) {
  return (
    <div className="bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50 transition-all hover:shadow-md">
      <span className="block font-medium text-zinc-700 dark:text-zinc-300 mb-1">
        Source:
      </span>
      <a
        href={strSource}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline break-all text-sm"
      >
        {strSource}
      </a>
    </div>
  );
}