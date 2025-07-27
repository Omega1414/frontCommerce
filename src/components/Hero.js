import React from 'react';
import maleImg from "../img/26.webp";
import femaleImg from "../img/27.webp";

const Hero = () => {
  return (
    <section className="h-screen w-screen relative flex justify-center items-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full">
   <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
  <img
    src={femaleImg}
    alt="Female Model"
    className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out md:scale-100 scale-125"
    style={{ transformOrigin: 'top center' }} 
    loading='lazy'
  />
</div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full">
          <img
            src={maleImg}
            alt="Male Model"
            className="w-full h-full object-cover object-top"
            loading='lazy'
          />
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="container mx-auto flex justify-center items-center h-full relative w-full">
        <div className="flex flex-col justify-center items-center text-center text-white w-full h-full relative px-4">
          <div className="hidden md:flex flex-col items-center ">
            <div className="h-[2px] bg-white w-full max-w-[100px] mb-1"></div>
            <div className="uppercase font-semibold animatecss animatecss-fadeInLeft animatecss-slow">
              New Trend
            </div>

            {/* Heading */}
            <h1 className="text-[50px] lg:text-[70px] leading-[1.1] font-light mb-4 animatecss animatecss-fadeIn animatecss-slow">
              Stylish Summer Sale  <br />
              <span className="font-semibold">FEEL THE SUN</span>
            </h1>

          {/* Shop Men & Shop Women links side by side */}
<div className="flex justify-around space-x-10 w-full max-w-[300px]">
  <a
    href="#men"
    className="uppercase font-semibold border-b-2 border-white animatecss animatecss-fadeInLeft animatecss-slow
      hover:text-gray-300 hover:border-gray-300 transition-colors duration-500 ease-in-out ml-7"
  >
    Shop Men
  </a>
  <a
    href="#women"
    className="uppercase font-semibold border-b-2 border-white animatecss animatecss-fadeInRight animatecss-slow
      hover:text-gray-300 hover:border-gray-300 transition-colors duration-500 ease-in-out "
  >
    Shop Women
  </a>
</div>

          </div>
          <a
            href="#men"
            className="md:hidden uppercase font-semibold border-b-2 border-white animatecss animatecss-fadeInLeft animatecss-slow absolute right-4 bottom-[55%]"
          >
            Shop Men
          </a>

     

          {/* --- Mobile: Heading --- */}
          <h1 className="md:hidden text-[26px] leading-[1.1] font-light mb-0 py-3 animatecss animatecss-fadeIn animatecss-slow">
            Stylish Summer Sale  <br />
            <span className="font-semibold">FEEL THE SUN</span>
          </h1>
          <a
            href="#women"
            className="md:hidden uppercase font-semibold border-b-2 border-white animatecss animatecss-fadeInRight animatecss-slow absolute bottom-6 left-4"
          >
            Shop Women
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
