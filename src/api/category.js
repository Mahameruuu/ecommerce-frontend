import { httpClient } from "./httpClient"

const route = 'category'

export const getCategories = ()=>{
    return httpClient.get(`${route}`)
}

export const getCategoryById = (id) =>{
    return httpClient.get(`${route/$id}`)
}