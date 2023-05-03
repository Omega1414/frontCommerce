import React, { useContext } from 'react';
import { Link} from 'react-router-dom'
import {BsPlus, BsEyeFill} from 'react-icons/bs' 
import { CartContext } from '../contexts/CartContext';
import { toast } from 'react-toastify';

const Product = ({product}) => {
  const {addToCart} = useContext(CartContext)
  const {id, image, category, title, price} = product
  return <div >
  <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition dark:bg-white'>
    <div className='w-full h-full flex justify-center items-center '>
    <div className='w-[200px] mx-auto flex justify-center items-center  '>
      <img className='max-h-[160px] group-hover:scale-110 transition duration-300 ' src={image} alt="" />
    </div>
    </div>
    <div className='absolute top-6 lg:-right-11 lg:group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 lg:opacity-0 lg:group-hover:opacity-100  transition-all duration-300'>
      <button onClick={ () => {
        addToCart(product, id)
        toast.success("Successfully added")}
        }>
        <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
          <BsPlus className='text-3xl' />
        </div>
      </button>
      <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'><BsEyeFill /></Link>
    </div>
  </div>

    <div>
     <div className='text-sm capitalize xxl:text-xl text-gray-500 mb-1 dark:text-gray-200 sm:text-[23px] lg:text-[14px]'>{category}</div>
     <Link to={`/product/${id}`}>
      <h2 className='font-semibold mb-1 dark:text-gray-200 sm:text-[26px] md:text-[20px] lg:text-[16px] xxl:text-[18px]'>{title}</h2>
     </Link>
    
      <div className='font-semibold dark:text-gray-200 sm:text-[28px] md:text-[24px] lg:text-[16px]  xxl:text-[18px]'>$ {price}</div>
    </div>
     
  </div>;
};

export default Product;
