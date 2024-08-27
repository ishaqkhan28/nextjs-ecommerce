'use client'
import React from 'react'
import BestsellingCard from '@/components/addtocard/BestsellingCard'
import { useAppSelector } from '@/app/store/hooks'
import Products from '@/app/utils/Mock';


function Bestselling() {
    const product = useAppSelector((state => state.product));
    const bestseling = Products.slice(0, 3);
    return (
        <div className='mb-[100px] mt-[100px] '>
            {/* Heading */}
            <div className="text-center mb-20">
                <h1 className="text-myBlackhead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">Best Selling Product</h1>
                <div className="flex mt-2 justify-center">
                    <div className="w-16 h-1 rounded-full bg-myOrange inline-flex"></div>
                </div>
                <div className='flex flex-wrap justify-center gap-5'>
                    {
                        bestseling.map((items: any, i: any) => (
                            <BestsellingCard key={i}
                                src={items.image[0]}
                                alt={items.title}
                                title={items.title}
                                discription={items.discription}
                                price={items.price} category={items.category} slug={items.slug} discount={items.discount} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Bestselling
