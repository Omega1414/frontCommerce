// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebookF, FaInstagram, FaTwitter, FaMoon, FaSun } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// const Footer = ({ theme }) => {
//   const isDarkMode = theme === 'dark';

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, staggerChildren: 0.1 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -10 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
//   };

//   const buttonVariants = {
//     hover: { scale: 1.05, transition: { duration: 0.2 } },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <footer className={`w-full py-12 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Logo and Newsletter Signup */}
//         <div className="flex flex-col md:flex-row justify-between items-center mb-12">
//           <Link to="/">
//             <motion.div
//               className="text-2xl lg:text-3xl font-extrabold tracking-tight select-none font-primary"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.2 }}
//             >
//               Fabriza
//             </motion.div>
//           </Link>
//           <motion.div
//             className="mt-6 md:mt-0"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h3 className="text-lg font-semibold">Sign Up & Get 20% Off</h3>
//             <p className="mt-2 text-sm">Join our newsletter for exclusive offers and updates!</p>
//             <div className="mt-4 flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className={`px-4 py-2 rounded-l-md border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
//               />
//               <motion.button
//                 className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 Subscribe
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>

//         {/* Footer Links */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
//           variants={sectionVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Shop Section */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Shop</h4>
//             <ul className="space-y-2">
//               {[
//                 { to: '/collections/men', label: "Men's Clothing" },
//                 { to: '/collections/women', label: "Women's Clothing" },
//                 { to: '/collections/accessories', label: 'Accessories' },
//                 { to: '/collections/new-arrivals', label: 'New Arrivals' },
//                 { to: '/collections/sale', label: 'Sale' },
//               ].map((item) => (
//                 <motion.li key={item.to} variants={itemVariants}>
//                   <Link to={item.to} className="hover:underline hover:text-blue-500 transition-colors">
//                     {item.label}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {/* Customer Service Section */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
//             <ul className="space-y-2">
//               {[
//                 { to: '/help', label: 'Help Center' },
//                 { to: '/shipping', label: 'Shipping & Delivery' },
//                 { to: '/returns', label: 'Returns & Exchanges' },
//                 { to: '/track-order', label: 'Track Your Order' },
//                 { to: '/contact', label: 'Contact Us' },
//               ].map((item) => (
//                 <motion.li key={item.to} variants={itemVariants}>
//                   <Link to={item.to} className="hover:underline hover:text-blue-500 transition-colors">
//                     {item.label}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {/* Company Section */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Company</h4>
//             <ul className="space-y-2">
//               {[
//                 { to: '/about', label: 'About Fabriza' },
//                 { to: '/careers', label: 'Careers' },
//                 { to: '/sustainability', label: 'Sustainability' },
//                 { to: '/store-directory', label: 'Store Directory' },
//                 { to: '/press', label: 'Press & Media' },
//               ].map((item) => (
//                 <motion.li key={item.to} variants={itemVariants}>
//                   <Link to={item.to} className="hover:underline hover:text-blue-500 transition-colors">
//                     {item.label}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {/* Policies Section */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Policies</h4>
//             <ul className="space-y-2">
//               {[
//                 { to: '/privacy-policy', label: 'Privacy Policy' },
//                 { to: '/terms-conditions', label: 'Terms & Conditions' },
//                 { to: '/cookie-policy', label: 'Cookie Policy' },
//                 { to: '/accessibility', label: 'Accessibility' },
//                 { to: '/promotions', label: 'Promotions & Offers' },
//               ].map((item) => (
//                 <motion.li key={item.to} variants={itemVariants}>
//                   <Link to={item.to} className="hover:underline hover:text-blue-500 transition-colors">
//                     {item.label}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         {/* Social Media and Dark Mode Toggle */}
//         <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t pt-8">
//           <div className="flex space-x-4">
//             <motion.div
//               whileHover={{ scale: 1.2, color: '#3b5998' }}
//               transition={{ duration: 0.2 }}
//             >
//               <FaFacebookF className="w-6 h-6" />
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.2, color: '#E1306C' }}
//               transition={{ duration: 0.2 }}
//             >
//               <FaInstagram className="w-6 h-6" />
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.2, color: '#1DA1F2' }}
//               transition={{ duration: 0.2 }}
//             >
//               <FaTwitter className="w-6 h-6" />
//             </motion.div>
//           </div>
        
//         </div>

//         {/* Copyright */}
//         <motion.div
//           className="mt-8 text-center text-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//         >
//           <p>&copy; {new Date().getFullYear()} Fabriza. All rights reserved.</p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;