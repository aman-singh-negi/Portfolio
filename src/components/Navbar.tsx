import { motion } from 'framer-motion';

const Navbar = () => {
  const links = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="glass px-8 py-4 rounded-full flex items-center justify-between w-full max-w-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        
        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-tighter interactive">
          <span className="text-primary">A</span>
          <span className="text-white">N</span>
          <span className="text-primary text-2xl leading-none">.</span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.url} 
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors interactive relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="hidden md:block btn-primary px-5 py-2 text-sm interactive">
          Hire Me
        </a>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-white interactive">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
