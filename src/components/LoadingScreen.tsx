import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/LoaderStyles.css'; // ✅ Correct path

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const totalAnimations = 1; // Run the welcome animation only once

  useEffect(() => {
    // Set a single timer for the animation duration
    // We only need to wait for one animation cycle to complete
    const totalDuration = 3500 * totalAnimations; // 3.5 seconds per animation cycle
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, totalDuration);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="loader-wrapper">
            <span className="loader-letter">W</span>
            <span className="loader-letter">e</span>
            <span className="loader-letter">l</span>
            <span className="loader-letter">c</span>
            <span className="loader-letter">o</span>
            <span className="loader-letter">m</span>
            <span className="loader-letter">e</span>

            <div className="loader"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
