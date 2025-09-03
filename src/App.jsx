import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import AboutPage from './components/about';
import ServicesPage from './components/services';
import ProjectsPage from './components/projects';
import OurTeamPage from './components/ourTeam';
import ContactPage from './components/contact';
import Navigation from './components/navigation';
import Footer from './components/footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-950' : 'bg-gray-50'}`}>
      <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main className="pt-16"> {/* Add padding for fixed navbar */}
        <Routes>
          <Route path="/" element={<LandingPage isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<AboutPage isDarkMode={isDarkMode} />} />
          <Route path="/services" element={<ServicesPage isDarkMode={isDarkMode} />} />
          <Route path="/projects" element={<ProjectsPage isDarkMode={isDarkMode} />} />
          <Route path="/team" element={<OurTeamPage isDarkMode={isDarkMode} />} />
          <Route path="/contact" element={<ContactPage isDarkMode={isDarkMode} />} />
        </Routes>
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;