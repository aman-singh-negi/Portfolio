import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiChevronDown } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center px-6 pt-20 pb-10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between z-10">
        
        {/* Text Content */}
        <motion.div 
          className="w-full lg:w-3/5 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4 inline-flex items-center space-x-2 glass px-4 py-1.5 rounded-full border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium tracking-wider text-primary uppercase">Available for work</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
            Hi, I'm <br/>
            <span className="text-gradient">Aman Singh Negi</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-medium text-gray-400 mb-6">
            Competitive Programmer & <br/>
            <span className="text-white">Full Stack Developer</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-500 max-w-lg mb-10 leading-relaxed">
            I craft visually stunning, highly interactive web experiences and solve complex algorithmic problems. Bridging the gap between design and logic.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary interactive">View Projects</a>
            <a href="#contact" className="btn-outline interactive">Contact Me</a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-6 mt-12">
            <a href="https://github.com/amansingh331" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors interactive">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/amansingh331" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0a66c2] transition-colors interactive">
              <FiLinkedin size={24} />
            </a>
            <a href="https://leetcode.com/amansingh331" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#ffa116] transition-colors interactive">
              <SiLeetcode size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Core Placeholder / Artistic element */}
        <motion.div 
          className="w-full lg:w-2/5 mt-16 lg:mt-0 flex justify-center items-center relative perspective-1000"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            {/* Holographic rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30 shadow-[0_0_50px_rgba(0,255,204,0.1)]" style={{ transform: 'rotateX(60deg) rotateY(0deg)', animation: 'spin 10s linear infinite' }}></div>
            <div className="absolute inset-0 rounded-full border border-accent/40 shadow-[0_0_50px_rgba(112,0,255,0.1)]" style={{ transform: 'rotateX(60deg) rotateY(60deg)', animation: 'spin 15s linear infinite reverse' }}></div>
            <div className="absolute inset-0 rounded-full border border-secondary/30" style={{ transform: 'rotateX(60deg) rotateY(120deg)', animation: 'spin 20s linear infinite' }}></div>
            
            {/* Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary animate-glow"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <FiChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;