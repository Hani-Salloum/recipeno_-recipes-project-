'use server'

import axiosInstance, { baseURL } from "@/plugins/axios"
import { restructureRecipe, restructureRecipes } from "@/utils/restructureRecipes"

function getRandomLowercaseLetter() {  
    const letters = 'abcdefghijklmnopqrstuvwxyz' 
    const randomIndex = Math.floor(Math.random() * letters.length)  
    return letters[randomIndex]  
} 

export const fetchAllRecipes = async (search: string, limit: number) => {
    try {
        const letter = getRandomLowercaseLetter()
        const response = (await axiosInstance.get(`${baseURL}search.php?s=${search ?? letter}`))
        const { data } = response
        return restructureRecipes(data.meals).slice(0, limit)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const fetchRecipeById = async (id: string) => {
    try {
        const response = (await axiosInstance.get(`${baseURL}lookup.php?i=${id}`))
        const { data } = response
        return restructureRecipe(data.meals[0])
    } catch (error) {
        return Promise.reject(error)
    }
}

export const searchRecipesByFirstLetter = async (letter: string) => {
    try {
        const response = (await axiosInstance.get(`${baseURL}search.php?f=${letter}`))
        const { data } = response
        return restructureRecipes(data.meals)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const fetchRandomRecipe = async () => {
    try {
        const response = (await axiosInstance.get(`${baseURL}random.php`))
        const { data } = response
        return restructureRecipe(data.meals[0])
    } catch (error) {
        return Promise.reject(error)
    }
}