import { Link, useNavigate } from 'react-router-dom'
import webRoutes from '../routes/web.js'
import { useDispatch } from 'react-redux'
import { logout } from '../app/features/auth.js'

function Dashboard() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const clearAuth = () => {
        dispatch(logout())
        navigate(webRoutes.login)
    }

    return (
        <div>
            Panel de control
            <Link to={webRoutes.operatorProfile}>Perfil del operador</Link>
            <button onClick={clearAuth}>Cerrar sesión</button>
        </div>
    )
}

export default Dashboard
