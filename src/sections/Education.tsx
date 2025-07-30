import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward, FiBook, FiCheckCircle } from 'react-icons/fi';

type EducationItem = {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  description: string[];
  achievements?: string[];
  gpa?: string;
};

const educationData: EducationItem[] = [
  {
    id: 1,
    institution: 'Graphic Era Hill University, Dehradun (GEHU)',
    degree: 'B.Tech in Computer Science and Engineering',
    location: 'Dehradun, Uttarakhand',
    period: '2023 - 2027',
    description: [
      'Specializing in Artificial Intelligence and Machine Learning',
      'Relevant coursework: Data Structures, Algorithms, Database Management, Machine Learning, Deep Learning, Computer Vision',
      'Active member of coding clubs and technical societies',
    ],
    achievements: [
      'Maintained a strong academic record',
      'Participated in hackathons and coding competitions',
      'Worked on various AI/ML and development projects',
    ],
    gpa: '9.38/10',
  },
  {
    id: 2,
    institution: 'Kendriya Vidyalaya',
    degree: 'Higher Secondary Education (Class XII)',
    location: 'Haridwar, Uttarakhand',
    period: '2022 - 2023',
    description: [
      'Science stream with Computer Science',
      'Focused on Physics, Chemistry, Mathematics, and Computer Science',
    ],
    achievements: [
      'Scored 92.4% in CBSE Board Examinations',
      'Participated in various science exhibitions and competitions',
      'School Head Boy(2023)'
    ],
    gpa: '92%',
  },
  {
    id: 3,
    institution: 'Kendriya Vidyalaya',
    degree: 'Secondary Education (Class X)',
    location: 'Dehradun, Uttarakhand',
    period: '2020 - 2021',
    description: [
      'Completed secondary education with focus on Science and Mathematics',
      'Developed strong foundation in core subjects',
    ],
    achievements: [
      'Scored 94.8% in CBSE Board Examinations',
      'Regional level basketball player',
      'Active participation in extracurricular activities',
    ],
    gpa: '94.8%',
  },
];

// Animation variants for timeline items
const timelineItemVariants = {
  hidden: (isEven: boolean) => ({
    opacity: 0,
    x: isEven ? 50 : -50,
    y: 20
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Animation variants for content elements
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay * 0.1,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const TimelineItem = ({ item, index, isLast }: { item: EducationItem; index: number; isLast: boolean }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative flex items-start w-full mb-16">
      {/* Timeline line - Desktop */}
      {!isLast && (
        <motion.div 
          className="absolute left-1/2 top-16 w-0.5 bg-gradient-to-b from-accent1 to-accent2 transform -translate-x-1/2 z-0 hidden md:block"
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: '150px', opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          viewport={{ once: true }}
        />
      )}
      
      {/* Timeline line - Mobile */}
      {!isLast && (
        <motion.div 
          className="absolute left-8 top-16 w-0.5 bg-gradient-to-b from-accent1 to-accent2 z-0 md:hidden"
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: '150px', opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          viewport={{ once: true }}
        />
      )}
      
      {/* Timeline dot with pulse effect - Desktop */}
      <div className="absolute left-1/2 top-8 transform -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          className="w-4 h-4 bg-gradient-to-r from-accent1 to-accent2 rounded-full shadow-lg relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Pulse animation */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-accent1"
            animate={{ 
              scale: [1, 1.8, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </motion.div>
      </div>
      
      {/* Timeline dot with pulse effect - Mobile */}
      <div className="absolute left-8 top-8 transform -translate-x-1/2 z-10 md:hidden">
        <motion.div
          className="w-4 h-4 bg-gradient-to-r from-accent1 to-accent2 rounded-full shadow-lg relative"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Pulse animation */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-accent1"
            animate={{ 
              scale: [1, 1.8, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </motion.div>
      </div>
      
      {/* Content */}
      <motion.div
        className={`w-full md:w-5/12 ${isEven ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8 md:text-left'} pl-16 md:pl-0`}
        variants={timelineItemVariants}
        custom={isEven}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div 
          className="bg-light/50 dark:bg-dark/50 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 relative overflow-hidden group"
          whileHover={{ 
            y: -5, 
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            borderColor: isEven ? 'rgba(var(--accent1-rgb), 0.3)' : 'rgba(var(--accent2-rgb), 0.3)'
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated gradient overlay */}
          <motion.div 
            className={`absolute -inset-[100%] ${isEven ? 'bg-gradient-to-r from-transparent via-accent1/5 to-transparent' : 'bg-gradient-to-r from-transparent via-accent2/5 to-transparent'} -z-10`}
            initial={{ x: '100%' }}
            whileInView={{ x: '-100%' }}
            transition={{ duration: 3, delay: index * 0.3, ease: 'linear', repeat: Infinity, repeatDelay: 5 }}
          />
          
          {/* Corner accents */}
          <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${isEven ? 'border-accent1/50' : 'border-accent2/50'}`}></div>
          <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${isEven ? 'border-accent1/50' : 'border-accent2/50'}`}></div>
          <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${isEven ? 'border-accent1/50' : 'border-accent2/50'}`}></div>
          <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${isEven ? 'border-accent1/50' : 'border-accent2/50'}`}></div>
          
          {/* Period Badge */}
          <motion.div 
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${isEven ? 'bg-accent1/10 text-gray-700 dark:text-accent1' : 'bg-accent2/10 text-gray-700 dark:text-accent2'}`}
            variants={contentVariants}
            custom={0}
            whileHover={{ scale: 1.05, x: isEven ? -5 : 5 }}
          >
            <FiCalendar className="mr-1" />
            {item.period}
          </motion.div>
          
          {/* Title */}
          <motion.h3 
            className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2"
            variants={contentVariants}
            custom={1}
            whileHover={{ x: isEven ? -3 : 3, color: isEven ? 'var(--accent1)' : 'var(--accent2)' }}
          >
            {item.degree}
          </motion.h3>
          
          {/* Institution */}
          <motion.div 
            className="flex items-center mb-2 text-gray-700 dark:text-gray-300"
            variants={contentVariants}
            custom={2}
          >
            <FiBook className={`mr-2 ${isEven ? 'text-gray-700 dark:text-accent1' : 'text-gray-700 dark:text-accent2'}`} />
            <motion.span 
              className="font-medium"
              whileHover={{ x: isEven ? -3 : 3 }}
            >
              {item.institution}
            </motion.span>
          </motion.div>
          
          {/* Location */}
          <motion.div 
            className="flex items-center mb-3 text-sm text-gray-600 dark:text-gray-400"
            variants={contentVariants}
            custom={3}
          >
            <FiMapPin className="mr-2" />
            <span>{item.location}</span>
          </motion.div>
          
          {/* Description */}
          <motion.div 
            className="mb-4"
            variants={contentVariants}
            custom={4}
          >
            <ul className="space-y-1">
              {item.description.map((point, idx) => (
                <motion.li 
                  key={idx} 
                  className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                  whileHover={{ x: isEven ? -3 : 3 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiCheckCircle className={`mr-2 mt-0.5 flex-shrink-0 ${isEven ? 'text-gray-600 dark:text-accent1' : 'text-gray-600 dark:text-accent2'}`} size={12} />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Achievements */}
          {item.achievements && (
            <motion.div 
              className="mb-4"
              variants={contentVariants}
              custom={5}
            >
              <div className="flex items-center mb-2">
                <FiAward className={`mr-2 ${isEven ? 'text-gray-600 dark:text-accent1' : 'text-gray-600 dark:text-accent2'}`} />
                <h4 className="font-medium text-gray-700 dark:text-gray-300 text-sm">Key Achievements</h4>
              </div>
              <ul className="space-y-1">
                {item.achievements.map((achievement, idx) => (
                  <motion.li 
                    key={idx} 
                    className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                    whileHover={{ x: isEven ? -3 : 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiCheckCircle className={`mr-2 mt-0.5 flex-shrink-0 ${isEven ? 'text-gray-600 dark:text-accent1' : 'text-gray-600 dark:text-accent2'}`} size={12} />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
          
          {/* GPA/Score */}
          {item.gpa && (
            <motion.div 
              className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${isEven ? 'bg-accent1/10 text-gray-700 dark:text-accent1' : 'bg-accent2/10 text-gray-700 dark:text-accent2'}`}
              variants={contentVariants}
              custom={6}
              whileHover={{ scale: 1.1, x: isEven ? -5 : 5 }}
              transition={{ duration: 0.2 }}
            >
              Score: {item.gpa}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="min-h-screen py-20 snap-start relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Decorative circles */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-accent1 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent2 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent1/20"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
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
                Education Journey
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
            My academic background and educational qualifications.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="relative max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline container */}
          <div className="relative">
            {educationData.map((education, index) => (
              <TimelineItem 
                key={education.id} 
                item={education} 
                index={index} 
                isLast={index === educationData.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;