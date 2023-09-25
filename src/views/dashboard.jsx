import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { map } from '../locales/map.js'

function Dashboard() {
    const { t } = useTranslation()

    return (
        <div>
            {t(map.dashboard)}
            <Outlet />
        </div>
    )
}

export default Dashboard
