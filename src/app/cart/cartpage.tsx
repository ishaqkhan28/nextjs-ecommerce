'use client'
import React, { useState } from 'react'
import Cartcard from '@/components/addtocard/Cartcard'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '../store/hooks'

const Cartpage = () => {
    const cantarray= useAppSelector((state)=>state.cart) 
    const total = cantarray.reduce((total,arr)=>{
        return total + (arr.price-(arr.price * arr.discount)/100 *arr.qty)
    },0)
   
  return (
    <div>
      <div className='grid lg:grid-cols-3 grid-cols-1'>
                {/* items */}
                <div className='col-span-2'>
                <Cartcard/>
                </div>
                {/* summary */}
                <div className='bg-myBlackhead/5 p-5 rounded-xl'>
                {/* heading */}
                <h2 className='scroll-m-20 text-lg font-semibold tracking-tight uppercase text-myBlackhead'>Order Summary</h2>
                {/* divider */}
                <div className="divider mt-0 mb-1"></div>
                {/* pricing */}
                <div className='text-sm font-medium text-myBlackpara'>
                    {/* product price */}
                    <div className='flex items-center justify-between capitalize'>
                        <h2>Sub Total</h2>
                        <h2>${total}</h2>
                    </div>
                    {/* delivery charge */}
                    <div className='flex items-center justify-between capitalize'>
                        <h2>Delivery charges</h2>
                        <h2>TBD</h2>
                    </div>
                    {/* Sales Tax*/}
                    <div className='flex items-center justify-between capitalize'>
                        <h2>Sales Tax</h2>
                        <h2>TBD</h2>
                    </div>
                    {/* divider */}
                <div className="divider mt-0 mb-1"></div>
                </div>
                {/* estimate total */}
                <div className='flex items-center justify-between uppercase font-semibold test-sm tracking-tight text-myBlackhead'>
                        <h2>Estimated Total</h2>
                        <h2>${total}</h2>
                    </div>
                    {/* divider */}
                <div className="divider mt-0 mb-1"></div>
                {/* button */}
                <div className='flex items-center justify-center w-full'>
                <Button
                        className="text-white bg-gray-900 border hover:text-myBlackhead border-gray-500 px-4 py-2 w-full">Process to Checkout
                    </Button>
                </div>
                {/* divider */}
                <div className="divider mt-0 mb-1"></div>
                <p className='text-xs font-semibold tracking-tight text-myBlackhead w-[97%] text-center italic'>
                    {`Delivery charges and sales tax are calculated in your cheackout page`}
                </p>
            </div>
                </div>
    </div>
  )
}

export default Cartpage