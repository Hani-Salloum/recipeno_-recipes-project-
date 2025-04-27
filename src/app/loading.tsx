import { Progress } from "@/components/ui/progress";

export default function Loading() {
    return <div className="w-full h-[100vh] flex items-center justify-center">
        <Progress className="w-[60%]" value={30} />
    </div>
}