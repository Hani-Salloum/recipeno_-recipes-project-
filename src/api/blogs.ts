'use server'

import { BlogType } from "@/types/blogs"
import { blogPosts, getRandomBlogs } from "@/utils/blogs"

type lmt = number | null

export const fetchBlogs : (limit: lmt) => Promise<BlogType[]>  = async function (limit: lmt): Promise<BlogType[]> {
    return getRandomBlogs(blogPosts, limit || 3)
} 

export const fetchBlogById : (id: string) => Promise<BlogType | undefined> = async function (id: string): Promise<BlogType | undefined> {
    return blogPosts.find(item => item.id == id)
}
