import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  ExternalLink, 
  Github, 
  Filter,
  ArrowRight,
  Calendar,
  Users,
  Cpu,
  Database,
  Cloud,
  Shield,
  Zap,
  Smartphone,
  Globe,
  Brain,
  Rocket
} from 'lucide-react';

const ProjectsPage = ({ isDarkMode }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Project categories
  const categories = [
    { id: 'all', name: 'All Projects', icon: Filter },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'web', name: 'Web Development', icon: Globe },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Platform',
      category: 'ai',
      client: 'Global Finance Corp',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Enterprise-grade analytics platform with machine learning capabilities that processes millions of data points in real-time.',
      fullDescription: 'We developed a comprehensive analytics platform that uses machine learning to identify trends, predict market movements, and provide actionable insights for financial institutions. The system processes over 5 million data points daily and has improved decision-making accuracy by 42%.',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'AWS', 'MongoDB'],
      challenges: 'Processing large volumes of financial data in real-time while maintaining data integrity and security.',
      solutions: 'Implemented distributed computing architecture with automated failover and advanced encryption protocols.',
      results: '42% improvement in predictive accuracy, 67% faster data processing, and $2.3M in operational savings for the client.',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      teamSize: 8,
      duration: '9 months'
    },
    {
      id: 2,
      title: 'Blockchain Supply Chain Solution',
      category: 'web',
      client: 'Logistics International',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Transparent supply chain management using blockchain technology for enhanced traceability.',
      fullDescription: 'We built a blockchain-based supply chain solution that provides complete transparency from manufacturer to end consumer. The system reduces fraud, improves accountability, and streamlines logistics operations.',
      technologies: ['Solidity', 'Web3', 'React', 'Node.js', 'Ethereum', 'IPFS'],
      challenges: 'Creating a user-friendly interface for complex blockchain operations while maintaining security.',
      solutions: 'Developed intuitive dashboard with real-time tracking and implemented multi-signature security protocols.',
      results: '78% reduction in shipment disputes, 35% faster customs clearance, and complete supply chain visibility.',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      teamSize: 6,
      duration: '7 months'
    },
    {
      id: 3,
      title: 'IoT Smart City Solution',
      category: 'cloud',
      client: 'Metro City Council',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Comprehensive IoT platform for smart city infrastructure management and monitoring.',
      fullDescription: 'Our IoT solution connects thousands of sensors across the city to monitor traffic, energy usage, waste management, and public safety. The platform helps city officials make data-driven decisions to improve urban living.',
      technologies: ['Arduino', 'MQTT', 'React', 'Node.js', 'InfluxDB', 'Grafana'],
      challenges: 'Integrating diverse sensor networks and ensuring reliable data transmission in urban environments.',
      solutions: 'Created unified API gateway and implemented edge computing for low-latency processing.',
      results: '23% reduction in energy consumption, 17% improvement in traffic flow, and 31% faster emergency response times.',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      teamSize: 10,
      duration: '12 months'
    },
    {
      id: 4,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      client: 'MediCare Providers',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Patient management and telemedicine application for healthcare providers.',
      fullDescription: 'We developed a comprehensive mobile application that allows patients to schedule appointments, consult with doctors via video, access medical records, and receive medication reminders. The app complies with HIPAA regulations and ensures patient data security.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'WebRTC', 'MongoDB'],
      challenges: 'Ensuring HIPAA compliance while providing seamless user experience and real-time communication.',
      solutions: 'Implemented end-to-end encryption, secure video conferencing, and strict access controls.',
      results: '58% increase in patient engagement, 42% reduction in no-shows, and 87% patient satisfaction rate.',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      teamSize: 7,
      duration: '8 months'
    },
    {
      id: 5,
      title: 'Cybersecurity Threat Detection',
      category: 'security',
      client: 'National Bank Group',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Advanced threat detection system using AI to identify and prevent cyber attacks.',
      fullDescription: 'We created an advanced cybersecurity platform that uses machine learning to detect anomalies, predict potential threats, and automate responses to security incidents. The system protects critical financial infrastructure from evolving cyber threats.',
      technologies: ['Python', 'TensorFlow', 'ELK Stack', 'React', 'AWS', 'Kubernetes'],
      challenges: 'Detecting zero-day attacks and minimizing false positives in a high-volume transaction environment.',
      solutions: 'Developed proprietary ML algorithms trained on historical attack data and implemented behavioral analysis.',
      results: '94% threat detection accuracy, 63% faster response times, and prevention of $15M in potential fraud.',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      teamSize: 9,
      duration: '11 months'
    },
    {
      id: 6,
      title: 'E-commerce Platform Upgrade',
      category: 'web',
      client: 'Fashion Retail Inc.',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Complete overhaul of legacy e-commerce system with modern architecture and enhanced features.',
      fullDescription: 'We migrated a legacy e-commerce platform to a modern microservices architecture, improving performance, scalability, and user experience. The new system handles peak traffic seamlessly and provides personalized shopping experiences.',
      technologies: ['React', 'Node.js', 'GraphQL', 'Redis', 'AWS', 'Docker'],
      challenges: 'Migrating large product catalog and customer data without disrupting ongoing business operations.',
      solutions: 'Implemented phased migration with real-time data synchronization and rollback capabilities.',
      results: '3.2x faster page loads, 47% increase in conversion rates, and 99.9% uptime during holiday season.',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      teamSize: 8,
      duration: '10 months'
    },
    {
      id: 7,
      title: 'Real Estate VR Platform',
      category: 'web',
      client: 'Prime Properties',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Virtual reality platform for property tours and real estate transactions.',
      fullDescription: 'We developed an immersive VR platform that allows potential buyers to tour properties remotely. The system includes 3D modeling, virtual staging, and integrated transaction processing for a complete real estate experience.',
      technologies: ['Three.js', 'React', 'WebGL', 'Node.js', 'MongoDB', 'AWS'],
      challenges: 'Creating photorealistic 3D environments that load quickly on various devices and network conditions.',
      solutions: 'Optimized 3D assets with progressive loading and implemented adaptive streaming technology.',
      results: '28% increase in remote property views, 19% higher conversion rate, and 63% reduction in physical site visits.',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      teamSize: 5,
      duration: '6 months'
    },
    {
      id: 8,
      title: 'Energy Management System',
      category: 'ai',
      client: 'Green Energy Solutions',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'AI-driven energy optimization system for commercial buildings and industrial facilities.',
      fullDescription: 'Our AI-powered energy management system analyzes usage patterns, weather data, and utility rates to optimize energy consumption in real-time. The platform reduces costs and environmental impact while maintaining comfort and operational requirements.',
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'IoT', 'PostgreSQL'],
      challenges: 'Integrating with diverse building management systems and predicting energy needs accurately.',
      solutions: 'Developed universal API adapters and trained ML models on historical consumption data.',
      results: '31% reduction in energy costs, 24% lower carbon emissions, and ROI achieved in 14 months.',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      teamSize: 7,
      duration: '8 months'
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProjectDetail = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-500">Projects</span>
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              Explore our portfolio of innovative solutions that have helped businesses transform and thrive in the digital age.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>



      {/* Projects Grid */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-900/30' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className={`text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No projects found in this category. Please try another filter.
              </p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className={`rounded-xl overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
                  onClick={() => openProjectDetail(project)}
                >
                  <div className="relative group">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.category === 'ai' ? 'bg-purple-500/20 text-purple-300' :
                          project.category === 'web' ? 'bg-blue-500/20 text-blue-300' :
                          project.category === 'mobile' ? 'bg-green-500/20 text-green-300' :
                          project.category === 'cloud' ? 'bg-cyan-500/20 text-cyan-300' :
                          project.category === 'security' ? 'bg-red-500/20 text-red-300' :
                          'bg-gray-500/20 text-gray-300'
                        }`}>
                          {categories.find(cat => cat.id === project.category)?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {project.year} • <Users className="w-4 h-4 inline mr-1 ml-2" />
                        {project.teamSize}
                      </div>
                      
                      <button className={`flex items-center text-sm font-medium ${
                        isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-violet-600 hover:text-violet-700'
                      }`}>
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-violet-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-white/10 w-96 h-96 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
            Let's work together to create something amazing. Our team is ready to bring your ideas to life.
          </p>
          <button className="bg-white text-violet-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
            Start Your Project Today
          </button>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            onClick={closeProjectDetail}
          >
            <div className="flex items-center justify-center min-h-screen p-4">
              <div className="fixed inset-0 bg-black/70" onClick={closeProjectDetail}></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`relative rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeProjectDetail}
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                
                <div className="relative h-64 md:h-80">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        selectedProject.category === 'ai' ? 'bg-purple-500/20 text-purple-300' :
                        selectedProject.category === 'web' ? 'bg-blue-500/20 text-blue-300' :
                        selectedProject.category === 'mobile' ? 'bg-green-500/20 text-green-300' :
                        selectedProject.category === 'cloud' ? 'bg-cyan-500/20 text-cyan-300' :
                        selectedProject.category === 'security' ? 'bg-red-500/20 text-red-300' :
                        'bg-gray-500/20 text-gray-300'
                      }`}>
                        {categories.find(cat => cat.id === selectedProject.category)?.name}
                      </span>
                      <h2 className={`text-2xl md:text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-white'}`}>
                        {selectedProject.title}
                      </h2>
                      <p className={`mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-200'}`}>
                        {selectedProject.client} • {selectedProject.year}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <Users className={`w-8 h-8 mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`} />
                      <h3 className="font-semibold mb-1">Team Size</h3>
                      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{selectedProject.teamSize} people</p>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <Calendar className={`w-8 h-8 mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`} />
                      <h3 className="font-semibold mb-1">Duration</h3>
                      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{selectedProject.duration}</p>
                    </div>
                    
                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                      <Code className={`w-8 h-8 mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`} />
                      <h3 className="font-semibold mb-1">Technologies</h3>
                      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{selectedProject.technologies.length} used</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Project Overview</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{selectedProject.fullDescription}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Challenges</h3>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{selectedProject.challenges}</p>
                    </div>
                    
                    <div>
                      <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Solution</h3>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{selectedProject.solutions}</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Results Delivered</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{selectedProject.results}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-violet-900/30 text-cyan-400' : 'bg-violet-100 text-violet-700'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-lg transition-all"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Preview
                      </a>
                    )}
                    
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex items-center px-5 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// AnimatePresence component for modal animations
const AnimatePresence = ({ children }) => {
  return <>{children}</>;
};

export default ProjectsPage;