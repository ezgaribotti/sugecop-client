import axios from 'axios'

export const fetcher = axios.create({
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
    fetcher: url => fetcher.get(url).then(response => response.data)
}
