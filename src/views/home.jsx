import { Link, useNavigate } from 'react-router-dom'
import webRoutes from '../routes/web.js'
import { useDispatch } from 'react-redux'
import { logout } from '../app/features/auth.js'
import { useTranslation } from 'react-i18next'
import { translationMap } from '../locales/map.js'

function Home() {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const clearAuth = () => {
        dispatch(logout())
        navigate(webRoutes.login)
    }

    return (
        <div>
            <Link to={webRoutes.operatorProfile}>{t(translationMap.operatorProfile)}</Link>
            <button onClick={clearAuth}>{t(translationMap.logout)}</button>
        </div>
    )
}

export default Home
