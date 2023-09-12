import { createBrowserRouter } from 'react-router-dom'
import webRoutes from './routes/web.js'
import Home from './views/home.jsx'
import ErrorPage from './views/error-page.jsx'
import Login from './views/login.jsx'
import Dashboard from './views/dashboard.jsx'
import OperatorProfile from './views/operator-profile.jsx'
import AuthMiddleware from './views/auth-middleware.jsx'

const router = createBrowserRouter([
    {
        path: webRoutes.home,
        element: <Home/>
    },
    {
        path: webRoutes.login,
        element: <Login/>
    },
    {
        path: webRoutes.admin,
        element: <AuthMiddleware/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: webRoutes.dashboard,
                element: <Dashboard/>
            },
            {
                path: webRoutes.operatorProfile,
                element: <OperatorProfile/>
            }
        ]
    }
])

export default router
