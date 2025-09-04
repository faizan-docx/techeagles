import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EagleLogo from './eagleLogo';
import logo from '/logo.png';

const Footer = ({ isDarkMode }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Floating animation for decorative elements
  const floatingVariants = {
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Pulse animation for highlights
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Rotating animation for decorative elements
  const rotateVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <footer className={`py-12 relative overflow-hidden ${isDarkMode ? 'bg-gray-950 border-t border-violet-900' : 'bg-gray-50 border-t border-gray-200'}`}>
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          background: isDarkMode 
            ? 'radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)'
        }}
      />

      {/* Floating Decorative Elements */}
      <motion.div
        className={`absolute top-10 left-10 w-3 h-3 rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-violet-600'} opacity-40`}
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 0.5 }}
      />
      
      <motion.div
        className={`absolute bottom-20 right-20 w-4 h-4 rounded-full ${isDarkMode ? 'bg-violet-500' : 'bg-cyan-500'} opacity-40`}
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1.5 }}
      />

      {/* Rotating Ring */}
      <motion.div
        className="absolute top-1/2 right-10 w-32 h-32 rounded-full border border-dashed opacity-20"
        style={{
          borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.3)' : 'rgba(124, 58, 237, 0.3)'
        }}
        variants={rotateVariants}
        animate="rotate"
      />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-4">
              <motion.div 
                className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated Logo Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-violet-400"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)",
                      "linear-gradient(45deg, #ec4899, #06b6d4, #8b5cf6)",
                      "linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4)",
                      "linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899)",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative z-10">
                  <img src={logo} alt="Tech Eagles Logo" className="w-6 h-6 object-contain" />
                </div>
              </motion.div>
              <motion.span 
                className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                TechEagles
              </motion.span>
            </div>
            <motion.p 
              className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              We build cutting-edge digital solutions that transform businesses and create exceptional user experiences.
            </motion.p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h3 
              className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects'].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className={`relative group ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <motion.span
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item}
                      <motion.div
                        className={`absolute left-0 bottom-0 h-0.5 ${
                          isDarkMode ? 'bg-cyan-400' : 'bg-violet-600'
                        }`}
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h3 
              className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              More Links
            </motion.h3>
            <ul className="space-y-2">
                            {[
                { name: 'Team', path: '/team' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' }
              ].map((item, index) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    to={item.path}
                    className={`relative group ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    <motion.span
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.name}
                      <motion.div
                        className={`absolute left-0 bottom-0 h-0.5 ${
                          isDarkMode ? 'bg-cyan-400' : 'bg-violet-600'
                        }`}
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h3 
              className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Contact Info
            </motion.h3>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {[
                'Online/Remote',
                'info@techeagles.com',
                '+91 +91 9313924875'
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="cursor-default"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className={`pt-8 border-t ${isDarkMode ? 'border-violet-900 text-gray-400' : 'border-gray-200 text-gray-600'} text-center text-sm relative`}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Animated Copyright Symbol */}
          <motion.span
            className="inline-block mr-1"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ©
          </motion.span>
          {new Date().getFullYear()} TechEagles. All rights reserved.
          
          {/* Floating Particles */}
          <motion.div
            className={`absolute -top-2 left-1/4 w-2 h-2 rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-violet-600'} opacity-60`}
            variants={pulseVariants}
            animate="pulse"
          />
          
          <motion.div
            className={`absolute -top-2 right-1/4 w-2 h-2 rounded-full ${isDarkMode ? 'bg-violet-500' : 'bg-cyan-500'} opacity-60`}
            variants={pulseVariants}
            animate="pulse"
            transition={{ delay: 1 }}
          />
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;