import { Link } from 'react-router-dom'
import webRoutes from '../routes/web.js'

function Home() {
    return <div>Inicio <Link to={webRoutes.login}>Iniciar sesión</Link></div>
}

export default Home
