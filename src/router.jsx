import { createBrowserRouter } from 'react-router-dom'
import routes from './config/routes.js'
import Home from './views/home.jsx'
import ErrorPage from './views/error-page.jsx'
import Login from './views/login.jsx'
import Dashboard from './views/dashboard.jsx'

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: routes.login,
        element: <Login />
    },
    {
        path: routes.dashboard,
        element: <Dashboard />,
        children: []
    }
])

export default router
