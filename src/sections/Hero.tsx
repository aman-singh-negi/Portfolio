import { motion } from 'framer-motion';
import { DecryptText } from '../components/DecryptText';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      <div className="z-10 text-center flex flex-col items-center justify-center w-full px-6 pointer-events-none">
        
        {/* Subtitle / System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6 flex items-center gap-3 font-mono text-xs tracking-widest text-accent1 uppercase"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent1 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent1"></span>
          </div>
          System Architect Online
        </motion.div>

        {/* Main Title - Decrypt text effect */}
        <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-bold text-white uppercase tracking-tighter leading-none mb-6">
          <DecryptText text="AMAN SINGH" speed={40} maxIterations={12} className="block" />
          <DecryptText text="NEGI." speed={40} maxIterations={15} className="block text-accent1" />
        </h1>

        {/* Core role display */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-muted font-mono text-sm md:text-base max-w-lg mb-12 uppercase"
        >
          &gt; CREATIVE FRONTEND ENGINEER
          <br />
          &gt; AI INTERFACE CAPABILITIES
          <br />
          &gt; ADVANCED WEBGL ARCHITECT
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto"
      >
        <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 overflow-hidden">
          <motion.div 
            animate={{ 
              y: [0, 48, 0],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-4 bg-accent1"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;