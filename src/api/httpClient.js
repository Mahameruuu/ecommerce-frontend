import axios from 'axios'
import { getToken } from '../utils/auth'

// axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

const API_URL = "http://127.0.0.1:8000/api"

export const httpClient = axios.create({
    baseURL: API_URL
})


httpClient.interceptors.request.use((config) => {
    if(config.headers) {
        const token = getToken()
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
})
