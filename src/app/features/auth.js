import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    accessToken: null,
    operator: {
        id: null,
        fullName: null
    },
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.accessToken = action.payload.access_token
            state.operator.id = action.payload.operator.id
            state.operator.fullName = action.payload.operator.full_name
            state.isAuth = true
        },
        logout: state => state = initialState
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
