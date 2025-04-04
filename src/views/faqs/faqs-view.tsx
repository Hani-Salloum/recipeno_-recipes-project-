"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { FaqItem } from "@/utils/faqs"
import FaqAccordion from "@/components/faqs/faqs-accordion"

interface FaqsProps {
    faqs: FaqItem[]
}

export default function FaqsView({ faqs }: FaqsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Filter FAQs based on search query and category
  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    return matchesCategory
  })

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(faqs.map((faq) => faq.category)))]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Find answers to common questions about our recipes, cooking techniques, and using our website.
        </p>
      </div>

      {/* Search and filter */}
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-white/40 dark:bg-zinc-800/40 backdrop-blur-sm hover:bg-white/60 dark:hover:bg-zinc-700/60",
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ accordion */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? <FaqAccordion faqs={filteredFaqs} /> : (
          <div className="text-center py-12">
            <p className="text-zinc-500 dark:text-zinc-400">No FAQs found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}

