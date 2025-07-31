import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { db, analytics } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, limit, query } from 'firebase/firestore';
import { logEvent, Analytics } from 'firebase/analytics';

// Animation variants for form elements
const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const formItemVariants = {
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

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [firebaseStatus, setFirebaseStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  
  // In your useEffect for testing Firebase connection
  useEffect(() => {
    const testFirebaseConnection = async () => {
      try {
        // Test Firestore connection by querying the messages collection
        const messagesQuery = query(collection(db, 'messages'), limit(1));
        await getDocs(messagesQuery);
        
        // Test Analytics by logging a test event (only if analytics is available)
        if (analytics) {
          logEvent(analytics as Analytics, 'page_view', {
            page_title: 'Contact',
            page_location: window.location.href,
          });
        }
        
        setFirebaseStatus('connected');
        console.log('Firebase connection successful!');
      } catch (error) {
        console.error('Firebase connection error:', error);
        setFirebaseStatus('error');
      }
    };
    
    testFirebaseConnection();
  }, []);

  // Add this to your JSX to show Firebase connection status
  {firebaseStatus === 'error' && (
    <div className="p-4 mb-6 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg">
      <p>There was an issue connecting to our messaging service. Your message may not be delivered.</p>
    </div>
  )}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Add the message to Firestore
      const docRef = await addDoc(collection(db, 'messages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: serverTimestamp()
      });
      
      // Log form submission event to Analytics (only if analytics is available)
      if (analytics) {
        logEvent(analytics as Analytics, 'form_submit', {
          form_id: 'contact_form',
          document_id: docRef.id
        });
      }
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setFormStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const inputClasses = `w-full bg-light/30 dark:bg-dark/30 border-b-2 border-gray-300 dark:border-gray-700 
                      focus:border-accent1 dark:focus:border-accent1 outline-none py-3 px-5 
                      transition-all duration-300 text-gray-700 dark:text-gray-300 rounded-lg 
                      backdrop-blur-sm focus:shadow-md focus:shadow-accent1/10 
                      placeholder:text-gray-400 dark:placeholder:text-gray-600`;

  return (
    <section id="contact" className="min-h-screen py-20 snap-start relative overflow-hidden">
      {/* Animated background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent1/10 blur-3xl"
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
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent2/10 blur-3xl"
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
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-accent1/5 to-accent2/5 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
              <motion.span 
                className="gradient-text inline-block"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                Get In Touch
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
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            Have a project in mind or want to chat? Feel free to reach out using the form below.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-light/50 dark:bg-dark/50 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-xl
                      border border-gray-200/50 dark:border-gray-800/50 hover:border-accent1/30 dark:hover:border-accent1/30
                      transition-all duration-500 relative overflow-hidden"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{ 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
              y: -5,
              borderColor: 'rgba(var(--accent1-rgb), 0.4)'
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Decorative elements inside form */}
            <motion.div 
              className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-accent1/10 to-accent2/10 blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-tr from-accent2/10 to-accent1/10 blur-2xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Animated grid lines */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              {[...Array(10)].map((_, i) => (
                <motion.div 
                  key={`h-${i}`}
                  className="absolute left-0 right-0 h-px bg-accent1/50"
                  style={{ top: `${i * 10}%` }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + (i * 0.05) }}
                  viewport={{ once: true }}
                />
              ))}
              {[...Array(10)].map((_, i) => (
                <motion.div 
                  key={`v-${i}`}
                  className="absolute top-0 bottom-0 w-px bg-accent2/50"
                  style={{ left: `${i * 10}%` }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + (i * 0.05) }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
            <motion.div 
              className="mb-8 relative group"
              variants={formItemVariants}
              custom={0}
            >
              <div className="flex items-center mb-3">
                <motion.div 
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-accent1/10 mr-3 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: 'rgba(var(--accent1-rgb), 0.2)',
                    boxShadow: '0 0 10px rgba(var(--accent1-rgb), 0.3)'
                  }}
                >
                  <FiUser className="text-accent1 relative z-10" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-accent1/20 to-accent2/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  />
                </motion.div>
                <motion.label 
                  htmlFor="name" 
                  className="text-gray-700 dark:text-gray-300 font-medium text-lg"
                  whileHover={{ x: 3, color: 'var(--accent1)' }}
                  transition={{ duration: 0.2 }}
                >
                  Name
                </motion.label>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent1/5 to-accent2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Your name"
                  disabled={formStatus === 'submitting'}
                  autoComplete="name"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent1 to-accent2"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="mb-8 relative group"
              variants={formItemVariants}
              custom={1}
            >
              <div className="flex items-center mb-3">
                <motion.div 
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-accent1/10 mr-3 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: 'rgba(var(--accent1-rgb), 0.2)',
                    boxShadow: '0 0 10px rgba(var(--accent1-rgb), 0.3)'
                  }}
                >
                  <FiMail className="text-accent1 relative z-10" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-accent1/20 to-accent2/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  />
                </motion.div>
                <motion.label 
                  htmlFor="email" 
                  className="text-gray-700 dark:text-gray-300 font-medium text-lg"
                  whileHover={{ x: 3, color: 'var(--accent1)' }}
                  transition={{ duration: 0.2 }}
                >
                  Email
                </motion.label>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent1/5 to-accent2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Your email address"
                  disabled={formStatus === 'submitting'}
                  autoComplete="email"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent1 to-accent2"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="mb-8 relative group"
              variants={formItemVariants}
              custom={2}
            >
              <div className="flex items-center mb-3">
                <motion.div 
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-accent1/10 mr-3 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: 'rgba(var(--accent1-rgb), 0.2)',
                    boxShadow: '0 0 10px rgba(var(--accent1-rgb), 0.3)'
                  }}
                >
                  <FiMessageSquare className="text-accent1 relative z-10" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-accent1/20 to-accent2/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  />
                </motion.div>
                <motion.label 
                  htmlFor="message" 
                  className="text-gray-700 dark:text-gray-300 font-medium text-lg"
                  whileHover={{ x: 3, color: 'var(--accent1)' }}
                  transition={{ duration: 0.2 }}
                >
                  Message
                </motion.label>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent1/5 to-accent2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Your message"
                  disabled={formStatus === 'submitting'}
                  autoComplete="off"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent1 to-accent2"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="relative mt-10 group"
              variants={formItemVariants}
              custom={3}
            >
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-accent1 to-accent2 rounded-full blur opacity-70"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [0.98, 1.01, 0.98]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                whileHover={{ 
                  opacity: 1,
                  scale: 1.02
                }}
              />
              <motion.button
                type="submit"
                className="relative w-full py-4 px-8 bg-light dark:bg-dark text-gray-800 dark:text-white font-medium rounded-full
                          flex items-center justify-center shadow-xl group-hover:shadow-accent1/20 transition-all duration-500
                          overflow-hidden z-10"
                disabled={formStatus === 'submitting'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className="absolute w-0 h-0 bg-gradient-to-r from-accent1 to-accent2 rounded-full opacity-10"
                  animate={{ 
                    width: ['0%', '120%', '0%'],
                    height: ['0%', '400%', '0%'],
                    x: ['-50%', '0%', '50%']
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <motion.span 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10"
                  style={{ 
                    background: 'radial-gradient(circle, rgba(var(--accent1-rgb), 0.8) 0%, transparent 70%)'
                  }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.2, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <span className="relative flex items-center justify-center">
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-accent1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent1 to-accent2 font-bold">Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <motion.div
                        className="mr-3 text-accent1"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <FiSend />
                      </motion.div>
                      <motion.span 
                        className="bg-clip-text text-transparent bg-gradient-to-r from-accent1 to-accent2 font-bold"
                        whileHover={{ 
                          letterSpacing: '0.05em',
                          textShadow: '0 0 8px rgba(var(--accent1-rgb), 0.5)'
                        }}
                      >
                        Send Message
                      </motion.span>
                    </span>
                  )}
                </span>
              </motion.button>
            </motion.div>

            {formStatus === 'success' && (
              <motion.div
                className="mt-6 p-4 bg-green-100/80 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl
                          border border-green-200 dark:border-green-800 backdrop-blur-sm shadow-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FiCheckCircle className="h-5 w-5 text-green-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">Your message has been sent successfully! I'll get back to you soon.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {formStatus === 'error' && (
              <motion.div
                className="mt-6 p-4 bg-red-100/80 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl
                          border border-red-200 dark:border-red-800 backdrop-blur-sm shadow-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, type: 'spring' }}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FiAlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <span className="text-sm font-medium">There was an error sending your message. Please try again later.</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.form>

          {/* Only show Firebase error status if there's an issue */}
          {firebaseStatus === 'error' && (
            <motion.div
              className="mt-8 flex justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="px-5 py-3 rounded-xl flex items-center text-sm backdrop-blur-sm shadow-md
                border transition-all duration-300 bg-red-100/50 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800/50">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 10 }}
                    >
                      <FiAlertCircle className="h-5 w-5 text-red-500" />
                    </motion.div>
                  </div>
                  <div className="ml-3">
                    <span className="font-medium z-0">Firebase connection error</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-block relative">
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded-xl blur-xl"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [0.98, 1.02, 0.98]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="relative px-6 py-4 bg-light/50 dark:bg-dark/50 backdrop-blur-md rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg overflow-hidden"
                whileHover={{ 
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  borderColor: 'rgba(var(--accent1-rgb), 0.3)',
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient overlay */}
                <motion.div 
                  className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-accent1/5 to-transparent -z-10"
                  initial={{ x: '100%' }}
                  animate={{ x: '-100%' }}
                  transition={{ duration: 3, ease: 'linear', repeat: Infinity, repeatDelay: 1 }}
                />
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent1/50"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent2/50"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent2/50"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent1/50"></div>
                
                <div className="text-gray-700 dark:text-gray-300 flex items-center justify-center flex-wrap gap-2">
                  <motion.span 
                    className="font-medium"
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ color: 'var(--accent1)' }}
                  >
                    Prefer direct email? Reach me at
                  </motion.span>{" "}
                  <motion.a
                    href="mailto:lavishnegi7249@gmail.com"
                    className="inline-flex items-center gap-1.5 text-accent1 font-semibold relative group"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: '0 0 8px rgba(var(--accent1-rgb), 0.5)'
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 10, 0, -10, 0],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        repeatDelay: 3
                      }}
                    >
                      <FiMail className="text-accent2" />
                    </motion.div>
                    <span>lavishnegi7249@gmail.com</span>
                    <motion.span 
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent1 to-accent2"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;