import { httpClient } from "./httpClient"

export const login = (data)=>{
    return httpClient.get("login", data)
}

export const register = (data)=>{
    return httpClient.get("register", data)
}