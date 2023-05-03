import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg'

const Header = ({theme, setTheme, handleThemeSwitch}) => {
  const [isActive, setIsActive] = useState(false)
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-gray-100 dark:bg-gray-900 py-4 shadow-md ' : 'bg-none py-6'} fixed w-full z-10 transition-all `}>
    <div className='container mx-auto flex items-center justify-between h-full'>
    <Link to={'/'}>
        <div >
          <img className='w-[40px] md:w-[45px]  lg:w-[50px] xl:w-[40px]  xxxl:w-[60px] ml-1' src={Logo} alt="" />
        </div>
      </Link>
      <div>
      <button onClick={handleThemeSwitch}>
                        {theme === "light" ? 
                        <svg
                        v-if="dark"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4.5 w-5 md:h-9.6 md:w-10"
                        viewBox="0 0 20 20"
                        fill="black"
                      >
                        <path
                          d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                        />
                      </svg>
                      :
                      <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4.5 w-5  md:h-9.6 md:w-10"
                      viewBox="0 0 20 20"
                      fill="white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    }
   
  
  </button>
      </div>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative mr-3'>
        <BsBag  className='text-[30px] md:text-[50px] lg:text-[50px] xl:text-[30px]  xxxl:text-[60px] dark:text-white' />
        <div className='bg-red-500 absolute -right-1 sm:-right-1 md:-right-1 lg:-right-1 xl:-right-1 -bottom-2 xxl:-bottom-1 xxxl:-bottom-2 text-[12px] md:text-[22px] lg:text-[22px] w-[18px] h-[18px] md:w-[30px] md:h-[30px] lg:w-[23px] lg:h-[23px] text-white rounded-full flex justify-center items-center xl:text-[16px] xl:w-[20px] xl:h-[20px]  xxxl:text-[28px] xxxl:w-[34px] xxxl:h-[34px]'>
        {itemAmount}
        </div>
      </div>
    
    </div>
    </header>
  )
};

export default Header;
