import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: 'Project Team Member',
    company: 'The Designnovation Hub (TDH)',
    period: 'Aug 2023 - Aug 2024',
    description: [
      'Developed and maintained multiple projects using the MERN stack',
      'Optimized database queries resulting in 30% faster page loads',
      'Collaborated with design team to implement responsive UI components',
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    title: 'Technical Member',
    company: 'GDSC',
    period: 'Aug 2023 - Present',
    description: [
    'Engineered scalable cloud-native applications and deployed them using Kubernetes for efficient orchestration',
    'Assisted in mentoring team members and led technical discussions in GDSC workshops and meetups',
  ],
    technologies: ['Cloud Computing', 'Google Analytics', 'Kubernetes'],
  },
  
  // {
  //   title: 'Web Developer',
  //   company: 'Creative Agency',
  //   period: 'Jun 2018 - Feb 2020',
  //   description: [
  //     'Built interactive websites for various clients using modern JavaScript frameworks',
  //     'Implemented responsive designs and ensured cross-browser compatibility',
  //     'Worked directly with clients to gather requirements and provide technical solutions',
  //   ],
  //   technologies: ['JavaScript', 'HTML/CSS', 'WordPress', 'jQuery'],
  // },
];

const TimelineItem = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} md:contents`}>
      <div className="col-start-1 col-end-2 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-0.5 bg-gradient-to-b from-accent1 to-accent2 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-light dark:bg-dark border-2 border-accent1 shadow"></div>
      </div>
      
      <motion.div 
        className={`col-start-2 col-end-12 p-6 rounded-xl my-4 mr-auto shadow-md bg-light/50 dark:bg-dark/50 backdrop-blur-lg
                    border border-gray-200 dark:border-gray-800 w-full md:w-5/6 ${isEven ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
          <h3 className="font-bold text-xl text-gray-800 dark:text-gray-100">{item.title}</h3>
          <div className="flex items-center text-accent1 text-sm">
            <FiCalendar className="mr-1" />
            <span>{item.period}</span>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <FiBriefcase className="mr-2 text-gray-600 dark:text-accent2" />
          <span className="font-medium text-gray-600 dark:text-gray-400">{item.company}</span>
        </div>
        
        <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-400 space-y-1">
          {item.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-xs font-medium bg-accent1/10 text-accent1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="experience" 
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
              Work Experience
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.company} item={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;