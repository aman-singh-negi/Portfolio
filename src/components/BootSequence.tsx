import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootMessages = [
  'INITIALIZING SYSTEM ARCHITECTURE...',
  'LOADING NEURAL PATHWAYS...',
  'ESTABLISHING SECURE CONNECTION...',
  'SYNCING ORBITAL DATA...',
  'CALIBRATING 3D ENVIRONMENT...',
  'ACCESS GRANTED.'
];

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let currentIdx = 0;
    
    // Quick typing effect for adding rows
    const interval = setInterval(() => {
      if (currentIdx < bootMessages.length) {
        setMessages(prev => [...prev, bootMessages[currentIdx]]);
        currentIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 800); // Wait for exit animation
        }, 500);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div 
          className="fixed inset-0 z-[99999] bg-dark flex flex-col justify-end p-8 font-mono text-sm pointer-events-auto"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="max-w-3xl w-full mx-auto pb-20">
            {messages.map((msg, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={idx === bootMessages.length - 1 ? 'text-accent1 font-bold mt-4' : 'text-muted'}
              >
                {'>'} {msg}
              </motion.div>
            ))}
            {!isDone && (
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-3 h-4 bg-white inline-block ml-2 mt-1"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSequence;
