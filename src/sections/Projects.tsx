import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { MouseEvent } from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and secure payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application enabling real-time updates and seamless team workspaces.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautifully designed weather application providing current conditions and accurate forecasts worldwide.',
    technologies: ['JavaScript', 'Weather API', 'Chart.js'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A comprehensive analytics dashboard for tracking social media performance across multiple platforms in real-time.',
    technologies: ['Vue.js', 'Express', 'D3.js'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative glass-card rounded-3xl p-8 overflow-hidden h-full flex flex-col interactive"
      onMouseMove={onMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 255, 204, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 flex-grow">
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech: string) => (
            <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
          <FiGithub /> Code
        </a>
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors">
          <FiExternalLink /> Live Demo
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work. Real-world solutions built with modern technology stacks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;