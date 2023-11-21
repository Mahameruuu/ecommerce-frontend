import { jwtDecode } from "jwt-decode"
import { useRouter } from "vue-router"

export const setToken = (token) => {
  localStorage.setItem('token', token)
}

export const getToken = () => {
  return localStorage.getItem('token')
}

export const decodeToken = () => {
  return jwtDecode(localStorage.getItem('token') ?? '')
}

export const isLoggedIn = () => {
  const token = getToken()
  console.log(token)

  if(token === null || token === '' || decodeToken().role !== 'customer') {
    return false
  }

  return true
}

export const logout = () => {
  localStorage.clear()
  console.log(getToken())
  const router = useRouter()
  router.push('/')
}