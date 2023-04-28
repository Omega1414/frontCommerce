import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md ' : 'bg-none py-6'} fixed w-full z-10 transition-all `}>
    <div className='container mx-auto flex items-center justify-between h-full'>
    <Link to={'/'}>
        <div >
          <img className='w-[40px] md:w-[45px]  lg:w-[50px] xl:w-[40px]  xxxl:w-[60px] ml-1' src={Logo} alt="" />
        </div>
      </Link>
  
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative mr-3'>
        <BsBag  className='text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px]  xxxl:text-[60px]' />
        <div className='bg-red-500 absolute -right-1 sm:-right-1 md:-right-1 lg:-right-1 xl:-right-1 -bottom-2 xxl:-bottom-1 xxxl:-bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center xl:text-[16px] xl:w-[20px] xl:h-[20px]  xxxl:text-[28px] xxxl:w-[34px] xxxl:h-[34px]'>
        {itemAmount}
        </div>
      </div>
    </div>
    </header>
  )
};

export default Header;
