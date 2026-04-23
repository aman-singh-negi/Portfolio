import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="w-full py-32 px-6 relative">
      {/* Background Glow */}
      <div className="ambient-glow bottom-0 left-0 bg-[radial-gradient(circle,rgba(34,211,238,0.05)_0%,rgba(0,0,0,0)_60%)] translate-x-[-20%] translate-y-[20%]" />

      <div className="container max-w-5xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 glass px-4 py-1.5 rounded-full border border-cyan-400/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">Available for work</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and bold ideas.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 glass-card p-10 md:p-14 rounded-[2.5rem]">
          
          <motion.div 
            className="w-full md:w-5/12 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center mb-8 text-cyan-400 border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.15)] relative">
              <div className="absolute inset-0 bg-cyan-400/10 blur-xl rounded-3xl"></div>
              <FiMail size={32} className="relative z-10" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Drop a message</h3>
            <p className="text-gray-400 mb-10 leading-relaxed font-light text-lg">
              My inbox is always open. For a faster response, feel free to email me directly at the address below.
            </p>
            <a href="mailto:lavishnegi7249@gmail.com" className="text-xl md:text-2xl font-bold text-gradient inline-block interactive group relative w-max">
              lavishnegi7249@gmail.com
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </motion.div>

          <motion.form 
            className="w-full md:w-7/12 flex flex-col gap-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#050508] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/50 transition-all interactive peer placeholder-transparent"
                  placeholder="Name"
                />
                <label htmlFor="name" className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-[#050508] peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:px-2 peer-valid:bg-[#050508]">
                  Your Name
                </label>
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#050508] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/50 transition-all interactive peer placeholder-transparent"
                  placeholder="Email"
                />
                <label htmlFor="email" className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-[#050508] peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:px-2 peer-valid:bg-[#050508]">
                  Email Address
                </label>
              </div>
            </div>
            
            <div className="relative group">
              <textarea 
                id="message" 
                required
                rows={5}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#050508] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400/50 transition-all interactive peer placeholder-transparent resize-none"
                placeholder="Message"
              />
              <label htmlFor="message" className="absolute left-5 top-4 text-gray-500 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-[#050508] peer-focus:px-2 peer-valid:-top-3 peer-valid:text-xs peer-valid:px-2 peer-valid:bg-[#050508]">
                Project Details
              </label>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="mt-4 btn-primary flex items-center justify-center gap-3 interactive disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto self-start"
            >
              {status === 'submitting' ? 'Transmitting...' : status === 'success' ? 'Message Received!' : <><FiSend size={18} /> Send Message</>}
            </button>
          </motion.form>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;