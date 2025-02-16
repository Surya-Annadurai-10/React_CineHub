import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() =>{
      
    let localData = localStorage.getItem("userData")
     
    if(localData){
      localData = JSON.parse(localData);
      console.log(localData);
      navigate("/home")
    }else{
        console.log(localData);
        navigate("/")
    }


  },[])

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout