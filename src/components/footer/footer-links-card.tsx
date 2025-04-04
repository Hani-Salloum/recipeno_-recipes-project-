"use client";

import type React from "react";
import Link from "next/link";

interface FooterLinksCardProps {
  title: string;
  links: Array<{
    name: string;
    href: string;
  }>;
}

export default function FooterLinksCard({
  title,
  links,
}: FooterLinksCardProps) {
  return (
    <div className="bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-white/20 dark:border-zinc-700/30">
      <h3 className="font-medium text-sm text-primary mb-4 uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-zinc-600 dark:text-zinc-300 hover:text-primary dark:hover:text-primary transition-all duration-200 text-sm flex items-center group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-600 group-hover:bg-primary mr-2 transition-all duration-200"></span>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
