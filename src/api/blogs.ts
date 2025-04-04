'use server'

import { blogPosts, getRandomBlogs } from "@/utils/blogs"

type lmt = number | null

export const fetchBlogs = async (limit: lmt) => {
    return getRandomBlogs(blogPosts, limit || 3) || []
}

export const fetchBlogById = async (id: string) => {
    return blogPosts.find(item => item.id === Number(id)) || {}
}
