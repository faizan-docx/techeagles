import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import EagleLogo from './eagleLogo';

// Wrap Link with motion
const MotionLink = motion(Link);

const Navigation = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hover animation for nav links
  const linkVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.1, y: -2, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDarkMode ? 'bg-gray-950/95 border-violet-900' : 'bg-white/95 border-gray-200'
      } backdrop-blur-sm border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="w-10 h-10 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center"
            >
              <EagleLogo />
            </motion.div>
            <span
              className={`text-xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              TechEagles
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Projects', 'Our Team', 'Contact'].map(
              (item) => (
                <MotionLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className={`relative font-medium transition-colors ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item}
                  {/* Underline animation */}
                  <motion.span
                    className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-violet-600 to-cyan-500 w-0"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </MotionLink>
              )
            )}
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileTap={{ scale: 0.9, rotate: 15 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${
              isDarkMode ? 'border-violet-900 bg-gray-950' : 'border-gray-200 bg-white'
            }`}
          >
            <div className="px-4 py-2 space-y-1">
              {['Home', 'About', 'Services', 'Projects', 'Our Team', 'Contact'].map(
                (item) => (
                  <motion.div key={item} whileHover={{ scale: 1.05, x: 5 }}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                      className={`block py-2 px-4 rounded-md font-medium ${
                        isDarkMode
                          ? 'text-gray-300 hover:bg-gray-800'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
