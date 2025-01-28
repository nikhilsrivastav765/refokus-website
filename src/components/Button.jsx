import React from 'react'
import { HiArrowTurnDownRight } from "react-icons/hi2";

const Button = (index, getStarted) => {

  return (<div>
    <button className="py-3 px-3 bg-white rounded-full text-black flex items-center justify-between w-40 font-semibold lg:py-3 lg:px-5 lg:w-48">

      {index.live && "Live Project"}
      {index.cases && "Case Study"} 
      <HiArrowTurnDownRight  />
    </button>
    
    </div>
  )
}

export default Button