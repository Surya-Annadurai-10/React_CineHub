import React, { useState } from 'react'
import logo from "../assets/cinehub.png"
import bgimg from "../assets/bgimage.jpg"
import {easeInOut, motion} from "motion/react"
import LoginBox from '../Components/LoginBox'

export const variantsObj = {
    hidden :{
        y:-20,
        opacity:0
    },
    show :{
        y:0,
        opacity : 1,
        transition:{
            duration:1,
            ease : easeInOut
        } 
    },
    hover:{
      scale: 1.05,
      boxShadow: "0px 0px 10px orange",
      transition:{
            duration:0.5,
            ease : easeInOut
      },
      backgroundImage : "linear-gradient(to left , red , orange)"
    },
    tap:{
        scale : 0.9
    }
   
}

const Login = () => {
    const [showExplore , setShowExplore] = useState(true);

 
  return (
   <>
   <div className={"relative"}>
       <motion.div 
       variants={variantsObj}
       initial="hidden"
       animate="show"
       className={"w-full flex items-center justify-between h-25 lg:px-20 px-5"}>
        <div>
            <motion.h1 
           variants={variantsObj}
            className={"lg:text-4xl  font-bold md:text-3xl  text-2xl text-white"}>Cine<span className={"px-1 py-0.5 bg-[red] font-bold rounded text-black"}>hub</span></motion.h1>
        </div>
        <motion.button
        variants={variantsObj}
        whileHover="hover"
         whileTap="tap"
        className={"shadow-md shadow- w-30 text-white font-bold  rounded-[10px] border border-white h-12  hover:border-0 hover:font-bold"}>Login</motion.button>
       </motion.div>
        <main   className='grid place-items-center ms-center w-full h-[88vh]' >

            <div className={"w-full h-screen absolute top-0 left-0 bottom-0 right-0 -z-10 "}>
                <img className={"w-full h-screen"} src={bgimg} alt="" />
            </div>
            <div className={"  w-full h-screen fixed top-0 right-0 bottom-0 left-0 -z-5 bg-radial from-transperant to-black opacity-40"}></div>
            <div className={"  w-full h-screen fixed top-0 right-0 bottom-0 left-0 -z-6 bg-black opacity-40"}></div>

            {
                showExplore ? <LoginBox />:
                 <div  className={" text-white lg:w-[45%] w-[80%] m-auto h-[50vh] flex-col flex gap-7  "}>
                <motion.h1
                  variants={variantsObj}
                  initial= "hidden"
                 animate="show"
                  className={"lg:text-6xl md:text-5xl  text-3xl  font-bold text-center"}>Your Gateway to Unlimited Entertainment!</motion.h1>
                <motion.button
                variants={variantsObj}
                 initial= "hidden"
                animate="show"
                whileHover="hover"
                whileTap="tap"
                className={"w-full rounded shadow[1px_1px_10px_rgb(255,0,0,0.5)] shadow-red-500 text-2xl font-bold h-[50px] hover:text-white bg-[red] text-black"}>Explore</motion.button>
                <motion.p
                initial={{
                    y:-10,
                    opacity:0
                }}
                animate={{
                    y:0,
                    opacity : 1
                }}
                transition={{
                    duration:1,
                    ease :easeInOut
                }}
                className='text-center   text-[#c7c7c7]'>Dive into a world of limitless entertainment with CineHub, your ultimate movie streaming destination. Whether you're a fan of action-packed thrillers, heartwarming dramas, laugh-out-loud comedies, or spine-chilling horror, we’ve got something for everyone!</motion.p>
            </div>
            }
        </main>
   </div>
   </>
  )
}


export default Login