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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass-card rounded-[2rem] p-8 md:p-10 overflow-hidden h-full flex flex-col interactive"
      onMouseMove={onMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(34, 211, 238, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 flex-grow">
        <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-500 tracking-tight">{project.title}</h3>
        <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.map((tech: string) => (
            <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-200">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 flex items-center gap-6 mt-auto pt-6 border-t border-white/10">
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-400 hover:text-white transition-colors interactive">
          <FiGithub size={18} /> Source
        </a>
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-gray-400 hover:text-cyan-400 transition-colors interactive">
          <FiExternalLink size={18} /> View Live
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full py-32 px-6 relative">
      <div className="ambient-glow top-0 left-0 bg-[radial-gradient(circle,rgba(34,211,238,0.05)_0%,rgba(0,0,0,0)_60%)] translate-x-[-30%] translate-y-[10%]" />
      
      <div className="container max-w-6xl mx-auto">
        <motion.div 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            A curated selection of my recent engineering projects. Showcasing scalable architecture and premium front-end experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;