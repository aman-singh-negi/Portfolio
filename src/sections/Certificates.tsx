import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link?: string;
};

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Smart India Hackathon Finalist',
    issuer: 'Ministry of Education, Government of India',
    date: '2023',
    description: 'Finalist in the world\'s biggest hackathon with an AI-driven institutional inspection system.',
    image: '/certificates/sih.jpg',
    link: '#'
  },
  {
    id: 2,
    title: 'CodeChef 3-Star Coder',
    issuer: 'CodeChef',
    date: '2023',
    description: 'Achieved 3-star rating on CodeChef with a highest rating of 1651.',
    image: '/certificates/codechef.jpg',
    link: 'https://www.codechef.com/users/aman_negi'
  },
  {
    id: 3,
    title: 'LeetCode Problem Solver',
    issuer: 'LeetCode',
    date: '2023',
    description: 'Solved 300+ problems on LeetCode across various difficulty levels and topics.',
    image: '/certificates/leetcode.jpg',
    link: 'https://leetcode.com/u/amansinghnegi/'
  },
  {
    id: 4,
    title: 'Flipkart GRID 6.0 Tech Quiz',
    issuer: 'Flipkart',
    date: '2023',
    description: 'Secured position in top 10% in the Flipkart GRID 6.0 Tech Quiz.',
    image: '/certificates/flipkart.jpg',
    link: '#'
  }
];

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  return (
    <motion.div
      className="bg-light/50 dark:bg-dark/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg
                border border-gray-200 dark:border-gray-800 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: certificate.id * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-48 bg-gradient-to-r from-accent1/20 to-accent2/20 flex items-center justify-center">
        <FiAward className="text-6xl text-accent1" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30 dark:to-black/50" />
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2 gradient-text">
          {certificate.title}
        </h3>
        
        <div className="flex justify-between mb-4">
          <span className="text-sm text-gray-600 dark:text-gray-400">{certificate.issuer}</span>
          <span className="text-sm text-gray-500 dark:text-gray-500">{certificate.date}</span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          {certificate.description}
        </p>
      </div>
      
      {certificate.link && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <a 
            href={certificate.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-accent1 hover:text-gray-900 dark:hover:text-accent2 transition-colors duration-300"
          >
            <span className="mr-2">View Certificate</span>
            <FiExternalLink size={16} />
          </a>
        </div>
      )}
    </motion.div>
  );
};

const Certificates = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="certificates" 
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
              Certificates & Achievements
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and certifications I've earned throughout my journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;