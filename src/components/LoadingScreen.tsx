import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const bootSequence = [
  "INITIALIZING ANTIGRAVITY KERNEL...",
  "LOADING NEURAL WEIGHTS [██████████] 100%",
  "BYPASSING GRAVITY PROTOCOLS...",
  "ESTABLISHING UPLINK TO AMAN SINGH NEGI...",
  "SYNCHRONIZING VOID INTERFACE...",
  "ACCESS GRANTED."
];

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [lines, setLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      setLines((prev) => [...prev, bootSequence[currentLine]]);
      currentLine++;
      
      if (currentLine >= bootSequence.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onLoadingComplete, 800);
        }, 600);
      }
    }, 250); // fast cinematic boot

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#030712] text-[#67e8f9] font-mono text-sm md:text-base p-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="w-full max-w-2xl bg-black/40 border border-[#67e8f9]/20 p-6 rounded-lg backdrop-blur-md shadow-[0_0_40px_rgba(103,232,249,0.1)]">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex flex-col gap-2">
              {lines.map((line, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-3"
                >
                  <span className="text-muted-foreground opacity-50">&gt;</span>
                  <span>{line}</span>
                </motion.div>
              ))}
              <motion.div 
                animate={{ opacity: [0, 1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2.5 h-5 bg-[#67e8f9] mt-1 ml-5"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
