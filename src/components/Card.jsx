import React from 'react'
import Button from './Button'

const Card = ({mover}) => {
    const cardData = [{title : "Arqitel", Description : "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate." , live : true, cases : false},
        {title : "TTR", Description : "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design." , live : true, cases : false},
        {title : "YIR 2022", Description : "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate." , live : true, cases : false},
        {title : "Yahoo!", Description : "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop." , live : true, cases : true},
        {title : "Rainfall", Description : "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease." , live : true, cases : true}
    ]
    return (
        cardData.map((item , index)=>{
           return (<div onMouseEnter={()=>{mover(index)}} className="w-full lg:h-[25rem] px-5 flex items-start  flex-col  lg:flex-row lg:items-center lg:justify-between lg:px-40 border-b border-zinc-700 pt-7 lg:pt-0 lg:border-none">
            <div >
                <h1 className="text-white font-semibold text-6xl">{item.title}</h1>
                </div>
            <div className=" py-14 lg:py-16 px-0   flex flex-col gap-8 lg:basis-1/3 lg:gap-7 lg:gap-10 lg:px-16 lg:py-5 ">
                <p className="text-white text-lg ">{item.Description}</p>
                <div className="flex gap-2 lg:gap-7">
                {item.live === false? null : <Button index={index} live={item.live}/>}
                {item.cases === false? null : <Button index={index} cases={item.cases}/>}
                </div>
            </div>
            </div>)
        })
    
    )
}

export default Card