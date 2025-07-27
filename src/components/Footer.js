import React, { useState } from 'react';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube,
  FaTiktok, FaPinterest, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaCreditCard, FaPaypal, FaApplePay, FaGooglePay, FaCcMastercard,
  FaCcVisa, FaCcAmex, FaTruck, FaUndo, FaShieldAlt, FaGift,
 FaClock, FaHeadset, FaChevronRight,
  FaHeart
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = ({ theme }) => {
  const [email, setEmail] = useState('');
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const isDark = theme === 'dark';

  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = isDark ? 'text-gray-300' : 'text-gray-600';
  const titleClass = isDark ? 'text-white' : 'text-gray-900';
  const borderClass = isDark ? 'border-gray-700' : 'border-gray-200';
  const hoverClass = isDark ? 'hover:text-white' : 'hover:text-gray-900';

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const socialLinks = [
    { icon: FaFacebookF },
    { icon: FaInstagram },
    { icon: FaTwitter },
    { icon: FaLinkedinIn },
    { icon: FaYoutube },
    { icon: FaTiktok },
    { icon: FaPinterest }
  ];

  const paymentMethods = [
    { icon: FaCcVisa },
    { icon: FaCcMastercard },
    { icon: FaCcAmex },
    { icon: FaPaypal },
    { icon: FaApplePay },
    { icon: FaGooglePay }
  ];

  const footerSections = [
    {
      title: 'Shop',
      links: ['New Arrivals', 'Best Sellers', 'New Collection', 'Summer Collection', 'Accessories', 'Sale Items', 'Gift Cards', 'Collections']
    },
    {
      title: 'Customer Service',
      links: ['Contact Us', 'Size Guide', 'Shipping Info', 'Returns', 'Track Your Order', 'FAQ', 'Live Chat', 'Product Care']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Sustainability', 'Our Story', 'Brand Partners', 'Investor Relations', 'Responsibility']
    },
    {
      title: 'Store Services',
      links: ['Store Locator', 'Personal Shopping', 'Alterations', 'Style Consultation', 'VIP Membership', 'Store Events', 'Appointment', 'In-Store Pickup']
    }
  ];

  return (
    <footer className={`${bgClass} pt-16 pb-8 transition-colors duration-300`}>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${borderClass}`}>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <FaGift className="text-3xl text-red-500 mr-3 animate-bounce" />
              <h3 className={`text-3xl font-bold ${titleClass}`}>Get 20% Off Your First Order!</h3>
            </div>
            <p className={`${textClass} text-lg mb-6`}>Join our exclusive newsletter and unlock amazing deals</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className={`flex-1 px-4 py-3 rounded-lg border ${borderClass} ${isDark ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`} />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">Sign Up & Save</button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{ icon: FaTruck, title: 'Free Shipping', desc: 'On orders over $75.' }, { icon: FaUndo, title: 'Easy Returns', desc: '30-day return policy.' }, { icon: FaShieldAlt, title: 'Secure Shopping', desc: 'SSL encryption.' }].map((item, i) => (
          <motion.div key={i} custom={i} variants={fadeUp} className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-md border ${borderClass}`}>
            <div className="flex items-center mb-3">
              <item.icon className="text-2xl text-blue-500 mr-3" />
              <h4 className={`font-bold ${titleClass}`}>{item.title}</h4>
            </div>
            <p className={`${textClass} text-sm`}>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2">
            <h2 className={`text-3xl font-bold ${titleClass} mb-4`}>Fabriza</h2>
            <p className={`${textClass} mb-6`}>Elevating your style with premium fashion.</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center"><FaPhone className={`${textClass} mr-3`} /><span className={`${textClass}`}>1-800-FABRIZA</span></div>
              <div className="flex items-center"><FaEnvelope className={`${textClass} mr-3`} /><span className={`${textClass}`}>support@fabriza.com</span></div>
              <div className="flex items-center"><FaMapMarkerAlt className={`${textClass} mr-3`} /><span className={`${textClass}`}>New York, NY</span></div>
              <div className="flex items-center"><FaClock className={`${textClass} mr-3`} /><span className={`${textClass}`}>Mon-Fri: 9AM-8PM</span></div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <div key={index} onMouseEnter={() => setHoveredSocial(index)} onMouseLeave={() => setHoveredSocial(null)} className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 cursor-pointer ${hoveredSocial === index ? 'shadow-lg' : ''}`}>
                  <social.icon className="text-lg" />
                </div>
              ))}
            </div>
          </motion.div>

          {footerSections.map((section, sectionIndex) => (
            <motion.div key={sectionIndex} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-1">
              <h3 className={`font-bold ${titleClass} mb-4`}>{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button onMouseEnter={() => setHoveredLink(`${sectionIndex}-${linkIndex}`)} onMouseLeave={() => setHoveredLink(null)} className={`${textClass} ${hoverClass} transition-all duration-300 flex items-center group`}>
                      <span>{link}</span>
                      <FaChevronRight className={`ml-2 text-xs transition-transform duration-300 ${hoveredLink === `${sectionIndex}-${linkIndex}` ? 'translate-x-1' : ''}`} />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 mb-8 border ${borderClass}`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <FaHeadset className="text-3xl text-blue-500 mr-4" />
              <div>
                <h4 className={`font-bold ${titleClass} text-lg`}>Need Help? We're Here 24/7</h4>
                <p className={`${textClass}`}>Chat with our style experts or call for assistance</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">Live Chat</button>
              <button className={`border ${borderClass} ${textClass} px-6 py-3 rounded-lg font-semibold ${hoverClass} transition-colors duration-300`}>Call Us</button>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`border-t ${borderClass} pt-8 mb-8`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className={`font-semibold ${titleClass} mb-3`}>We Accept</h4>
              <div className="flex space-x-4">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="w-10 h-8 sm:w-12 sm:h-10 lg:w-16 lg:h-12 cursor-pointer bg-white dark:bg-gray-800 dark:text-gray-200 text-black rounded flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-gray-300">
                    <method.icon className="text-xl lg:text-3xl" />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <h4 className={`font-semibold ${titleClass} mb-3`}>Secure & Trusted</h4>
              <div className="flex items-center space-x-4">
                <div className="flex items-center"><FaShieldAlt className="text-green-500 mr-2" /><span className={`${textClass} text-sm`}>SSL Secured</span></div>
                <div className="flex items-center"><FaCreditCard className="text-blue-500 mr-2" /><span className={`${textClass} text-sm`}>PCI Compliant</span></div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={`border-t ${borderClass} pt-8`}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className={`${textClass} text-sm`}>© 2025 Fabriza. All rights reserved. | Made with <FaHeart className="inline text-red-500 mx-1" /> for fashion lovers.</p>
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility', 'Sitemap'].map((item, i) => (
                <button key={i} className={`${textClass} ${hoverClass} transition-colors duration-300`}>{item}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;