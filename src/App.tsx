import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import CommandPalette from './components/CommandPalette';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
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
      <div className="page-shell page-grid relative min-h-screen overflow-x-hidden text-[color:var(--text)]">
        <div className="mesh-orb left-[-8rem] top-[8rem] h-72 w-72 bg-[var(--accent)]/40" />
        <div className="mesh-orb right-[-6rem] top-[34rem] h-80 w-80 bg-[var(--accent-secondary)]/30" />
        <div className="mesh-orb bottom-[10rem] left-[30%] h-64 w-64 bg-white/20 dark:bg-[var(--accent)]/15" />
        <CustomCursor />
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
                  <footer className="relative z-10 mt-12 border-t border-[color:var(--border)] bg-[color:var(--card)]/60 px-4 py-8 text-center text-sm text-[color:var(--text-muted)] backdrop-blur-md">
                    <p>&copy; {new Date().getFullYear()} Aman Singh Negi. Designed as an immersive proof of taste, execution, and range.</p>
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
