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

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, index }: { category: SkillCategory; index: number }) => {
  return (
    <motion.div
      className="bg-light/50 dark:bg-dark/50 backdrop-blur-lg rounded-xl p-6 shadow-lg
                border border-gray-200 dark:border-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <h3 className="text-xl font-bold mb-6 text-center gradient-text">
        {category.title}
      </h3>
      
      <div>
        {category.skills.map((skill, idx) => (
          <SkillBar key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="min-h-screen py-20 snap-start"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here's a breakdown of my technical skills and proficiency levels in various technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;