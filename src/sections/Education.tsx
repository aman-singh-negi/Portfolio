import { motion, useReducedMotion } from 'framer-motion';
import { FiAward, FiMapPin } from 'react-icons/fi';
import SpotlightCard from '../components/SpotlightCard';

type EducationItem = {
  institution: string;
  degree: string;
  location: string;
  period: string;
  highlights: string[];
  score: string;
};

const educationData: EducationItem[] = [
  {
    institution: 'Graphic Era Hill University, Dehradun',
    degree: 'B.Tech in Computer Science and Engineering',
    location: 'Dehradun, Uttarakhand',
    period: '2023 - 2027',
    highlights: [
      'Specializing in Artificial Intelligence and Machine Learning.',
      'Coursework includes DSA, DBMS, ML, Deep Learning, and Computer Vision.',
      'Active in hackathons, coding communities, and project-based learning.',
    ],
    score: 'CGPA 9.38 / 10',
  },
  {
    institution: 'Kendriya Vidyalaya',
    degree: 'Higher Secondary Education',
    location: 'Haridwar, Uttarakhand',
    period: '2022 - 2023',
    highlights: [
      'Science stream with Computer Science.',
      'Scored 92.4% in CBSE board examinations.',
      'Served as school head boy.',
    ],
    score: '92.4%',
  },
  {
    institution: 'Kendriya Vidyalaya',
    degree: 'Secondary Education',
    location: 'Dehradun, Uttarakhand',
    period: '2020 - 2021',
    highlights: [
      'Built a strong foundation in science and mathematics.',
      'Scored 94.8% in CBSE board examinations.',
      'Competed as a regional-level basketball player.',
    ],
    score: '94.8%',
  },
];

const Education = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="education" className="section-shell">
      <div className="mb-16 space-y-6">
        <p className="display-eyebrow">Education</p>
        <div className="section-kicker">Academic momentum</div>
        <h2 className="section-title">A rigorous foundation with consistent upward momentum.</h2>
        <p className="section-copy">
          My education has been shaped by competitive learning environments, strong coursework, and hands-on project work that keeps theory grounded in execution.
        </p>
      </div>

      <div className="relative grid gap-8 before:absolute before:bottom-0 before:left-[1.05rem] before:top-0 before:hidden before:w-px before:bg-[color:var(--border)] md:before:block">
        {educationData.map((item, index) => (
          <motion.article
            key={`${item.institution}-${item.period}`}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="relative pl-0 md:pl-16"
          >
            <div className="absolute left-0 top-10 hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-[color:var(--bg-elevated)] text-foreground md:flex">
              <FiAward size={20} />
            </div>

            <SpotlightCard className="editorial-card rounded-[2.5rem] p-8 md:p-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="display-eyebrow text-[var(--accent)]">{item.period}</p>
                  <h3 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold leading-snug tracking-[-0.04em] text-foreground md:text-4xl">
                    {item.degree}
                  </h3>
                  <p className="mt-3 text-lg font-semibold text-muted-foreground">{item.institution}</p>
                </div>
                <div className="whitespace-nowrap rounded-full border border-border bg-[color:var(--bg-elevated)] px-5 py-2.5 text-sm font-bold text-foreground">
                  {item.score}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-base font-medium text-muted-foreground">
                <FiMapPin className="text-[var(--accent)]" />
                <span>{item.location}</span>
              </div>

              <div className="mt-8 grid gap-4">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-[1.2rem] border border-border bg-white/25 px-5 py-4 text-base leading-relaxed text-muted-foreground dark:bg-white/5">
                    {highlight}
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Education;
