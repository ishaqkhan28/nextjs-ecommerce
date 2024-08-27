'use client'
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";
import { NavigationMenuDemo } from '../layout/Navlinks';
import Image from 'next/image';
import { useAppSelector } from '@/app/store/hooks';
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart)
  return (
    <>
      <div className='block lg:hidden ml-4 mt-10'>
        {/* Search Bar */}
        <div className="w-full lg:w-1/3 flex items-center border border-myWhite rounded-full bg-myWhite text-myBlackhead px-3 hover:border-myBlackhead ">
          <Link href={'/'}>
            <IoIosSearch className="cursor-pointer text-2xl gap-2" />
          </Link>
          <input
            type="text"
            className="focus:outline-none pl-1 pr-5 py-1 flex-grow bg-transparent rounded-r-full"
            placeholder="SEARCH : SHIRTS"
          />
        </div>
      </div>
      <div className="navbar">

        <div className="navbar-start ">

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-2xl lg:hidden">
              <RxHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-[#F3F4F6]">
              <li><Link href="/">Home</Link></li>
              <li>
                <details>
                  <summary>Women</summary>
                  <ul className="p-2">
                    <li><Link href="/tops">Tops</Link></li>
                    <li><Link href="/pents">Pents</Link></li>
                    <li><Link href="/accessories">Accessories/Jewelry</Link></li>
                    <li><Link href="/shoes">Shoes</Link></li>

                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Men</summary>
                  <ul className="p-2">
                    <li><Link href="/tops">Shirts</Link></li>
                    <li><Link href="/pents">Pents</Link></li>
                    <li><Link href="/accessories">Accessories/Watches</Link></li>
                    <li><Link href="/shoes">Shoes</Link></li>

                  </ul>
                </details>
              </li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/products">All Product</Link></li>
            </ul>
          </div>

          <Link href={"/"}>
            <Image src={require('../../../public/images/logo.png')} alt="logo" className='hidden lg:block ml-4  ' width={150} height={150} />
          </Link>
        </div>
        <div className="navbar-center">
          <Image src={require('../../../public/images/logo.png')} alt="logo" className="block lg:hidden" width={150} height={150} />
          <div className='hidden lg:flex'>
            <NavigationMenuDemo />
          </div>
        </div>
        {/* Search Bar */}
        <div className="hidden lg:block">
          <div className="w-full lg:w-1/3 flex items-center  rounded-full bg-myWhite text-myBlackhead">
            <Link href={'/'}>
              <IoIosSearch className="cursor-pointer text-2xl gap-2" />
            </Link>
            <input
              type="text"
              className="focus:outline-none pl-1 pr-5 py-1 flex-grow bg-transparent"
              placeholder="SEARCH : SHIRTS"
            />
          </div>
        </div>
        <div className="navbar-end">
          <Link href={'/cart'}>
            <div tabIndex={0} role="button" className="p-4 cursor-pointer group ">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 group-hover:text-myOrange duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cart.length > 0 && (
                  <span className="badge badge-sm font-semibold indicator-item group-hover:text-myWhite group-hover:bg-myBlackpara ">{cart.length}</span>
                )}

              </div>
            </div>
          </Link>

        </div>
      </div>
    </>
  )
}

export default Navbar
