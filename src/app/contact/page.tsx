'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {
    const notify = () => toast('message are successfully delivered');
  return (
    <>
     <Toaster />
<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
       {/* Heading */}
       <div className="text-center mb-5">
      <h1 className="text-myBlackhead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">Contact Us</h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex"></div>
      </div>
    </div>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">For query and question feel free to contact</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-myOrange">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-myOrange focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-myOrange">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-myOrange focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-myOrange">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-myOrange focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full" >
            
          <Button onClick={notify} className="flex mx-auto text-lglg:mt-2 xl:mt-0 flex-shrink-0 text-white bg-myBlackhead border-0 py-2 px-6 focus:outline-none hover:bg-myOrange duration-300 rounded shadow-2xl mt-2">Button</Button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <Link href="" className="text-myOrange">shopmart@email.com</Link>
          <p className="leading-normal my-5">49 Smith St.
            <br/>Losuto, MN 56301
          </p>
          <span className="inline-flex">
            <Link href="" className="text-myBlackhead hover:text-myOrange duration-300 w-6 h-6">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link href="" className="ml-4 text-myBlackhead hover:text-myOrange duration-300 w-6 h-6">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link href="" className="ml-4 text-myBlackhead hover:text-myOrange duration-300 w-6 h-6">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Page
