import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  useEffect(() => {
    const timer = window.setTimeout(onLoadingComplete, 1400);
    return () => window.clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--bg)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="premium-panel noise-overlay relative flex w-[min(92vw,28rem)] flex-col gap-5 rounded-[2rem] px-8 py-10 text-center">
        <div className="section-kicker mx-auto">Portfolio System</div>
        <div>
          <p className="font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.08em] text-[color:var(--heading)]">
            Aman Singh Negi
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
            Editorial Futurism
          </p>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
          <motion.div
            className="h-full rounded-full bg-[linear-gradient(135deg,var(--accent),var(--accent-2),var(--accent-3))]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
