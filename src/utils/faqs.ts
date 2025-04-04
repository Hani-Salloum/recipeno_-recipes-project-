export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FaqItem[] = [
  {
    id: "1",
    question: "How do I save my favorite recipes?",
    answer:
      "You can save any recipe by clicking the heart icon on the recipe card. All your saved recipes will appear in the 'Your Favorites' section on the homepage and in your profile. You can organize your favorites into collections and access them anytime, even offline.",
    category: "website",
  },
  {
    id: "2",
    question: "Can I submit my own recipes to the website?",
    answer:
      "Yes! We welcome recipe submissions from our community. Simply click on the 'Submit Recipe' button in your profile dashboard. You'll need to include the ingredients, instructions, cooking time, and at least one photo of your dish. Our team will review your submission within 48 hours before publishing it on the site.",
    category: "website",
  },
  {
    id: "3",
    question: "How can I adjust recipe serving sizes?",
    answer:
      "Each recipe has a serving size adjuster that allows you to scale the recipe up or down. Simply use the + and - buttons next to the serving size number, and all ingredient quantities will automatically recalculate. This feature helps whether you're cooking for one or preparing a feast for many.",
    category: "cooking",
  },
  {
    id: "4",
    question: "What's the difference between baking powder and baking soda?",
    answer:
      "Baking powder and baking soda are both leavening agents but work differently. Baking soda (sodium bicarbonate) needs an acid to activate and create rise in baked goods. Baking powder contains baking soda plus an acid, so it only needs moisture to activate. They're not directly interchangeable - baking powder can replace baking soda (use 3x more), but not vice versa without adding an acid like lemon juice or vinegar.",
    category: "cooking",
  },
  {
    id: "5",
    question: "How do I find recipes for specific dietary restrictions?",
    answer:
      "Our search function allows you to filter recipes by dietary needs including vegetarian, vegan, gluten-free, dairy-free, keto, paleo, and more. You can also combine these filters with ingredients or cuisine types. Additionally, each recipe is clearly labeled with dietary information, and you can save these preferences in your profile for personalized recommendations.",
    category: "website",
  },
  {
    id: "6",
    question: "What can I substitute for eggs in baking recipes?",
    answer:
      "There are several egg substitutes for baking: 1) For moisture and binding: ¼ cup unsweetened applesauce, mashed banana, or yogurt per egg. 2) For leavening: 1 tsp baking soda mixed with 1 tbsp vinegar per egg. 3) For structure: 1 tbsp ground flaxseed or chia seeds mixed with 3 tbsp water (let sit for 15 minutes) per egg. The best substitute depends on the recipe's specific needs.",
    category: "cooking",
  },
  {
    id: "7",
    question: "How are the recipe ratings calculated?",
    answer:
      "Our recipe ratings are based on user reviews and are displayed on a 5-star scale. The overall rating is an average of all user ratings. To ensure authenticity, we only count ratings from users who have created an account, and we have systems in place to detect and remove suspicious rating patterns. We believe this provides the most accurate representation of a recipe's quality.",
    category: "website",
  },
  {
    id: "8",
    question: "What's the best way to store fresh herbs?",
    answer:
      "Different herbs require different storage methods. For soft herbs like cilantro, parsley, and basil: trim the stems, place in a jar with water like flowers, cover loosely with a plastic bag, and refrigerate. For woody herbs like rosemary, thyme, and sage: wrap loosely in a damp paper towel, place in a sealed container, and refrigerate. Most herbs can also be frozen in oil in ice cube trays or dried for longer storage.",
    category: "cooking",
  },
];
