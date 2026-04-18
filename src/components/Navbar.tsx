import { memo, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiCommand, FiMenu, FiX } from 'react-icons/fi';
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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex w-full justify-center px-4 pt-6">
      <div className="pointer-events-auto w-full max-w-5xl">
        <div className="glass-panel mx-auto flex items-center justify-between rounded-[2rem] border border-border bg-[color:var(--card)]/70 px-4 py-3 shadow-[0_20px_60px_-36px_rgba(0,0,0,0.75)] backdrop-blur-2xl">
          <a href="#home" onClick={() => handleNavClick('#home')} className="group flex items-center gap-4" aria-label="Home">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-extrabold text-background transition-transform duration-300 group-hover:scale-110">
              AN
            </div>
            <div className="hidden md:block">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Portfolio</p>
              <p className="font-['Space_Grotesk'] text-sm font-bold tracking-[0.02em] text-foreground">Aman Singh Negi</p>
            </div>
          </a>

          <nav className="relative z-10 hidden items-center gap-1 rounded-full border border-border/60 bg-white/20 p-1 md:flex dark:bg-white/5">
            {navLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                    active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {active ? (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full border border-border/70 bg-[color:var(--bg-elevated)] shadow-sm"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  ) : null}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <button
              onClick={openCommandPalette}
              className="hidden items-center gap-2 rounded-full border border-border bg-[color:var(--bg-elevated)]/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-all hover:scale-105 hover:bg-[color:var(--bg-elevated)] md:flex"
              aria-label="Command Palette"
            >
              <span>Command</span>
              <kbd className="rounded bg-foreground/10 px-1 font-mono text-[10px] font-bold uppercase text-foreground">Ctrl K</kbd>
            </button>

            <button
              onClick={onCertificatesClick}
              className="group hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-white/20 text-muted-foreground transition-all hover:border-transparent hover:bg-foreground hover:text-background lg:flex dark:bg-white/5"
              aria-label="Certificates"
              title="Certificates"
            >
              <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>

            <ThemeToggle />

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/20 text-foreground transition-all hover:bg-[color:var(--bg-elevated)] md:hidden dark:bg-white/5"
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
        {isOpen ? (
          <motion.div
            className="pointer-events-auto fixed inset-x-4 top-[5.7rem] z-30 md:hidden"
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-panel rounded-[2rem] border border-border bg-[color:var(--bg-elevated)] p-3 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`rounded-2xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                      activeSection === link.href.slice(1)
                        ? 'bg-foreground text-background'
                        : 'text-muted-foreground hover:bg-[color:var(--muted)] hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}

                <div className="my-2 h-px bg-border" />

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onCertificatesClick?.();
                  }}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-semibold text-muted-foreground hover:bg-[color:var(--muted)] hover:text-foreground"
                >
                  View Certificates
                  <FiArrowUpRight />
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openCommandPalette();
                  }}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm font-semibold text-muted-foreground hover:bg-[color:var(--muted)] hover:text-foreground"
                >
                  Command Palette
                  <FiCommand />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default memo(Navbar);
