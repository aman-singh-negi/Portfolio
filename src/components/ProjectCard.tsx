import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  link?: string;
  imageUrl?: string;
}

export const ProjectCard = ({ title, category, description, techStack, link, imageUrl }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position relative to the card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse position relative to the center of the card (-0.5 to 0.5) for tilt parallax
  const xPct = useMotionValue(0);
  const yPct = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothXPct = useSpring(xPct, springConfig);
  const smoothYPct = useSpring(yPct, springConfig);

  // Mapping mouse position to rotation values
  const rotateX = useTransform(smoothYPct, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothXPct, [-0.5, 0.5], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    mouseX.set(x);
    mouseY.set(y);
    
    xPct.set(x / width - 0.5);
    yPct.set(y / height - 0.5);
  }

  function handleMouseLeave() {
    xPct.set(0);
    yPct.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative flex flex-col justify-between rounded-xl border border-white/5 bg-obsidian p-6 shadow-2xl h-full w-full max-w-md mx-auto cursor-none"
    >
      {/* Glare/Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 240, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* 3D Content Container */}
      <div 
        style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}
        className="flex flex-col h-full z-20"
      >
        <div className="mb-6 h-48 w-full rounded-lg bg-[#111113] overflow-hidden border border-white/5">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center. opacity-30 group-hover:opacity-60 transition duration-500">
               <span className="font-mono text-xs text-muted">[IMAGE_DATA_MISSING]</span>
            </div>
          )}
        </div>
        
        <div className="flex-grow">
          <p className="text-xs text-accent1 font-mono uppercase tracking-widest mb-2 font-bold z-20">{category}</p>
          <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wider mb-3 leading-tight z-20">
            {title}
          </h3>
          <p className="text-sm text-muted font-body leading-relaxed mb-6 z-20">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto z-20">
          {techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 text-[10px] font-mono text-accent2 border border-accent2/20 bg-accent2/5 rounded uppercase">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Subtle bottom glow line */}
      <div className="absolute bottom-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-accent1/50 to-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default ProjectCard;
