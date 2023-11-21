import { httpClient } from './httpClient'

export const login = (data) => {
  return httpClient.post('login', data)
}