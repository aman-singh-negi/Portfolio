import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

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
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: '/placeholder.svg',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team workspaces.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: '/placeholder.svg',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that provides current conditions and forecasts for locations worldwide.',
    technologies: ['JavaScript', 'Weather API', 'Chart.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: '/placeholder.svg',
  },
  {
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for tracking social media performance across multiple platforms.',
    technologies: ['Vue.js', 'Express', 'D3.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    imageUrl: '/placeholder.svg',
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -10 }}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent1/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent2/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="h-40 sm:h-48 bg-gradient-to-br from-accent1/10 to-accent2/10 dark:from-accent1/20 dark:to-accent2/20 overflow-hidden relative">
        <div className="absolute inset-0 bg-light/10 dark:bg-dark/10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
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
            href="https://github.com/amanpandey-03" 
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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      className="bg-light/50 dark:bg-dark/50 backdrop-blur-lg rounded-2xl overflow-hidden
                border border-gray-200/50 dark:border-gray-800/50 hover:border-accent1/50 dark:hover:border-accent1/50
                shadow-lg hover:shadow-xl hover:shadow-accent1/20 transition-all duration-500
                group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -10 }}
    >
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent1/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent2/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="h-40 sm:h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="flex gap-4">
            <motion.a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-light/80 dark:bg-dark/80 rounded-full text-accent2 hover:text-white hover:bg-accent2 transition-colors duration-300 backdrop-blur-sm"
              aria-label={`GitHub repository for ${project.title}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub size={20} />
            </motion.a>
            
            <motion.a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-light/80 dark:bg-dark/80 rounded-full text-accent1 hover:text-white hover:bg-accent1 transition-colors duration-300 backdrop-blur-sm"
              aria-label={`Live demo for ${project.title}`}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiExternalLink size={20} />
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <motion.h3 
          className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-accent1 dark:group-hover:text-accent1 transition-colors duration-300"
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
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {project.technologies.map((tech, techIndex) => (
            <motion.span 
              key={tech} 
              className="px-3 py-1 text-xs font-medium bg-accent1/10 text-accent1 rounded-full border border-accent1/20 hover:bg-accent1/20 transition-colors duration-300"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + (techIndex * 0.1) }}
              whileHover={{ y: -2 }}
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

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen py-20 snap-start relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-accent1/10 rounded-full blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-accent2/10 rounded-full blur-3xl opacity-70 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block mb-4 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded-full blur-xl opacity-70"></div>
            <h2 className="text-3xl md:text-5xl font-bold relative">
              <span className="gradient-text">
                Projects
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent1/5 rounded-full blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent2/5 rounded-full blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative z-10">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
            <ViewMoreCard index={projects.length} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;