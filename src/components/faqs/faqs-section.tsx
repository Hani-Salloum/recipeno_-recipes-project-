import FaqAccordion from "./faq-accordion"
import SectionHeading from "./section-heading"

interface FaqSectionProps {
  className?: string
}

export default function FaqSection({ className }: FaqSectionProps) {
  // Sample FAQ data
  const faqs = [
    {
      id: "1",
      question: "How do I save my favorite recipes?",
      answer:
        "You can save any recipe by clicking the heart icon on the recipe card. All your saved recipes will appear in the 'Your Favorites' section on the homepage and in your profile.",
    },
    {
      id: "2",
      question: "Can I submit my own recipes to the website?",
      answer:
        "Yes! We welcome recipe submissions from our community. Simply click on the 'Submit Recipe' button in your profile dashboard.",
    },
    {
      id: "3",
      question: "How can I adjust recipe serving sizes?",
      answer:
        "Each recipe has a serving size adjuster that allows you to scale the recipe up or down. Simply use the + and - buttons next to the serving size number.",
    },
    {
      id: "4",
      question: "How do I find recipes for specific dietary restrictions?",
      answer:
        "Our search function allows you to filter recipes by dietary needs including vegetarian, vegan, gluten-free, dairy-free, keto, paleo, and more.",
    },
  ]

  return (
    <section className={className}>
      <SectionHeading
        title="Frequently Asked Questions"
        description="Find answers to common questions about our recipes and using our website."
        align="center"
      />

      <div className="max-w-3xl mx-auto mt-8">
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  )
}

