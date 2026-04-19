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
    institution: 'University of Petroleum and Energy Studies (UPES)',
    degree: 'B.Tech in Computer Science (AI & ML)',
    location: 'Dehradun, Uttarakhand',
    period: '2021 - 2025',
    description: [
      'Specializing in Artificial Intelligence and Machine Learning',
      'Relevant coursework: Data Structures, Algorithms, Database Management, Machine Learning, Deep Learning, Computer Vision',
      'Active member of coding clubs and technical societies',
    ],
    achievements: [
      'Maintained a strong academic record',
      'Participated in hackathons and coding competitions',
      'Worked on various AI/ML projects',
    ],
    gpa: '8.5/10',
  },
  {
    id: 2,
    institution: 'Kendriya Vidyalaya',
    degree: 'Higher Secondary Education (Class XII)',
    location: 'Dehradun, Uttarakhand',
    period: '2020 - 2021',
    description: [
      'Science stream with Computer Science',
      'Focused on Physics, Chemistry, Mathematics, and Computer Science',
    ],
    achievements: [
      'Scored 92% in CBSE Board Examinations',
      'Participated in various science exhibitions and competitions',
    ],
    gpa: '92%',
  },
  {
    id: 3,
    institution: 'Kendriya Vidyalaya',
    degree: 'Secondary Education (Class X)',
    location: 'Dehradun, Uttarakhand',
    period: '2018 - 2019',
    description: [
      'Completed secondary education with focus on Science and Mathematics',
      'Developed strong foundation in core subjects',
    ],
    achievements: [
      'Scored 90% in CBSE Board Examinations',
      'Active participation in extracurricular activities',
    ],
    gpa: '90%',
  },
];

const TimelineItem = ({ item, index, isLast }: { item: EducationItem; index: number; isLast: boolean }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative flex items-start w-full mb-12">
      {/* Timeline line - Desktop */}
      {!isLast && (
        <div className="absolute left-1/2 top-16 w-0.5 h-32 bg-gradient-to-b from-accent1 to-accent2 transform -translate-x-1/2 z-0 hidden md:block" />
      )}
      
      {/* Timeline line - Mobile */}
      {!isLast && (
        <div className="absolute left-8 top-16 w-0.5 h-32 bg-gradient-to-b from-accent1 to-accent2 z-0 md:hidden" />
      )}
      
      {/* Timeline dot - Desktop */}
      <motion.div
        className="absolute left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-accent1 to-accent2 rounded-full transform -translate-x-1/2 z-10 shadow-lg hidden md:block"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      />
      
      {/* Timeline dot - Mobile */}
      <motion.div
        className="absolute left-8 top-8 w-4 h-4 bg-gradient-to-r from-accent1 to-accent2 rounded-full transform -translate-x-1/2 z-10 shadow-lg md:hidden"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      />
      
      {/* Content */}
      <motion.div
        className={`w-full md:w-5/12 ${isEven ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8 md:text-left'} pl-16 md:pl-0`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="bg-light/50 dark:bg-dark/50 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300">
          {/* Period Badge */}
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${isEven ? 'bg-accent1/10 text-gray-700 dark:text-accent1' : 'bg-accent2/10 text-gray-700 dark:text-accent2'}`}>
            <FiCalendar className="mr-1" />
            {item.period}
          </div>
          
          {/* Title */}
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">
            {item.degree}
          </h3>
          
          {/* Institution */}
          <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
            <FiBook className={`mr-2 ${isEven ? 'text-gray-700 dark:text-accent1' : 'text-gray-700 dark:text-accent2'}`} />
            <span className="font-medium">{item.institution}</span>
          </div>
          
          {/* Location */}
          <div className="flex items-center mb-3 text-sm text-gray-600 dark:text-gray-400">
            <FiMapPin className="mr-2" />
            <span>{item.location}</span>
          </div>
          
          {/* Description */}
          <div className="mb-4">
            <ul className="space-y-1">
              {item.description.map((point, idx) => (
                <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                  <FiCheckCircle className={`mr-2 mt-0.5 flex-shrink-0 ${isEven ? 'text-gray-600 dark:text-accent1' : 'text-gray-600 dark:text-accent2'}`} size={12} />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Achievements */}
          {item.achievements && (
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <FiAward className={`mr-2 ${isEven ? 'text-gray-600 dark:text-accent1' : 'text-gray-600 dark:text-accent2'}`} />
                <h4 className="font-medium text-gray-700 dark:text-gray-300 text-sm">Key Achievements</h4>
              </div>
              <ul className="space-y-1">
                {item.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                    <FiCheckCircle className={`mr-2 mt-0.5 flex-shrink-0 ${isEven ? 'text-gray-600 dark:text-accent1' : 'text-gray-600 dark:text-accent2'}`} size={12} />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* GPA/Score */}
          {item.gpa && (
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${isEven ? 'bg-accent1/10 text-gray-700 dark:text-accent1' : 'bg-accent2/10 text-gray-700 dark:text-accent2'}`}>
              Score: {item.gpa}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="education" 
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
              Education Journey
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background and educational qualifications.
          </p>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default Education;