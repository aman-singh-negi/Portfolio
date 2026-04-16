import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiCpu, FiLayers, FiTarget } from 'react-icons/fi';

const pillars = [
  {
    icon: FiCpu,
    title: 'Systems mindset',
    description: 'I enjoy turning complex technical ideas into clear, usable products with practical performance decisions.',
  },
  {
    icon: FiLayers,
    title: 'Cross-stack execution',
    description: 'From frontend polish to backend logic, I like shipping complete experiences rather than isolated pieces.',
  },
  {
    icon: FiTarget,
    title: 'Competitive precision',
    description: 'Problem solving in contests sharpened how I reason about edge cases, tradeoffs, and scalable solutions.',
  },
];

const profilePoints = [
  'B.Tech CSE at Graphic Era Hill University with a strong AI/ML focus',
  'Comfortable across React, Node.js, Python, C++, and modern product workflows',
  'Interested in products where design quality and engineering depth both matter',
];

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          className="space-y-6"
        >
          <div className="section-kicker">About</div>
          <h2 className="section-title">A builder who cares about both logic and feel.</h2>
          <p className="section-copy">
            My work sits at the intersection of product thinking, algorithmic depth, and polished implementation.
            I’m especially motivated by projects that need both technical rigor and a thoughtful user experience.
          </p>

          <div className="editorial-card rounded-[2rem] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[color:var(--text-muted)]">Profile snapshot</p>
            <div className="mt-5 space-y-4">
              {profilePoints.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm leading-7 text-[color:var(--text-muted)]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.08 }}
          className="grid gap-5"
        >
          <div className="premium-panel rounded-[2rem] p-8">
            <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="text-sm font-bold uppercase tracking-[0.26em] text-[color:var(--text-muted)]">Positioning</p>
                <p className="mt-4 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.05em] text-[color:var(--heading)]">
                  I build modern products with a competitive-programming backbone and a product-grade finish.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[color:var(--heading)]">
                Let’s collaborate
                <FiArrowUpRight />
              </a>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="editorial-card rounded-[1.75rem] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(var(--accent-rgb),0.18),rgba(var(--accent-2-rgb),0.18))] text-[color:var(--heading)]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.04em] text-[color:var(--heading)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
