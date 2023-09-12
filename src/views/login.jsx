import { useEffect, useState } from 'react'
import webRoutes from '../routes/web.js'
import apiRoutes from '../routes/api.js'
import fetcher, { exception } from '../config/fetcher.js'
import { login } from '../app/features/auth.js'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [credential, setCredential] = useState({
        username: null,
        password: null
    })

    const handleChange = event => {
        setCredential({
            ...credential,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetcher.post(apiRoutes.login, credential).then(response => {
            dispatch(login(response.data.data))
            return navigate(webRoutes.dashboard)
        }).catch(error => toast.error(exception(error)))
    }

    return (
        <div>
            Iniciar sesión
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" onChange={handleChange}/>
                <input type="password" name="password" onChange={handleChange}/>
                <button type="submit">Acceder</button>
            </form>
        </div>
    )
}

export default Login
