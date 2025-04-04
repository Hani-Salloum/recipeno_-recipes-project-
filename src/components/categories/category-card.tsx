
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

export default function CategoryCard({
    strCategory,
    strCategoryThumb,
    strCategoryDescription
}: CategoryCardProps) {

    return (
        <Link
            href={`/categories/${strCategory}`}
        >
            <Card className="shadow-sm rounded-2xl mb-5 p-5">
                <CardContent className="flex flex-col md:flex-row items-center gap-4">
                    <div className="basis-1/6 flex justify-center items-center">
                        <Image
                            width={160}
                            height={160}
                            src={strCategoryThumb || '/logo.jpg'}
                            alt={strCategory}
                        />
                    </div>
                    <div className="basis-5/6 text-center md:text-start">
                        <h2 className="font-semibold text-2xl text-primary mb-2">
                            {strCategory}
                        </h2>
                        <p className="font-semibold text-md text-[#565656]">
                            {strCategoryDescription}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
