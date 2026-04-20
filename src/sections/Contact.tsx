import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { db, analytics } from '../firebase/config';
import { collection, addDoc, serverTimestamp, getDocs, limit, query } from 'firebase/firestore';
import { logEvent } from 'firebase/analytics';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [firebaseStatus, setFirebaseStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  
  // Test Firebase connection on component mount
  useEffect(() => {
    const testFirebaseConnection = async () => {
      try {
        // Test Firestore connection by querying the messages collection
        const messagesQuery = query(collection(db, 'messages'), limit(1));
        await getDocs(messagesQuery);
        
        // Test Analytics by logging a test event (only if analytics is available)
        if (analytics) {
          logEvent(analytics, 'page_view', {
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
        logEvent(analytics, 'form_submit', {
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
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent1/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent2/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-accent1/5 to-accent2/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text relative">
              Get In Touch
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent1 to-accent2"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              ></motion.span>
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            {/* Decorative elements inside form */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-accent1/10 to-accent2/10 blur-2xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-tr from-accent2/10 to-accent1/10 blur-2xl"></div>
            <div className="mb-8 relative group">
              <div className="flex items-center mb-3">
                <motion.div 
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-accent1/10 mr-3"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(var(--accent1-rgb), 0.2)' }}
                >
                  <FiUser className="text-accent1" />
                </motion.div>
                <label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                  Name
                </label>
              </div>
              <div className="relative">
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
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent1 to-accent2 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="mb-8 relative group">
              <div className="flex items-center mb-3">
                <motion.div 
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-accent1/10 mr-3"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(var(--accent1-rgb), 0.2)' }}
                >
                  <FiMail className="text-accent1" />
                </motion.div>
                <label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                  Email
                </label>
              </div>
              <div className="relative">
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
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent1 to-accent2 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="mb-8 relative group">
              <div className="flex items-center mb-3">
                <motion.div 
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-accent1/10 mr-3"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(var(--accent1-rgb), 0.2)' }}
                >
                  <FiMessageSquare className="text-accent1" />
                </motion.div>
                <label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                  Message
                </label>
              </div>
              <div className="relative">
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
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent1 to-accent2 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            <div className="relative mt-10 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent1 to-accent2 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500"></div>
              <motion.button
                type="submit"
                className="relative w-full py-4 px-8 bg-light dark:bg-dark text-gray-800 dark:text-white font-medium rounded-full
                          flex items-center justify-center shadow-xl group-hover:shadow-accent1/20 transition-all duration-500
                          overflow-hidden z-10"
                disabled={formStatus === 'submitting'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-accent1 to-accent2 rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
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
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent1 to-accent2 font-bold">Send Message</span>
                    </span>
                  )}
                </span>
              </motion.button>
            </div>

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
                    <p className="text-sm font-medium">There was an error sending your message. Please try again later.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.form>

          {/* Firebase Connection Status */}
          <motion.div
            className="mt-8 flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={`
              px-5 py-3 rounded-xl flex items-center text-sm backdrop-blur-sm shadow-md
              border transition-all duration-300
              ${firebaseStatus === 'connected' 
                ? 'bg-green-100/50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800/50' 
                : firebaseStatus === 'error' 
                  ? 'bg-red-100/50 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800/50' 
                  : 'bg-gray-100/50 text-gray-700 dark:bg-gray-800/50 dark:text-gray-400 border-gray-200 dark:border-gray-700/50'}`
            }>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {firebaseStatus === 'checking' && (
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent1 to-accent2 rounded-full animate-pulse"></div>
                      <div className="relative">
                        <svg className="animate-spin h-5 w-5 text-accent1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                    </div>
                  )}
                  {firebaseStatus === 'connected' && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 10 }}
                    >
                      <FiCheckCircle className="h-5 w-5 text-green-500" />
                    </motion.div>
                  )}
                  {firebaseStatus === 'error' && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 10 }}
                    >
                      <FiAlertCircle className="h-5 w-5 text-red-500" />
                    </motion.div>
                  )}
                </div>
                <div className="ml-3">
                  <p className="font-medium">
                    {firebaseStatus === 'checking' && 'Checking Firebase connection...'}
                    {firebaseStatus === 'connected' && 'Firebase connected successfully'}
                    {firebaseStatus === 'error' && 'Firebase connection error'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded-xl blur-xl opacity-70"></div>
              <div className="relative px-6 py-4 bg-light/50 dark:bg-dark/50 backdrop-blur-md rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-gray-700 dark:text-gray-300 flex items-center justify-center flex-wrap gap-2">
                  <motion.span 
                    className="font-medium"
                    initial={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Prefer direct email? Reach me at
                  </motion.span>{" "}
                  <motion.a
                    href="mailto:aman@example.com"
                    className="inline-flex items-center gap-1.5 text-accent1 font-semibold relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FiMail className="text-accent2" />
                    <span>aman@example.com</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent1 to-accent2 group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;