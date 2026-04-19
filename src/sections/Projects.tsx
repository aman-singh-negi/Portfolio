import { ProjectCard } from '../components/ProjectCard';

const PROJECTS = [
  {
    id: 1,
    title: 'Neural Node',
    category: 'Full-stack System',
    description: 'A decentralized machine learning interface built with raw WebGL and real-time WebSocket data pipelines. Visualizes neural pathways in real-time.',
    techStack: ['React', 'Three.js', 'Node.js', 'WebSockets'],
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Void Interface',
    category: 'Creative Frontend',
    description: 'E-commerce platform for digital artifacts. Uses magnetic DOM interactions, fluid scroll behaviors, and complex layout orchestration.',
    techStack: ['Next.js', 'Framer Motion', 'Tailwind', 'Sanity'],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Quantum Ledger',
    category: 'Web3 / Fintech',
    description: 'Cryptocurrency portfolio tracker with an advanced neon UI. Features real-time price charting, 3D coin models, and secure auth capabilities.',
    techStack: ['React', 'D3.js', 'Firebase', 'Tailwind'],
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000&auto=format&fit=crop',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative z-10 w-full bg-dark/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 mt-12 flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8">
          <div>
            <span className="font-mono text-accent1 text-sm tracking-widest uppercase mb-4 block">
              [ SECURE DOSSIERS ]
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-white">
              Data Streams
            </h2>
          </div>
          <p className="text-muted font-mono text-sm max-w-sm mt-6 md:mt-0">
            Authorized access granted. Decrypting latest project case studies...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="h-[600px]">
              <ProjectCard 
                title={project.title}
                category={project.category}
                description={project.description}
                techStack={project.techStack}
                imageUrl={project.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;