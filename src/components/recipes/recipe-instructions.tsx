"use client";

interface RecipeInstructionsProps {
  strInstructions: string;
}

export default function RecipeInstructions({
  strInstructions,
}: RecipeInstructionsProps) {
  // Format instructions into steps
  const instructionSteps = strInstructions
    .split(/\r?\n/)
    .filter((step) => step.trim() !== "")
    .map((step) => step.trim());

  return (
    <ol className="space-y-6">
      {instructionSteps.map((step, index) => (
        <li key={index} className="flex group">
          <div className="flex-shrink-0 mr-4">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-transform group-hover:scale-110">
              {index + 1}
            </div>
          </div>
          <div className="pt-1">
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {step}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
