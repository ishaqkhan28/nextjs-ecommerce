import React from 'react'
import { AiFillShopping } from "react-icons/ai";
import { Button } from '../ui/button';
function Hero() {
  return (
    <div className='mb-[100px]'>
      <div className="hero min-h-[80vh] custom-img bg-fixed bg-cover bg-no-repeat">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">Futuristic <span className='text-myOrange'>Clothes</span></h1>
            <p className="mb-5 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-myWhite">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <Button className='outline outline-offset-2 outline-1 text-myWhite group hover:rounded-2xl duration-300 hover:outline-myOrange'>
              <AiFillShopping className='mr-2 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce' /> Shop New
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
