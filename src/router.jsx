import { createBrowserRouter } from 'react-router-dom'
import webRoutes from './routes/web.js'
import Auth from './views/auth.jsx'
import Launch from './views/launch.jsx'
import Dashboard from './views/dashboard.jsx'
import Welcome from './views/welcome.jsx'
import ErrorPage from './views/error-page.jsx'
import Login from './views/login.jsx'
import Home from './views/home.jsx'
import OperatorProfile from './views/operator-profile.jsx'

const router = createBrowserRouter([
    {
        path: webRoutes.welcome,
        element: <Welcome/>
    },
    {
        element: <Launch/>,
        children: [
            {
                path: webRoutes.login,
                element: <Login/>
            }
        ]
    },
    {
        path: webRoutes.home,
        element: <Auth/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                element: <Dashboard/>,
                children: [
                    {
                        path: webRoutes.dashboard,
                        element: <Home/>
                    },
                    {
                        path: webRoutes.operatorProfile,
                        element: <OperatorProfile/>
                    }
                ]
            }
        ]
    }
])

export default router
