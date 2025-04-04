"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active path based on current URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      if (path.endsWith("recipes")) setActivePath("/recipes");
      else if (path.endsWith("categories")) setActivePath("/categories");
      else if (path.endsWith("ingredients")) setActivePath("/ingredients");
      else if (path.endsWith("cuisines")) setActivePath("/cuisines");
    }
  }, []);

  const navItems = [
    { name: "Recipes", path: "/recipes" },
    { name: "Categories", path: "/categories" },
    { name: "Ingredients", path: "/ingredients" },
    { name: "Cuisines", path: "/cuisines" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        className
      )}
    >
      <div
        className={cn(
          isScrolled
            ? "py-3 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <Image
              src="/logo.jpg"
              width={120}
              height={60}
              alt="Recipe Logo"
              className="object-cover rounded-xl"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activePath === item.path
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-white/80 dark:hover:bg-zinc-800/80 backdrop-blur-sm"
                )}
                onClick={() => setActivePath(item.path)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm shadow-sm border border-zinc-200/50 dark:border-zinc-700/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md z-0 md:hidden transition-all duration-300 flex flex-col justify-center items-center",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-6 p-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "px-6 py-3 rounded-full text-lg font-medium transition-all duration-200 w-full text-center",
                activePath === item.path
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-white dark:hover:bg-zinc-800"
              )}
              onClick={() => {
                setActivePath(item.path);
                setIsMobileMenuOpen(false);
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
