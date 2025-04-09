'use client'

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "../section-heading";
import { RecipeProps } from "@/types/recipes";

import dynamic from "next/dynamic";
const RecipesGrid = dynamic(() => import("./recipes-grid"), { ssr: false })
const RecipesScroll = dynamic(() => import("./recipes-scroll"), { ssr: false })

// import RecipesGrid from "./recipes-grid";
// import RecipesScroll from "./recipes-scroll";

interface RecipeSectionProps {
  title?: string;
  description?: string;
  recipes: RecipeProps[];
  viewAllLink?: string;
  viewAllText?: string;
  isFavorites?: boolean;
  grid?: boolean;
}

export default function RecipeSection({
  title,
  description,
  recipes,
  grid = false,
  viewAllLink,
  viewAllText = "View all",
}: RecipeSectionProps) {

  return (
    <section className="py-12">
      {title && <div className="flex justify-between items-center">
        <SectionHeading title={title} description={description} />

        {viewAllLink && (
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex items-center gap-1 hover:text-primary"
            asChild
          >
            <Link href={viewAllLink}>
              <span>{viewAllText}</span>
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        )}
      </div>}

      { grid ? <RecipesGrid recipes={recipes} /> : <RecipesScroll recipes={recipes} />}

      {/* Mobile view all button */}
      {viewAllLink && (
        <div className="mt-8 text-center md:hidden">
          <Button
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
            asChild
          >
            <Link href={viewAllLink}>{viewAllText}</Link>
          </Button>
        </div>
      )}

    </section>
  );
}
