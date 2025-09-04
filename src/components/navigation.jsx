import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import EagleLogo from './eagleLogo';

// Wrap Link with motion
const MotionLink = motion(Link);

const Navigation = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement for cursor effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Hover animation for nav links
  const linkVariants = {
    rest: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 300 } },
  };

  // Particle animation variants
  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: [0, 1, 0], 
      scale: [0, 1, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  // Navigation items with their paths
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? (isDarkMode ? 'bg-gray-950/98 shadow-2xl shadow-black/20' : 'bg-white/98 shadow-xl shadow-gray-200/50')
          : (isDarkMode ? 'bg-gray-950/90' : 'bg-white/90')
      } backdrop-blur-md border-b ${
        isDarkMode ? 'border-gray-800' : 'border-gray-200'
      }`}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDarkMode ? 'bg-cyan-400' : 'bg-violet-500'
            } opacity-30`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
            variants={particleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo with Particle Effects */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden"
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
                <EagleLogo />
              </div>
              
              
            </motion.div>
            
            <div className="flex flex-col">
              <motion.span
                className={`text-xl font-bold tracking-tight ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                TechEagles
              </motion.span>
              <motion.span 
                className={`text-xs ${
                  isDarkMode ? 'text-cyan-400' : 'text-violet-600'
                } font-medium tracking-wide`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Digital Solutions
              </motion.span>
            </div>
          </Link>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <MotionLink
                key={item.name}
                to={item.path}
                variants={linkVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className={`relative font-medium transition-all duration-300 py-2 px-4 rounded-lg group ${
                  isActive(item.path)
                    ? (isDarkMode 
                        ? 'text-cyan-400 bg-gray-800/50' 
                        : 'text-violet-600 bg-violet-50')
                    : (isDarkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                        : 'text-gray-700 hover:text-violet-600 hover:bg-violet-50/50')
                }`}
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                {/* Hover Background Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-lg ${
                    isDarkMode ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20' : 'bg-gradient-to-r from-violet-500/20 to-cyan-500/20'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
                
                <span className="relative z-10">{item.name}</span>
                
                {/* Enhanced Underline Animation */}
                <motion.div
                  className={`absolute left-0 bottom-0 h-0.5 rounded-full ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-cyan-400 to-violet-500'
                      : 'bg-gradient-to-r from-violet-600 to-cyan-500'
                  }`}
                  initial={{ width: isActive(item.path) ? '100%' : 0 }}
                  animate={{ width: hoveredItem === item.name || isActive(item.path) ? '100%' : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
                
                {/* Hover Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-lg ${
                    isDarkMode ? 'shadow-lg shadow-cyan-400/20' : 'shadow-lg shadow-violet-400/20'
                  }`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </MotionLink>
            ))}
          </div>

          {/* Enhanced Right Side Controls */}
          <div className="flex items-center space-x-3">
            {/* Enhanced Dark Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 15 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-xl transition-all duration-300 relative overflow-hidden ${
                isDarkMode
                  ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700 hover:shadow-lg hover:shadow-cyan-400/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-violet-100 hover:text-violet-600 hover:shadow-lg hover:shadow-violet-400/20'
              }`}
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 ${
                  isDarkMode ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20' : 'bg-gradient-to-r from-violet-500/20 to-cyan-500/20'
                }`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              
              <motion.div
                className="relative z-10"
                animate={{ rotate: isDarkMode ? 0 : 180 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.div>
            </motion.button>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 relative overflow-hidden ${
                isDarkMode 
                  ? 'text-white hover:bg-gray-800' 
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 ${
                  isDarkMode ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20' : 'bg-gradient-to-r from-violet-500/20 to-cyan-500/20'
                }`}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              
              <motion.div
                className="relative z-10"
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`lg:hidden border-t ${
              isDarkMode ? 'border-gray-800 bg-gray-950/95' : 'border-gray-200 bg-white/95'
            } backdrop-blur-md`}
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.name} 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 rounded-lg font-medium transition-all duration-200 relative overflow-hidden ${
                      isActive(item.path)
                        ? (isDarkMode 
                            ? 'text-cyan-400 bg-gray-800/50' 
                            : 'text-violet-600 bg-violet-50')
                        : (isDarkMode
                            ? 'text-gray-300 hover:bg-gray-800/30 hover:text-white'
                            : 'text-gray-700 hover:bg-violet-50/50 hover:text-violet-600')
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {/* Hover Background Effect */}
                    <motion.div
                      className={`absolute inset-0 ${
                        isDarkMode ? 'bg-gradient-to-r from-cyan-500/10 to-violet-500/10' : 'bg-gradient-to-r from-violet-500/10 to-cyan-500/10'
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    <div className="flex items-center justify-between relative z-10">
                      <span>{item.name}</span>
                      {isActive(item.path) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`w-2 h-2 rounded-full ${
                            isDarkMode ? 'bg-cyan-400' : 'bg-violet-600'
                          }`}
                        />
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;