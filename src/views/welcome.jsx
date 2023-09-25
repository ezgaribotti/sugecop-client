import { Link } from 'react-router-dom'
import webRoutes from '../routes/web.js'
import { useTranslation } from 'react-i18next'
import { translationMap } from '../locales/map.js'

function Welcome() {
    const { t } = useTranslation()

    return (
        <div>
            <Link to={webRoutes.login}>{t(translationMap.login)}</Link>
        </div>
    )
}

export default Welcome
