import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export default function SectionHeading({ title, description, className, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-6", align === "center" && "text-center", className)}>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">{title}</h2>
      {description && <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl">{description}</p>}
    </div>
  )
}

