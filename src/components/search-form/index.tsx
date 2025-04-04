"use client"

import type React from "react"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Form from 'next/form'

export default function SearchForm() {

  return (
    <Form action='/search' className="relative max-w-2xl mx-auto w-full">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search for recipes, ingredients, cuisines..."
          className="pl-12 pr-16 py-6 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md border-white/20 dark:border-zinc-700/30 rounded-xl focus:ring-primary focus:border-primary shadow-md"
          name='query'
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
        <Button
          type="submit"
          className="absolute right-1.5 top-1/2 transform -translate-y-1/2 rounded-lg bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-0"
        >
          Search
        </Button>
      </div>
    </Form>
  )
}

