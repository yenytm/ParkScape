import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from '../components/Root.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />

  </React.StrictMode>,
)
