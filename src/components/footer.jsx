import React from 'react';
import { Link } from 'react-router-dom';
import EagleLogo from './eagleLogo';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`py-12 ${isDarkMode ? 'bg-gray-950 border-t border-violet-900' : 'bg-gray-50 border-t border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">
                <EagleLogo />
              </div>
              <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                TechEagles
              </span>
            </div>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              We build cutting-edge digital solutions that transform businesses and create exceptional user experiences.
            </p>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Home</Link></li>
              <li><Link to="/about" className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>About</Link></li>
              <li><Link to="/services" className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Services</Link></li>
              <li><Link to="/projects" className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>More Links</h3>
            <ul className="space-y-2">
              <li><Link to="/team" className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Our Team</Link></li>
              <li><Link to="/contact" className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Contact</Link></li>
              <li><a href="#" className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Privacy Policy</a></li>
              <li><a href="#" className={isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}>Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Info</h3>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>123 Tech Avenue, San Francisco, CA</li>
              <li>info@techeagles.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className={`pt-8 border-t ${isDarkMode ? 'border-violet-900 text-gray-400' : 'border-gray-200 text-gray-600'} text-center text-sm`}>
          © {new Date().getFullYear()} TechEagles. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;