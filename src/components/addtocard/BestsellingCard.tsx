import React from 'react'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";
import Link from 'next/link';
import Bestsellingaddtocart from './Bestsellingaddtocart';
import { Button } from '../ui/button';
const BestsellingCard = ({ src, alt, title, discription, price, category, slug, discount, }: {
    src: string,
    alt: string,
    title: string,
    discription: string,
    price: number,
    category: string,
    slug: any,
    discount: number
}) => {
    return (
        <div className='mb-[100px] mt-[100px]' >
            {/* Best Sellings */}
            <div className="max-w-[350px] h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
                <Link href={`/${category}/${slug}`}>
                    {/* image */}
                    <div className='block h-[23rem] rounded overflow-hidden'>
                        <Image
                            src={src}
                            alt="car!" width={400} height={400} />
                    </div>
                    {/* typography */}
                    <div className=" mt-4">
                        {title && (<h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0 text-myBlackhead line-clamp-1">{title}</h2>)}
                        {discription && (<p className='mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackpara line-clamp-1'>{discription}</p>)}

                        {price && (
                            <div className='flex gap-3'>
                                <p className={`mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackpara line-clamp-1 ${discount > 0 && "line-through decoration-2 decoration-myOrange/70"}`}>
                                    ${price}</p>
                                {discount > 0 && (<p className='mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackpara line-clamp-1'>${price - (price * discount) / 100}</p>)}</div>)}
                    </div>
                </Link>
                {/* button div */}
                <div className='absolute bottom-2 right-2'>
                    <Bestsellingaddtocart slug={slug} />
                </div>
                <div >

                    <Button className='group bg-myBlackhead hover:bg-transparent text-myWhite  hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2 px-4 py-2'>
                        <FaHeart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />
                        Buy Now
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default BestsellingCard
