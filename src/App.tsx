import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';

function App() {
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
    <div className="relative min-h-screen text-white selection:bg-primary selection:text-black font-sans">
      <div className="scanlines"></div>
      <CustomCursor />
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-sm text-gray-500 border-t border-white/5 bg-black/50 backdrop-blur-md">
        <p>© {new Date().getFullYear()} Aman Singh Negi. Built with React, Vite & Framer Motion.</p>
      </footer>
    </div>
  );
}

export default App;
