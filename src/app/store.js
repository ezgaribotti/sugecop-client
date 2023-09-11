import { configureStore } from '@reduxjs/toolkit'
import auth from './features/auth.js'

const store = configureStore({
    reducer: {
        auth
    }
})

export default store
