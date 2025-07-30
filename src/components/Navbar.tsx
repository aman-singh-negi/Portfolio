import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCode, FiAward } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

// This will be handled via props now

interface NavbarProps {
  onCertificatesClick?: () => void;
  onHomeClick?: () => void;
}

const Navbar = ({ onCertificatesClick, onHomeClick }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    // Use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
      // Update navbar style based on scroll position
      setScrolled(window.scrollY > 50);
      
      // Hide/show navbar based on scroll direction
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
      
      // Update active section based on scroll position - optimize selector
      const sections = document.querySelectorAll('section[id]');
      let foundActive = false;
      
      // Process sections in reverse order (bottom to top) for better accuracy
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute('id');
        
        if (sectionTop < 100 && sectionTop > -100 && sectionId) {
          setActiveSection(sectionId);
          foundActive = true;
          break; // Stop after finding the first visible section
        }
      }
      
      // If no section is visible (e.g., at the very top), default to home
      if (!foundActive && window.scrollY < 100) {
        setActiveSection('home');
      }
    });
  }, [prevScrollPos]);

  // Throttle scroll event for better performance
  useEffect(() => {
    let ticking = false;
    
    const scrollListener = () => {
      if (!ticking) {
        ticking = true;
        handleScroll();
        setTimeout(() => ticking = false, 100); // Throttle to max 10 updates per second
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  return (
    // Update the navbar container
    <header 
      className={`fixed w-full z-40 transition-all duration-300 
        ${scrolled 
          ? 'py-3 glass-morphism shadow-xl border-b border-gray-200/10 dark:border-gray-800/10' 
          : 'py-5 bg-light/50 dark:bg-dark/50 backdrop-blur-sm'}
        ${visible ? 'top-0' : '-top-20'}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 flex justify-between items-center relative">
        {/* Logo */}
        <motion.a 
          href="#home"
          className="flex items-center space-x-2 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative overflow-hidden rounded-full p-2 bg-gradient-to-br from-accent1/20 to-accent2/20 group-hover:from-accent1/30 group-hover:to-accent2/30 transition-all duration-300">
            <FiCode className="text-gray-700 dark:text-accent1 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          </span>
          <span className="text-2xl font-bold gradient-text">
            Aman
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            // Update the nav links
            <motion.a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${activeSection === link.href.substring(1) 
                  ? 'text-white dark:text-white bg-gradient-to-r from-accent1 to-accent2 shadow-md' 
                  : 'text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-accent2 hover:bg-gray-100/50 dark:hover:bg-accent2/5'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (link.href === '#home' && onHomeClick) {
                  onHomeClick();
                }
              }}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.span 
                  className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-gradient-to-r from-accent1 to-accent2"
                  layoutId="navbar-indicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
          
          {/* Theme toggle is now in a separate position */}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-gradient-to-br from-accent1/10 to-accent2/10 hover:from-accent1/20 hover:to-accent2/20 transition-all duration-300 focus:outline-none"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle menu"
          >
            {isOpen 
              ? <FiX size={24} className="text-gray-700 dark:text-accent2" /> 
              : <FiMenu size={24} className="text-gray-700 dark:text-accent1" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-light/95 dark:bg-dark/95 backdrop-blur-md pt-20"
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`text-2xl font-medium flex items-center space-x-2 p-3 rounded-lg
                    ${activeSection === link.href.substring(1) 
                      ? 'text-accent1 bg-accent1/10' 
                      : 'text-gray-700 dark:text-gray-300'}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10, backgroundColor: 'rgba(var(--accent2-rgb), 0.1)' }}
                >
                  <span className="relative overflow-hidden">
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent1 to-accent2"
                        layoutId="mobile-navbar-indicator"
                      />
                    )}
                  </span>
                </motion.a>
              ))}
              
              {/* Mobile menu only shows main navigation links */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Toggle - Now positioned within the navbar */}
      <div className="absolute right-16 sm:right-20 md:right-0 top-1/2 transform -translate-y-1/2">
        <ThemeToggle />
      </div>
    </header>
  );
};

// Memoize the entire component for better performance
export default memo(Navbar);