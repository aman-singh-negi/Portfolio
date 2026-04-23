import { motion } from 'framer-motion';
import { FiAward, FiCode, FiTrendingUp } from 'react-icons/fi';

const achievements = [
  {
    title: 'Smart India Hackathon Finalist',
    description: 'Recognized for an AI-driven institutional inspection system designed around a real problem space. Demonstrated ability to deliver impactful solutions under pressure.',
    icon: FiAward,
    date: '2023',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/30'
  },
  {
    title: 'CodeChef 3-Star Coder',
    description: 'Reached a peak rating of 1651, reinforcing consistency in competitive programming performance, logic optimization, and algorithmic thinking.',
    icon: FiTrendingUp,
    date: 'Current',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/30'
  },
  {
    title: '300+ LeetCode Problems',
    description: 'Built strong habits across data structures, algorithms, and implementation details. Consistently solving complex problems to refine engineering skills.',
    icon: FiCode,
    date: 'Ongoing',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/30'
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="w-full py-32 px-6 relative">
      <div className="container max-w-5xl mx-auto">
        <motion.div 
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Milestones & <br className="md:hidden" />
            <span className="text-gradient-alt">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Proof through outcomes. These milestones reflect my performance in competitive environments and my dedication to continuous growth.
          </p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon Marker */}
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl border ${item.border} ${item.bg} ${item.color} shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative backdrop-blur-md`}>
                  <Icon size={22} />
                  <div className={`absolute inset-0 rounded-2xl bg-current opacity-20 blur-xl group-hover:opacity-60 transition-opacity duration-500`}></div>
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] glass-card p-8 rounded-[2rem] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="font-bold text-2xl text-white tracking-tight">{item.title}</h3>
                    <span className={`text-xs font-bold px-3 py-1 ${item.bg} ${item.color} rounded-full border ${item.border} whitespace-nowrap self-start md:self-auto`}>{item.date}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed font-light text-lg">
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
