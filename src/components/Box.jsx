import React from 'react'
import { LuMoveRight } from "react-icons/lu";
const Box = () => {
  return (
    <div className="max-w-screen-2xl m-auto pt-32 flex gap-5 flex-col h-[140vh] lg:flex-row lg:max-h-[80vh] px-3 lg:gap-2" >
      <div className="w-full bg-zinc-800 p-3 rounded-lg transition-all duration-200 lg:hover:p-8 lg:w-1/3 lg:p-5">
        <div className="flex items-center justify-between"><h3 className="text-white font-semibold text-xl">One Heading</h3>
        <LuMoveRight className="text-white text-2xl"/>
        </div>
        <div className="flex flex-col "><h1 className="text-white my-10 text-xl">Whatever heading</h1>
        <p className="text-white pt-52 lg:pt-96">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="w-full bg-zinc-800 p-3 rounded-lg transition-all duration-200 lg:hover:bg-purple-600 lg:hover:p-8 lg:p-5 lg:w-[70%]">
        <div className="flex items-center justify-between"><h3 className="text-white font-semibold text-xl">One Heading</h3>
        <LuMoveRight className="text-white text-2xl"/>
        </div>
        <div className="flex flex-col justify-flex-start">
          <h1 className="text-white text-4xl ">Whatever heading</h1>
        <h1 className="text-white pt-52  text-4xl lg:pt-80 lg:text-8xl">Start a Project</h1>
        <button className="text-white py-3 px-7 border-2 border-white w-52 rounded-full mt-7">Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Box