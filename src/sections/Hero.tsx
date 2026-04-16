import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDownRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const HeroObject3D = lazy(() => import('../components/HeroObject3D'));

const trustStats = [
  { value: '300+', label: 'LeetCode problems solved' },
  { value: '9.38', label: 'Current CGPA' },
  { value: '3x', label: 'Core tracks: AI, Full Stack, CP' },
];

const signalRows = [
  'AI-driven systems with practical deployment experience',
  'High ownership mindset across product, UI, and engineering',
  'Built for clarity without sacrificing visual ambition',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 pt-24 pb-14 sm:px-6 lg:px-8">
      {/* Heavy blobs removed to fix animation lag. Particles and subtle gradients take over. */}

      <div className="mx-auto w-full max-w-7xl grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr] relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative max-w-2xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="kicker">
              Recruiter-First Portfolio
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="mb-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground flex gap-2 items-center">
              <span>Full Stack</span>
              <span className="w-1 h-1 rounded-full bg-border-strong"></span>
              <span>AI</span>
              <span className="w-1 h-1 rounded-full bg-border-strong"></span>
              <span>CP</span>
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-extrabold tracking-tighter text-foreground leading-[1.05]">
              Designing <span className="text-gradient">signal-rich</span> digital experiences.
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl font-medium">
            I’m Aman Singh Negi, a developer focused on building ambitious products with crisp execution, strong algorithms, and ultra-premium interfaces.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4 items-center">
            <a href="#projects" className="btn-primary group">
              Explore Projects
              <FiArrowDownRight size={18} className="transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://drive.google.com/open?id=1prx7wtQJdo9aTFeP0Wo6XmYVF8wigora&usp=drive_fs"
              className="btn-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <FiDownload size={18} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-6">
            <a href="https://github.com/aman-singh-negi" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
              <FiGithub size={18} className="transition-transform group-hover:scale-110" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/aman-singh-negi0/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
              <FiLinkedin size={18} className="transition-transform group-hover:scale-110" /> LinkedIn
            </a>
            <a href="https://leetcode.com/amansinghnegi" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
              <SiLeetcode size={18} className="transition-transform group-hover:scale-110" /> LeetCode
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300 group">
                <p className="text-3xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-500 group-hover:to-gray-900 group-hover:dark:from-gray-100 group-hover:dark:to-gray-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - 3D Visual & Info Cards */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[600px] flex flex-col justify-center"
        >
          {/* A sleek background glow specifically for the 3D element backing, localized to prevent full-page repaint lag */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-foreground/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="glass-panel p-2 rounded-[2rem] h-[400px] lg:h-[450px] relative overflow-hidden group border border-border shadow-2xl">
            <div className="absolute top-4 left-4 z-10 kicker bg-background/50 backdrop-blur-md border-border text-foreground text-[10px]">
              Interactive WebGL
            </div>
            
            <div className="w-full h-full rounded-2xl overflow-hidden bg-background/50 relative">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center animate-pulse">
                  <div className="w-24 h-24 rounded-full border border-border" />
                </div>
              }>
                <HeroObject3D />
              </Suspense>
            </div>
            
            {/* Overlay Gradient on hover to add depth */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="mt-8 space-y-3">
            {signalRows.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 text-sm text-muted-foreground font-medium items-center glass-panel rounded-xl p-3.5 px-5 hover:-translate-x-1 transition-transform"
              >
                <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-foreground/40 dark:bg-foreground/80" />
                <p>{row}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

