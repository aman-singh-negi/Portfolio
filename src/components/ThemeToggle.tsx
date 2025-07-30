import { useContext, memo } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gradient-to-br from-accent1/10 to-accent2/10
                hover:from-accent1/20 hover:to-accent2/20 transition-all duration-300
                shadow-md dark:shadow-accent1/10"
      whileTap={{ scale: 0.9 }}
      whileHover={{ 
        scale: 1.1,
        rotate: theme === 'dark' ? 180 : 0,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {theme === 'dark' ? (
          <FiSun className="text-gray-700 dark:text-accent1 w-5 h-5" />
        ) : (
          <FiMoon className="text-gray-700 dark:text-accent2 w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(ThemeToggle);