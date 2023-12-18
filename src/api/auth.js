import { data } from 'autoprefixer'
import { httpClient } from './httpClient'

export const login = (data) => {
  return httpClient.post('login', data)
}
export const register = (data) => {
  return httpClient.post("register", data)
}
export const login_google = (data) =>{
  return httpClient.get('login/google', data)
}