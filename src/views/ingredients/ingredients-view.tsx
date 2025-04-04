import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import Link from "next/link";

interface IngredientsProps {
  ingredients: Array<{
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
  }>;
}

export default function IngredientsView({ ingredients }: IngredientsProps) {
  return (
    <div className="mx-auto px-4 max-w-7xl my-[80px]">
      <SectionHeading title="All Ingredients:" />
      <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ingredients.map((item) => (
          <Link
            key={item.idIngredient}
            href={`/ingredients/${item.strIngredient}`}
          >
            <div className="rounded-3xl shadow-lg p-3 flex items-center hover:-translate-y-3 transition-all duration-300">
              <Image
                width={50}
                height={50}
                className="object-cover mr-3"
                src={`https://www.themealdb.com/images/ingredients/${item.strIngredient}-small.png`}
                alt={item.strIngredient}
                priority={false}
              />
              <h4 className="font-medium text-lg text-primary">
                {item.strIngredient}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
