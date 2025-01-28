import React from 'react'
import Button from './Button'
function Navbar(){
  return (
    <div className='max-w-screen-xl mx-auto  py-7 flex items-center justify-between px-5 lg:px-0'>
      <img className="w-32" src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
      <div className="flex items-center gap-10 mr-52  hidden  lg:flex">{["Home","Work","Careers","","News"].map((item, index)=>
        item === ""? <span key={index} className="block h-8 w-[2px] bg-zinc-600 "></span>:<a className="text-white font-medium text-lg " key={index} href="/" >{item}</a>
)
        }
      </div>
      <Button />
      </div>
  
  )
}

export default Navbar