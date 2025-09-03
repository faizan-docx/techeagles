import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({ isDarkMode }) => {
  const navigate = useNavigate();

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

  // Floating animation for background elements
  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
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
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Pulse animation for highlights
  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleStartProject = () => {
    navigate('/contact');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full opacity-10 blur-xl"
        style={{
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)'
        }}
        variants={pulseVariants}
        animate="pulse"
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full opacity-10 blur-xl"
        style={{
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)'
        }}
        variants={pulseVariants}
        animate="pulse"
        transition={{ delay: 1 }}
      />

      {/* Floating Decorative Elements */}
      <motion.div
        className={`absolute top-1/4 right-1/4 w-4 h-4 rounded-full ${isDarkMode ? 'bg-cyan-400' : 'bg-violet-600'} opacity-60`}
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 0.5 }}
      />
      
      <motion.div
        className={`absolute bottom-1/4 left-1/4 w-3 h-3 rounded-full ${isDarkMode ? 'bg-violet-500' : 'bg-cyan-500'} opacity-60`}
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1.5 }}
      />

      {/* Rotating Ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-dashed opacity-20"
        style={{
          borderColor: isDarkMode ? 'rgba(34, 211, 238, 0.3)' : 'rgba(124, 58, 237, 0.3)'
        }}
        variants={rotateVariants}
        animate="rotate"
      />

      <motion.div 
        className="text-center px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Enhanced Title with Letter Animation */}
        <motion.div className="mb-6">
          {Array.from("Welcome to TechEagles").map((letter, index) => (
            <motion.span
              key={index}
              className={`inline-block text-4xl md:text-5xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              variants={{
                hidden: { y: 50, opacity: 0, rotateX: -90 },
                visible: {
                  y: 0,
                  opacity: 1,
                  rotateX: 0,
                  transition: {
                    delay: index * 0.05,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }
                }
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <motion.span 
            className={`text-xl md:text-2xl ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'} font-medium relative`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="absolute -inset-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            Transforming your ideas into digital reality
          </motion.span>
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
            onClick={handleStartProject}
            whileHover={{ 
              scale: 1.05,
              boxShadow: isDarkMode 
                ? "0 0 25px rgba(34, 211, 238, 0.6)" 
                : "0 0 25px rgba(124, 58, 237, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-8 py-4 rounded-xl font-medium text-lg overflow-hidden ${
              isDarkMode ? 'bg-cyan-600 hover:bg-cyan-700 text-white' : 'bg-violet-600 hover:bg-violet-700 text-white'
            }`}
          >
            {/* Animated Button Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Button Text */}
            <motion.span
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Start Your Project
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Additional Floating Elements */}
        <motion.div
          className={`absolute -top-10 -left-10 w-6 h-6 rounded-full ${isDarkMode ? 'bg-cyan-300' : 'bg-violet-400'} opacity-40`}
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 2, duration: 6 }}
        />
        
        <motion.div
          className={`absolute -bottom-10 -right-10 w-5 h-5 rounded-full ${isDarkMode ? 'bg-violet-300' : 'bg-cyan-400'} opacity-40`}
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 2.5, duration: 5 }}
        />
      </motion.div>
    </div>
  );
};

export default LandingPage;