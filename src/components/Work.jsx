import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"

const Work = () => {
  const [images, setImages] = useState([
    {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top : "50%", left : "40%", isActive : false},
    {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top : "55%", left : "45%", isActive : false},
    {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top : "47%", left : "53%", isActive : false},
    {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top : "58%", left : "45%", isActive : false},
    {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top : "60%", left : "58%", isActive : false},
    {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top : "65%", left : "62%", isActive : false}
  ]);

  
  const {scrollYProgress} = useScroll()
  scrollYProgress.on("change", (data)=>{
    
    function showImages(arr){
      setImages(prev=>(
        prev.map((item, index)=>(
        arr.indexOf(index) === -1 ? ({...item, isActive : false}) : 
        ({...item, isActive : true})
          
        ))
      )    
    )}
    switch(Math.floor(data*100)){
      case 0 : showImages([])
      break;
      case 1 : showImages([0]);
      break;
      case 2 :showImages([0,1]);
      break;
      case 3 :showImages([0,1,2]);
      break;
      case 4 : showImages([0,1,2,3]);
      break;
      case 6 : showImages([0,1,2,3,4]);
      break;
      case 8 : showImages([0,1,2,3,4,5]);
      break;
    }
  })
  return (<>
  <div className="w-full">
    <div className="relative max-w-screen-xl  mx-auto pt-32 sm: pt-10 flex items-center justify-center py-10 ">
        <h1 className="text-white font-medium text-[10rem] pb-32 font-[satoshi_regular] tracking-tight leading-none lg:text-[30vw] lg:pb-0">work</h1>
        <div className="absolute  w-full h-full top-0">
          {images.map((item, index)=>{
           return  item.isActive &&  <img key={index} className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]" style={{left : item.left, top : item.top}} src={item.url} alt="" />
            })}
          </div>
        
    </div>
    </div>
    </>
  )
}

export default Work