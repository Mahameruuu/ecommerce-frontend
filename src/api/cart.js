import { httpClient } from "./httpClient"

const route = 'cart'

export const getItems = (id) => {
  return httpClient.get(`${route}/${id}`)
}

export const insertItem = (data) => {
  return httpClient.post(route, data)
}

export const updateItem = (id, data) => {
  return httpClient.put(`${route}/${id}`, data)
}

export const deleteItem = (id) => {
  return httpClient.delete(`${route}/${id}`)
}