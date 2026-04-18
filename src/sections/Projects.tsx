import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi';
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
    description: 'A full-stack inspection platform that uses AI to streamline evaluation workflows and improve review consistency across institutional audits.',
    technologies: ['TensorFlow', 'OpenCV', 'JavaScript', 'NLP'],
    githubUrl: 'https://github.com/Aksh2908/U.I.W.A',
    liveUrl: 'https://github.com/Aksh2908/U.I.W.A',
    imageUrl: project1Image,
    outcome: 'Automates complex review workflows',
    colSpan: 'md:col-span-2 lg:col-span-2',
  },
  {
    title: 'Lunar Landing Module',
    description: 'A reinforcement learning experiment designed to improve landing precision and policy control in LunarLander-v3.',
    technologies: ['PyTorch', 'RL', 'Python'],
    githubUrl: 'https://github.com/aman-singh-negi/Lunar-Lander',
    liveUrl: 'https://github.com/aman-singh-negi/Lunar-Lander',
    imageUrl: project2Image,
    outcome: 'Model-driven control depth',
  },
  {
    title: 'MoneyMate Finance',
    description: 'A personal finance experience for tracking income, expenses, savings, and billing through a cleaner product flow.',
    technologies: ['Node.js', 'MongoDB', 'CSS'],
    githubUrl: 'https://github.com/aman-singh-negi/Finance_Tracker',
    liveUrl: 'https://github.com/aman-singh-negi/Finance_Tracker',
    imageUrl: project3Image,
    outcome: 'Solid CRUD product execution',
  },
  {
    title: 'Drowsiness Detection',
    description: 'A real-time computer vision system that detects drowsiness through eye-closure and yawning signals.',
    technologies: ['OpenCV', 'CNN', 'Python'],
    githubUrl: 'https://github.com/aman-singh-negi/Drowsiness_Detection',
    liveUrl: 'https://github.com/aman-singh-negi/Drowsiness_Detection',
    imageUrl: project4Image,
    outcome: 'Real-world inference logic',
  },
  {
    title: 'Code Plagiarism Detection',
    description: 'A web application for detecting plagiarism signals in text and code submissions with analysis-heavy workflows.',
    technologies: ['React', 'Python', 'Flask'],
    githubUrl: 'https://github.com/aman-singh-negi/plagiarism-detector',
    liveUrl: 'https://github.com/aman-singh-negi/plagiarism-detector',
    imageUrl: project5Image,
    outcome: 'Analysis-focused developer tooling',
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
    <section id="projects" className="section-shell">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="display-eyebrow mb-4">Selected Work</p>
          <div className="section-kicker mb-4">Projects designed to carry signal</div>
          <h2 className="section-title">
            Engineering <span className="text-muted-foreground">with product instincts.</span>
          </h2>
          <p className="section-copy">
            A curated set of projects that show how I combine software engineering, AI workflows, and practical user-facing thinking.
          </p>
        </div>
        <a href="https://github.com/aman-singh-negi" target="_blank" rel="noopener noreferrer" className="btn-secondary group whitespace-nowrap">
          View GitHub
          <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10%' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={reduceMotion ? {} : itemVariants} className={`flex flex-col ${project.colSpan || ''}`}>
            <SpotlightCard className="bento-card h-full flex-col">
              <div className="relative mb-6 h-56 overflow-hidden rounded-[1.5rem] bg-muted md:h-64">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--background)]/90 via-[color:var(--background)]/15 to-transparent" />

                <div className="absolute inset-x-4 bottom-4 z-20 flex items-end justify-between gap-3">
                  <div className="glass-panel rounded-xl bg-[color:var(--bg-elevated)]/80 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-foreground">
                    {project.outcome}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-[color:var(--bg-elevated)]/80 p-2 text-foreground transition-all hover:bg-foreground hover:text-background" aria-label="View source">
                      <FiGithub size={16} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-[color:var(--bg-elevated)]/80 p-2 text-foreground transition-all hover:bg-foreground hover:text-background" aria-label="View project">
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative z-20 flex flex-1 flex-col justify-between gap-4">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.04em] text-foreground">{project.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-muted-foreground">{project.description}</p>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="rounded-full border border-border/70 bg-white/30 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-foreground dark:bg-white/5">
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
