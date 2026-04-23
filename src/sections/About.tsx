import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering <span className="text-gradient">Impact</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a dedicated software engineer with a profound focus on Data Structures and Algorithms. My foundation in competitive programming has instilled a rigorous problem-solving mindset that translates into highly optimized, scalable production code.
              </p>
              <p>
                As a Full Stack Developer, I specialize in building end-to-end architectures that are not only robust but also boast premium, fluid user interfaces. I believe that an application should perform flawlessly under the hood while delivering a "wow" experience on the surface.
              </p>
              <p>
                Whether I'm optimizing a backend query or orchestrating a complex WebGL animation, my goal remains the same: to build digital products that leave a lasting impression.
              </p>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-4 rounded-2xl border-l-2 border-l-primary">
                <div className="text-3xl font-bold text-white mb-1">1651</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">CodeChef Rating</div>
              </div>
              <div className="glass-card p-4 rounded-2xl border-l-2 border-l-accent">
                <div className="text-3xl font-bold text-white mb-1">300+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">LeetCode Solved</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 relative h-full min-h-[400px] rounded-3xl overflow-hidden glass-card group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 z-10 mix-blend-overlay"></div>
            {/* If there's an image, we use it, else a stylized placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
               <div className="w-3/4 h-3/4 border border-white/10 rounded-full animate-[spin_20s_linear_infinite] border-t-primary/50 border-r-accent/50 border-b-secondary/50"></div>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4">💻</div>
                  <div className="text-xl font-bold tracking-widest uppercase text-white/50">Logic & Design</div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
