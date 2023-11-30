import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About } from './pages/About.jsx'
import {Addresses, loader as addressesLoader} from "./components/Addresses.jsx"
import './index.css'
import Regions from './pages/Regions.jsx'
import States from './pages/States.jsx'
import { Hero } from './components/hero/Hero.jsx'
import Florida from './pages/Florida.jsx'
import Parks, { getParks } from './pages/Parks.jsx'



const router = createBrowserRouter ([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:"/",
        element: <Hero/>,
      },


      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/regions",
        element: <Regions/>,
      },
      {
        path:"/parks",
        element: <Parks />,
        loader: getParks
      },

      {
        path:"/states",
        element: <States/>,
      },
      {
        path:"state/florida",
        element: <Florida/>,
      },



      
    ]
  },
  {
    path:"/addresses",
    element:<Addresses/>,
    loader:addressesLoader,
  },
  // {
  //   path:"/regions",
  //   element:<Regions/>,
  // },
  // {
  //   path:"/states",
  //   element:<States/>,
  // },

//   {
//   path:"address/:state",
//   element:<Address/>,
//   loader: loader
// },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />

  </React.StrictMode>,
)
