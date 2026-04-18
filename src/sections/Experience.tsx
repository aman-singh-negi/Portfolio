import { motion, useReducedMotion } from 'framer-motion';
import { FiBriefcase, FiCpu } from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: 'Project Team Member',
    company: 'The Designnovation Hub (TDH)',
    period: 'Aug 2023 - Aug 2024',
    description: [
      'Built and maintained multiple MERN-based product flows.',
      'Improved page and data performance through better query handling.',
      'Worked alongside design decisions to deliver responsive interfaces with stronger finish quality.',
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    title: 'Technical Member',
    company: 'GDSC',
    period: 'Aug 2023 - Present',
    description: [
      'Contributed to cloud-native application thinking and orchestration-focused workflows.',
      'Supported workshops, peer mentoring, and team technical discussions.',
      'Expanded hands-on understanding of scalable deployment and engineering collaboration.',
    ],
    technologies: ['Cloud Computing', 'Kubernetes', 'Workshops', 'Analytics'],
  },
];

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="section-shell">
      <div className="mb-16 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="space-y-6">
          <p className="display-eyebrow">Experience</p>
          <div className="section-kicker">Real team environments</div>
          <h2 className="section-title">Real teams, real delivery, growing responsibility.</h2>
        </div>
        <p className="section-copy">
          I&apos;ve contributed in environments where collaboration, output quality, and technical ownership all mattered.
        </p>
      </div>

      <div className="grid gap-8">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.period}`}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <SpotlightCard className="premium-panel rounded-[2.5rem] p-8 md:p-12">
              <div className="relative z-10 grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
                <div className="space-y-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] border border-border bg-[color:var(--bg-elevated)] text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
                    {index === 0 ? <FiBriefcase size={28} /> : <FiCpu size={28} />}
                  </div>
                  <div>
                    <p className="display-eyebrow text-[var(--accent)]">{experience.period}</p>
                    <h3 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold leading-[1.15] tracking-[-0.04em] text-foreground md:text-4xl">
                      {experience.title}
                    </h3>
                    <p className="mt-3 text-lg font-semibold text-muted-foreground">{experience.company}</p>
                  </div>
                </div>

                <div className="space-y-8 lg:pt-4">
                  <div className="grid gap-4">
                    {experience.description.map((point) => (
                      <div key={point} className="rounded-[1.2rem] border border-border bg-white/25 px-5 py-4 text-base leading-relaxed text-muted-foreground dark:bg-white/5">
                        {point}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/60 bg-[color:var(--bg-elevated)] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
