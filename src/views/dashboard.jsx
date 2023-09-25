import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { translationMap } from '../locales/map.js'

function Dashboard() {
    const { t } = useTranslation()

    return (
        <div>
            {t(translationMap.dashboard)}
            <Outlet />
        </div>
    )
}

export default Dashboard
