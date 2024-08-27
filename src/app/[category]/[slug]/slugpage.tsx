'use client'
import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import Products from '@/app/utils/Mock'
import AddToCartComponent from '@/components/addtocard/Addtocarttoast'
import Slugcomponent from '@/components/Slugcomponent'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { FaHeart, FaPlus, FaMinus } from 'react-icons/fa'


const Slugpage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.product)
  const slug = Products.filter((val:any) => val.slug == params.slug)
  const [cartItem, setCartItem] = useState(() => {
    if (slug && slug.length > 0) {
      return {
        id:slug[0].id,
        tittle:slug[0].tittle,
        image:slug[0].image ,
        slug:slug[0].slug,
        price:slug[0].price,
        category:slug[0].category,
        size:slug[0].size,
        qty:slug[0].qty,
        discount:slug[0].discount,
        color:slug[0].color,
      };
    } else {
      // Handle the case where slug is undefined or empty
      return {
        id: null,
        tittle: '',
        image: '',
        price: 0,
        slug:'',
        category:'',
        size:'',
        qty:0,
        discount:0,
        color:''
      };
    }
  });
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <Slugcomponent image={slug[0].image} />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{slug[0].category}</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{slug[0].tittle}</h1>
          {/* rating */}
          <div className="rating rating-xs">
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-myOrange" />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-myOrange" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-myOrange" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-myOrange" />
          </div>

          <div className="flex w-full flex-col">
            {/* discription */}
            <p className="mt-2 leading-relaxed scroll-m-20 font-normal text-base text-myBlackpara">{slug[0].discription}</p>
          </div>
          <div className="flex mt-6 items-center mb-5">
            <div className="flex">
              <span className="mr-3">Color</span>
              {slug[0].color.map((items:any, i:any) => (
                <button key={i} onClick={()=>setCartItem({...cartItem,color:items})} className="border-2 border-gray-300 active:border-black mr-1 rounded-full w-6 h-6 focus:outline-none focus:border-black" style={{ background: items }} />
              ))}
            </div>
            {/* Size */}
            <div className="flex ml-6 items-center">
            <span className="mr-3 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead">Size</span>
<label className="form-control w-full max-w-xs">
  <select
    onChange={(e) => setCartItem({ ...cartItem, size: e.target.value })}
    className="select select-bordered"
  >
    <option value="" disabled selected>
      Select Size
    </option>
    {slug[0].size.map((item: any, i: any) => (
      <option key={i} value={item}>
        {item}
      </option>
    ))}
  </select>
</label>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <span className=" scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead">Quantity</span>

            <Button onClick={()=>setCartItem({...cartItem,qty:cartItem.qty<=1?1:--cartItem.qty,})} className='mt-2 group bg-myBlackhead hover:bg-transparent text-myWhite  hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit'>
              <FaMinus className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />
              Less
            </Button>
            <div className='mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackhead'>{cartItem.qty}</div>
            <Button onClick={()=>setCartItem({...cartItem,qty:++cartItem.qty})} className='mt-2 group bg-myBlackhead hover:bg-transparent text-myWhite  hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit'>
              <FaPlus className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />
              Plus
            </Button>
          </div> 


          <div className="flex w-full flex-col">
            <div className="divider"></div>
            {/* Price */}
            <div className="flex items-center">
              <div>
                <span className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackhead ${cartItem.discount > 0 && "line-through decoration-2 decoration-myOrange/70"}`}>${cartItem.price * cartItem.qty}
                </span>
                {/* discount value */}
                {cartItem.discount > 0 && (
                  <span className='ml-3 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackhead'>${(cartItem.price - (cartItem.price * cartItem.discount) / 100)*cartItem.qty }
                </span>)}
              </div>
              <AddToCartComponent cartitem={cartItem} />
            </div>
            <Button className='mt-2 w-full group bg-myBlackhead hover:bg-transparent text-myWhite  hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl'>
              <FaHeart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />
              But Now
            </Button>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Slugpage
