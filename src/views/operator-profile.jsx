import { useSelector } from 'react-redux'
import { map } from '../locales/map.js'
import { useTranslation } from 'react-i18next'

function OperatorProfile() {
    const { t } = useTranslation()
    const { operator } = useSelector(state => state.auth)

    return <div>{t(map.fullName, operator)}</div>
}

export default OperatorProfile
