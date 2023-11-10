import { httpClient } from "./httpClient"

const route = 'product'

export const getProducts = ()=>{
    return httpClient.get(`${route}`)
}

export const getProductById = (id) =>{
    return httpClient.get(`${route/$id}`)
}