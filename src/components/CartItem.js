import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io'
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
  const {id, title, image, price, amount} = item
  
  return <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      <Link to={`/product/${id}`}>
        <img className='max-w-[80px]' src={image} alt="" />
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline dark:text-white md:text-[18px]'>
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition dark:text-white' />
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm'>
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
            <div onClick={() => decreaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer '>
            <IoMdRemove className='dark:text-white xxxl:text-[24px]' />
            </div>
            <div className='h-full flex justify-center items-center px-2 dark:text-gray-100 md:text-[18px] xxxl:text-[22px]'>{amount}</div>
             <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
            <IoMdAdd className='dark:text-white xxxl:text-[24px]' />
            </div>
            </div>
            <div className='flex-1 flex items-center justify-around font-primary font-normal dark:text-gray-100 md:text-[18px] xxxl:text-[24px]'>${price}</div>
            <div className='flex-1 flex justify-end items-center text-primary font-medium dark:text-gray-200 md:text-[18px] xxxl:text-[24px]'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>

          </div>
        </div>
    </div>
  </div>;
};

export default CartItem;
