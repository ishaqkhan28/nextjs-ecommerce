import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img4 from "../../../public/images/istockphoto-1150429752-1024x1024.jpg"
import img5 from "../../../public/images/istockphoto-1285487985-1024x1024.webp"
import img6 from "../../../public/images/photo-1705572722888-844a44ceecd9.avif"
import img7 from "../../../public/images/photo-1595950653106-6c9ebd614d3a.avif"
import white from "../../../public/images/white-shirt1.avif"
import menshoes from "../../../public/images/shoes1.avif"
import accesories from "../../../public/images/watch1.webp"
import pent from "../../../public/images/pent1.webp"

function Categories() {
  return (
    <div className='mb-[100px]'>
      <div className="text-center mb-20">
        <h1 className="text-myBlackhead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">Our Categories</h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex"></div>
        </div>
      </div>
      {/* Categories */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* 1st categories */}
        <div className='mb-7 lg:mb-0 overflow-hidden mx-auto z-10 group relative'>
          <Link href={"/tops"}>
            <Image src={img4} alt="tops" className='rounded-xl duration-500 group relative hover:scale-125' width={350} height={350} />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Tops</h1></div>
            <div className='block lg:hidden absolute bottom-24 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Tops</h1></div>
          </Link>
        </div>
        {/* 2st categories */}
        <div className='mb-7 lg:mb-0 overflow-hidden mx-auto z-10 group relative'>
          <Link href={"/pents"}>
            <Image src={img5} alt="pents" className='rounded-xl duration-500 group relative hover:scale-125' width={350} height={350} />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Pents</h1></div>
            <div className='block lg:hidden absolute bottom-24 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Pents</h1></div>
          </Link>
        </div>
        {/* 3st categories */}
        <div className='mb-7 lg:mb-0 overflow-hidden mx-auto z-10 group relative'>
          <Link href={"/accessories"}>
            <Image src={img6} alt="Accessories" className='rounded-xl duration-500 group relative hover:scale-125' width={350} height={350} />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Accessories</h1></div>
            <div className='block lg:hidden absolute bottom-24 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Accessories</h1></div>
          </Link>
        </div>
        {/* 4 st categories */}
        <div className='mb-7 lg:mb-0 overflow-hidden mx-auto z-10 group relative'>
          <Link href={"/shoes"}>
            <Image src={img7} alt="Shoes" className='rounded-xl duration-500 group relative hover:scale-125' width={350} height={350} />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Shoes</h1></div>
            <div className='block lg:hidden absolute bottom-24 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Shoes</h1></div>
          </Link>
        </div>
        <div className='mb-7 lg:mb-0 overflow-hidden mx-auto z-10 group relative'>
          <Link href={""}>
            <Image src={white} alt="tops" className='rounded-xl duration-500 group relative hover:scale-125' width={350} height={350} />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Shirt</h1></div>
            <div className='block lg:hidden absolute bottom-24 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Shirt</h1></div>
          </Link>
        </div>
        {/* 2st categories */}
        <div className='mb-7 lg:mb-0 overflow-hidden mx-auto z-10 group relative'>
          <Link href={""}>
            <Image src={pent} alt="pents" className='rounded-xl duration-500 group relative hover:scale-125' width={350} height={350} />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Pents</h1></div>
            <div className='block lg:hidden absolute bottom-24 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Pents</h1></div>
          </Link>
        </div>
        {/* 3st categories */}
        <div className='mb-7 lg:mb-0 overflow-hidden mx-auto z-10 group relative'>
          <Link href={""}>
            <Image src={accesories} alt="Accessories" className='rounded-xl duration-500 group relative hover:scale-125' width={350} height={350} />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Accessories</h1></div>
            <div className='block lg:hidden absolute bottom-24 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Accessories</h1></div>
          </Link>
        </div>
        {/* 4 st categories */}
        <div className='mb-7 lg:mb-0 overflow-hidden mx-auto z-10 group relative'>
          <Link href={""}>
            <Image src={menshoes} alt="Shoes" className='rounded-xl duration-500 group relative hover:scale-125' width={350} height={350} />
            <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Shoes</h1></div>
            <div className='block lg:hidden absolute bottom-24 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackhead/70 text-center text-myWhite w-full'>
              <h1 className='uppercase'>Shoes</h1></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Categories
