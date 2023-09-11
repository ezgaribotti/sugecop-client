import { createBrowserRouter } from 'react-router-dom'
import webRoutes from './routes/web.js'
import Home from './views/home.jsx'
import ErrorPage from './views/error-page.jsx'
import Login from './views/login.jsx'
import Dashboard from './views/dashboard.jsx'
import OperatorProfile from './views/operator-profile.jsx'
import AuthMiddleware from './views/auth-middleware.jsx'

export const admin = path => webRoutes.admin + path

const router = createBrowserRouter([
    {
        path: webRoutes.home,
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path: webRoutes.login,
        element: <Login/>
    },
    {
        path: webRoutes.admin,
        element: <AuthMiddleware/>,
        children: [
            {
                path: admin(webRoutes.dashboard),
                element: <Dashboard/>
            },
            {
                path: admin(webRoutes.operatorProfile),
                element: <OperatorProfile/>
            }
        ]
    }
])

export default router
