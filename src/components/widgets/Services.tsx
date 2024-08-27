import Image from 'next/image'
import React from 'react'
import img1 from "../../../public/images/istockphoto-1497929753-1024x1024-ezgif.com-webp-to-png-converter.png"
import img2 from "../../../public/images/istockphoto-1497929753-1024x1024-ezgif.com-webp-to-png-converter (1).png"
import img3 from "../../../public/images/photo-1443041630902-3ad09447e1a8.png"
function Services() {
  return (
    <div>
      <section className="text-gray-600 body-font mb-[100px]">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-myBlackhead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">Our Services</h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myOrange inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* Delivery */}
            <div className="group p-4 mx-auto  lg:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image src={img1} alt="delivery" className="w-20 h-20" width={100} height={100} />
              </div>
              <div className="flex-grow">
                <h2 className="scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize text-myBlackhead mb-3 group-hover:text-myOrange duration-300">free delivery</h2>
                <p className="line-clamp-2 scroll-m-20 text-base font-semibold text-myBlackpara tracking-tight group-hover:text-myBlackpara/80 duration-300">Free delivery on order above $1000</p>
              </div>
            </div>
            {/* 24/7 Services */}
            <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image src={img2} alt="delivery" className="w-20 h-20" width={100} height={100} />
              </div>
              <div className="flex-grow">
                <h2 className="scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize text-myBlackhead mb-3 group-hover:text-myOrange duration-300">24/7 Customer Services</h2>
                <p className="line-clamp-2 scroll-m-20 text-base font-semibold text-myBlackpara tracking-tight group-hover:text-myBlackpara/80 duration-300">For query and question feel free to contact</p>
              </div>
            </div>
            {/* Money back */}
            <div className="group p-4  mx-auto lg:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                <Image src={img3} alt="delivery" className="w-20 h-20" width={100} height={100} />
              </div>
              <div className="flex-grow">
                <h2 className="scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize text-myBlackhead mb-3 group-hover:text-myOrange duration-300">Money Back Gaurantee</h2>
                <p className="line-clamp-2 scroll-m-20 text-base font-semibold text-myBlackpara tracking-tight group-hover:text-myBlackpara/80 duration-300">Get Money Back Gaurantee on damaged product</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
