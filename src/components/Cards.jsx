import React, { useState } from 'react'
import Card from './Card'
import { div } from 'motion/react-client'
import { motion } from 'motion/react'

const Cards = () => {
  
  
  const [pos, setPos] = useState(0)
  function mover(info){
    setPos(info*25)
}
  
  return (
    <div className="relative my-20">
    <Card mover={mover}/>
    <div className="absolute top-0 w-full h-full pointer-events-none hidden lg:flex">
      <motion.div initial={{y : pos, x : "-50%"}} 
      animate={{y : pos+'rem'}}
      className="absolute  w-[28vw] h-[25rem] bg-white overflow-hidden rounded-xl left-[44%]">
        <motion.div animate={{y : -pos+'rem'}} transition={{ease : [0.76, 0, 0.24, 1], duration : .5}} className=" h-full w-full bg-sky-100 ">
   
        </motion.div>
        <motion.div animate={{y : -pos+'rem'}} transition={{ease : [0.76, 0, 0.24, 1], duration : .5}} className=" h-full w-full bg-sky-200 "></motion.div>
        <motion.div animate={{y : -pos+'rem'}} transition={{ease : [0.76, 0, 0.24, 1], duration : .5}} className=" h-full w-full bg-sky-300 "></motion.div>
        <motion.div animate={{y : -pos+'rem'}} transition={{ease : [0.76, 0, 0.24, 1], duration : .5}} className=" h-full w-full bg-sky-400 "></motion.div>
        <motion.div animate={{y : -pos+'rem'}} transition={{ease : [0.76, 0, 0.24, 1], duration : .5}} className=" h-full w-full bg-sky-500 "></motion.div>
      </motion.div>
  
    </div>
    </div>
  )
}

export default Cards