import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import webRoutes from '../routes/web.js'

function AuthMiddleware() {
    const navigate = useNavigate()
    const { isAuth } = useSelector(state => state.auth)

    useEffect(() => {
        if (!isAuth) navigate(webRoutes.login)
    }, [])

    return <Outlet/>
}

export default AuthMiddleware
