import { useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return <div>Página de error</div>
}

export default ErrorPage
