import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import HeroObject3D from '../components/HeroObject3D';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center px-6 pt-20 pb-10 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="ambient-glow top-0 left-0 translate-x-[-20%] translate-y-[-20%]" />
      <div className="ambient-glow bottom-0 right-0 bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,rgba(0,0,0,0)_70%)] translate-x-[20%] translate-y-[20%]" />

      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between z-10">
        
        {/* Text Content */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col items-start text-left z-10 pointer-events-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center space-x-2 glass px-4 py-2 rounded-full border border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
            <span className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">Available for impact</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-[1.1]">
            Aman <br/>
            <span className="text-gradient">Singh Negi</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-medium text-gray-400 mb-8 tracking-tight">
            Competitive Programmer <span className="text-white opacity-20">|</span> <br className="hidden md:block"/>
            <span className="text-white">Full Stack Developer</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 max-w-lg mb-12 leading-relaxed font-light">
            Crafting extremely modern web experiences and conquering algorithmic challenges. Transforming logic into high-end digital reality.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pointer-events-auto">
            <a href="#projects" className="btn-primary interactive">View Work</a>
            <a href="https://drive.google.com/open?id=1prx7wtQJdo9aTFeP0Wo6XmYVF8wigora&usp=drive_fs" target="_blank" rel="noreferrer" className="btn-outline interactive flex items-center gap-2">
              <FiFileText /> Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-8 mt-14 pointer-events-auto">
            <a href="https://github.com/aman-singh-negi" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors interactive group relative">
              <FiGithub size={28} />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-cyan-400">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/amansingh331" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#0a66c2] transition-colors interactive group relative">
              <FiLinkedin size={28} />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[#0a66c2]">LinkedIn</span>
            </a>
            <a href="https://leetcode.com/amansinghnegi" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#ffa116] transition-colors interactive group relative">
              <SiLeetcode size={28} />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[#ffa116]">LeetCode</span>
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Interactive Object */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen absolute lg:relative bottom-0 right-0 z-0">
           <HeroObject3D />
           <div className="absolute bottom-10 right-10 text-xs text-gray-500 font-mono tracking-widest hidden lg:block opacity-50 pointer-events-none">
             [ INTERACTIVE CORE ]
           </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-cyan-400/50"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] mb-3 font-semibold">Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;