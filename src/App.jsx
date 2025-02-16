import React, { useEffect } from "react"
import {createBrowserRouter, RouterProvider, useNavigate} from 'react-router-dom'
import Login from "./Containers/Login"
import Layout from "./Containers/Layout"
import Home from "./Containers/Home"
import TvShows from "./Containers/TvShows"
import Movies from "./Containers/Movies"
import { Provider } from "react-redux"
import { store } from "./store"


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
 

  // const navigate = useNavigate();

  // useEffect(() =>{
      
  //   let localData = localStorage.getItem("userData")
     
  //   if(localData){
  //     localData = JSON.parse(localData);
  //     console.log(localData);
  //     navigate("/home")
  //   }else{
  //       console.log(localData);
  //       navigate("/")
  //   }
  // },[]);

  return (
   <>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
   </>
  )
}

export default App
