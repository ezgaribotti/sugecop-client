import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_FETCHER_BASE_URL,
    timeout: 5000,
    headers: {
        common: {
            Authorization: null
        }
    }
})

export const exception = error => {
    if (error.response) return error.response.data.message
    return error.message
}

export const options = {
    fetcher: url => instance.get(url).then(response => response.data)
}

export default instance
