import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90, color: 'from-blue-500 to-cyan-400' },
  { name: 'C++', level: 85, color: 'from-blue-600 to-blue-400' },
  { name: 'React', level: 88, color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-400' },
  { name: 'Machine Learning', level: 75, color: 'from-orange-500 to-yellow-400' },
  { name: 'TypeScript', level: 85, color: 'from-blue-400 to-indigo-500' },
  { name: 'Tailwind CSS', level: 95, color: 'from-teal-400 to-cyan-500' },
  { name: 'MongoDB', level: 78, color: 'from-green-600 to-green-400' },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-24 px-6 relative">
      <div className="container max-w-5xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="text-gradient-alt">Arsenal</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-lg">
            A comprehensive overview of my technical capabilities. I adapt quickly to new technologies and consistently expand my stack to build robust solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden border border-white/5">
                <motion.div
                  className={`bg-gradient-to-r ${skill.color} h-3 rounded-full relative`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
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
