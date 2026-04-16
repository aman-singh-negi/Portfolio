import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import CommandPalette from './components/CommandPalette';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showCertificates, setShowCertificates] = useState(false);

  return (
    <ThemeProvider>
      <div className="page-shell page-grid min-h-screen overflow-x-hidden text-[color:var(--text)] relative">
        <Analytics />
        <CommandPalette />
        <ParticlesBackground />
        
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onLoadingComplete={() => setIsLoading(false)} />
          ) : (
            <motion.div
              key={showCertificates ? 'certificates' : 'home'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <Navbar onCertificatesClick={() => setShowCertificates(true)} onHomeClick={() => setShowCertificates(false)} />

              {showCertificates ? (
                <main className="relative z-10 pt-24">
                  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Certificates fullPage onBackToHome={() => setShowCertificates(false)} />
                  </div>
                </main>
              ) : (
                <>
                  <main className="relative z-10">
                    <Hero />
                    <About />
                    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                      <Projects />
                      <Skills />
                      <Education />
                      <Experience />
                      <Achievements onViewCertificates={() => setShowCertificates(true)} />
                      <Contact />
                    </div>
                  </main>
                  <footer className="border-t border-[color:var(--border)] px-4 py-8 text-center text-sm text-[color:var(--text-muted)] mt-12 bg-background/50 backdrop-blur-md relative z-10">
                    <p>© {new Date().getFullYear()} Aman Singh Negi. Crafted for high-signal storytelling.</p>
                  </footer>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
