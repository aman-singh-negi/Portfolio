import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import IntroLoader from './components/IntroLoader';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  // Smooth scroll
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <div className="relative min-h-screen text-white selection:bg-cyan-400/30 selection:text-white font-sans bg-[#030305]">
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && <IntroLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <ParticleBackground />

      {/* Main Content - Only visible after loading */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />

        <main className="relative z-10 w-full flex flex-col items-center">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>

        <footer className="relative z-10 py-8 text-center text-sm text-gray-600 border-t border-white/5 bg-black/30 backdrop-blur-md">
          <p>© {new Date().getFullYear()} Aman Singh Negi. Built with React, Vite, Three.js & Framer Motion.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
