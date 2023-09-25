import { Link } from 'react-router-dom'
import webRoutes from '../routes/web.js'
import { useTranslation } from 'react-i18next'
import { map } from '../locales/map.js'

function Welcome() {
    const { t } = useTranslation()

    return (
        <div>
            <Link to={webRoutes.login}>{t(map.login)}</Link>
        </div>
    )
}

export default Welcome
