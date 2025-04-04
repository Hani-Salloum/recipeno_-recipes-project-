"use client"

import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
import SocialLinks from "./social-links"
import NewsletterForm from "./newsletter-form"
import FooterLinksCard from "./footer-links-card"

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipes" },
    { name: "Ingredients", href: "/ingredients" },
    { name: "Categories", href: "/categories" },
    { name: "Cuisines", href: "/cuisines" },
    { name: "FAQs", href: "/faqs" },
  ]

  return (
    <footer className={cn("relative overflow-hidden py-16 md:py-20 bg-[#eee]", className)}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Left quarter - Logo and slogan */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4 group">
                <Image src={'/logo.jpg'} className="rounded-xl" alt="Recipeno logo" width={180} height={90} />
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-4">
              Discover delicious recipes from around the world. Cook with confidence and explore new flavors every day.
            </p>
          </div>

          {/* Middle two quarters - Navigation links */}
          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <FooterLinksCard
              links={navigationLinks.slice(0, 3)}
              title='Explore'
            />
            <FooterLinksCard
              links={navigationLinks.slice(3)}
              title='Resources'
            />
          </div>

          {/* Right quarter - Newsletter and social media */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 dark:from-primary/20 dark:to-purple-500/20 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-primary/20 dark:border-primary/30">
              <NewsletterForm />
              <SocialLinks />
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

