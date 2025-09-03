import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = ({ isDarkMode }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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

  // Special animation for the main tagline
  const taglineVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <motion.div 
        className="text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          variants={itemVariants}
        >
          Welcome to TechEagles
        </motion.h1>
        
        <motion.div
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <span className={`text-xl md:text-2xl ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'} font-medium`}>
            Transforming your ideas into digital reality
          </span>
        </motion.div>
        
        <motion.p 
          className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}
          variants={itemVariants}
        >
          We create innovative digital solutions that help businesses thrive in the modern world. 
          Our team of experts is ready to bring your vision to life.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="mt-6"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: isDarkMode 
                ? "0 0 15px rgba(34, 211, 238, 0.4)" 
                : "0 0 15px rgba(124, 58, 237, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-medium ${isDarkMode ? 'bg-cyan-600 hover:bg-cyan-700 text-white' : 'bg-violet-600 hover:bg-violet-700 text-white'}`}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;