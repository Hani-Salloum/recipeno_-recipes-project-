import CategoryCard from "@/components/categories/category-card";
import SectionHeading from "@/components/section-heading";

interface CategoriesProps {
  categories: Array<{
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  }>;
}

export default function CategoriesView({ categories }: CategoriesProps) {
  return (
    <div className="mx-auto px-6 container my-[80px]">
      <SectionHeading title='All Categories' />
      <div className="grid grid-cols-1 gap-4">
        {categories.map((item) => <CategoryCard key={item.idCategory} { ...item } />)}
      </div>
    </div>
  );
}
