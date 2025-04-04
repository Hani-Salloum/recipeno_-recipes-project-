'use server'

import axiosInstance, { baseURL } from "@/plugins/axios"
import { cuisines } from "@/utils/cuisines"
import { restructureRecipes } from "@/utils/restructureRecipes"

export const fetchAllCuisines = async () => {
    return cuisines
}

export const fetchAllCategories = async () => {
    try {
        const response = (await axiosInstance.get(`${baseURL}categories.php`))
        const { data } = response
        return data.categories
    } catch (error) {
        return Promise.reject(error)
    }
}

export const fetchAllIngredients = async () => {
    try {
        const response = (await axiosInstance.get(`${baseURL}list.php?i=list`))
        const { data } = response
        return data.meals
    } catch (error) {
        return Promise.reject(error)
    }
}

type lmt = number | null

export const filterRecipes = async (filterBy: string, filterValue: string, limit: lmt = null ) => {
    try {
        const response = (await axiosInstance.get(`${baseURL}filter.php?${filterBy}=${filterValue}`))
        const { data } = response
        return limit ? restructureRecipes(data.meals).slice(0, limit)  : restructureRecipes(data.meals)
    } catch (error) {
        return Promise.reject(error)
    }
}