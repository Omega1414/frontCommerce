import React from 'react';
import WomanImg from '../img/woman_hero.png'


const Hero = () => {
  return <section className='h-[500px] lg:h-[800px] bg-lightImg bg-no-repeat bg-cover  bg-center py-24 '>
    <div className="container mx-auto flex justify-around h-full">
      <div className='flex flex-col justify-center'>
        <div className='font-semibold flex items-center uppercase flex-col '>
          <div className='w-10 h-[2px] bg-red-500 mr-3'> </div> <div className='animatecss animatecss-fadeInLeft 	animatecss-slow '>New Trend</div> 
          <h1 className='text-[30px] md:text-[50px] lg:text-[70px] leading-[1.1] font-light mb-4 py-3 lg:py-0 animatecss animatecss-fadeIn 	animatecss-slow   '>
            AUTUMN SALE STYLISH <br />
            <span className='font-semibold'>WOMENS</span>
          </h1>
          <a  href='#home'  className=' uppercase font-semibold border-b-2 border-primary animatecss animatecss-fadeInRight 	animatecss-slow '>
            Discover more
          </a>
        </div>
      </div>
      <div className='hidden lg:block'>
        <img src={WomanImg} alt="" />
      </div>
    </div>
  </section>;
};

export default Hero;
