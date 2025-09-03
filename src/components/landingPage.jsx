import React from 'react';

const LandingPage = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Welcome to TechEagles
        </h1>
        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
          This is the home page. Navigation should work now.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;