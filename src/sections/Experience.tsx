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
    period: 'Aug 2023 – Aug 2024',
    description: [
      'Built and maintained multiple MERN-based project flows.',
      'Improved data and page performance with better query handling.',
      'Worked closely with design decisions to deliver responsive interfaces.',
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    title: 'Technical Member',
    company: 'GDSC',
    period: 'Aug 2023 – Present',
    description: [
      'Worked on cloud-native applications and orchestration-focused thinking.',
      'Supported workshops, team mentoring, and technical discussions.',
      'Expanded experience in scalable deployment and engineering collaboration.',
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
          <div className="section-kicker">Experience</div>
          <h2 className="section-title">Real teams, real product work, growing responsibility.</h2>
        </div>
        <p className="section-copy">
          I’ve contributed in environments where collaboration, delivery quality, and technical ownership all mattered.
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
            <SpotlightCard className="premium-panel rounded-[2.5rem] p-8 md:p-12 cursor-hover">
              <div className="relative z-10 grid gap-8 lg:grid-cols-[0.55fr_1.45fr]">
                <div className="space-y-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-muted text-foreground border border-border group-hover:bg-neon-cyan group-hover:text-background transition-all duration-300 shadow-sm">
                    {index === 0 ? <FiBriefcase size={28} /> : <FiCpu size={28} />}
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.24em] text-neon-violet">{experience.period}</p>
                    <h3 className="mt-4 font-sans text-3xl md:text-4xl font-bold tracking-[-0.03em] text-foreground leading-[1.2]">
                      {experience.title}
                    </h3>
                    <p className="mt-3 text-lg font-semibold text-muted-foreground">{experience.company}</p>
                  </div>
                </div>

                <div className="space-y-8 lg:pt-4">
                  <div className="grid gap-4">
                    {experience.description.map((point) => (
                      <div
                        key={point}
                        className="rounded-[1.2rem] border border-border bg-muted/30 px-5 py-4 text-base leading-relaxed text-muted-foreground"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground bg-muted hover:bg-neon-cyan hover:text-white hover:border-transparent transition-colors"
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
