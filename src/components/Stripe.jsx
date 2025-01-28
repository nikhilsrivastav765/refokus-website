import React from 'react'

const Stripe = () => {
    const data = [
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number : 52},
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number : 2},
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number : 12},
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number : 52},
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number : 2},
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number : 12},
    ]
  return (
    <div className="flex flex-wrap ">
        {data.map((item,index)=>{
            return <div key={index} className="flex items-center w-[100rem] justify-between border-r-[.1px] border-t-[.1px] border-b-[.1px] border-zinc-600 px-7 py-10  lg:w-[16.66%] lg:py-5"><img className="w-40 " src={item.url} alt="" />
        <h2 className="text-white font-medium text-xl ">{item.number}</h2></div>
        })}
    </div>
  )
}

export default Stripe