import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Smartphone, 
  Globe, 
  Brain,
  Rocket,
  BarChart3,
  Server,
  Palette,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';
import CardSpotlight from './ui/card-spotlight';

const ServicesPage = ({ isDarkMode }) => {
  const [activeService, setActiveService] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Services data
  const services = [
    {
      id: 1,
      icon: Brain,
      title: 'AI & Machine Learning',
      shortDescription: 'Intelligent solutions powered by advanced algorithms',
      fullDescription: 'We develop cutting-edge AI and machine learning solutions that transform businesses. Our expertise includes natural language processing, computer vision, predictive analytics, and recommendation systems. We help you harness the power of your data to drive innovation and gain competitive advantage.',
      features: [
        'Custom ML model development',
        'Data preprocessing & analysis',
        'Predictive analytics',
        'Computer vision solutions',
        'Natural language processing',
        'AI integration with existing systems'
      ],
      process: [
        { step: 'Discovery', description: 'Understanding your business needs and data landscape' },
        { step: 'Data Preparation', description: 'Cleaning, labeling, and preparing data for training' },
        { step: 'Model Development', description: 'Building and training custom ML models' },
        { step: 'Integration', description: 'Seamlessly integrating AI into your workflows' },
        { step: 'Optimization', description: 'Continuous monitoring and improvement of models' }
      ],
      projects: ['Predictive maintenance system', 'Customer sentiment analysis', 'Intelligent document processing'],
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      icon: Globe,
      title: 'Web Development',
      shortDescription: 'Modern, responsive websites and web applications',
      fullDescription: 'We create stunning, high-performance websites and web applications that deliver exceptional user experiences. From simple brochure sites to complex enterprise applications, our team builds solutions that are scalable, secure, and optimized for search engines.',
      features: [
        'Responsive web design',
        'Progressive web apps (PWAs)',
        'E-commerce solutions',
        'Content management systems',
        'API development & integration',
        'Performance optimization'
      ],
      process: [
        { step: 'Planning', description: 'Defining requirements, architecture, and user flows' },
        { step: 'Design', description: 'Creating wireframes, mockups, and prototypes' },
        { step: 'Development', description: 'Building with modern frameworks and best practices' },
        { step: 'Testing', description: 'Rigorous quality assurance across devices and browsers' },
        { step: 'Deployment', description: 'Smooth launch with monitoring and analytics setup' }
      ],
      projects: ['Corporate website redesign', 'E-commerce platform', 'Real estate portal'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      icon: Smartphone,
      title: 'Mobile App Development',
      shortDescription: 'Native and cross-platform mobile applications',
      fullDescription: 'We build intuitive, high-performance mobile applications for iOS and Android that engage users and drive business growth. Our apps are designed with user experience at the forefront, ensuring high retention and satisfaction rates.',
      features: [
        'iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design focused on mobile',
        'App store optimization',
        'Push notification systems',
        'Offline functionality'
      ],
      process: [
        { step: 'Strategy', description: 'Defining app purpose, target audience, and monetization' },
        { step: 'Design', description: 'Creating intuitive user interfaces and experiences' },
        { step: 'Development', description: 'Building robust, performant mobile applications' },
        { step: 'Testing', description: 'Testing on multiple devices and operating systems' },
        { step: 'Launch & Growth', description: 'App store deployment and user acquisition strategies' }
      ],
      projects: ['Fitness tracking app', 'Food delivery service', 'Social networking app'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 4,
      icon: Cloud,
      title: 'Cloud Solutions',
      shortDescription: 'Scalable cloud infrastructure and migration',
      fullDescription: 'We help businesses leverage the power of cloud computing with secure, scalable infrastructure solutions. Whether you\'re migrating existing systems or building cloud-native applications, we ensure optimal performance, security, and cost-efficiency.',
      features: [
        'Cloud migration services',
        'AWS, Azure, and Google Cloud expertise',
        'Serverless architecture',
        'Containerization with Docker & Kubernetes',
        'Cloud security & compliance',
        'Cost optimization'
      ],
      process: [
        { step: 'Assessment', description: 'Evaluating current infrastructure and cloud readiness' },
        { step: 'Planning', description: 'Designing cloud architecture and migration strategy' },
        { step: 'Migration', description: 'Seamlessly moving applications and data to the cloud' },
        { step: 'Optimization', description: 'Fine-tuning performance and costs' },
        { step: 'Management', description: 'Ongoing monitoring, maintenance, and support' }
      ],
      projects: ['Legacy system cloud migration', 'Microservices architecture', 'Disaster recovery solution'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 5,
      icon: Shield,
      title: 'Cybersecurity',
      shortDescription: 'Comprehensive protection for your digital assets',
      fullDescription: 'We provide enterprise-grade cybersecurity solutions to protect your systems, data, and reputation. Our comprehensive approach includes risk assessment, vulnerability management, incident response, and ongoing monitoring to keep your business secure.',
      features: [
        'Security assessments & audits',
        'Vulnerability management',
        'Penetration testing',
        'Incident response planning',
        'Security awareness training',
        'Compliance consulting (GDPR, HIPAA, PCI DSS)'
      ],
      process: [
        { step: 'Assessment', description: 'Identifying vulnerabilities and security gaps' },
        { step: 'Planning', description: 'Developing customized security strategy and policies' },
        { step: 'Implementation', description: 'Deploying security controls and monitoring systems' },
        { step: 'Training', description: 'Educating staff on security best practices' },
        { step: 'Maintenance', description: 'Continuous monitoring and updating defenses' }
      ],
      projects: ['Financial institution security overhaul', 'Healthcare compliance implementation', 'E-commerce security audit'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 6,
      icon: BarChart3,
      title: 'Data Analytics',
      shortDescription: 'Transform data into actionable insights',
      fullDescription: 'We help businesses unlock the value of their data through advanced analytics and visualization. Our solutions turn complex data into clear, actionable insights that drive informed decision-making and business growth.',
      features: [
        'Business intelligence dashboards',
        'Data visualization',
        'ETL pipeline development',
        'Big data solutions',
        'Predictive modeling',
        'KPI tracking and reporting'
      ],
      process: [
        { step: 'Data Audit', description: 'Assessing data quality, sources, and governance' },
        { step: 'Strategy', description: 'Defining key metrics and reporting requirements' },
        { step: 'Implementation', description: 'Building data pipelines and visualization tools' },
        { step: 'Training', description: 'Teaching teams to use and interpret analytics' },
        { step: 'Evolution', description: 'Continuously refining based on business needs' }
      ],
      projects: ['Sales performance dashboard', 'Customer behavior analysis', 'Operational efficiency metrics'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 7,
      icon: Server,
      title: 'DevOps & Infrastructure',
      shortDescription: 'Automated workflows and infrastructure management',
      fullDescription: 'We implement DevOps practices and infrastructure automation to accelerate development cycles, improve deployment frequency, and create more reliable systems. Our solutions bridge the gap between development and operations for seamless delivery.',
      features: [
        'CI/CD pipeline implementation',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Automated testing & deployment',
        'Monitoring & logging solutions',
        'Performance optimization',
        'Disaster recovery planning'
      ],
      process: [
        { step: 'Assessment', description: 'Evaluating current development and deployment processes' },
        { step: 'Toolchain Selection', description: 'Choosing appropriate DevOps tools and platforms' },
        { step: 'Implementation', description: 'Building automated pipelines and infrastructure' },
        { step: 'Training', description: 'Teaching teams new workflows and best practices' },
        { step: 'Optimization', description: 'Continuously improving processes and tools' }
      ],
      projects: ['CI/CD pipeline for fintech startup', 'Infrastructure automation for SaaS company', 'Monitoring system for e-commerce'],
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 8,
      icon: Palette,
      title: 'UI/UX Design',
      shortDescription: 'User-centered design that delights and engages',
      fullDescription: 'We create beautiful, intuitive user interfaces and experiences that drive engagement and conversion. Our human-centered design process ensures that every interaction meets user needs while achieving business objectives.',
      features: [
        'User research & persona development',
        'Wireframing & prototyping',
        'Interaction design',
        'Usability testing',
        'Design systems & style guides',
        'Accessibility compliance'
      ],
      process: [
        { step: 'Research', description: 'Understanding users, competitors, and business goals' },
        { step: 'Ideation', description: 'Brainstorming and conceptualizing solutions' },
        { step: 'Prototyping', description: 'Creating interactive models of proposed solutions' },
        { step: 'Testing', description: 'Validating designs with real users' },
        { step: 'Implementation', description: 'Working with developers to ensure design fidelity' }
      ],
      projects: ['Mobile banking app redesign', 'E-commerce checkout optimization', 'SaaS platform interface design'],
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const openServiceDetail = (service) => {
    setActiveService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceDetail = () => {
    setActiveService(null);
    document.body.style.overflow = 'auto';
  };

  const toggleVideoPlayback = () => {
    setIsVideoPlaying(!isVideoPlaying);
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
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-500">Services</span>
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              Comprehensive technology solutions designed to drive innovation, efficiency, and growth for your business.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`cursor-pointer`}
                  onClick={() => openServiceDetail(service)}
                >
                  <CardSpotlight className={`p-6 rounded-xl text-center shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 hover:-translate-y-2`}>
                    <div className={`w-16 h-16 rounded-lg ${isDarkMode ? 'bg-violet-900/30' : 'bg-violet-100'} flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`} />
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {service.shortDescription}
                    </p>
                    <button className={`flex items-center justify-center text-sm font-medium mx-auto ${
                      isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-violet-600 hover:text-violet-700'
                    }`}>
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </CardSpotlight>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-900/30' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Approach</h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              We follow a proven process to deliver exceptional results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className={`rounded-2xl overflow-hidden shadow-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="relative h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Our process" 
                      className="w-full h-full object-cover"
                    />
                    <button 
                      onClick={toggleVideoPlayback}
                      className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/30 group"
                    >
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {isVideoPlaying ? (
                          <Pause className="w-8 h-8 text-violet-600" />
                        ) : (
                          <Play className="w-8 h-8 text-violet-600 ml-1" />
                        )}
                      </div>
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Process in Action</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      See how we collaborate with clients to transform ideas into successful digital products.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 rounded-lg ${isDarkMode ? 'bg-violet-900/30' : 'bg-violet-100'} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <span className={`text-lg font-bold ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`}>1</span>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Discovery & Strategy</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      We begin by deeply understanding your business goals, target audience, and technical requirements to create a comprehensive strategy.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 rounded-lg ${isDarkMode ? 'bg-violet-900/30' : 'bg-violet-100'} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <span className={`text-lg font-bold ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`}>2</span>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Design & Development</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Our team creates intuitive designs and robust technical solutions, following agile methodologies for transparent, iterative progress.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 rounded-lg ${isDarkMode ? 'bg-violet-900/30' : 'bg-violet-100'} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <span className={`text-lg font-bold ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`}>3</span>
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Testing & Deployment</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                      We rigorously test all solutions across devices and scenarios before seamless deployment with comprehensive documentation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-violet-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-white/10 w-96 h-96 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
              Get Started Today
            </button>
            <button className={`bg-transparent border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1`}>
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto"
            onClick={closeServiceDetail}
          >
            <div className="flex items-center justify-center min-h-screen p-4">
              <div className="fixed inset-0 bg-black/70" onClick={closeServiceDetail}></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`relative rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeServiceDetail}
                  className={`absolute top-4 right-4 z-10 p-2 rounded-full ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                
                <div className="relative h-64">
                  <img 
                    src={activeService.image} 
                    alt={activeService.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6">
                      <div className={`w-14 h-14 rounded-lg ${isDarkMode ? 'bg-violet-900/30' : 'bg-violet-100'} flex items-center justify-center mb-4`}>
                        <activeService.icon className={`w-7 h-7 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`} />
                      </div>
                      <h2 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-white'}`}>
                        {activeService.title}
                      </h2>
                      <p className={`mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-200'}`}>
                        {activeService.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Service Overview</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{activeService.fullDescription}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>What We Offer</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {activeService.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`} />
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Process</h3>
                    <div className="space-y-4">
                      {activeService.process.map((step, index) => (
                        <div key={index} className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                          <div className="flex items-center mb-2">
                            <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-violet-900/30' : 'bg-violet-100'} flex items-center justify-center mr-3`}>
                              <span className={`font-bold ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`}>{index + 1}</span>
                            </div>
                            <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{step.step}</h4>
                          </div>
                          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Example Projects</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeService.projects.map((project, index) => (
                        <span 
                          key={index}
                          className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-violet-900/30 text-cyan-400' : 'bg-violet-100 text-violet-700'}`}
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:shadow-lg transition-all">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Discuss This Service
                    </button>
                    
                    <button className={`flex items-center px-6 py-3 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} transition-all`}>
                      Download Service PDF
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
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

export default ServicesPage;