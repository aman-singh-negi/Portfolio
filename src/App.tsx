import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

import './spotlight.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

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

  // State to control which section is visible
  const [showCertificates, setShowCertificates] = useState(false);

  return (
    <ThemeProvider>
      <div className="bg-light dark:bg-dark text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300 overflow-x-hidden">
        {/* Loading Screen */}
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
        
        {/* Main Content */}
        {!isLoading && (
          <>
            <CustomCursor />
            <Navbar onCertificatesClick={() => setShowCertificates(true)} onHomeClick={() => setShowCertificates(false)} />
            
            <AnimatePresence mode="wait">
              {showCertificates ? (
                <motion.main 
                  key="certificates-page"
                  className="w-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.3, // Slightly faster transition
                    ease: "easeInOut" // Smoother easing
                  }}
                  style={{ willChange: "opacity" }} // Performance hint
                >
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="py-8">
                      <Certificates fullPage={true} onBackToHome={() => setShowCertificates(false)} />
                    </div>
                  </div>
                </motion.main>
              ) : (
                <motion.main 
                  key="home-page"
                  className="w-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.3, // Slightly faster transition
                    ease: "easeInOut" // Smoother easing
                  }}
                  style={{ willChange: "opacity" }} // Performance hint
                >
                  <Hero />
                  <About />
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <Projects />
                    <Skills />
                    <Education />
                    <Experience />
                    <Achievements onViewCertificates={() => setShowCertificates(true)} />
                    <Contact />
                  </div>
                </motion.main>
              )}
            </AnimatePresence>
            
            <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-12">
              <p>© {new Date().getFullYear()} Aman. All rights reserved.</p>
            </footer>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
