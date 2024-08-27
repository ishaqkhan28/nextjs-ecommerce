'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestsellingCard from '@/components/addtocard/BestsellingCard';
import { useAppSelector } from '@/app/store/hooks';

const Featureproduct = () => {
  // my data
  const bestseling = useAppSelector((state => state.product))

  // carousel setting
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  };
  return (
    <div className='mb-[100px] mt-[100px] '>
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackhead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl uppercase text-center">Feature Product</h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex"></div>
        </div>
      </div>
      {/* carousel */}
      <Slider {...settings}>
        {
          bestseling.map((items: any, i: any) => (
            <BestsellingCard key={i}
              src={items.image[0]}
              alt={items.tittle}
              title={items.tittle}
              discription={items.discription}
              price={items.price} category={items.category} slug={items.slug} discount={items.discount} />
          ))
        }
      </Slider>
    </div>
  )
}

export default Featureproduct
