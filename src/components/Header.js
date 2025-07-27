import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { HiOutlineMenu, HiOutlineArrowNarrowLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import categories from './Categories';

const Header = ({ theme, setTheme, handleThemeSwitch }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [displayCategory, setDisplayCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubcategory, setMobileSubcategory] = useState(null);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (category) => {
    if (category.subcategories.length === 0) {
      setActiveCategory(null);
      setDisplayCategory(null);
      return;
    }
    if (!activeCategory) {
      setActiveCategory(category);
      setDisplayCategory(category);
    } else {
      setDisplayCategory(category);
    }
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
    setDisplayCategory(null);
  };

  return (
    <>
      <header
        className={`fixed w-full z-30 transition-all ease-in-out duration-500
          ${isActive
            ? theme === 'light'
              ? 'bg-gray-100 py-4 shadow-md bg-opacity-80'
              : 'bg-gray-900 py-4 shadow-md bg-opacity-80'
            : theme === 'light'
              ? 'bg-gray-100 py-4 shadow-md bg-opacity-10'
              : 'bg-gray-900 py-4 shadow-md bg-opacity-10'
          }
        `}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`container mx-auto flex items-center justify-between h-full px-4 relative z-40
            transition-colors duration-100
            ${
              isActive
                ? theme === 'light'
                  ? 'text-gray-900'
                  : 'text-white'
                : activeCategory 
                ? theme === "light" ? "text-gray-900" : "text-white"
                : "text-white"
            }
          `}
        >
          <Link to="/">
            <div className="text-2xl lg:text-3xl font-extrabold tracking-tight select-none font-primary">
              Fabriza
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 relative">
            {categories.map((category) => (
              <div
                key={category.path}
                className="relative"
                onMouseEnter={() => handleMouseEnter(category)}
              >
                <Link
                  to={category.path}
                  className={`hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 ${
                    isActive && theme === 'light' ? 'text-gray-900' : ''
                  }`}
                >
                  {category.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4 z-30">
            {/* Theme Switch */}
            <button
              onClick={handleThemeSwitch}
              className={`hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 ${
                isActive && theme === 'light' ? 'text-gray-900' : ''
              }`}
            >
              {theme === 'light' ? (
                <IoMoon className="w-5 h-5 lg:w-6 lg:h-6" />
              ) : (
                <IoSunny className="w-5 h-5 lg:w-6 lg:h-6" />
              )}
            </button>

            {/* Cart */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`relative cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 ${
                isActive && theme === 'light' ? 'text-gray-900' : ''
              }`}
            >
              <BsBag className="w-5 h-5 lg:w-6 lg:h-6" />
              {itemAmount > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {itemAmount}
                </div>
              )}
            </div>

            {/* User */}
            <button
              onClick={() => toast.info('Login is not available yet.', { autoClose: 2000 })}
              className={`hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 ${
                isActive && theme === 'light' ? 'text-gray-900' : ''
              }`}
            >
              <FaUser className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Hamburger */}
            <button
              className={`lg:hidden ${
                isActive && theme === 'light' ? 'text-gray-900' : 'dark:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <HiOutlineMenu className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Mega Dropdown */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full z-10"
            onMouseEnter={() => {
              setActiveCategory(activeCategory);
              setDisplayCategory(displayCategory);
            }}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full bg-white dark:bg-gray-800 shadow-lg">
              <div className="h-[96px] w-full" />
              <div className="container mx-auto py-4 px-2 sm:py-6 sm:px-4 min-h-[280px]">
                <AnimatePresence mode="wait" initial={false}>
                  {displayCategory && (
                    <motion.div
                      key={displayCategory.path}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-wrap justify-between gap-y-8 px-2 sm:px-4"
                    >
                      {displayCategory.subcategories.map((subcategory) => (
                        <div
                          key={subcategory.path}
                          className="flex gap-4 w-full sm:w-[48%] lg:w-[31%] xl:w-[23%] max-w-[300px]"
                        >
                          <img
                            src={subcategory.image}
                            alt={`${subcategory.name} preview`}
                            className="w-3/4 h-60 sm:w-36 sm:h-72 lg:w-40 lg:h-80 object-cover rounded-md"
                            onError={() => console.error(`Failed to load image: ${subcategory.image}`)}
                            loading="lazy"
                          />
                          <div className="flex flex-col justify-start">
                            <Link
                              to={subcategory.path}
                              className="font-semibold text-base sm:text-lg text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                            >
                              {subcategory.name}
                            </Link>
                            {subcategory.nested && subcategory.nested.length > 0 && (
                              <div className="mt-2 space-y-1 sm:space-y-2 w-[130px]">
                                {subcategory.nested.map((nested) => (
                                  <Link
                                    key={nested.path}
                                    to={nested.path}
                                    className="block text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
                                  >
                                    {nested.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white dark:bg-gray-900 shadow-lg z-50 p-4 overflow-y-auto"
          >
            {/* Close */}
            <button
              className="mb-4 text-gray-800 dark:text-white"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setMobileSubcategory(null);
              }}
            >
              ✕
            </button>

            {/* Ana kateqoriyalar */}
            {!mobileSubcategory && (
              <div className="space-y-4">
                {categories.map((cat) => (
                  <div key={cat.path}>
                    <div
                      className="flex justify-between items-center cursor-pointer text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                      onClick={() =>
                        cat.subcategories.length > 0
                          ? setMobileSubcategory(cat)
                          : setIsMobileMenuOpen(false)
                      }
                    >
                      <Link to={cat.path}>{cat.name}</Link>
                      {cat.subcategories.length > 0 && <HiOutlineChevronRight />}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Subcategory görünüşü */}
            {mobileSubcategory && (
              <div>
                <div
                  className="flex items-center gap-2 mb-4 cursor-pointer text-gray-800 dark:text-white"
                  onClick={() => setMobileSubcategory(null)}
                >
                  <HiOutlineArrowNarrowLeft />
                  <span>Back</span>
                </div>

                <div className="space-y-4">
                  {mobileSubcategory.subcategories.map((sub) => (
                    <div key={sub.path}>
                      <div className="flex justify-between items-center cursor-pointer text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                        <Link
                          to={sub.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                        {sub.nested && sub.nested.length > 0 && <HiOutlineChevronRight />}
                      </div>

                      {sub.nested && sub.nested.length > 0 && (
                        <div className="ml-4 mt-2 space-y-2">
                          {sub.nested.map((nested) => (
                            <Link
                              key={nested.path}
                              to={nested.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                            >
                              {nested.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
