import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMoon, FiSun, FiDownload, FiMail, FiHome, FiUser, FiBriefcase, FiAward } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleAction = (action: () => void) => {
    action();
    setIsOpen(false);
    setSearch('');
  };

  const actions = [
    {
      id: 'home',
      name: 'Go to Home',
      icon: <FiHome />,
      perform: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }),
      category: 'Navigation'
    },
    {
      id: 'about',
      name: 'Go to About',
      icon: <FiUser />,
      perform: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
      category: 'Navigation'
    },
    {
      id: 'projects',
      name: 'Go to Projects',
      icon: <FiBriefcase />,
      perform: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
      category: 'Navigation'
    },
    {
      id: 'experience',
      name: 'Go to Experience',
      icon: <FiAward />,
      perform: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }),
      category: 'Navigation'
    },
    {
      id: 'theme',
      name: `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`,
      icon: theme === 'light' ? <FiMoon /> : <FiSun />,
      perform: toggleTheme,
      category: 'Preferences'
    },
    {
      id: 'resume',
      name: 'Download Resume',
      icon: <FiDownload />,
      perform: () => window.open('https://drive.google.com/open?id=1prx7wtQJdo9aTFeP0Wo6XmYVF8wigora&usp=drive_fs', '_blank'),
      category: 'Actions'
    },
    {
      id: 'email',
      name: 'Copy Email Address',
      icon: <FiMail />,
      perform: () => navigator.clipboard.writeText('your.email@example.com'),
      category: 'Actions'
    }
  ];

  const filteredActions = search === '' 
    ? actions 
    : actions.filter((action) => action.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 sm:px-0 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/60 backdrop-blur-md will-change-[opacity]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl relative overflow-hidden rounded-[1.5rem] border border-border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] bg-background transform-gpu will-change-transform"
          >
            <div className="flex items-center px-4 border-b border-border">
              <FiSearch className="w-5 h-5 text-muted-foreground mr-2" />
              <input
                type="text"
                className="w-full bg-transparent px-2 py-5 text-lg outline-none placeholder:text-muted-foreground text-foreground"
                placeholder="What do you need?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
                spellCheck={false}
              />
              <div className="flex shrink-0 items-center justify-center h-6 px-2 rounded-md bg-muted text-[10px] font-bold tracking-widest uppercase text-muted-foreground border border-border/50">
                Esc
              </div>
            </div>

            <div className="max-h-[50vh] overflow-y-auto p-3 scroll-smooth">
              {filteredActions.length === 0 ? (
                <div className="py-16 text-center text-sm font-medium text-muted-foreground">
                  No results found.
                </div>
              ) : (
                <div className="space-y-1 mt-1">
                  {filteredActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleAction(action.perform)}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all hover:bg-muted group text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-[0.6rem] bg-background border border-border text-foreground shadow-sm group-hover:scale-105 transition-transform duration-300">
                          {action.icon}
                        </div>
                        <span className="font-semibold text-sm text-foreground">
                          {action.name}
                        </span>
                      </div>
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {action.category}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="border-t border-border bg-muted/30 p-3 flex justify-between items-center text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
              <span>Use <kbd className="bg-muted px-1.5 py-0.5 rounded border border-border">↑</kbd> <kbd className="bg-muted px-1.5 py-0.5 rounded border border-border">↓</kbd> to navigate</span>
              <span><kbd className="bg-muted px-1.5 py-0.5 rounded border border-border">↵</kbd> to select</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
