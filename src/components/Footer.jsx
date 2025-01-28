import React from 'react'

const Footer = () => {

  return (
    <div className="lg:p-5 p-3 lg:m-auto lg:max-w-screen-2xl flex flex-col lg:flex-row w-full">
      <h1 className="text-white text-[5rem] lg:text-[10vw] font-semibold ">refokus.</h1>
      <div>
        <div className="flex item-center justify-between lg:gap-32 flex-col lg:flex-row">
        <div className="flex flex-col w-32 p-4 lg:p-16">
          <h3 className="text-zinc-400 font-medium ">Socials</h3>
        {["Instagram", "Twitter(X?)", "LinkedIn"].map((item , index)=><a className="text-zinc-100 py-2 text-lg font-semibold" href="/">{item}</a>)}</div>
        <div className="flex flex-col w-32 p-4 lg:p-16">
          <h3 className="text-zinc-400 font-medium ">Socials</h3>
        {["Instagram", "Twitter(X?)", "LinkedIn"].map((item , index)=><a className="text-zinc-100 py-2 text-lg font-semibold " href="/">{item}</a>)}</div>
        <div className="flex flex-col lg:items-end  lg:justify-center lg:w-52"><p className="text-white lg:w-52 font-semibold">Refokus is pioneering digital agency driven by design and empowered by technology.</p>
        <img className="w-52 mt-7 lg:w-40" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer