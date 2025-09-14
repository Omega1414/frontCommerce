// src/components/Product.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryItems from './galleryData';
import './Product.css'; // Import the CSS file

const Product = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const GalleryItem = ({ item, index }) => {
    const isHovered = hoveredIndex === index;

    // Animation variants for the container
    const containerVariants = {
      initial: { scale: 1, rotate: 0, opacity: 1 },
      hover: { 
        scale: 1.02, 
        rotate: 0.5, 
        transition: { 
          duration: 0.7, 
          ease: [0.4, 0, 0.2, 1]
        }
      }
    };

    // Animation variants for images
    const imageVariants = {
      initial: { opacity: 1 },
      hover: { opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }
    };

    const secondImageVariants = {
      initial: { opacity: 0 },
      hover: { opacity: 1, transition: { duration: 0.7, ease: 'easeInOut' } }
    };

    // Animation variants for gradient overlay
    const gradientVariants = {
      initial: { opacity: 0.3 }, // Reduced initial opacity for better shadow visibility
      hover: { opacity: 0.7, transition: { duration: 0.5, ease: 'easeInOut' } }
    };

    // Animation variants for text content
    const textVariants = {
      initial: { y: 20, opacity: 1 },
      hover: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } }
    };

    const descriptionVariants = {
      initial: { y: 30, opacity: 0, maxHeight: 0 },
      hover: { 
        y: 0, 
        opacity: 1, 
        maxHeight: 80, 
        transition: { duration: 0.7, ease: 'easeOut' } 
      }
    };

    // Animation variants for border
    const borderVariants = {
      initial: { scale: 1, opacity: 0 },
      hover: { scale: 0.95, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }
    };

    return (
      <motion.div
        className="gallery-item group relative overflow-hidden cursor-pointer"
        data-index={index}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        variants={containerVariants}
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
        style={{ transitionDelay: `${index * 0.1}s` }}
      >
        <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
          {/* Image Wrapper */}
          <div className="w-full h-full relative">
            {/* First Image */}
            <motion.img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
              variants={imageVariants}
              loading="lazy"
            />

            {/* Second Image on Hover */}
            <motion.img
              src={item.image2}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
              variants={secondImageVariants}
              loading="lazy"
            />
          </div>

          {/* Gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            variants={gradientVariants}
          />

          {/* Text Content */}
  <motion.div
  className="absolute inset-0 flex flex-col justify-end text-white"
>
  {/* Text background overlay */}
  <motion.div
    className="absolute bottom-0 left-0 w-full h-1/4 bg-black z-0"
    variants={{
      initial: { opacity: 0.1 },
      hover: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
    }}
  />

  {/* Text Content */}
  <div className="relative z-10 p-8">
    <motion.div variants={textVariants}>
      <div className="h-[1px] bg-white text-gray-200 w-12 mb-3"></div>
      <p className="text-sm font-normal uppercase tracking-wider mb-2 ">
        {item.subtitle}
      </p>
    </motion.div>

    <motion.h3
      className="text-2xl md:text-3xl font-normal text-gray-100 mb-2 "
      variants={textVariants}
    >
      {item.title}
    </motion.h3>

    <AnimatePresence>
      {isHovered && (
        <motion.p
          className="text-sm leading-relaxed max-w-md"
          variants={descriptionVariants}
          initial="initial"
          animate="hover"
          exit="initial"
        >
          {item.description}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
</motion.div>


          {/* Border on Hover */}
          <motion.div
            className="absolute inset-0 border-2 border-white"
            style={{ borderRadius: '8px' }}
            variants={borderVariants}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="h-[2px] bg-black dark:bg-gray-200 w-24 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-black dark:text-gray-200">
            Visual <span className="font-semibold">Stories</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed">
            Every image tells a story, every moment captures an emotion. 
            Explore our collection of curated visuals that speak to the soul and inspire the imagination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-20 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-light mb-6 text-black dark:text-gray-200">
              Where <span className="font-semibold">Art Meets Life</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-200 text-lg leading-relaxed">
              In every captured moment lies an infinite universe of possibilities. 
              These images are not just photographs—they are windows into worlds of emotion, 
              creativity, and human connection.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Product;