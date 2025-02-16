import React, { useEffect, useRef, useState } from 'react'
import { easeInOut, motion } from 'motion/react'
import { variantsObj } from '../Containers/Login'
import { FaAnglesRight } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import {v4} from "uuid"

const LoginBox = () => {
    const signUpCon = useRef(null);
    const signUserName = useRef(null);
    const signEmail = useRef(null);
    const signNext = useRef(null);
    const signPassword = useRef(null);
    const signConfirmPassword = useRef(null);
    const signSubmit = useRef(null);
    const loginEmail = useRef(null);
    const loginPassword = useRef(null);
    const emailFieldRef = useRef(null);
    const passwordFieldRef = useRef(null);


    const [userDetails , setUserDetails] = useState({})
    const [showPasswordBox , setShowPasswordBox] = useState(false);

 const handleSignUp = ()=>{
   signUpCon.current.style.top = "-20%";
   signUpCon.current.style.transition = "2s ease-in-out";
   signUpCon.current.style.backgroundColor = "#000000";
   signUpCon.current.style.borderRadius = "20px";
   
    
 }

 const handle2ndNext = (e) =>{
    e.preventDefault();

    if(!signPassword.current.value){
        toast.error("Enter Password !", {
            position: "top-right",
            autoClose: 5000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return

    }

    if(!signConfirmPassword.current.value){
        toast.error("Enter confirm password !", {
            position: "top-right",
            autoClose: 5000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return
    }

  

   if(signConfirmPassword.current.value == (signPassword.current.value)){
    setUserDetails({
      ...userDetails,
        password : signConfirmPassword.current.value
    })
    toast.success("Registration successfull !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      signConfirmPassword.current.value = ""
      signPassword.current.value = ""
      signUpCon.current.style.top = "90%";
   signUpCon.current.style.transition = "2s ease-in-out";
   signUpCon.current.style.backgroundColor = "#ff0000";
   signUpCon.current.style.borderTopRightRadius  = "30%";
   signUpCon.current.style.borderTopLeftRadius  = "30%";
   

   }else{
    toast.error("Enter correct password !", {
        position: "top-right",
        autoClose: 5000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
   }
 }

 const handleLoginLink = () =>{
    signUpCon.current.style.top = "90%";
    signUpCon.current.style.transition = "2s ease-in-out";
    signUpCon.current.style.backgroundColor = "#ff0000";
    signUpCon.current.style.borderTopRightRadius  = "30%";
    signUpCon.current.style.borderTopLeftRadius  = "30%";
      signEmail.current.value = ""
    signUserName.current.value = ""
     signConfirmPassword.current.value = ""
      signPassword.current.value = ""
 }

 useEffect(() =>{
 if(userDetails && userDetails.password ){
    localStorage.setItem("userData", JSON.stringify(userDetails))
 }
  
 },[userDetails])
 

 const handleLoginBtn = (e) =>{
    e.preventDefault();
    let userLoginData = {
        email : loginEmail.current.value || null,
        password : loginPassword.current.value | null
    }
    let localUserData = JSON.parse(localStorage.getItem("userData"))
     
    if(localUserData){
       if((localUserData.email == userLoginData.email)){
        if(localUserData.password == userLoginData.password){
            console.log("Registration successfull");
            emailFieldRef.current.style.border ="1px solid white"
            emailFieldRef.current.style.boxShadow ="none"
             passwordFieldRef.current.style.border ="1px solid white"
            passwordFieldRef.current.style.boxShadow ="none"
            toast.success("Login successful !", {
                position: "top-right",
                autoClose: 5000, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        }else{
            // console.log("enter correct email ");
            passwordFieldRef.current.style.border ="1px solid red"
            passwordFieldRef.current.style.boxShadow ="0px 0px 10px red"
            emailFieldRef.current.style.border ="1px solid white"
            emailFieldRef.current.style.boxShadow ="none"
            toast.error("Enter correct password !", {
                position: "top-right",
                autoClose: 5000, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        }
       }else{
        console.log("enter correct password");
        emailFieldRef.current.style.border ="1px solid red"
        emailFieldRef.current.style.boxShadow ="0px 0px 10px red"
        passwordFieldRef.current.style.border ="1px solid white"
        passwordFieldRef.current.style.boxShadow ="none"
        toast.error("Enter correct Email !", {
            position: "top-right",
            autoClose: 5000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
       }
    }

}

 const handleNext =(e) =>{
    e.preventDefault();
    if(!signUserName.current.value){
        toast.error("Enter Username !", {
            position: "top-right",
            autoClose: 5000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return

    }

    if(!signEmail.current.value){
        toast.error("Enter Email !", {
            position: "top-right",
            autoClose: 5000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          return

    }
  
    let userData = {
        id: v4(),
        name :signUserName.current.value || null ,
        email : signEmail.current.value || null,
        password : null
    }

    setUserDetails(userData)
    signEmail.current.value = ""
    signUserName.current.value = ""
    setShowPasswordBox(true)
 
 }

  return (
    <>
    <div className={"lg:min-w-[450px] md:min-w-[80%] min-w-[92%] h-[75vh] overflow-hidden   absolute top-[15%] rounded-2xl bg-[#000000a9] shadow-[1px_1px_10px_black]" }> 
       <div className='text-white w-[100%] h-[25%] flex justify-center items-center gap-2'>
        <h1 className={"lg:text-3xl text-2xl font-bold"}>Login to</h1>
        <motion.h1 
           variants={variantsObj}
            className={"lg:text-3xl md:text-xl   font-bold text-2xl text-white"}>Cine<span className={"px-1 py-0.5 bg-[red] font-bold rounded text-black"}>hub</span></motion.h1>
       </div>
       <form className={"text-white m-auto w-[80%] flex flex-col gap-5 "} action="">
       <fieldset ref={emailFieldRef}  className='border rounded-xl pl-2'>
        <legend className='ml-3 p-1'>Email</legend>
        <input ref={loginEmail} className='w-[100%] h-full  rounded px-2  pb-5 pt-2 outline-0 text-amber-50' type="email" name="" id="email" placeholder='Email Address' />
       </fieldset>
       <fieldset ref={passwordFieldRef} className='border  rounded-xl pl-2'>
        <legend className='ml-3 p-1'>Password</legend>
        <input ref={loginPassword} className='w-[100%]  h-full  rounded px-2  pb-5 pt-2 outline-0 text-amber-50' type="password" name="" id="password" placeholder='Password' />
       </fieldset>
        <button onClick={handleLoginBtn} className='w-[100%] mt-4 h-[50px] rounded-full font-bold lg:text-xl  bg-red-600'>Login</button>
        <button className='w-[100%] h-[50px] rounded-full font-bold lg:text-xl flex items-center justify-center gap-5 px-[2rem] border-[grey]  border hover:bg-[red] hover:border-0'>
            <img className={"lg:w-[30px] w-[25px] h-[25px] lg:h-[30px]"} src="https://www.pngkit.com/png/full/178-1783296_g-transparent-circle-google-logo.png" alt="" />
            <h3 >Continue with Google</h3>
            </button>
          <ToastContainer />
       </form>


       <div
       ref={signUpCon}
       className={"w-[100%] h-[95vh] text-white shadow-[0px_0px_10px_red] text-center pt-[1.5rem]  rounded-tl-[30%]  rounded-tr-[30%]    lg:rounded-tl-[30%]  lg:rounded-tr-[30%]  absolute  left-0 top-[90%]  right-0 bg-[#ff0000] "}>
                <p className='mb-[7rem] lg:text-[13px] text-[12px]'>Dont't have an account? <span onClick={handleSignUp} className='hover:underline hover:text-black underline-offset-2  cursor-pointer'>Sign up for CineHub</span></p>
        
        
                <div className=''>
        <div className='text-white w-[100%] h-[50px] lg:h-[100px] mb-[1rem] flex justify-center items-center gap-2'>
        <h1 className={"lg:text-3xl text-2xl font-bold"}>Sign up on </h1>
        <motion.h1 
           variants={variantsObj}
            className={"lg:text-3xl md:text-xl   font-bold text-2xl text-white"}>Cine<span className={"px-1 py-0.5 bg-[red] font-bold rounded text-black"}>hub</span></motion.h1>
       </div>
       <div className={"text-white m-auto w-[80%] flex flex-col gap-5 "} >
       
       <div>
      {
        showPasswordBox ? 
        <>

       
       <form onSubmit={handle2ndNext}>
       <fieldset className='border  rounded-xl pl-2'>
        <legend className='lg:-ml-38 -ml-28  p-1'>Password</legend>
        <input ref={signPassword}  className='w-[100%] h-full rounded-xl px-2  pb-5 pt-2 outline-0 ' type="password" name="" id="Sign-Password" placeholder='Password' />
       </fieldset>
    
       <fieldset className='border mt-2 rounded-xl pl-2'>
        <legend className='lg:-ml-31 -ml-21   p-1'>Confirm Password</legend>
        <input ref={signConfirmPassword} className='w-[100%] h-full rounded-xl px-2  pb-5 pt-2 outline-0 text-amber-50' type="password" name="" id="Sign-Confirm" placeholder='Confirm Password' />
       </fieldset>
      
        <button  ref={signSubmit}  className='lg:w-[30%] mt-4 h-[40px] w-[30%] lg:h-[50px] ml-[14.2rem] lg:ml-[18rem] rounded-full font-bold text-[13px] lg:text-xl  bg-red-600'><span className='flex items-center justify-center gap-2'>Submit </span></button>
        <ToastContainer />
       </form>
        </>
        
        : 
        <>
       <form onSubmit={handleNext}>
       <fieldset className='border  rounded-xl pl-2'>
        <legend className='lg:-ml-38 -ml-27  p-1'>User Name</legend>
        <input ref={signUserName} className='w-[100%]   h-full rounded-xl px-2  pb-5 pt-2 outline-0 ' type="text" name="" id="Sign-userName" placeholder='User Name' />
       </fieldset>
       <fieldset className='border  mt-2 rounded-xl pl-2'>
        <legend className='lg:-ml-43 -ml-33 p-1'>Email</legend>
        <input ref={signEmail} className='w-[100%] h-full bg-transparent rounded-xl px-2  pb-5 pt-2 outline-0 ' type="email" name="" id="Sign-email" placeholder='Email Address' />
       </fieldset>
     
        <button ref={signNext}  className='lg:w-[30%] mt-4 h-[40px] w-[30%] ml-[14rem]  lg:ml-[18rem] rounded-full font-bold text-[13px] lg:text-xl  bg-red-600'><span className='flex items-center justify-center gap-2'>Next <FaAnglesRight /> </span></button>
       </form> 
        </>
      }
       </div>
        <button className='w-[100%] lg:mt-[2rem] h-[50px] rounded-full font-bold text-[13px] lg:text-xl flex items-center justify-center gap-5 px-[2rem] border-[grey]  border hover:bg-[red] hover:border-0'>
            <img className={"w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"} src="https://www.pngkit.com/png/full/178-1783296_g-transparent-circle-google-logo.png" alt="" />
            <h3>Continue with Google</h3>
            </button>
            <p className='mt-[2rem]'>Already have an account? <span onClick={handleLoginLink} className='hover:underline text-[red] hover:font-bold underline-offset-2 font-bold  cursor-pointer'>Login to CineHub</span></p>
       </div>
        </div>
        
        </div>
    </div>
    </>
  )
}

export default LoginBox