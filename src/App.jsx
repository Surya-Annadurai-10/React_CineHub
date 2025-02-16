import React from "react"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from "./Containers/Login"
import Layout from "./Containers/Layout"
import Home from "./Containers/Home"
import TvShows from "./Containers/TvShows"
import Movies from "./Containers/Movies"


const router = createBrowserRouter([
  {
    path : "/",
    element : <Login />
  },
  {
    element  : <Layout /> ,
    children : [
      {
        path : "/home",
        element : <Home />
      },
      {
        path : "/tvshows" , 
        element : <TvShows />
      },
      {
        path : "/movies",
        element : <Movies />
      }
    ]
  }
])


function App() {
 

  return (
   <>
 <RouterProvider router={router} />
   </>
  )
}

export default App
