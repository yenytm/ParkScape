import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About } from './pages/About.jsx'
import {Addresses, loader as addressesLoader} from "./components/Addresses.jsx"


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:"/",
        element: <About/>,
      },
      
    ]
  },
  {
    path:"/addresses",
    element:<Addresses/>,
    loader:addressesLoader,
  },
  {
  path:"address/:state",
  element:<Address/>,
  loader: loader
},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />

  </React.StrictMode>,
)
