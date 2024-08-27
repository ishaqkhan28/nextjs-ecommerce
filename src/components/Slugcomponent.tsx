'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

function Slugcomponent({image}:any | string[] |StaticImageData|any) {
    const [path,setpath]=useState("")
  return (
    <div>
      <Image src={path ? path :image[0]} alt='ecommerce' width={400} height={400}/>
      <div className='flex items-center justify-evenly mx-auto mt-2'>
        {image.map((items:string,i:number)=>(
        <div key={i} className='cursor-pointer w-16 h-16'>
            <Image src={items} alt='abc' width={60} height={60} onClick={()=>setpath(items)} />
        </div>
        ))}
      </div>
    </div>
  )
}

export default Slugcomponent
