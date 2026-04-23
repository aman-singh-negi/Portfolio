import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full py-32 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              Engineering <br />
              <span className="text-gradient">Excellence</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              <p>
                I am a dedicated software engineer with a profound focus on Data Structures and Algorithms. My foundation in competitive programming has instilled a rigorous problem-solving mindset that translates into highly optimized, scalable production code.
              </p>
              <p>
                As a Full Stack Developer, I specialize in building end-to-end architectures that are not only robust but also boast premium, fluid user interfaces. I believe that an application should perform flawlessly under the hood while delivering a <span className="text-white font-medium">"wow" experience</span> on the surface.
              </p>
            </div>
            
            {/* Quick stats with glassmorphism */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="glass-card p-6 rounded-3xl border border-cyan-400/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors"></div>
                <div className="text-4xl font-black text-white mb-2 relative z-10">1651</div>
                <div className="text-xs text-cyan-400 uppercase tracking-widest font-semibold relative z-10">CodeChef Rating</div>
              </div>
              <div className="glass-card p-6 rounded-3xl border border-violet-500/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-violet-500/5 group-hover:bg-violet-500/10 transition-colors"></div>
                <div className="text-4xl font-black text-white mb-2 relative z-10">300+</div>
                <div className="text-xs text-violet-400 uppercase tracking-widest font-semibold relative z-10">LeetCode Solved</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 relative h-full min-h-[500px] rounded-[3rem] overflow-hidden glass-card group border border-white/10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Complex gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.15),transparent_50%)] z-0"></div>
            
            {/* Stylized Abstract Art */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
               {/* Orbital rings */}
               <div className="absolute w-[80%] h-[80%] border border-cyan-400/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
               <div className="absolute w-[60%] h-[60%] border border-violet-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
               <div className="absolute w-[40%] h-[40%] border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
               
               {/* Core element */}
               <div className="relative w-32 h-32 glass rounded-2xl rotate-45 flex items-center justify-center border border-white/20 shadow-[0_0_50px_rgba(34,211,238,0.2)]">
                  <div className="w-16 h-16 bg-gradient-to-tr from-cyan-400 to-violet-500 blur-xl absolute"></div>
                  <div className="text-4xl -rotate-45 relative z-10">⚡</div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
