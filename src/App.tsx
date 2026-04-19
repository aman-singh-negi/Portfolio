import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import AIBackground from './components/AIBackground';
import BootSequence from './components/BootSequence';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    console.log(
      '%c> SYSTEM_ARCHITECT IDENTIFIED: AMAN / READY FOR LAUNCH.',
      'color: #00F0FF; font-family: monospace; font-size: 16px; font-weight: bold; background: #050505; padding: 20px; border: 1px solid #7000FF;'
    );
  }, []);

  return (
    <div className="bg-transparent text-gray-200 min-h-screen transition-colors duration-300 overflow-x-hidden selection:bg-accent1 selection:text-dark">
      <CustomCursor />
      <AIBackground />
      
      {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}

      <AnimatePresence>
        {bootComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full relative z-10"
          >
            <main className="w-full flex justify-center flex-col items-center">
              <Hero />
              <Projects />
              <Contact />
            </main>
            
            <footer className="py-8 text-center text-xs font-mono text-muted border-t border-white/5 bg-dark/40 backdrop-blur-md relative z-10">
              <p>&copy; {new Date().getFullYear()} AMAN SINGH NEGI // SYSTEM_ARCHITECT</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
