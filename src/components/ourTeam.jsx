import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Linkedin, 
  Github, 
  Mail,
  Twitter,
  Award,
  Calendar,
  MapPin,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const OurTeamPage = ({ isDarkMode }) => {
  const [expandedMember, setExpandedMember] = useState(null);

  // Team members data with expanded details
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: '15+ years in tech leadership with expertise in AI and cloud solutions.',
      fullBio: 'Sarah founded TechEagles in 2018 with a vision to bridge the gap between cutting-edge technology and business needs. With a background in computer science from Stanford and experience at leading tech companies, she brings strategic vision and technical expertise to every project.',
      skills: ['Strategic Planning', 'AI Development', 'Cloud Architecture', 'Leadership'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'sarah@techeagles.com'
      },
      funFact: 'Sarah is an accomplished marathon runner and has completed races on 4 continents.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Former Google engineer specializing in machine learning infrastructure.',
      fullBio: 'Michael leads our technical vision and implementation strategies. With a PhD in Machine Learning from MIT and 8 years at Google, he brings unparalleled expertise in building scalable AI systems. He has published over 20 papers in top AI conferences.',
      skills: ['Machine Learning', 'TensorFlow', 'System Architecture', 'Python'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'michael@techeagles.com'
      },
      funFact: 'Michael is a classical pianist and has performed in several charity concerts.'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Award-winning designer with a passion for creating intuitive user experiences.',
      fullBio: 'Elena leads our design team with a human-centered approach to product development. With a background in cognitive psychology and design from RISD, she creates experiences that are not only beautiful but also deeply intuitive. Her work has won multiple Webby and Awwwards.',
      skills: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'elena@techeagles.com'
      },
      funFact: 'Elena is an avid scuba diver and underwater photographer.'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Full-stack developer with expertise in React, Node.js, and cloud architecture.',
      fullBio: 'David is our full-stack wizard who brings ideas to life with clean, efficient code. With over 10 years of experience and contributions to major open source projects, he ensures our solutions are robust, scalable, and maintainable. He specializes in React, Node.js, and AWS infrastructure.',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'david@techeagles.com'
      },
      funFact: 'David is a competitive chess player and has a national rating.'
    },
    {
      id: 5,
      name: 'Priya Patel',
      role: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Data wizard with expertise in predictive analytics and machine learning models.',
      fullBio: 'Priya transforms complex data into actionable insights that drive business decisions. With a Masters in Data Science from Columbia and experience at Bloomberg, she specializes in building predictive models and data visualization tools that make complex information accessible.',
      skills: ['Python', 'R', 'TensorFlow', 'Data Visualization'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'priya@techeagles.com'
      },
      funFact: 'Priya is a certified yoga instructor and teaches weekend classes.'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Infrastructure expert ensuring our systems are scalable, secure, and reliable.',
      fullBio: 'James architects and maintains our cloud infrastructure, ensuring maximum uptime and performance. With certifications in AWS, Azure, and Kubernetes, he implements CI/CD pipelines, monitoring solutions, and security protocols that keep our systems running smoothly at scale.',
      skills: ['Kubernetes', 'Docker', 'AWS', 'CI/CD'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'james@techeagles.com'
      },
      funFact: 'James is a homebrewer and makes his own craft beer.'
    },
    {
      id: 7,
      name: 'Olivia Martinez',
      role: 'Frontend Developer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Creative coder who builds beautiful, responsive user interfaces.',
      fullBio: 'Olivia specializes in creating engaging, accessible web experiences using the latest frontend technologies. With a background in design and development, she bridges the gap between visual design and technical implementation, ensuring pixel-perfect results across all devices.',
      skills: ['React', 'Vue.js', 'CSS/SCSS', 'Accessibility'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'olivia@techeagles.com'
      },
      funFact: 'Olivia is a talented illustrator and creates digital art in her free time.'
    },
    {
      id: 8,
      name: 'Marcus Johnson',
      role: 'Backend Developer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      bio: 'Server-side specialist building robust APIs and database architectures.',
      fullBio: 'Marcus architects the backend systems that power our applications. With expertise in distributed systems, database design, and API development, he ensures our solutions are performant, secure, and scalable. He has extensive experience with both SQL and NoSQL databases.',
      skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'marcus@techeagles.com'
      },
      funFact: 'Marcus is a licensed amateur radio operator and enjoys building antennas.'
    }
  ];

  // Team stats
  const teamStats = [
    { icon: Users, value: '25+', label: 'Team Members' },
    { icon: Award, value: '15', label: 'Years Combined Experience' },
    { icon: Calendar, value: '2018', label: 'Founded In' },
    { icon: MapPin, value: '4', label: 'Countries' },
    { icon: BookOpen, value: '50+', label: 'Certifications' }
  ];

  const toggleExpand = (id) => {
    if (expandedMember === id) {
      setExpandedMember(null);
    } else {
      setExpandedMember(id);
    }
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
              Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-cyan-500">Team</span>
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              Get to know the talented individuals behind TechEagles. Our diverse team of experts is passionate about creating innovative solutions that drive your business forward.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className={`py-12 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {teamStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className={`w-14 h-14 rounded-lg ${isDarkMode ? 'bg-violet-900/30' : 'bg-violet-100'} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className={`w-7 h-7 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`} />
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-900/30' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Talented Team</h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Each member brings unique skills and perspectives to create exceptional solutions.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className={`rounded-xl overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="relative group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-3">
                        <a 
                          href={member.social.linkedin} 
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-gray-800 text-cyan-400' : 'bg-white text-violet-600'} hover:scale-110 transition-transform`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a 
                          href={member.social.github} 
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-gray-800 text-cyan-400' : 'bg-white text-violet-600'} hover:scale-110 transition-transform`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a 
                          href={member.social.twitter} 
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-gray-800 text-cyan-400' : 'bg-white text-violet-600'} hover:scale-110 transition-transform`}
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a 
                          href={`mailto:${member.social.email}`} 
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-gray-800 text-cyan-400' : 'bg-white text-violet-600'} hover:scale-110 transition-transform`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{member.name}</h3>
                  <p className={`mb-3 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`}>{member.role}</p>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{member.bio}</p>
                  
                  <button
                    onClick={() => toggleExpand(member.id)}
                    className={`w-full py-2 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-gray-700 text-cyan-400 hover:bg-gray-600' : 'bg-gray-100 text-violet-600 hover:bg-gray-200'} transition-colors`}
                  >
                    {expandedMember === member.id ? (
                      <>
                        <span className="mr-1">Less</span>
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        <span className="mr-1">More</span>
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  
                  {expandedMember === member.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4"
                    >
                      <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{member.fullBio}</p>
                      
                      <div className="mb-4">
                        <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`}>Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, index) => (
                            <span 
                              key={index}
                              className={`px-3 py-1 rounded-full text-xs ${isDarkMode ? 'bg-violet-900/30 text-cyan-400' : 'bg-violet-100 text-violet-700'}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-violet-600'}`}>Fun Fact</h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{member.funFact}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Culture</h2>
              <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>
                  At TechEagles, we believe that great products are built by teams who care deeply about their work and each other. 
                  We foster a culture of collaboration, continuous learning, and innovation.
                </p>
                <p>
                  Our team members are encouraged to explore new technologies, share knowledge, and take on challenges that push 
                  the boundaries of what's possible. We value diversity of thought and background, which leads to more creative solutions.
                </p>
                <p>
                  Whether we're working on client projects or internal initiatives, we prioritize work-life balance and ensure 
                  our team has the resources and support they need to thrive both professionally and personally.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Team meeting" 
                className="rounded-lg shadow-lg h-48 w-full object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Team workshop" 
                className="rounded-lg shadow-lg h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Team celebration" 
                className="rounded-lg shadow-lg h-48 w-full object-cover mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-white/10 w-96 h-96 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Flock
          </h2>
          <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about technology and innovation. 
            If you're ready to take your career to new heights, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              View Open Positions
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeamPage;