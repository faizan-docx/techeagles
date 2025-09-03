import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Shield, Users, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = ({ isDarkMode }) => {
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

  const sectionVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className={`min-h-screen py-20 px-4 ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex justify-center mb-6"
            variants={itemVariants}
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
              isDarkMode ? 'bg-violet-600/20' : 'bg-violet-100'
            }`}>
              <FileText className="w-8 h-8 text-violet-600" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            variants={itemVariants}
          >
            Terms of Service
          </motion.h1>
          
          <motion.p 
            className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
            variants={itemVariants}
          >
            Please read these terms and conditions carefully before using our services.
          </motion.p>
        </motion.div>

        {/* Back Button */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="/"
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                : 'bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-900'
            } shadow-lg hover:shadow-xl`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Acceptance of Terms */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              By accessing and using TechEagles services, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </motion.section>

          {/* Use License */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-semibold">2. Use License</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
              Permission is granted to temporarily download one copy of the materials (information or software) on TechEagles's website 
              for personal, non-commercial transitory viewing only.
            </p>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'} p-4 rounded-lg`}>
              <h3 className="font-semibold mb-2">This is the grant of a license, not a transfer of title, and under this license you may not:</h3>
              <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-4`}>
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose</li>
                <li>• Attempt to reverse engineer any software contained on the website</li>
                <li>• Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>
          </motion.section>

          {/* Disclaimer */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-semibold">3. Disclaimer</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              The materials on TechEagles's website are provided on an 'as is' basis. TechEagles makes no warranties, expressed or implied, 
              and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of 
              merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </motion.section>

          {/* Limitations */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-semibold">4. Limitations</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              In no event shall TechEagles or its suppliers be liable for any damages (including, without limitation, damages for loss of data 
              or profit, or due to business interruption) arising out of the use or inability to use the materials on TechEagles's website, 
              even if TechEagles or a TechEagles authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </motion.section>

          {/* Revisions and Errata */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-semibold">5. Revisions and Errata</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              The materials appearing on TechEagles's website could include technical, typographical, or photographic errors. 
              TechEagles does not warrant that any of the materials on its website are accurate, complete or current. 
              TechEagles may make changes to the materials contained on its website at any time without notice.
            </p>
          </motion.section>

          {/* Links */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-indigo-500" />
              <h2 className="text-2xl font-semibold">6. Links</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              TechEagles has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. 
              The inclusion of any link does not imply endorsement by TechEagles of the site. Use of any such linked website is at the user's own risk.
            </p>
          </motion.section>

          {/* Site Terms of Use Modifications */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-cyan-500" />
              <h2 className="text-2xl font-semibold">7. Site Terms of Use Modifications</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              TechEagles may revise these terms of use for its website at any time without notice. By using this website you are agreeing 
              to be bound by the then current version of these Terms and Conditions of Use.
            </p>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-semibold">8. Contact Information</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'} p-4 rounded-lg`}>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Email:</strong> legal@techeagles.com<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
                <strong>Address:</strong> 123 Tech Avenue, San Francisco, CA
              </p>
            </div>
          </motion.section>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="mt-12 text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm`}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
