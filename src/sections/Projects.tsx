import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiLayers } from 'react-icons/fi';

// Import project images
import project1Image from '../assets/Project1.jpeg';
import project2Image from '../assets/Project2.webp';
import project3Image from '../assets/Project3.jpeg';
import project4Image from '../assets/Project4.jpeg';
import project5Image from '../assets/Project5.jpeg';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
};

const projects: Project[] = [
  {
    title: 'AI-Driven Institutional Inspection System',
    description: 'Built a full-stack AI solution to automate institutional inspections using deep learning and web technologies.',
    technologies: ['TensorFlow', 'NLP', 'OpenCV','JavaScript'],
    githubUrl: 'https://github.com/Aksh2908/U.I.W.A',
    liveUrl: 'https://github.com/Aksh2908/U.I.W.A',
    imageUrl: project1Image,
  },
  {
    title: 'Lunar Landing Module using Deep Learning and Neural Networks ',
    description: 'Implements a reinforcement learning model for precise lunar landings in LunarLander-v3.',
    technologies: ['TensorFlow', 'NLP', 'OpenCV','PyTorch'],
    githubUrl: 'https://github.com/aman-singh-negi/Lunar-Lander',
    liveUrl: 'https://github.com/aman-singh-negi/Lunar-Lander',
    imageUrl: project2Image,
  },
  {
    title: 'MoneyMate-Personal Finance Tracker',
    description: 'Built a full-stack finance tracker web app to manage income, expenses, bills, and savings.',
    technologies: ['Node.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/aman-singh-negi/Finance_Tracker',
    liveUrl: 'https://github.com/aman-singh-negi/Finance_Tracker',
    imageUrl: project3Image,
  },
  {
    title: 'Drowsiness Detection System',
    description: 'Developed a real-time system to detect drowsiness through eye closure, yawning, and head nodding.',
    technologies: ['Python', 'OpenCV', 'CNN', 'TensorFlow'],
    githubUrl: 'https://github.com/aman-singh-negi/Drowsiness_Detection',
    liveUrl: 'https://github.com/aman-singh-negi/Drowsiness_Detection',
    imageUrl: project4Image,
  },
  {
    title: 'Plagarism Detection for Text and Code',
    description: 'A web application that detects plagiarism in text and code files.',
    technologies: ['React', 'Python', 'Flask'],
    githubUrl: 'https://github.com/aman-singh-negi/plagiarism-detector',
    liveUrl: 'https://github.com/aman-singh-negi/plagiarism-detector',
    imageUrl: project5Image,
  },
];

// View More Projects Card component
const ViewMoreCard = ({ index }: { index: number }) => {
  return (
    <motion.div
      className="bg-light/50 dark:bg-dark/50 backdrop-blur-lg rounded-2xl overflow-hidden
                border border-gray-200/50 dark:border-gray-800/50 hover:border-accent1/50 dark:hover:border-accent1/50
                shadow-lg hover:shadow-xl hover:shadow-accent1/20 transition-all duration-500
                group relative"
      initial={{ opacity: 0, y: 30 }} // Reduced distance
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, // Slightly faster
        delay: index * 0.05, // Reduced delay
        ease: "easeOut" // Smoother easing
      }}
      viewport={{ once: true, margin: '-50px' }} // Improved viewport detection
      whileHover={{ y: -5 }} // Reduced movement for smoother hover
      style={{ willChange: "transform, opacity" }} // Performance hint
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent1/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent2/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="h-40 sm:h-48 bg-gradient-to-br from-accent1/10 to-accent2/10 dark:from-accent1/20 dark:to-accent2/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-light/10 dark:bg-dark/10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.1,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.05, rotate: 3 }} // Reduced scale and rotation
            style={{ willChange: "transform" }} // Performance hint
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative text-4xl font-bold text-white bg-light/10 dark:bg-dark/10 p-5 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
              <FiGithub size={30} />
            </div>
          </motion.div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent1 rounded-full opacity-50 animate-float"></div>
        <div className="absolute top-3/4 left-2/3 w-3 h-3 bg-accent2 rounded-full opacity-50 animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-30 animate-float animation-delay-2000"></div>
      </div>
      
      <div className="p-6 text-center relative z-10">
        <motion.h3 
          className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-accent1 dark:group-hover:text-accent1 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          View More Projects
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Explore my complete portfolio with additional projects and case studies.
        </motion.p>
        
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <motion.a 
            href="https://github.com/aman-singh-negi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative px-8 py-3 overflow-hidden group bg-gradient-to-r from-accent1 to-accent2 text-white rounded-full
                      hover:shadow-lg hover:shadow-accent1/30 transition-all duration-300"
            aria-label="View more projects on GitHub profile"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button background animation */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent2 to-accent1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            
            {/* Button text */}
            <span className="relative flex items-center justify-center gap-2">
              View All
              <FiExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Update the ProjectCard component
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    // In your ProjectCard component
    <motion.div
      className="glass-morphism rounded-2xl overflow-hidden
                border border-gray-200/20 dark:border-gray-800/20 hover:border-accent1/30 dark:hover:border-accent1/30
                shadow-lg hover:shadow-xl hover:shadow-accent1/10 transition-all duration-500
                group relative animate-shimmer flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }} // Reduced distance
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, // Slightly faster
        delay: index * 0.05, // Reduced delay between items
        ease: "easeOut" // Smoother easing
      }}
      viewport={{ once: true, margin: '-50px' }} // Improved viewport detection
      whileHover={{ y: -5, scale: 1.01 }} // Reduced movement for smoother hover
      style={{ willChange: "transform, opacity" }} // Performance hint
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent1/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent2/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="h-40 sm:h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-accent1/30 to-accent2/30 mix-blend-overlay z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.8 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:12px_12px] mix-blend-overlay"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Animated icons */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center z-20 backdrop-blur-sm bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex gap-4">
                <motion.a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-light/90 dark:bg-dark/90 rounded-full text-accent2 hover:text-white hover:bg-accent2 transition-colors duration-300 backdrop-blur-sm shadow-lg"
                  aria-label={`GitHub repository for ${project.title}`}
                  initial={{ y: 15, opacity: 0 }} // Reduced distance
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 15, opacity: 0 }} // Reduced distance
                  transition={{ 
                    duration: 0.25, // Faster transition
                    delay: 0.05, // Reduced delay
                    ease: "easeOut" // Smoother easing
                  }}
                  whileHover={{ scale: 1.05, rotate: 3 }} // Reduced scale and rotation
                  whileTap={{ scale: 0.95 }} // Less aggressive scale
                  style={{ willChange: "transform" }} // Performance hint
                >
                  <FiGithub size={20} />
                </motion.a>
                
                <motion.a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-light/90 dark:bg-dark/90 rounded-full text-accent1 hover:text-white hover:bg-accent1 transition-colors duration-300 backdrop-blur-sm shadow-lg"
                  aria-label={`GitHub repository for ${project.title}`}
                  initial={{ y: 15, opacity: 0 }} // Reduced distance
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 15, opacity: 0 }} // Reduced distance
                  transition={{ 
                    duration: 0.25, // Faster transition
                    delay: 0.1, // Reduced delay
                    ease: "easeOut" // Smoother easing
                  }}
                  whileHover={{ scale: 1.05, rotate: -3 }} // Reduced scale and rotation
                  whileTap={{ scale: 0.95 }} // Less aggressive scale
                  style={{ willChange: "transform" }} // Performance hint
                >
                  <FiExternalLink size={20} />
                </motion.a>
                
                <motion.a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-light/90 dark:bg-dark/90 rounded-full text-accent3 hover:text-white hover:bg-accent3 transition-colors duration-300 backdrop-blur-sm shadow-lg"
                  aria-label={`GitHub repository for ${project.title}`}
                  initial={{ y: 15, opacity: 0 }} // Reduced distance
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 15, opacity: 0 }} // Reduced distance
                  transition={{ 
                    duration: 0.25, // Faster transition
                    delay: 0.15, // Reduced delay
                    ease: "easeOut" // Smoother easing
                  }}
                  whileHover={{ scale: 1.05, rotate: 3 }} // Reduced scale and rotation
                  whileTap={{ scale: 0.95 }} // Less aggressive scale
                  style={{ willChange: "transform" }} // Performance hint
                >
                  <FiCode size={20} />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="p-6 relative z-10">
        {/* Animated title with gradient effect */}
        <motion.h3 
          className="text-xl font-bold mb-2 bg-gradient-to-r from-accent1 to-accent2 bg-clip-text text-transparent group-hover:from-accent2 group-hover:to-accent1 transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 dark:text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {project.description}
        </motion.p>
        
        {/* Tech stack with icon */}
        <div className="flex items-center mb-3">
          <FiLayers className="text-accent1 mr-2" />
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Tech Stack</span>
        </div>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {project.technologies.map((tech, techIndex) => (
            <motion.span 
              key={tech} 
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-accent1/10 to-accent2/10 text-gray-700 dark:text-gray-200 rounded-full border border-accent1/20 hover:border-accent1/50 transition-all duration-300 shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + (techIndex * 0.1) }}
              whileHover={{ y: -2, scale: 1.05, backgroundColor: 'rgba(var(--accent1-rgb), 0.2)' }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen py-20 snap-start relative overflow-hidden"
    >
      {/* UnicornStudio 3D Component */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <div data-us-project="GeOZHeurXizQc14G9hfS" style={{width: '100%', height: '100%'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }} // Reduced distance
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }} // Faster and smoother
          viewport={{ once: true, margin: "-50px" }} // Improved viewport detection
          style={{ willChange: "opacity, transform" }} // Performance hint
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 animate-gradient" // Updated class
            initial={{ opacity: 0, y: 15 }} // Reduced distance
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }} // Faster and smoother
            viewport={{ once: true, margin: "-50px" }} // Improved viewport detection
            style={{ willChange: "opacity, transform" }} // Performance hint
          >
            My Projects
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-accent1 to-accent2 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.6, delay: 0.2 }} // Slightly faster with less delay
            viewport={{ once: true, margin: "-50px" }} // Improved viewport detection
            style={{ willChange: "width" }} // Performance hint
          />
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6 text-lg"
            initial={{ opacity: 0, y: 15 }} // Reduced distance
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }} // Faster with less delay
            viewport={{ once: true, margin: "-50px" }} // Improved viewport detection
            style={{ willChange: "opacity, transform" }} // Performance hint
          >
            Here are some of my recent projects. Each project is a unique piece of development.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }} // Reduced distance
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }} // Faster transition
          style={{ willChange: "opacity, transform" }} // Performance hint
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent1/5 rounded-full blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent2/5 rounded-full blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative z-10">
            {/* Animated grid lines */}
            <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 opacity-10 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="border border-dashed border-accent1/30 rounded-2xl"
                  initial={{ opacity: 0, scale: 0.95 }} // Less scale change
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.4, // Faster transition
                    delay: i * 0.05, // Reduced delay between items
                    ease: "easeOut" // Smoother easing
                  }}
                  style={{ willChange: "opacity, transform" }} // Performance hint
                />
              ))}
            </div>
            <AnimatePresence>
              {isVisible && projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
              {isVisible && (
                <motion.div
                  key="view-more"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: projects.length * 0.1 }}
                >
                  <ViewMoreCard index={projects.length} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;