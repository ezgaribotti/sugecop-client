import { configureStore } from '@reduxjs/toolkit'
import { load, persist } from './serialize.js'
import auth from './features/auth.js'

const preloadedState = load()
const store = configureStore({
    reducer: {
        auth
    },
    preloadedState
})

store.subscribe(() => {
    persist(store.getState())
})

export default store
