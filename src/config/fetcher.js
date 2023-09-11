import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_FETCHER_BASE_URL,
    timeout: 3000,
    headers: {
        common: {
            Authorization: null
        }
    }
})

export default instance
