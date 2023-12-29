import { httpClient } from "./httpClient"

const route = 'account'

export const getAccount = (id) => {
  return httpClient.get(`${route}/${id}`)
}

export const updateAccount = (id, data) => {
  return httpClient.put(`${route}/${id}`, data)
}

export const updatePassword = (id, data) => {
  return httpClient.put(`${route}/password/${id}`, data)
}