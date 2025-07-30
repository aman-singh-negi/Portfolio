import { useRef } from 'react';
import { motion } from 'framer-motion';

type Skill = {
  name: string;
  level: number; // 0-100
  color: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 95, color: '#3776AB' },
      { name: 'C++', level: 90, color: '#00599C' },
      { name: 'Java', level: 85, color: '#ED8B00' },
      { name: 'C', level: 80, color: '#A8B9CC' },
      { name: 'JavaScript', level: 95, color: '#F7DF1E' },
      { name: 'TypeScript', level: 85, color: '#3178C6' },
    ],
  },
  {
    title: 'AI/ML & Data Science',
    skills: [
      { name: 'Machine Learning', level: 88, color: '#FF6F00' },
      { name: 'Deep Learning', level: 85, color: '#FF4081' },
      { name: 'TensorFlow', level: 80, color: '#FF6F00' },
      { name: 'PyTorch', level: 75, color: '#EE4C2C' },
      { name: 'Scikit-learn', level: 85, color: '#F7931E' },
      { name: 'Pandas', level: 90, color: '#150458' },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 90, color: '#61DAFB' },
      { name: 'HTML/CSS', level: 90, color: '#E34F26' },
      { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
      { name: 'Three.js', level: 70, color: '#000000' },
      { name: 'Next.js', level: 80, color: '#000000' },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', level: 80, color: '#339933' },
      { name: 'Express', level: 85, color: '#000000' },
      { name: 'MongoDB', level: 75, color: '#47A248' },
      { name: 'SQL', level: 80, color: '#4479A1' },
      { name: 'PostgreSQL', level: 75, color: '#336791' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 85, color: '#F05032' },
      { name: 'Docker', level: 70, color: '#2496ED' },
      { name: 'AWS', level: 65, color: '#FF9900' },
      { name: 'Linux', level: 80, color: '#FCC624' },
      { name: 'Jupyter', level: 85, color: '#F37626' },
    ],
  },
];

// Animation variants for skill bars
const skillBarVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div 
      className="mb-4 group"
      variants={skillBarVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, x: 5 }}
    >
      <div className="flex justify-between mb-1">
        <motion.span 
          className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"
          whileHover={{ x: 3, color: skill.color }}
        >
          <motion.div 
            className="w-2 h-2 rounded-full" 
            style={{ backgroundColor: skill.color }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: index * 0.2 }}
          />
          {skill.name}
        </motion.span>
        <motion.span 
          className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          whileHover={{ scale: 1.1, backgroundColor: skill.color, color: '#fff' }}
        >
          {skill.level}%
        </motion.span>
      </div>
      
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner relative">
        <motion.div 
          className="h-full rounded-full relative z-10"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="absolute right-0 top-0 h-full w-2 bg-white/30 rounded-full"
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.div>
        
        {/* Animated dots in the background */}
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-gray-400/30 dark:bg-gray-500/30"
            style={{ left: `${i * 20}%` }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.4,
              repeatType: "reverse" 
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Animation variants for skill categories
const categoryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.3 + (i * 0.2)
    }
  })
};

const SkillCategory = ({ category, index }: { category: SkillCategory; index: number }) => {
  return (
    <motion.div
      className="bg-light/50 dark:bg-dark/50 backdrop-blur-lg rounded-xl p-6 shadow-lg
                border border-gray-200 dark:border-gray-800 relative overflow-hidden group"
      variants={categoryVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ 
        y: -5, 
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        borderColor: 'rgba(var(--accent1-rgb), 0.3)'
      }}
    >
      {/* Background gradient effect */}
      <motion.div 
        className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-accent1/5 to-transparent -z-10"
        initial={{ x: '100%' }}
        whileInView={{ x: '-100%' }}
        transition={{ duration: 3, delay: index * 0.3, ease: 'linear', repeat: Infinity, repeatDelay: 5 }}
      />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent1/50"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent1/50"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent1/50"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent1/50"></div>
      
      <motion.h3 
        className="text-xl font-bold mb-6 text-center relative inline-block mx-auto"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 + (index * 0.2) }}
        viewport={{ once: true }}
      >
        <span className="gradient-text">{category.title}</span>
        <motion.div 
          className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-accent1 to-accent2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 0.8, delay: 0.5 + (index * 0.2) }}
          viewport={{ once: true }}
        />
      </motion.h3>
      
      <div>
        {category.skills.map((skill, idx) => (
          <SkillBar key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="min-h-screen py-20 snap-start relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <motion.div 
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-accent1/30"
              style={{ top: `${i * 10}%` }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 0.2 + (i * 0.1) }}
              viewport={{ once: true }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <motion.div 
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-accent2/30"
              style={{ left: `${i * 10}%` }}
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 0.5 }}
              transition={{ duration: 1.5, delay: 0.2 + (i * 0.1) }}
              viewport={{ once: true }}
            />
          ))}
        </div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent1/20"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ 
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, Math.random() + 1, 1],
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              <motion.span 
                className="gradient-text inline-block"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                Skills & Expertise
              </motion.span>
            </h2>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute -bottom-2 left-0 h-3 w-3 bg-accent1 rounded-full"
              initial={{ left: 0, opacity: 0 }}
              whileInView={{ left: '100%', opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </motion.div>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Here's a breakdown of my technical skills and proficiency levels in various technologies.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;