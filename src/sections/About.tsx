import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiCpu, FiLayers, FiTarget } from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';

const pillars = [
  {
    icon: FiCpu,
    title: 'Systems thinker',
    description: 'I like breaking down complex technical problems into products that feel clear, useful, and commercially relevant.',
  },
  {
    icon: FiLayers,
    title: 'Cross-stack builder',
    description: 'From interface architecture to backend logic, I prefer end-to-end ownership over isolated implementation.',
  },
  {
    icon: FiTarget,
    title: 'Competitive precision',
    description: 'Competitive programming trained me to care about edge cases, tradeoffs, and rigor under pressure.',
  },
];

const profilePoints = [
  'B.Tech CSE student at Graphic Era Hill University, focused on AI and ML.',
  'Comfortable with React, Node.js, Python, C++, databases, and modern frontend craft.',
  'Most excited by work where engineering quality and user experience both matter.',
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
          <p className="display-eyebrow">About</p>
          <div className="section-kicker">High-agency product engineer</div>
          <h2 className="section-title">A builder who cares deeply about both technical depth and aesthetic restraint.</h2>
          <p className="section-copy">
            My work sits at the overlap of algorithmic problem solving, applied AI, and premium interface design.
            I gravitate toward projects that need clarity under complexity, not just code volume.
          </p>

          <SpotlightCard className="editorial-card rounded-[2.5rem] p-8 md:p-10">
            <p className="display-eyebrow">Profile snapshot</p>
            <div className="mt-6 space-y-5">
              {profilePoints.map((point) => (
                <div key={point} className="flex items-start gap-4 text-base leading-relaxed text-muted-foreground">
                  <span className="mt-2.5 h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_rgba(255,107,53,0.45)]" />
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
          <SpotlightCard className="premium-panel rounded-[2.5rem] p-8 md:p-12">
            <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="display-eyebrow">Positioning</p>
                <p className="mt-5 font-['Space_Grotesk'] text-3xl font-bold leading-[1.12] tracking-[-0.05em] text-foreground md:text-4xl lg:text-5xl">
                  I build modern software with a competitive-programming backbone and a product-grade finish.
                </p>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-[var(--accent)]">
                Let&apos;s collaborate
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
                <SpotlightCard className="editorial-card h-full rounded-[2.5rem] p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-[color:var(--bg-elevated)] text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-8 font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.03em] text-foreground">{title}</h3>
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
