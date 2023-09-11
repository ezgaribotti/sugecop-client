import { useSelector } from 'react-redux'

function OperatorProfile() {
    const { fullName } = useSelector(state => state.auth.operator)

    return <div>Nombre completo {fullName}</div>
}

export default OperatorProfile
