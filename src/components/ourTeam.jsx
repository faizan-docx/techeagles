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
      name: 'Amaan Naseh',
      role: 'Chairperson',
      image: '/team-images/amaan_naseh.png',
      bio: 'Leading TechEagles with vision and strategic direction for innovation and growth.',
      fullBio: 'Amaan serves as the Chairperson of TechEagles, bringing strategic leadership and vision to guide the organization towards technological excellence. With a passion for innovation and team building, Amaan ensures TechEagles remains at the forefront of technological advancement.',
      skills: ['Strategic Leadership', 'Team Management', 'Innovation', 'Vision Planning'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'amaan@techeagles.com'
      },
      funFact: 'Amaan is passionate about mentoring young tech enthusiasts and building inclusive communities.'
    },
    {
      id: 2,
      name: 'Abhishek',
      role: 'Secretary',
      image: '/team-images/abhishek.png',
      bio: 'Managing operations and ensuring smooth coordination across all TechEagles activities.',
      fullBio: 'Abhishek serves as the Secretary of TechEagles, handling administrative duties and ensuring effective communication across all departments. With excellent organizational skills and attention to detail, Abhishek keeps the team aligned and operations running smoothly.',
      skills: ['Administration', 'Communication', 'Organization', 'Coordination'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'abhishek@techeagles.com'
      },
      funFact: 'Abhishek enjoys documenting processes and creating efficient workflows for the team.'
    },
    {
      id: 3,
      name: 'Harshit Mehra',
      role: 'Vision Lead',
      image: '/team-images/harshit_mehra.png',
      bio: 'Shaping the future direction and strategic vision of TechEagles.',
      fullBio: 'Harshit leads the Vision team, responsible for defining the long-term strategic direction of TechEagles. With a forward-thinking approach and deep understanding of technology trends, Harshit helps shape the organization\'s goals and future initiatives.',
      skills: ['Strategic Planning', 'Vision Development', 'Technology Trends', 'Innovation'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'harshit@techeagles.com'
      },
      funFact: 'Harshit enjoys researching emerging technologies and their potential impact on society.'
    },
    {
      id: 4,
      name: 'Faizan Ahmed',
      role: 'Web Development Lead',
      image: '/team-images/faizan_ahmed.png',
      bio: 'Leading web development initiatives with expertise in modern frameworks and technologies.',
      fullBio: 'Faizan heads the Web Development team at TechEagles, specializing in creating responsive, scalable web applications. With deep knowledge of modern web technologies and frameworks, Faizan ensures our web solutions are cutting-edge and user-friendly.',
      skills: ['React', 'Node.js', 'JavaScript', 'Web Architecture'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'faizan@techeagles.com'
      },
      funFact: 'Faizan loves exploring new web technologies and often experiments with the latest frameworks.'
    },
    {
      id: 5,
      name: 'Shreya Goel',
      role: 'UI/UX & Content Lead',
      image: '/team-images/shreya_goel.png',
      bio: 'Creating beautiful user experiences and compelling content that engages and inspires.',
      fullBio: 'Shreya leads both UI/UX design and content creation at TechEagles. With a keen eye for design and excellent writing skills, Shreya ensures our products are not only functional but also visually appealing and our content resonates with our audience.',
      skills: ['UI/UX Design', 'Content Writing', 'Figma', 'User Research'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'shreya@techeagles.com'
      },
      funFact: 'Shreya is an avid reader and often draws inspiration from literature for her design work.'
    },
    {
      id: 6,
      name: 'Divyansh Mogra',
      role: 'App Development Lead',
      image: '/team-images/divyansh_mogra.png',
      bio: 'Building innovative mobile applications that deliver exceptional user experiences.',
      fullBio: 'Divyansh leads the App Development team, specializing in creating cross-platform mobile applications. With expertise in React Native, Flutter, and native development, Divyansh ensures our mobile solutions are performant and user-friendly across all platforms.',
      skills: ['React Native', 'Flutter', 'Mobile Development', 'Cross-platform'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'divyansh@techeagles.com'
      },
      funFact: 'Divyansh enjoys solving complex mobile development challenges and optimizing app performance.'
    },
    {
      id: 7,
      name: 'Saee Singh',
      role: 'AI/ML Lead',
      image: '/team-images/saee_singh.png',
      bio: 'Pioneering artificial intelligence and machine learning solutions for the future.',
      fullBio: 'Saee leads the AI/ML initiatives at TechEagles, working on cutting-edge artificial intelligence and machine learning projects. With expertise in deep learning, neural networks, and data science, Saee develops intelligent solutions that solve real-world problems.',
      skills: ['Machine Learning', 'Deep Learning', 'Python', 'Data Science'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'saee@techeagles.com'
      },
      funFact: 'Saee is fascinated by the intersection of AI and human creativity, often exploring generative AI applications.'
    },
    {
      id: 8,
      name: 'Manjot Singh',
      role: 'DevOps Lead',
      image: '/team-images/manjot_singh.png',
      bio: 'Ensuring robust infrastructure and seamless deployment pipelines for all projects.',
      fullBio: 'Manjot leads the DevOps team, responsible for infrastructure management, CI/CD pipelines, and system reliability. With expertise in cloud platforms, containerization, and automation, Manjot ensures our systems are scalable, secure, and efficient.',
      skills: ['Kubernetes', 'Docker', 'AWS', 'CI/CD'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'manjot@techeagles.com'
      },
      funFact: 'Manjot enjoys automating repetitive tasks and building efficient deployment workflows.'
    },
    {
      id: 9,
      name: 'Daksh Verma',
      role: 'Cybersecurity Lead',
      image: '/team-images/daksh_verma.png',
      bio: 'Protecting our digital assets and ensuring security across all TechEagles systems.',
      fullBio: 'Daksh leads the Cybersecurity team, responsible for protecting TechEagles and our clients from digital threats. With expertise in ethical hacking, security protocols, and risk assessment, Daksh ensures our systems and data remain secure in an ever-evolving threat landscape.',
      skills: ['Ethical Hacking', 'Security Protocols', 'Risk Assessment', 'Penetration Testing'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'daksh@techeagles.com'
      },
      funFact: 'Daksh participates in cybersecurity competitions and enjoys staying updated with the latest security trends.'
    },
    {
      id: 10,
      name: 'Sukhmani Kaur',
      role: 'Operations Lead',
      image: '/team-images/sukhmani_kaur.png',
      bio: 'Streamlining operations and ensuring efficient project delivery across all teams.',
      fullBio: 'Sukhmani leads the Operations team, focusing on process optimization and project coordination. With excellent organizational skills and attention to detail, Sukhmani ensures all TechEagles projects are delivered on time and meet quality standards.',
      skills: ['Project Management', 'Process Optimization', 'Team Coordination', 'Quality Assurance'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'sukhmani@techeagles.com'
      },
      funFact: 'Sukhmani enjoys creating detailed project timelines and finding ways to improve team efficiency.'
    },
    {
      id: 11,
      name: 'Pakhi Sharma',
      role: 'Training Lead',
      image: '/team-images/pakhi_sharma.png',
      bio: 'Developing and delivering comprehensive training programs for skill development.',
      fullBio: 'Pakhi leads the Training initiatives at TechEagles, designing and delivering educational programs that help team members and community members develop their technical skills. With a passion for teaching and learning, Pakhi creates engaging training content and workshops.',
      skills: ['Training Development', 'Educational Design', 'Mentoring', 'Skill Assessment'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'pakhi@techeagles.com'
      },
      funFact: 'Pakhi loves creating interactive learning experiences and often incorporates gamification into training programs.'
    },
    {
      id: 12,
      name: 'Chirag Vohra',
      role: 'PR & Marketing Lead',
      image: '/team-images/chirag_vohra.png',
      bio: 'Building TechEagles brand presence and managing public relations and marketing strategies.',
      fullBio: 'Chirag leads the PR & Marketing team, responsible for building TechEagles\' brand presence and managing communication with the public and media. With expertise in digital marketing, social media, and brand management, Chirag ensures TechEagles maintains a strong and positive public image.',
      skills: ['Digital Marketing', 'Brand Management', 'Social Media', 'Public Relations'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'chirag@techeagles.com'
      },
      funFact: 'Chirag enjoys creating engaging social media content and building community connections.'
    },
    {
      id: 13,
      name: 'Sandeep Singh',
      role: 'S.D.E\'s Advisor',
      image: '/team-images/sandeep_singh.png',
      bio: 'Providing strategic guidance and mentorship for software development engineering initiatives.',
      fullBio: 'Sandeep serves as the Software Development Engineering Advisor at TechEagles, bringing extensive experience in software architecture and development practices. With deep technical expertise and industry knowledge, Sandeep guides the team in implementing best practices and cutting-edge development methodologies.',
      skills: ['Software Architecture', 'Development Practices', 'Technical Mentoring', 'Code Review'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'sandeep@techeagles.com'
      },
      funFact: 'Sandeep is passionate about clean code principles and enjoys mentoring junior developers.'
    },
    {
      id: 14,
      name: 'Deepak',
      role: 'Cybersecurity Advisor',
      image: '/team-images/deepak.png',
      bio: 'Expert guidance on cybersecurity strategies and implementation of robust security measures.',
      fullBio: 'Deepak serves as the Cybersecurity Advisor at TechEagles, providing expert guidance on security strategies and risk management. With extensive experience in cybersecurity frameworks and threat analysis, Deepak helps ensure TechEagles maintains the highest standards of digital security and compliance.',
      skills: ['Security Frameworks', 'Risk Assessment', 'Threat Analysis', 'Compliance'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'deepak@techeagles.com'
      },
      funFact: 'Deepak enjoys staying updated with the latest cybersecurity trends and threat intelligence.'
    },
    {
      id: 15,
      name: 'Kali Singh',
      role: 'Software Management Advisor',
      image: '/team-images/kali_singh.png',
      bio: 'Strategic oversight and guidance for software project management and team coordination.',
      fullBio: 'Kali serves as the Software Management Advisor at TechEagles, providing strategic oversight for project management and team coordination. With expertise in agile methodologies and software lifecycle management, Kali ensures projects are delivered efficiently while maintaining high quality standards.',
      skills: ['Project Management', 'Agile Methodologies', 'Team Coordination', 'Quality Assurance'],
      social: {
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        github: 'https://github.com',
        email: 'kali@techeagles.com'
      },
      funFact: 'Kali enjoys optimizing development workflows and implementing efficient project management practices.'
    }
  ];

  // Team stats
  const teamStats = [
    { icon: Users, value: '15', label: 'Team Members' },
    { icon: Award, value: '10+', label: 'Years Combined Experience' },
    { icon: Calendar, value: '2025', label: 'Founded In' },
    { icon: MapPin, value: '1', label: 'Countries' },
    { icon: BookOpen, value: '20+', label: 'Certifications' }
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

          {/* Top Row - Leadership Team */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            {teamMembers.slice(0, 3).map((member) => (
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
                
                <div className="p-6 text-center">
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
                        <div className="flex flex-wrap gap-2 justify-center">
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

          {/* Rest of the Team */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {teamMembers.slice(3).map((member) => (
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
                
                <div className="p-6 text-center">
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
                        <div className="flex flex-wrap gap-2 justify-center">
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