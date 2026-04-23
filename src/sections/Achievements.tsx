import { motion } from 'framer-motion';
import { FiAward, FiCode, FiTrendingUp } from 'react-icons/fi';

const achievements = [
  {
    title: 'Smart India Hackathon Finalist',
    description: 'Recognized for an AI-driven institutional inspection system designed around a real problem space. Demonstrated ability to deliver impactful solutions under pressure.',
    icon: FiAward,
    date: '2023'
  },
  {
    title: 'CodeChef 3-Star Coder',
    description: 'Reached a peak rating of 1651, reinforcing consistency in competitive programming performance, logic optimization, and algorithmic thinking.',
    icon: FiTrendingUp,
    date: 'Current'
  },
  {
    title: '300+ LeetCode Problems',
    description: 'Built strong habits across data structures, algorithms, and implementation details. Consistently solving complex problems to refine engineering skills.',
    icon: FiCode,
    date: 'Ongoing'
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="w-full py-24 px-6 relative">
      <div className="container max-w-4xl mx-auto">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Milestones & <span className="text-gradient-alt">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Proof through outcomes. These milestones show how I perform in competitive environments and how that rigor carries into product work.
          </p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Icon Marker */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-black text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                  <Icon size={18} />
                  <div className="absolute inset-0 rounded-full bg-primary opacity-20 blur-md group-hover:opacity-60 transition-opacity"></div>
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-xl text-white">{item.title}</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-white/10 text-gray-300 rounded-full">{item.date}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
