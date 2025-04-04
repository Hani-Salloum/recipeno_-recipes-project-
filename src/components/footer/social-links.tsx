"use client";

import type React from "react";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SocialLinks() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Youtube",
      icon: Youtube,
      href: "https://youtube.com",
      color: "from-red-500 to-red-700",
    },
  ];

  return (
    <div className="flex gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-3 rounded-xl shadow-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-white",
            "bg-gradient-to-br",
            link.color
          )}
          aria-label={link.name}
        >
          <link.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
