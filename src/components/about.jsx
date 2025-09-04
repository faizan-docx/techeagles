import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Heart,
  Globe,
  Shield,
  Zap,
  Clock
} from 'lucide-react';

import Meteors from './ui/Meteors';

const AboutPage = ({ isDarkMode }) => {
  // Team members data
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: '15+ years in tech leadership with expertise in AI and cloud solutions.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Former Google engineer specializing in machine learning infrastructure.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Award-winning designer with a passion for creating intuitive user experiences.'
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud architecture.'
    }
  ];

  // Values data
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We believe in transparency, honesty, and doing the right thing even when no one is watching.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, valuing their input throughout the development process.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We aim to create solutions that make a positive difference in our clients businesses and communities.'
    }
  ];

  // Timeline data
  const timeline = [
    {
      year: '2018',
      title: 'Founded',
      description: 'TechEagles was established with a vision to revolutionize digital solutions.',
      icon: Clock
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and delivered a successful AI implementation.',
      icon: Award
    },
    {
      year: '2020',
      title: 'Team Expansion',
      description: 'Grew our team to 15 experts across development, design, and data science.',
      icon: Users
    },
    {
      year: '2022',
      title: 'Award Recognition',
      description: 'Received "Most Innovative Tech Solution" at the Global Tech Awards.',
      icon: Heart
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
    <div className="py-20">
      {/* Hero Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-900/30' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-500">TechEagles</span>
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              We're a team of passionate technologists dedicated to building innovative digital solutions that drive business growth and transformation.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className={`py-16 relative overflow-hidden ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="pointer-events-none absolute inset-0">
          <Meteors number={20} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Story</h2>
              <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>
                  Founded in 2018, TechEagles began with a simple mission: to help businesses harness the power of technology to solve complex challenges and achieve their goals.
                </p>
                <p>
                  What started as a small team of developers has grown into a multidisciplinary agency with expertise in AI, cloud computing, cybersecurity, and user experience design.
                </p>
                <p>
                  Today, we partner with startups and enterprises alike to build scalable, future-proof solutions that drive innovation and growth.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`rounded-2xl overflow-hidden shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="TechEagles team collaborating" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <Target className={`w-12 h-12 mb-4 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`} />
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Mission</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-900/30' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Values</h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              The principles that guide everything we do
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-all duration-300`}
              >
                <div className={`w-14 h-14 rounded-lg ${isDarkMode ? 'bg-violet-900/30' : 'bg-violet-100'} flex items-center justify-center mb-4`}>
                  <value.icon className={`w-7 h-7 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`} />
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{value.title}</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Journey</h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Key milestones in our growth and development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line (hidden on mobile) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-violet-600 to-cyan-500 hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-12 relative z-10">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-start`}
                  >
                    <div className="w-full md:w-1/2 md:pr-8 md:pl-8">
                      <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="flex items-center mb-4">
                          <div className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-violet-900/30' : 'bg-violet-100'} flex items-center justify-center mr-3`}>
                            <IconComponent className={`w-5 h-5 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`} />
                          </div>
                          <span className={`text-2xl font-bold ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`}>{item.year}</span>
                        </div>
                        <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{item.description}</p>
                      </div>
                    </div>
                    {/* Center dot hidden on mobile */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 border-4 border-white shadow hidden md:block"></div>
                    <div className="hidden md:block md:w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* Removed as requested */}
    </div>
  );
};

export default AboutPage;