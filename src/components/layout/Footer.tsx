import Image from "next/image"
import Link from "next/link"

import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-myOrange ">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="space-y-6 w-64 flex-shrink-0 md:mx-0 mx-auto text-start md:text-left">
              <Link href={"/"} className="flex title-font font-medium items-start md:justify-start justify-start text-myBlackhead">
                <Image width={150} height={150} src={"/images/Logo.png"} alt="Logo" className="bg-white rounded-full" />
              </Link>
              <p className="mt-2">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="footer-title text-white text-xl">Services</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="" className="link link-hover hover:text-[#4E4E4D]">Branding</Link>
                </li>
                <li>
                  <Link href="" className="link link-hover hover:text-[#4E4E4D]">Design</Link>
                </li>
                <li>
                  <Link href="" className="link link-hover hover:text-[#4E4E4D]">Marketing</Link>
                </li>
                <li>
                  <Link href="" className="link link-hover hover:text-[#4E4E4D]">Advertisement</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="footer-title text-white text-xl">Company</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="" className="link link-hover hover:text-[#4E4E4D]">About us</Link>
                </li>
                <li>
                  <Link href="" className="link link-hover hover:text-[#4E4E4D]">Contact</Link>
                </li>
                <li>
                  <Link href="" className="link link-hover hover:text-[#4E4E4D]">Jobs</Link>
                </li>
                <li>
                  <Link href="" className="link link-hover hover:text-[#4E4E4D]">Press kit</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="footer-title text-white text-xl">Legal</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="" className="link link-hover hover:text-[#4E4E4D]">Terms of use</Link>
                </li>
                <li>
                  <Link href="" className="link link-hover hover:text-[#4E4E4D]">Privacy policy</Link>
                </li>
                <li>
                  <Link href="" className="link link-hover hover:text-[#4E4E4D]">Cookie policy</Link>
                </li>
                <li>
                  <Link href="" className="link link-hover hover:text-[#4E4E4D]">Branding</Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col ">
            <Link href="" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-xl">Shop Mart</span>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 1999 Shop Mart —
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4">
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:text-myOrange cursor-pointer">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Link>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:text-myOrange cursor-pointer">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </Link>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:text-myOrange cursor-pointer">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
