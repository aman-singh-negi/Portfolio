import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiArrowLeft } from 'react-icons/fi';

// Import certificate images
import sihCertificate from '../assets/SIH Certificate.png';
import flipkartCertificate from '../assets/Flipkart Grid6.0.png';
import mlCertificate from '../assets/Machine Learning by Andrew NG.png';
import blockchainCertificate from '../assets/Blockchain Fundamentals.png';

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
    date: '2024',
    description: 'Finalist in the world\'s biggest hackathon with an AI-driven institutional inspection system.',
    image: sihCertificate,
    link: 'https://drive.google.com/open?id=1QmfF8yLnm3gQ_Ep3vLWdrmIri9lKww7m&usp=drive_fs'
  },
  {
    id: 2,
    title: 'Flipkart Grid 6.0',
    issuer: 'Unstop',
    date: '2024',
    description: 'Secured position in top 10% in the Flipkart GRID 6.0 Tech Quiz.',
    image: flipkartCertificate,
    link: 'https://drive.google.com/open?id=1N3Qq1nuYx9d62wqTjcSX8qNI60B-gDR1&usp=drive_fs'
  },
  {
    id: 3,
    title: 'Machine Learning by Andrew NG',
    issuer: 'Coursera',
    date: '2023',
    description: 'Build & train supervised machine learning models for prediction & binary classification tasks, including linear regression & logistic regression',
    image: mlCertificate,
    link: 'https://coursera.org/share/fef50358f2e642a45db3ec05676a81d8'
  },
  {
    id: 4,
    title: 'Blockchain Fundamentals',
    issuer: 'Chainlink',
    date: '2024',
    description: 'Completed the course offered by chainlink over blockchain fundamentals',
    image: blockchainCertificate,
    link: 'https://drive.google.com/open?id=1jhrWRohikaWw_rV5WSnfYtuB3rU1TeOu&usp=drive_fs'
  }
];

const CertificateCard = ({ certificate, fullPage }: { certificate: Certificate; fullPage?: boolean }) => {
  return (
    <motion.div
      className="bg-light/50 dark:bg-dark/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg
                border border-gray-200 dark:border-gray-800 h-full flex flex-col"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: certificate.id * 0.05 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="relative h-48 bg-gradient-to-r from-accent1/20 to-accent2/20 overflow-hidden">
        {certificate.image ? (
          <img 
            src={certificate.image} 
            alt={certificate.title} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FiAward className={`text-6xl ${fullPage ? 'text-accent1' : 'text-gray-700 dark:text-gray-300'}`} />
          </div>
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/30 dark:to-black/50" />
      </div>
      
      <div className="p-6 flex-grow"> {/* Added flex-grow */}
        <h3 className={`text-xl font-bold mb-2 ${fullPage ? 'gradient-text' : 'text-gray-800 dark:text-gray-200'}`}>
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
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 mt-auto"> {/* Added mt-auto */}
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

interface CertificatesProps {
  fullPage?: boolean;
  onBackToHome?: () => void;
}

const Certificates = ({ fullPage = false, onBackToHome }: CertificatesProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <motion.section 
      id="certificates" 
      ref={sectionRef}
      className={`${fullPage ? '' : 'min-h-screen'} py-20 ${fullPage ? '' : 'snap-start'} relative`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ willChange: "opacity" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">
              {fullPage ? 'My Certificates' : 'Certificates & Achievements'}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {fullPage 
              ? 'A comprehensive collection of my certifications and achievements.'
              : 'Recognition and certifications I\'ve earned throughout my journey.'}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} fullPage={fullPage} />
          ))}
        </div>
        
        {fullPage && onBackToHome && (
          <motion.button
            onClick={onBackToHome}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-accent1 to-accent2 text-white rounded-full
                      flex items-center justify-center shadow-lg z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FiArrowLeft size={24} />
          </motion.button>
        )}
      </div>
    </motion.section>
  );
};

export default Certificates;