import { memo, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCommand, FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onHomeClick?: () => void;
  onCertificatesClick?: () => void;
}

const Navbar = ({ onHomeClick, onCertificatesClick }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.1, 0.3, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === '#home') {
      onHomeClick?.();
    }
  };

  const openCommandPalette = () => {
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-6 flex justify-center w-full pointer-events-none">
      <div className="w-full max-w-4xl pointer-events-auto">
        <div className="glass-panel mx-auto flex items-center justify-between rounded-[2rem] px-4 py-3 shadow-sm relative border border-border bg-card/60 backdrop-blur-2xl">
          
          <a href="#home" onClick={() => handleNavClick('#home')} className="flex items-center gap-3 relative z-10 group cursor-pointer" aria-label="Home">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background text-sm font-extrabold transition-transform duration-300 group-hover:scale-110">
              AN
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex relative z-10 bg-muted/40 p-1 rounded-full border border-border/50">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                    active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-background shadow-sm border border-border/50"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 relative z-10">
            <button
              onClick={openCommandPalette}
              className="hidden items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-all hover:bg-muted md:flex hover:scale-105 active:scale-95"
              aria-label="Command Palette"
            >
              <span>Search</span>
              <kbd className="font-mono text-[10px] uppercase bg-foreground/10 px-1 rounded text-foreground font-bold">⌘K</kbd>
            </button>

            <div className="h-4 w-px bg-border hidden md:block"></div>

            <button
              onClick={onCertificatesClick}
              className="hidden lg:flex items-center justify-center h-9 w-9 rounded-full bg-muted text-muted-foreground transition-all hover:bg-foreground hover:text-background active:scale-95 group"
              aria-label="Certificates"
              title="Certificates"
            >
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <ThemeToggle />
            
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-muted text-foreground transition-all active:scale-95 hover:bg-border"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-4 top-[5.5rem] md:hidden z-30 pointer-events-auto"
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-panel rounded-3xl p-3 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] bg-background border border-border">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`rounded-2xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'bg-foreground text-background'
                        : 'bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                
                <div className="h-px bg-border my-2 mx-3" />
                
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onCertificatesClick?.();
                  }}
                  className="rounded-2xl px-4 py-3.5 text-left text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground flex items-center justify-between"
                >
                  View Certificates
                  <FiArrowUpRight />
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openCommandPalette();
                  }}
                  className="rounded-2xl px-4 py-3.5 text-left text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground flex items-center justify-between"
                >
                  Command Palette
                  <FiCommand />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default memo(Navbar);
