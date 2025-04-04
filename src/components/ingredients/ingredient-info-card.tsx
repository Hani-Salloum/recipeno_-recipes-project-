
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface IngredientInfoCardProps {
    strIngredient: string,
    strDescription: string,
}

export default function IngredientInfoCard({
    strIngredient,
    strDescription
}: IngredientInfoCardProps) {

    return (
        <Card className="shadow-sm rounded-2xl mb-5 p-5">
            <CardContent className="flex flex-col md:flex-row items-center gap-4">
                <div className="basis-1/6 flex justify-center items-center">
                    <Image width={160} height={160} src={`https://www.themealdb.com/images/ingredients/${strIngredient}-small.png`} alt={strIngredient} />
                </div>
                <div className="basis-5/6 text-center md:text-start">
                    <h2 className="font-semibold text-2xl text-primary mb-2">{strIngredient}</h2>
                    <p className="font-semibold text-md text-[#565656]">{strDescription}</p>
                </div>
            </CardContent>
        </Card>
    );
}
