import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { SWRConfig } from 'swr'
import { options } from './app/fetcher.js'
import store from './app/store.js'
import router from './router.jsx'
import locale from './app/locale.js'
import * as bootstrap from 'bootstrap'

import './scss/custom.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <SWRConfig value={options}>
                <RouterProvider router={router}/>
                <ToastContainer/>
            </SWRConfig>
        </Provider>
    </React.StrictMode>,
)
