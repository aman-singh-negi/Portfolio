import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90, color: 'from-cyan-400 to-blue-500' },
  { name: 'C++', level: 85, color: 'from-violet-500 to-purple-600' },
  { name: 'React', level: 88, color: 'from-cyan-400 to-teal-400' },
  { name: 'Node.js', level: 80, color: 'from-green-400 to-emerald-500' },
  { name: 'Machine Learning', level: 75, color: 'from-orange-400 to-rose-500' },
  { name: 'TypeScript', level: 85, color: 'from-blue-400 to-indigo-500' },
  { name: 'Tailwind CSS', level: 95, color: 'from-cyan-300 to-blue-400' },
  { name: 'MongoDB', level: 78, color: 'from-emerald-400 to-teal-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-32 px-6 relative">
      {/* Ambient Glow */}
      <div className="ambient-glow top-1/2 right-0 bg-[radial-gradient(circle,rgba(139,92,246,0.05)_0%,rgba(0,0,0,0)_60%)] translate-x-[20%] translate-y-[-50%]" />

      <div className="container max-w-5xl mx-auto">
        <motion.div 
          className="mb-20 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Technical <span className="text-gradient-alt">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed mx-auto md:mx-0">
            A comprehensive overview of my technical capabilities. I adapt quickly to new technologies and consistently expand my stack to build robust, high-performance solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group"
            >
              <div className="flex justify-between mb-3">
                <span className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors tracking-wide">{skill.name}</span>
                <span className="text-sm font-mono text-cyan-400 opacity-80">{skill.level}%</span>
              </div>
              <div className="w-full bg-[#0a0a0f] rounded-full h-2.5 overflow-hidden border border-white/5 shadow-inner relative">
                <motion.div
                  className={`bg-gradient-to-r ${skill.color} h-full rounded-full relative`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Highlight effect on bar */}
                  <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/30 animate-[shimmer_2s_infinite]"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
