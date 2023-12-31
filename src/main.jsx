import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About } from './pages/About.jsx'
import './index.css'
import { Hero } from './components/hero/Hero.jsx'
import Parks from './pages/Parks.jsx'
import ParkDetails from './pages/ParkDetails.jsx'
import RequireAuth from './utils/require-auth.jsx'
import { AuthProvider } from './utils/context/auth-context.jsx'
import { getParkDetails } from './utils/loaders.js'
import UserProfile from './components/UserProfile.jsx'
import Login from './components/Login.jsx'

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
            },
            {
                path: '/park/:name/:code',
                element: <ParkDetails />,
                loader: getParkDetails,
            },
        ],
    },
    { path: '/login', element: withAuthProvider(Login) },


    {
        path: '/user',
        element: withAuthProvider(UserProfile, true),
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
)
