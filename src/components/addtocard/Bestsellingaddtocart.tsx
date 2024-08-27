'use client'
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { FaShoppingCart } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { Button } from '../ui/button'
import { Addtocart } from '@/app/store/features/Card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bestsellingaddtocart = ({ slug }: { slug: string }) => {
  const product = useAppSelector((state => state.product)).find((val: any) => val.slug == slug)
  const dispatch = useAppDispatch()
  const [cartItem, setCartItem] = useState({
    id: product?.id,
    tittle: product?.tittle,
    image: product?.image[0],
    price: product?.price,
    slug: product?.slug,
    discount: product?.discount,
    category: product?.category,
    size: product?.size,
    qty: product?.qty,
    color: product?.color[0],
  })
  const notify = () => toast.success('🦄 Product Added Successfully!', {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className='group mt-5 bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl right-2 px-2 py-2'>
            <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem]">
          {/* Size */}
          <div className="flex ml-6 items-center">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead">Size</span>
            <label className="form-control w-full max-w-xs">
              <select className="select select-bordered" onChange={(e) => setCartItem({ ...cartItem, size: (e.target.value) })}>
                <option disabled selected>Select Size</option>
                {product?.size.map((item: any, i: any) => (
                  <option key={i}>{item}</option>
                ))}
              </select>

            </label>
          </div>
          {/* colors */}
          <div className="flex mt-5">
            <span className="mr-2 text-base">Color</span>
            {product?.color.map((item: any, i: any) => (
              <button key={i} onClick={() => setCartItem({ ...cartItem, color: item })} className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:border-black active:border-black" style={{ backgroundColor: item }} />
            ))}
          </div>

          {/* add to cart */}
          <div onClick={notify}>

            <Button onClick={() => dispatch(Addtocart(cartItem))}
              className='group w-full mt-5 bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl right-2 px-2 py-2'>
              <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />
              Add to Cart
            </Button>
          </div>

        </PopoverContent>
      </Popover>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Bestsellingaddtocart
