"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FaqItem {
  id: string
  question: string
  answer: string
  category?: string
}

interface FaqAccordionProps {
  faqs: FaqItem[]
  className?: string
}

export default function FaqAccordion({ faqs, className }: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  // Toggle FAQ item open/closed
  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className={cn("space-y-4", className)}>
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md rounded-xl shadow-sm border border-white/20 dark:border-zinc-700/30 overflow-hidden transition-all duration-300"
        >
          <button
            className="flex justify-between items-center w-full p-5 text-left"
            onClick={() => toggleItem(faq.id)}
            aria-expanded={openItems.includes(faq.id)}
          >
            <h3 className="font-medium text-lg pr-8">{faq.question}</h3>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-zinc-500 transition-transform duration-200 flex-shrink-0",
                openItems.includes(faq.id) && "transform rotate-180",
              )}
            />
          </button>

          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              openItems.includes(faq.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="p-5 pt-0 text-zinc-600 dark:text-zinc-300 leading-relaxed">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

