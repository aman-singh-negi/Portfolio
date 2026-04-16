import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiCpu, FiLayers, FiTarget } from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';

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

          <SpotlightCard className="editorial-card rounded-[2.5rem] p-8 md:p-10 cursor-hover">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-muted-foreground">Profile snapshot</p>
            <div className="mt-6 space-y-5">
              {profilePoints.map((point) => (
                <div key={point} className="flex items-start gap-4 text-base leading-relaxed text-muted-foreground">
                  <span className="mt-2.5 h-2 w-2 rounded-full bg-neon-cyan shadow-[0_0_8px_theme('colors.neon.cyan')]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ delay: 0.08 }}
          className="grid gap-6"
        >
          <SpotlightCard className="premium-panel rounded-[2.5rem] p-8 md:p-12 cursor-hover">
            <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="text-sm font-bold uppercase tracking-[0.26em] text-muted-foreground">Positioning</p>
                <p className="mt-5 font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-foreground leading-[1.2]">
                  I build modern products with a competitive-programming backbone and a product-grade finish.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-neon-violet hover:text-neon-cyan transition-colors whitespace-nowrap">
                Let’s collaborate
                <FiArrowUpRight size={18} />
              </a>
            </div>
          </SpotlightCard>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <SpotlightCard className="editorial-card h-full rounded-[2.5rem] p-8 cursor-hover">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-foreground border border-border shadow-sm group-hover:bg-neon-violet group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold tracking-[-0.02em] text-foreground group-hover:text-neon-violet transition-colors">
                    {title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
                </SpotlightCard>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
