import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiAward, FiCode, FiTrendingUp } from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';

type Achievement = {
  title: string;
  description: string;
  icon: typeof FiAward;
};

const achievements: Achievement[] = [
  {
    title: 'Smart India Hackathon Finalist',
    description: 'Recognized for an AI-driven institutional inspection system built for real problem solving.',
    icon: FiAward,
  },
  {
    title: 'CodeChef 3-Star Coder',
    description: 'Reached a 1651 peak rating, reinforcing strong consistency in competitive programming.',
    icon: FiTrendingUp,
  },
  {
    title: '300+ LeetCode Problems',
    description: 'Built strong problem-solving habits across data structures, algorithms, and implementation details.',
    icon: FiCode,
  },
];

interface AchievementsProps {
  onViewCertificates?: () => void;
}

const Achievements = ({ onViewCertificates }: AchievementsProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="achievements" className="section-shell">
      <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-6">
          <div className="section-kicker">Recognition</div>
          <h2 className="section-title">Achievements that reinforce both depth and consistency.</h2>
          <p className="section-copy">
            These milestones show how I perform in competitive environments and how that strength carries into product work.
          </p>
        </div>
        <button onClick={onViewCertificates} className="btn-primary self-start lg:self-auto cursor-hover whitespace-nowrap">
          View Certificates
          <FiArrowRight size={18} />
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.article
              key={achievement.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <SpotlightCard className="editorial-card h-full rounded-[2.5rem] p-8 md:p-10 cursor-hover">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-foreground border border-border shadow-sm group-hover:bg-neon-cyan group-hover:text-background transition-all duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="mt-8 font-sans text-2xl md:text-3xl font-bold tracking-[-0.03em] text-foreground group-hover:text-neon-cyan transition-colors">
                  {achievement.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{achievement.description}</p>
              </SpotlightCard>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
