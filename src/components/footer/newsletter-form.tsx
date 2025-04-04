"use client";

import type React from "react";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <h3 className="font-medium text-sm text-primary mb-4 uppercase tracking-wider">
        Stay Updated
      </h3>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="relative">
          <Input
            type="email"
            placeholder="Your email address"
            className="pl-10 pr-12 py-6 bg-white/70 dark:bg-zinc-800/70 border-white/20 dark:border-zinc-700/30 rounded-xl focus:ring-primary focus:border-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <Button
            type="submit"
            size="sm"
            className="absolute right-1.5 top-1/2 transform -translate-y-1/2 rounded-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-0"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </>
  );
}
