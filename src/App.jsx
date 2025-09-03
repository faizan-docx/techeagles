import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Code, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter,
  Menu,
  X,
  Monitor,
  Smartphone,
  Globe,
  Brain,
  Rocket,
  Users
} from 'lucide-react';

// Import your eagle logo (assuming you have it in your assets)
// If not, you can use a placeholder or emoji for now
const EagleLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3C12 7 8 9 4 9C4 16 8 23 16 29C24 23 28 16 28 9C24 9 20 7 16 3Z" 
          stroke="url(#paint0_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" 
          stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="4" y1="9" x2="28" y2="29" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6"/>
        <stop offset="1" stopColor="#06B6D4"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="12" y1="12" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8B5CF6"/>
        <stop offset="1" stopColor="#06B6D4"/>
      </linearGradient>
    </defs>
  </svg>
);

const TechEaglesWebsite = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const heroRef = useRef(null);

  // Theme toggle effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Animated counter component
  const AnimatedCounter = ({ value, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const target = parseInt(value);
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 20);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [value]);

    return <span ref={ref}>{count}{suffix}</span>;
  };

  const services = [
    {
      icon: Code,
      title: 'AI Development',
      description: 'Custom AI solutions powered by machine learning and deep neural networks'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and serverless architecture'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications'
    },
    {
      icon: Globe,
      title: 'Web Platforms',
      description: 'Progressive web applications and modern web solutions'
    }
  ];

  const stats = [
    { value: '500', suffix: '+', label: 'Projects Completed' },
    { value: '150', suffix: '+', label: 'Happy Clients' },
    { value: '99', suffix: '%', label: 'Uptime Guarantee' },
    { value: '24', suffix: '/7', label: 'Support Available' }
  ];

  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      tech: ['Python', 'TensorFlow', 'React', 'AWS'],
      description: 'Enterprise-grade analytics platform with machine learning capabilities'
    },
    {
      title: 'Blockchain Supply Chain',
      tech: ['Solidity', 'Web3', 'Node.js', 'MongoDB'],
      description: 'Transparent supply chain management using blockchain technology'
    },
    {
      title: 'IoT Smart City Solution',
      tech: ['Arduino', 'MQTT', 'InfluxDB', 'Grafana'],
      description: 'Comprehensive IoT platform for smart city infrastructure'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-950' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? 'bg-gray-950/95 border-violet-900' : 'bg-white/95 border-gray-200'} backdrop-blur-sm border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center`}>
                <EagleLogo />
              </div>
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                TechEagles
              </span>
            </div>

            {/* Desktop Navigation with Techy Hover Effect */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Contact', 'Team'].map((item) => (
                <div key={item} className="relative group">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 group-hover:text-cyan-400' : 'text-gray-600 group-hover:text-violet-600'} relative py-2`}
                  >
                    {item}
                    {/* Hover line animation */}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-cyan-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{ originX: 0 }}
                    />
                  </a>
                </div>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-all duration-300 ${isDarkMode ? 'bg-gray-800 text-cyan-400 hover:bg-gray-700' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
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
              className={`md:hidden border-t ${isDarkMode ? 'border-violet-900 bg-gray-950' : 'border-gray-200 bg-white'}`}
            >
              <div className="px-4 py-2 space-y-1">
                {['Home', 'About', 'Services', 'Projects', 'Contact', 'Team'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`block px-3 py-2 rounded-md transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'} relative overflow-hidden`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-600 to-cyan-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ originX: 0 }}
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-gray-950 via-violet-900/20 to-cyan-900/20' : 'bg-gradient-to-br from-violet-50 via-cyan-50 to-gray-50'}`}>
            {/* Binary rain animation */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute text-xs font-mono ${isDarkMode ? 'text-cyan-400/30' : 'text-violet-600/20'}`}
                animate={{
                  y: [0, window.innerHeight],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 15 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "linear"
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-5xl md:text-7xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              >
                Soaring with{' '}
                <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  Technological
                </span>{' '}
                Excellence
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                TechEagles is a cutting-edge technology studio. We design and deploy next-generation 
                digital solutions with AI, performance optimization, and human-centered innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 flex items-center justify-center group">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className={`px-8 py-4 border-2 rounded-xl font-semibold transition-all duration-300 ${isDarkMode ? 'border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400' : 'border-gray-300 text-gray-600 hover:border-violet-400 hover:text-violet-600'}`}>
                  Join Our Team
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Tech Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className={`relative p-8 rounded-2xl ${isDarkMode ? 'bg-gray-900/40' : 'bg-white/70'} backdrop-blur-sm border ${isDarkMode ? 'border-violet-700/30' : 'border-violet-200'} shadow-2xl`}>
                <div className="grid grid-cols-2 gap-4">
                  {[Code, Database, Cloud, Brain].map((Icon, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800/30' : 'bg-gray-100/50'} flex items-center justify-center border ${isDarkMode ? 'border-violet-600/20' : 'border-violet-200'} backdrop-blur-sm`}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: isDarkMode ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.05)'
                      }}
                    >
                      <Icon className={`w-8 h-8 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`} />
                    </motion.div>
                  ))}
                </div>
                
                {/* Connecting lines animation */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path
                    d="M 25% 25% L 75% 75%"
                    stroke={isDarkMode ? "#06B6D4" : "#8B5CF6"}
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <motion.path
                    d="M 75% 25% L 25% 75%"
                    stroke={isDarkMode ? "#8B5CF6" : "#06B6D4"}
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900/30' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Our <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`p-8 rounded-2xl transition-all duration-300 border ${isDarkMode ? 'bg-gray-900/40 border-violet-700/30 hover:border-cyan-500/30' : 'bg-white border-gray-200 hover:border-violet-300'} hover:shadow-xl backdrop-blur-sm`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-2xl mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900/30' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">Projects</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-gray-900/40 border-violet-700/30' : 'bg-gray-50 border-gray-200'} transition-all duration-300 backdrop-blur-sm`}
              >
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full ${isDarkMode ? 'bg-violet-900/30 text-cyan-300' : 'bg-violet-100 text-violet-600'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-700 to-cyan-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Soar with Innovation?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's build the future together with cutting-edge technology solutions
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-violet-700 font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${isDarkMode ? 'bg-gray-950 border-t border-violet-900' : 'bg-gray-50 border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">
                  <EagleLogo />
                </div>
                <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  TechEagles
                </span>
              </div>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Soaring with Technological Excellence.
              </p>
            </div>

            {[
              { title: 'About', links: ['Projects', 'Careers', 'Contact'] },
              { title: 'Services', links: ['AI Development', 'Data Analytics', 'Cloud Solutions'] },
              { title: 'Company', links: ['Team', 'Blog', 'Press'] }
            ].map((section, index) => (
              <div key={index}>
                <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className={`transition-colors duration-300 hover:text-cyan-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center ${isDarkMode ? 'border-violet-900' : 'border-gray-200'}`}>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 TechEagles. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className={`p-2 rounded-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-400 hover:text-cyan-400 hover:bg-gray-800' : 'text-gray-600 hover:text-violet-600 hover:bg-gray-100'}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechEaglesWebsite;