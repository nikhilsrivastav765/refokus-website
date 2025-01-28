import { motion } from 'motion/react'
import React from 'react'

function Marquee({imageurls, direction}){
    


  return (
    <div className="flex w-full overflow-hidden lg:mt-20">
    <motion.div initial={{x : direction === "left" ? "0" : "-100%"}} animate={{x : direction === "left" ? "-100%" : "0"}} transition={{ease : "linear", duration : 10, repeat : Infinity}} className="flex gap-16 px-8 lg:gap-40 flex-shrink-0 pb-5 lg:py-16 lg:px-10">{imageurls.map(url=><img src={url} className="w-32 lg:w-44" alt="" />)}</motion.div>
    <motion.div initial={{x : direction === "left" ? "0" : "-100%"}} animate={{x : direction === "left" ? "-100%" : "0"}} transition={{ease : "linear", duration : 10, repeat : Infinity}} className="flex gap-16 px-8 lg:gap-40 flex-shrink-0 pb-5 lg:py-16 lg:px-10 ">{imageurls.map(url=><img src={url} className="w-32 lg:w-44" alt="" />)}</motion.div>
    </div>
  )

}

export default Marquee