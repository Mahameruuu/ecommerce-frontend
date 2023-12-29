import { httpClient } from './httpClient'

export const login = (data) => {
  return httpClient.post('login', data)
}
export const register = (data) => {
  return httpClient.post("register", data)
}