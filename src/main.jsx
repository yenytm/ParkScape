import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About } from './pages/About.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:"/",
        element: <About/>,
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />

  </React.StrictMode>,
)
