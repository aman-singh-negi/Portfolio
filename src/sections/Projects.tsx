import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';
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
  outcome: string;
  colSpan?: string;
};

const projects: Project[] = [
  {
    title: 'AI-Driven Institutional Inspection',
    description: 'A full-stack inspection platform using AI to streamline evaluation workflows and improve review consistency.',
    technologies: ['TensorFlow', 'OpenCV', 'JavaScript', 'NLP'],
    githubUrl: 'https://github.com/Aksh2908/U.I.W.A',
    liveUrl: 'https://github.com/Aksh2908/U.I.W.A',
    imageUrl: project1Image,
    outcome: 'Automating complex review tasks.',
    colSpan: 'md:col-span-2 lg:col-span-2',
  },
  {
    title: 'Lunar Landing Module',
    description: 'A reinforcement learning experiment built to improve landing precision in the LunarLander-v3 environment.',
    technologies: ['PyTorch', 'RL', 'Python'],
    githubUrl: 'https://github.com/aman-singh-negi/Lunar-Lander',
    liveUrl: 'https://github.com/aman-singh-negi/Lunar-Lander',
    imageUrl: project2Image,
    outcome: 'Model-driven control depth.',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    title: 'MoneyMate Finance',
    description: 'A personal finance app for managing income, expenses, savings, and bill visibility through a clean UI.',
    technologies: ['Node.js', 'MongoDB', 'CSS'],
    githubUrl: 'https://github.com/aman-singh-negi/Finance_Tracker',
    liveUrl: 'https://github.com/aman-singh-negi/Finance_Tracker',
    imageUrl: project3Image,
    outcome: 'Solid CRUD architecture.',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    title: 'Drowsiness Detection',
    description: 'A real-time vision system identifying drowsiness signals via eye closure and yawning.',
    technologies: ['OpenCV', 'CNN', 'Python'],
    githubUrl: 'https://github.com/aman-singh-negi/Drowsiness_Detection',
    liveUrl: 'https://github.com/aman-singh-negi/Drowsiness_Detection',
    imageUrl: project4Image,
    outcome: 'Real-world inference logic.',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
  {
    title: 'Code Plagiarism Detection',
    description: 'A web application that detects plagiarism signals in text and source code submissions effectively.',
    technologies: ['React', 'Python', 'Flask'],
    githubUrl: 'https://github.com/aman-singh-negi/plagiarism-detector',
    liveUrl: 'https://github.com/aman-singh-negi/plagiarism-detector',
    imageUrl: project5Image,
    outcome: 'Analysis-heavy workflows.',
    colSpan: 'md:col-span-1 lg:col-span-1',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div className="max-w-2xl">
          <div className="kicker mb-4">Selected Work</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground mb-4">
            Engineering <span className="text-muted-foreground font-semibold">meets Product.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            A curated look at my best efforts in combining software engineering, AI workflows, and practical user experience thinking.
          </p>
        </div>
        <a href="https://github.com/aman-singh-negi" target="_blank" rel="noopener noreferrer" className="btn-secondary group whitespace-nowrap cursor-hover">
          View GitHub
          <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={reduceMotion ? {} : itemVariants}
            className={`flex flex-col ${project.colSpan || ''}`}
          >
            <SpotlightCard className="bento-card h-full flex flex-col">
              {/* Image Section */}
              <div className="relative h-48 md:h-64 mb-6 rounded-xl overflow-hidden shadow-sm bg-muted transform-gpu">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end relative z-20">
                  <div className="glass-panel text-foreground px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide shadow-md bg-background/50">
                    {project.outcome}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-hover p-2 rounded-full bg-background/50 backdrop-blur-md border border-border text-foreground hover:bg-neon-violet hover:text-white hover:border-transparent transition-all shadow-md" aria-label="View Source">
                      <FiGithub size={16} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="cursor-hover p-2 rounded-full bg-background/50 backdrop-blur-md border border-border text-foreground hover:bg-neon-cyan hover:text-white hover:border-transparent transition-all shadow-md" aria-label="View App">
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col flex-1 justify-between gap-4 relative z-20">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-violet group-hover:to-neon-cyan transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded border border-border/50 text-foreground bg-muted/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
