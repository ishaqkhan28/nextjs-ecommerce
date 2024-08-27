import React from 'react'

function Promotion() {
  return (
    <div className='mb-[100px] mt-[100px]'>
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-myBlackhead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">Our Promotion</h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex"></div>
        </div>
      </div>
      {/* Promotions */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* 1st child */}
        <div
          className="hero h-[25rem] promo-1 rounded-xl bg-cover bg-no-repeat">
          <div className="hero-overlay bg-opacity-30 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl uppercase text-myWhite opacity-70">Get Upto <span className='text-myOrange'>60%</span> Off</h1>
              <p className="mt-2 scroll-m-20 text-base font-medium tracking-tight text-myWhite">
                Flat sales off 60% on the season variant
              </p>
            </div>
          </div>
        </div>
        {/* 2st child */}
        <div
          className="hero h-[25rem] promo-2 rounded-xl ">
          <div className="hero-overlay bg-opacity-30 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl uppercase text-myWhite opacity-70">Get Upto <span className='text-myOrange'>30%</span> Off</h1>
              <p className="mt-2 scroll-m-20 text-base font-medium tracking-tight text-myWhite">
                Flat sales off 30% on the New jewelry Arrival
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion
