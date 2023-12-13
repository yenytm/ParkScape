import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About } from './pages/About.jsx'
import './index.css'
import { Hero } from './components/hero/Hero.jsx'
import Parks, { getParks } from './pages/Parks.jsx'
import ParkDetails from './pages/ParkDetails.jsx'
import RequireAuth from './utils/require-auth.jsx'
import { AuthProvider } from './utils/context/auth-context.jsx'
import Login from './components/Login.jsx'
import { getParkDetails } from './utils/loaders.js'
import AuthRoot from './components/AuthRoot.jsx'

const withAuthProvider = (Component, requireAuth = false) => {
    return (
        <AuthProvider>
            {requireAuth ? (
                <RequireAuth>
                    <Component />
                </RequireAuth>
            ) : (
                <Component />
            )}
        </AuthProvider>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: withAuthProvider(Root),
        children: [
            {
                path: '/',
                element: <Hero />,
            },
            {
                path: '/about',
                element: <About />,
            },

            {
                path: '/parks',
                element: <Parks />,
                loader: getParks,
            },
            {
                path: '/park/:name/:code',
                element: <ParkDetails />,
                loader: getParkDetails,
            },
        ],
    },
    {
        path: '/login',
        element: withAuthProvider(Login),
    },
    {
        path: '/private',
        element: withAuthProvider(AuthRoot, true),
        children: [
            {
                path: "/",
                element: <AuthRoot />
            }
        ]
        

    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
