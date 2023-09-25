import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import webRoutes from '../routes/web.js'
import apiRoutes from '../routes/api.js'
import { toast } from 'react-toastify'
import useSWR from 'swr'
import { fetcher, exception } from '../app/fetcher.js'
import { logout } from '../app/features/auth.js'

function Auth() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [mounted, setMounted] = useState(false)
    const { isAuth, accessToken } = useSelector(state => state.auth)
    fetcher.defaults.headers.common.Authorization = accessToken
    const { error } = useSWR(mounted ? apiRoutes.operatorProfile : null)

    useEffect(() => {
        if (!isAuth) return navigate(webRoutes.login)
        if (error) {
            dispatch(logout())
            toast.error(exception(error))
            return navigate(webRoutes.login)
        }
        setMounted(true)
    }, [error])

    return <Outlet/>
}

export default Auth
