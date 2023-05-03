import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../pages/ProductContext';
import { CartContext } from './CartContext';
import { MapInteractionCSS } from 'react-map-interaction';
import { toast } from 'react-toastify';
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
  return <section className='my-[200px]  lg:my-[100px] py-0 xl:my-0 h-screen flex items-center dark:bg-gray-700 '>
    <div className="container mx-auto ">
    <div className='flex flex-col lg:flex-row items-center '>
   
    <div className='flex flex-1 justify-center items-center mb-12 mt-12   lg:mb-0 '>
    <MapInteractionCSS>
      <img className='sm:w-[300px] md:w-[350px] lg:max-w-[300px] lg:ml-[50%] xxxl:ml-[100%]' src={image} alt="" />
      </MapInteractionCSS>
    </div>
      <div className='flex-1 text-center lg:text-left '>
        <h1 className='text-[38px] font-medium mb-2 max-w-[450px] mx-auto md:text-[30px] lg:mx-0 xl:text-[28px] xxl:text-[32px] xxxl:text-[42px] dark:text-gray-300'>{title}</h1>
        <div className='text-[38px] text-red-500 font-medium mb-6 xl:text-[27px] xxl:text-[29px] xxxl:text-[36px] dark:text-red-500'>$ {price}</div>
        <p className='mb-8 text-[23px]  lg:text-[18px] xl:text-[18px] xxl:text-[23px] xxxl:text-[34px] xxl:leading-7 xxxl:leading-9 dark:text-gray-200'>{description}</p>
        <button onClick={() => {
          addToCart(product, product.id)
         toast.success("Successfully added")}
         } className='bg-primary py-4 px-8 text-white text-[38px] md:text-[26px] xl:text-[20px] xxl:text-[22px] xxxl:text-[26px] xxxl:py-8 xxxl:px-16 dark:bg-gray-200 dark:text-black'>Add to cart</button>
      </div>
      </div>
    </div>
  
  </section>;
};

export default ProductDetails;
