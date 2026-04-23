import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';

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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="glass px-6 py-3 rounded-full flex items-center justify-between w-full max-w-4xl border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.8)] pointer-events-auto relative overflow-hidden">
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-violet-500/5 pointer-events-none"></div>

        {/* Logo */}
        <a href="#home" className="text-2xl font-black tracking-tighter interactive z-10 flex items-center">
          <span className="text-white">A</span>
          <span className="text-cyan-400">N</span>
          <span className="text-violet-500 text-3xl leading-none">.</span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10 z-10">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.url} 
                className="text-xs tracking-widest uppercase font-semibold text-gray-400 hover:text-white transition-colors interactive relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4 z-10">
          <a 
            href="https://drive.google.com/open?id=1prx7wtQJdo9aTFeP0Wo6XmYVF8wigora&usp=drive_fs" 
            target="_blank" 
            rel="noreferrer" 
            className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-white transition-colors interactive"
          >
            <FiFileText size={14} /> Resume
          </a>
          <a href="#contact" className="btn-primary px-6 py-2 text-xs uppercase tracking-widest interactive shadow-none hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            Connect
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
