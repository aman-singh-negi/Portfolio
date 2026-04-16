import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiAward, FiCode, FiTrendingUp } from 'react-icons/fi';

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
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-5">
          <div className="section-kicker">Recognition</div>
          <h2 className="section-title">Achievements that reinforce both depth and consistency.</h2>
          <p className="section-copy">
            These milestones show how I perform in competitive environments and how that strength carries into product work.
          </p>
        </div>
        <button onClick={onViewCertificates} className="cta-primary self-start lg:self-auto">
          View Certificates
          <FiArrowRight />
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.article
              key={achievement.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="editorial-card rounded-[1.8rem] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(var(--accent-rgb),0.18),rgba(var(--accent-2-rgb),0.18))] text-[color:var(--heading)]">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.04em] text-[color:var(--heading)]">
                {achievement.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{achievement.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
