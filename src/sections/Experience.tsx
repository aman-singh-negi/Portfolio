import { motion, useReducedMotion } from 'framer-motion';
import { FiBriefcase, FiCpu } from 'react-icons/fi';

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
      <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div className="space-y-5">
          <div className="section-kicker">Experience</div>
          <h2 className="section-title">Real teams, real product work, growing responsibility.</h2>
        </div>
        <p className="section-copy">
          I’ve contributed in environments where collaboration, delivery quality, and technical ownership all mattered.
        </p>
      </div>

      <div className="grid gap-5">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.period}`}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="premium-panel rounded-[1.9rem] p-7"
          >
            <div className="relative z-10 grid gap-6 lg:grid-cols-[0.55fr_1.45fr]">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(var(--accent-rgb),0.18),rgba(var(--accent-2-rgb),0.18))] text-[color:var(--heading)]">
                  {index === 0 ? <FiBriefcase size={22} /> : <FiCpu size={22} />}
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">{experience.period}</p>
                  <h3 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.05em] text-[color:var(--heading)]">
                    {experience.title}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-[color:var(--heading)]">{experience.company}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid gap-3">
                  {experience.description.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--bg-soft)] px-4 py-3 text-sm leading-7 text-[color:var(--text-muted)]"
                    >
                      {point}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[color:var(--border)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
