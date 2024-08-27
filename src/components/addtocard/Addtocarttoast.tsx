'use client'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../ui/button';
import { useAppDispatch } from '@/app/store/hooks';
import { Addtocart } from "@/app/store/features/Card";  // Correct import if this is the action

const AddToCartComponent = ({ cartItem }: any) => {  // Renamed to avoid conflict
  const dispatch = useAppDispatch();

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
    <>
      <div className="w-fit" onClick={() => dispatch(Addtocart(cartItem))}>
        <Button onClick={notify}
          className='group bg-myBlackhead hover:bg-transparent text-myWhite hover:text-myBlackhead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl px-4 py-2 ml-36'>
          <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300' />
          Add to Cart
        </Button>
      </div>
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
    </>
  );
}

export default AddToCartComponent;  // Renamed export

