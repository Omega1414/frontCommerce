import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../pages/ProductContext';
import { CartContext } from './CartContext';

const ProductDetails = () => {
  const {id} = useParams()
  const {products} = useContext(ProductContext)
  const {addToCart} = useContext(CartContext)
  const product = products.find((item) => {
    return item.id === parseInt(id)
  })
  if(!product){
    return <section className='h-screen flex justify-center items-center'>Loading...</section>
  }
  const {title, price, description, image} = product
  return <section className='my-32 xl:my-0 lg:py-32  h-screen flex items-center'>
    <div className="container mx-auto">
    <div className='flex flex-col lg:flex-row items-center'>
    <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
      <img className='max-w-[200px] lg:max-w-sm' src={image} alt="" />
    </div>
      <div className='flex-1 text-center lg:text-left '>
        <h1 className='text-[20px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 xl:text-[28px] xxl:text-[32px] xxxl:text-[42px]'>{title}</h1>
        <div className='text-xl text-red-500 font-medium mb-6 xl:text-[27px] xxl:text-[29px] xxxl:text-[36px]'>$ {price}</div>
        <p className='mb-8 text-sm lg:text-[16px] xl:text-[18px] xxl:text-[23px] xxxl:text-[34px] xxl:leading-7 xxxl:leading-9'>{description}</p>
        <button onClick={() => addToCart(product, product.id)} className='bg-primary py-4 px-8 text-white text-sm xl:text-[20px] xxl:text-[22px] xxxl:text-[26px] xxxl:py-8 xxxl:px-16'>Add to cart</button>
      </div>
    </div>
    </div>
  </section>;
};

export default ProductDetails;
