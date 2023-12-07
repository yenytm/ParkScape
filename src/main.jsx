import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./pages/About.jsx";
import "./index.css";
import Regions from "./pages/Regions.jsx";
import States from "./pages/States.jsx";
import { Hero } from "./components/hero/Hero.jsx";
import Florida from "./pages/Florida.jsx";
import Parks, { getParks } from "./pages/Parks.jsx";
import ParkDetails, { getParkDetails } from "./pages/ParkDetails.jsx";
import PrivateRoot from "./PrivateRoot.jsx";
import RequireAuth from "./utils/require-auth.jsx";
import { AuthProvider } from "./utils/context/auth-context.jsx";
import Login from "./components/Login.jsx";

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
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/regions",
        element: <Regions />,
      },
      {
        path: "/parks",
        element: <Parks />,
        loader: getParks,
      },
      {
        path: "/park/:name/:code",
        element: <ParkDetails />,
        loader: getParkDetails,
      },
      {
        path: "/states",
        element: <States />,
      },
      {
        path: "state/florida",
        element: <Florida />,
      },

    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/private",
    element: withAuthProvider(PrivateRoot), 
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
