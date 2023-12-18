import { httpClient } from "./httpClient"

const route = 'order'

export const checkout = (data) => {
  return httpClient.post(route, data)
}

export const getOrder = (id) => {
  return httpClient.get(`${route}/${id}`)
}