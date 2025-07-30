import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import CodePlayground from '../components/CodePlayground';
import HeroObject3D from '../components/HeroObject3D';
import SpotlightText from '../components/SpotlightText';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Staggered animation timing
  useEffect(() => {
    // Start animations after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Mark animation as complete for secondary animations
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const scrollToNextSection = () => {
    const nextSection = sectionRef.current?.nextElementSibling;
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Optimized animation variants with will-change hints
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Slightly faster stagger
        delayChildren: 0.2,   // Slightly faster delay
        duration: 0.4         // Slightly faster duration
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Reduced distance
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.2, 0.9, 0.4, 1] } // Simplified ease curve
    }
  };
  
  const socialVariants = {
    hidden: { opacity: 0, scale: 0.95 }, // Less scale change
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } // Slightly faster
    }
  };
  
  const skillVariants = {
    hidden: { opacity: 0, x: -10 }, // Reduced distance
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" } // Slightly faster
    }
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative snap-start bg-white dark:bg-gray-900 overflow-hidden pt-16 md:pt-20"
      style={{ minHeight: '100vh' }} // Fallback inline style
    >
      {/* Optimized background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute rounded-full bg-gradient-to-r from-accent1/10 to-transparent"
          style={{ 
            width: '40vw', 
            height: '40vw', 
            top: '-10%', 
            left: '-10%',
            willChange: 'transform, opacity' // Hint for browser optimization
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: animationComplete ? 0.4 : 0, // Simplified animation
            scale: animationComplete ? 1.1 : 0.8,
            rotate: animationComplete ? 180 : 0
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5,
            repeatType: "reverse" // More efficient than keyframes
          }}
        />
        <motion.div 
          className="absolute rounded-full bg-gradient-to-l from-accent2/10 to-transparent"
          style={{ 
            width: '35vw', 
            height: '35vw', 
            bottom: '-5%', 
            right: '-5%',
            willChange: 'transform, opacity' // Hint for browser optimization
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: animationComplete ? 0.3 : 0, // Simplified animation
            scale: animationComplete ? 1.1 : 0.8,
            rotate: animationComplete ? -180 : 0
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.8,
            repeatType: "reverse" // More efficient than keyframes
          }}
        />
        
        {/* Optimized light streaks - reduced count and simplified animations */}
        {animationComplete && (
          <>
            {/* Reduced from 4 to 3 horizontal streaks */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-accent1/30 to-transparent"
                style={{
                  top: `${25 + i * 25}%`, // More spaced out
                  left: '-100%',
                  width: '120%',
                  opacity: 0.15 + (i * 0.05), // Slightly reduced opacity
                  willChange: 'transform' // Hint for browser optimization
                }}
                initial={{ left: '-100%' }}
                animate={{ left: '120%' }}
                transition={{
                  duration: 10 + i * 2, // Slightly slower but more consistent
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2 + i * 0.8
                }}
              />
            ))}
            {/* Reduced from 4 to 2 vertical streaks */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i + 3}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-accent2/30 to-transparent"
                style={{
                  left: `${33 + i * 33}%`, // More spaced out
                  top: '-100%',
                  height: '120%',
                  opacity: 0.15 + (i * 0.05), // Slightly reduced opacity
                  willChange: 'transform' // Hint for browser optimization
                }}
                initial={{ top: '-100%' }}
                animate={{ top: '120%' }}
                transition={{
                  duration: 12 + i * 3, // Slightly slower but more consistent
                  repeat: Infinity,
                  ease: "linear",
                  delay: 3 + i * 1.5
                }}
              />
            ))}
          </>
        )}
      </div>
      
      {/* Left Content with staggered animations */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="w-full md:w-1/2 p-4 sm:p-8 md:p-16 z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={handleAnimationComplete}
          >
            <motion.h2 
  variants={itemVariants}
  className="text-lg md:text-xl font-medium text-accent1 mb-4"
>
  Hello, I'm
</motion.h2>

<motion.h1 
  variants={itemVariants}
  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
>
  Aman Singh Negi
</motion.h1>


            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-lg"
              variants={itemVariants}
              data-text="Competitive Programmer & Full Stack Developer passionate about solving complex problems and building innovative solutions."
            >
              Competitive Programmer & Full Stack Developer passionate about solving complex problems and building innovative and Automated solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              variants={socialVariants}
            >
              <motion.a 
                href="https://github.com/aman-singh-negi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-accent1 text-white rounded-lg hover:bg-accent1/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="text-lg" />
                GitHub
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/aman-singh-negi0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-accent2 text-white rounded-lg hover:bg-accent2/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin className="text-lg" />
                LinkedIn
              </motion.a>
              <motion.a 
                href="https://leetcode.com/amansinghnegi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiLeetcode className="text-lg" />
                LeetCode
              </motion.a>
              <motion.a 
                href="https://drive.google.com/open?id=1prx7wtQJdo9aTFeP0Wo6XmYVF8wigora&usp=drive_fs" 
                download="Aman_Singh_Negi_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="text-lg" />
                Download Resume
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400"
              variants={containerVariants}
              initial="hidden"
              animate={animationComplete ? "visible" : "hidden"}
            >
              {[
                "Python", "C++", "React", "Node.js", "Machine Learning"
              ].map((skill, index) => (
                <motion.div 
                  key={skill}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-accent1/10 hover:text-accent1 dark:hover:bg-accent1/20 transition-all duration-300 cursor-pointer"
                  variants={skillVariants}
                  custom={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Right Content - Code Playground and 3D Object */}
      <div className="w-full md:w-1/2 h-[40vh] sm:h-[50vh] md:h-screen relative flex flex-col items-center justify-center mx-4 sm:mx-0">
        <AnimatePresence>
          {isVisible && (
            <>
              <motion.div 
                className="w-full max-w-2xl mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <CodePlayground />
              </motion.div>
              
              <motion.div 
                className="w-full max-w-2xl h-64 relative z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              >
                <HeroObject3D />
              </motion.div>
            </>
          )}
        </AnimatePresence>
        
        {/* Background gradient */}
        <motion.div 
          className="absolute -z-10 w-full h-full bg-gradient-to-br from-[#2128bd]/10 via-[#005ffe]/5 to-[#ffcc57]/10 rounded-2xl overflow-hidden border border-[#2128bd]/20 shadow-2xl shadow-[#2128bd]/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationComplete ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </div>
      
      {/* Scroll Down Indicator with enhanced animation */}
      <AnimatePresence>
        {animationComplete && (
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            onClick={scrollToNextSection}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-accent1 dark:hover:text-accent1 transition-colors duration-300">
              <motion.span 
                className="text-sm font-medium"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Scroll Down
              </motion.span>
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }}
              >
                <FiArrowDown className="text-xl" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;