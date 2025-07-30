import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiArrowRight } from 'react-icons/fi';

type Achievement = {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Smart India Hackathon Finalist',
    description: 'Finalist in the world\'s biggest hackathon with an AI-driven institutional inspection system.',
    icon: <FiAward className="text-accent1" />
  },
  {
    id: 2,
    title: 'CodeChef 3-Star Coder',
    description: 'Achieved 3-star rating on CodeChef with a highest rating of 1651.',
    icon: <FiAward className="text-accent2" />
  },
  {
    id: 3,
    title: 'LeetCode Problem Solver',
    description: 'Solved 300+ problems on LeetCode across various difficulty levels and topics.',
    icon: <FiAward className="text-accent1" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: { scale: 0.98 }
};

const AchievementCard = ({ achievement }: { achievement: Achievement }) => {
  return (
    <motion.div
      className="bg-light/50 dark:bg-dark/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg
                border border-gray-200 dark:border-gray-800 p-6 h-full"
      variants={itemVariants}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        borderColor: "rgba(var(--accent1-rgb), 0.5)",
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4">
          {achievement.icon || <FiAward className="text-accent1" size={24} />}
        </div>
        <h3 className="text-xl font-bold gradient-text">
          {achievement.title}
        </h3>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        {achievement.description}
      </p>
    </motion.div>
  );
};

interface AchievementsProps {
  onViewCertificates?: () => void;
}

const Achievements = ({ onViewCertificates }: AchievementsProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="achievements" 
      ref={sectionRef}
      className="min-h-screen py-20 snap-start relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent1/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent2/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="gradient-text">
              Achievements & Recognition
            </span>
            <motion.span
              className="absolute -right-6 top-0 text-accent1"
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              ✦
            </motion.span>
            <motion.div 
              className="h-1 bg-gradient-to-r from-accent1 to-accent2 mt-2 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Highlighting some key milestones and recognition I've received throughout my journey.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={onViewCertificates}
            className="px-8 py-4 bg-gradient-to-r from-accent1 to-accent2 text-white rounded-xl
                      flex items-center justify-center font-medium shadow-lg"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <span className="mr-2">View All Certificates</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut" 
              }}
            >
              <FiArrowRight size={18} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;