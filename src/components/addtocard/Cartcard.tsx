'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import { AddCart, delItem, subtractcart } from '@/app/store/features/Card'

const Cartcard = () => {
  const cartarray = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()
  return (
    <>

      {cartarray.length >= 1 && cartarray.map((item, i) => (
        <div key={i} className='flex p-10'>
          {/* image */}
          <Image src={item.image} alt={item.tittle} width={80} height={80} className='w-[100px] h-[100px]' />
          {/* some info */}
          <div className='flex px-5 justify-between items-center w-full'>
            <div>
              {/* tittle */}
              <h2 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackhead'>{item.tittle}</h2>
              {/* size */}
              <p className='mt-2 text-sm text-myBlackpara/80 font-semibold leading-none line-clamp-1'>Size:<span>{item.size}</span></p>
              {/* color */}
              <p className='mt-2 text-sm text-myBlackpara/80 font-semibold leading-none line-clamp-1'>color:<span>                <button className="border-2 border-gray-300 mr-1 active:border-black focus:border-black rounded-full w-[15px] h-[15px] " style={{ backgroundColor: item.color }} /></span></p>
              {/* quantity */}
              <div className='mt-2 flex items-center'>
                <Button onClick={() => dispatch(subtractcart(item))} className='mt-2 w-full group bg-myBlackhead hover:bg-transparent text-myWhite  hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl'>
                  <FaMinus className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />
                  Less
                </Button>
                <div className='mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead'>{item.qty}</div>
                <Button onClick={() => dispatch(AddCart(item))} className='mt-2 w-full group bg-myBlackhead hover:bg-transparent text-myWhite  hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl'>
                  <FaPlus className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />
                  Plus
                </Button>
              </div>
              {/* price and delete */}
              <div className='mt-2 lg:hidden flex flex-col items-end gap-2'>
                <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackhead '><span>Price:</span>${item.discount > 0 ? (item.price - (item.price * item.discount) / 100) * item.qty : item.price * item.qty}</h3>
                <FaTrash onClick={() => dispatch(delItem(item.uunid))} className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer' />
              </div>
            </div>

          </div>
          {/* price */}
          <div className='hidden lg:flex flex-col items-end gap-5'>
            <h3 className='text-sm font-semibold leading-none line-clamp-1 text-myBlackhead '><span>Price:</span>${item.discount > 0 ? item.price - ((item.price * item.discount) / 100 * item.qty) : item.price * item.qty}</h3>
            <FaTrash onClick={() => dispatch(delItem(item.uunid))} className='text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer' />
          </div>
        </div>
      ))}
    </>
  )
}

export default Cartcard
