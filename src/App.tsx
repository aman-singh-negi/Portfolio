import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  // Handle loading complete
  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay before showing content for smooth transition
    setTimeout(() => {
      setContentVisible(true);
    }, 100);
  };

  // Enable smooth scrolling behavior
  useEffect(() => {
    // Add smooth scrolling behavior to all anchor links
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

    // Add scroll snapping behavior
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            // Update URL hash without scrolling
            history.replaceState(null, '', `#${id}`);
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-dark text-gray-200 min-h-screen transition-colors duration-300 overflow-x-hidden">
        {/* Loading Screen */}
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        
        {/* Main Content */}
        <CustomCursor />
        
        {/* Use AnimatePresence for smooth transition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: contentVisible ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`${!contentVisible ? 'invisible' : 'visible'}`}
        >
          <Navbar />
          <main className="w-full overflow-hidden">
            <Hero />
            <About />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <Projects />
              <Skills />
              <Education />
              <Experience />
              <Certificates />
              <Contact />
            </div>
          </main>
          <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-800 mt-12">
            <p>© {new Date().getFullYear()} Aman. All rights reserved.</p>
          </footer>
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default App;
