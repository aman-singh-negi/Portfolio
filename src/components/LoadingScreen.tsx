import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 10; // Random increment for realistic feel
      });
    }, 150);

    // Complete loading after 2 seconds
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
        // Call the callback after the exit animation completes
        setTimeout(() => {
          onLoadingComplete();
        }, 800); // Match the exit animation duration
      }, 300); // Small delay after reaching 100%
    }, 2000); // 2 seconds loading time as per requirements

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  // Animation for the particles
  const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: Math.random() > 0.5 ? 'accent1' : 'accent2',
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2
    }));
  };

  const particles = generateParticles(40);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Animated background gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-accent1/5 via-transparent to-accent2/5 dark:from-accent1/10 dark:to-accent2/10"
            animate={{
              background: [
                'linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, rgba(0, 0, 0, 0) 50%, rgba(204, 0, 102, 0.05) 100%)',
                'linear-gradient(225deg, rgba(0, 102, 204, 0.05) 0%, rgba(0, 0, 0, 0) 50%, rgba(204, 0, 102, 0.05) 100%)',
                'linear-gradient(315deg, rgba(0, 102, 204, 0.05) 0%, rgba(0, 0, 0, 0) 50%, rgba(204, 0, 102, 0.05) 100%)',
                'linear-gradient(45deg, rgba(0, 102, 204, 0.05) 0%, rgba(0, 0, 0, 0) 50%, rgba(204, 0, 102, 0.05) 100%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Noise texture overlay */}
          <div className="absolute inset-0 noise-overlay opacity-20"></div>
          
          {/* Modern loader animation */}
          <div className="modern-loader">
            <div className="galaxy">
              <div className="galaxy-core"></div>
              <div className="galaxy-ring-1"></div>
              <div className="galaxy-ring-2"></div>
              <div className="galaxy-ring-3"></div>
              
              {/* Orbiting planets */}
              <motion.div 
                className="planet planet-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="planet planet-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="planet planet-3"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
          
          {/* Loading text with glowing effect */}
          <motion.div
            className="absolute bottom-20 text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-4 loading-title"
              animate={{ textShadow: [
                '0 0 5px rgba(var(--accent1-rgb), 0.5), 0 0 10px rgba(var(--accent1-rgb), 0.3)',
                '0 0 5px rgba(var(--accent2-rgb), 0.5), 0 0 10px rgba(var(--accent2-rgb), 0.3)',
                '0 0 5px rgba(var(--accent1-rgb), 0.5), 0 0 10px rgba(var(--accent1-rgb), 0.3)'
              ] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="gradient-text">Loading Portfolio</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Preparing an amazing experience...
            </motion.p>
            
            {/* Modern Progress Bar */}
            <div className="w-64 h-3 bg-gray-200/30 dark:bg-gray-700/30 rounded-full mb-4 overflow-hidden backdrop-blur-sm border border-white/10 relative mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-accent1 to-accent2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{ boxShadow: [
                  '0 0 5px rgba(var(--accent1-rgb), 0.5), inset 0 0 5px rgba(var(--accent1-rgb), 0.5)',
                  '0 0 5px rgba(var(--accent2-rgb), 0.5), inset 0 0 5px rgba(var(--accent2-rgb), 0.5)',
                  '0 0 5px rgba(var(--accent1-rgb), 0.5), inset 0 0 5px rgba(var(--accent1-rgb), 0.5)'
                ] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            <motion.p 
              className="text-sm font-medium mb-6 progress-text"
              animate={{ color: [
                'rgba(var(--accent1-rgb), 1)',
                'rgba(var(--accent2-rgb), 1)',
                'rgba(var(--accent1-rgb), 1)'
              ] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {Math.round(Math.min(progress, 100))}%
            </motion.p>
          </motion.div>
          
          {/* Enhanced background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className={`absolute rounded-full ${particle.color === 'accent1' ? 'bg-accent1' : 'bg-accent2'}`}
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  filter: `blur(${particle.size <= 2 ? 0 : 1}px)`,
                  boxShadow: `0 0 ${particle.size * 2}px ${particle.color === 'accent1' ? 'rgba(var(--accent1-rgb), 0.8)' : 'rgba(var(--accent2-rgb), 0.8)'}`
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, particle.id % 2 === 0 ? 10 : -10, 0],
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
          
          {/* Floating light streaks */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-accent1/50 to-transparent"
                style={{
                  top: `${15 + i * 15}%`,
                  left: '-100%',
                  width: '100%',
                  opacity: 0.3 + (i * 0.1)
                }}
                animate={{
                  left: ['100%', '-100%']
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5
                }}
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i + 6}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-accent2/50 to-transparent"
                style={{
                  left: `${15 + i * 15}%`,
                  top: '-100%',
                  opacity: 0.2 + (i * 0.1)
                }}
                animate={{
                  top: ['100%', '-100%']
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;