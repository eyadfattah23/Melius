import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Challenge from './pages/chellenge'
import Community from './pages/community'
import Articles from './pages/articles'
import Error_404 from './pages/404'
// import LandingPage from './pages/landing_page'
import Login from './pages/login'
import Singup from './pages/signup'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement: <Error_404/>
    },
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/challenge",
      element: <Challenge/>
    },
    {
      path: "/community",
      element: <Community/>
    },
    {
      path: "/articles",
      element: <Articles/>
    },
    // {
    //   path: "/landing_page",
    //   element: <LandingPage/>
    // },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Singup/>
    },

  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
