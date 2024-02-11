import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import Portfolio from './Portfolio/Portfolio.jsx'
import Contact from './Contact/Contact.jsx'
import About from './About/About.jsx'
import NotFound from './NotFound.jsx'

export default function App() {

  const routes = createBrowserRouter([
    {
      path: '', element:<Layout></Layout>, children: [
        {index:true , element: <Home></Home> },
        { path: '/about', element: <About></About> },
        { path: '/portfolio', element: <Portfolio></Portfolio> },
        { path: '/contact', element: <Contact></Contact> },
        { path: '*', element: <NotFound></NotFound>}


      ]
    }
  ])

  return (
    <RouterProvider router={routes} />


  )
}


