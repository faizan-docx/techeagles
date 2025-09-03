import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Bell, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = ({ isDarkMode }) => {
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
              isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100'
            }`}>
              <Shield className="w-8 h-8 text-blue-600" />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            variants={itemVariants}
          >
            Privacy Policy
          </motion.h1>
          
          <motion.p 
            className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
            variants={itemVariants}
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
          {/* Information We Collect */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Database className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
              We collect information you provide directly to us, such as when you create an account, contact us, or use our services.
            </p>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'} p-4 rounded-lg`}>
              <h3 className="font-semibold mb-2">Types of information we collect:</h3>
              <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-4`}>
                <li>• Personal identification information (name, email address, phone number)</li>
                <li>• Business information (company name, job title)</li>
                <li>• Technical information (IP address, browser type, device information)</li>
                <li>• Usage data (pages visited, time spent on site, interactions)</li>
              </ul>
            </div>
          </motion.section>

          {/* How We Use Your Information */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
              We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure security.
            </p>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'} p-4 rounded-lg`}>
              <h3 className="font-semibold mb-2">Specific uses include:</h3>
              <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-4`}>
                <li>• Providing and maintaining our services</li>
                <li>• Processing transactions and sending related information</li>
                <li>• Sending technical notices, updates, and support messages</li>
                <li>• Responding to your comments and questions</li>
                <li>• Monitoring and analyzing trends and usage</li>
              </ul>
            </div>
          </motion.section>

          {/* Information Sharing */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-semibold">3. Information Sharing</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except as described in this policy or as required by law.
            </p>
          </motion.section>

          {/* Data Security */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-red-500" />
              <h2 className="text-2xl font-semibold">4. Data Security</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction.
            </p>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'} p-4 rounded-lg`}>
              <h3 className="font-semibold mb-2">Security measures include:</h3>
              <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-4`}>
                <li>• Encryption of data in transit and at rest</li>
                <li>• Regular security assessments and updates</li>
                <li>• Access controls and authentication measures</li>
                <li>• Employee training on data protection</li>
              </ul>
            </div>
          </motion.section>

          {/* Cookies and Tracking */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Database className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-semibold">5. Cookies and Tracking</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              We use cookies and similar tracking technologies to enhance your experience, analyze site usage, and provide 
              personalized content. You can control cookie settings through your browser preferences.
            </p>
          </motion.section>

          {/* Your Rights */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-semibold">6. Your Rights</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
              You have certain rights regarding your personal information, including the right to access, correct, or delete your data.
            </p>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'} p-4 rounded-lg`}>
              <h3 className="font-semibold mb-2">Your rights include:</h3>
              <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2 ml-4`}>
                <li>• Access to your personal information</li>
                <li>• Correction of inaccurate information</li>
                <li>• Deletion of your personal information</li>
                <li>• Objection to processing of your data</li>
                <li>• Data portability</li>
              </ul>
            </div>
          </motion.section>

          {/* Updates to This Policy */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Bell className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-semibold">7. Updates to This Policy</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy 
              on this page and updating the "Last Updated" date.
            </p>
          </motion.section>

          {/* Contact Us */}
          <motion.section
            className={`p-6 rounded-2xl ${
              isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white border border-gray-200'
            } shadow-lg`}
            variants={sectionVariants}
          >
            <div className="flex items-center space-x-3 mb-4">
              <Users className="w-6 h-6 text-indigo-500" />
              <h2 className="text-2xl font-semibold">8. Contact Us</h2>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-4`}>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'} p-4 rounded-lg`}>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Email:</strong> privacy@techeagles.com<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
                <strong>Address:</strong> 123 Tech Avenue, San Francisco, CA<br />
                <strong>Data Protection Officer:</strong> dpo@techeagles.com
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

export default PrivacyPolicy;
