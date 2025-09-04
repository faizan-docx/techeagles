import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './components/landingPage';
import AboutPage from './components/about';
import ServicesPage from './components/services';
import ProjectsPage from './components/projects';
import OurTeamPage from './components/ourTeam';
import ContactPage from './components/contact';
import TermsOfService from './components/termsOfService';
import PrivacyPolicy from './components/privacyPolicy';
import Navigation from './components/navigation';
import Footer from './components/footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  // Ensure on first load/refresh we start at the top
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 0.98
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4
  };

  return (
    <div className={`min-h-screen relative ${isDarkMode ? 'dark bg-gray-950' : 'bg-gray-50'}`}>
      
      {/* Global Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          className={`absolute top-20 left-10 w-64 h-64 rounded-full opacity-5 blur-3xl ${
            isDarkMode ? 'bg-cyan-500' : 'bg-violet-500'
          }`}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className={`absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-5 blur-3xl ${
            isDarkMode ? 'bg-violet-500' : 'bg-cyan-500'
          }`}
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main className="pt-16 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Routes>
              <Route path="/" element={<LandingPage isDarkMode={isDarkMode} />} />
              <Route path="/about" element={<AboutPage isDarkMode={isDarkMode} />} />
              <Route path="/services" element={<ServicesPage isDarkMode={isDarkMode} />} />
              <Route path="/projects" element={<ProjectsPage isDarkMode={isDarkMode} />} />
              <Route path="/team" element={<OurTeamPage isDarkMode={isDarkMode} />} />
              <Route path="/contact" element={<ContactPage isDarkMode={isDarkMode} />} />
              <Route path="/terms" element={<TermsOfService isDarkMode={isDarkMode} />} />
              <Route path="/privacy" element={<PrivacyPolicy isDarkMode={isDarkMode} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;