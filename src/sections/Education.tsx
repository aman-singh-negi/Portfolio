import { motion, useReducedMotion } from 'framer-motion';
import { FiAward, FiMapPin } from 'react-icons/fi';

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
    period: '2023 – 2027',
    highlights: [
      'Specializing in Artificial Intelligence and Machine Learning',
      'Coursework includes DSA, DBMS, ML, Deep Learning, and Computer Vision',
      'Active in hackathons, coding communities, and project-based learning',
    ],
    score: 'CGPA 9.38 / 10',
  },
  {
    institution: 'Kendriya Vidyalaya',
    degree: 'Higher Secondary Education',
    location: 'Haridwar, Uttarakhand',
    period: '2022 – 2023',
    highlights: [
      'Science stream with Computer Science',
      'Scored 92.4% in CBSE Board Examinations',
      'Served as School Head Boy',
    ],
    score: '92.4%',
  },
  {
    institution: 'Kendriya Vidyalaya',
    degree: 'Secondary Education',
    location: 'Dehradun, Uttarakhand',
    period: '2020 – 2021',
    highlights: [
      'Built strong foundations in science and mathematics',
      'Scored 94.8% in CBSE Board Examinations',
      'Regional level basketball player',
    ],
    score: '94.8%',
  },
];

const Education = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="education" className="section-shell">
      <div className="mb-12 space-y-5">
        <div className="section-kicker">Education</div>
        <h2 className="section-title">Academic foundation with strong upward momentum.</h2>
        <p className="section-copy">
          My education has been shaped by rigorous coursework, competitive learning environments, and consistent
          hands-on project work.
        </p>
      </div>

      <div className="relative grid gap-5 before:absolute before:bottom-0 before:left-[1.05rem] before:top-0 before:hidden before:w-px before:bg-[color:var(--border)] md:before:block">
        {educationData.map((item, index) => (
          <motion.article
            key={`${item.institution}-${item.period}`}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="relative pl-0 md:pl-12"
          >
            <div className="absolute left-0 top-7 hidden h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--bg-elevated)] text-[color:var(--heading)] md:flex">
              <FiAward />
            </div>
            <div className="editorial-card rounded-[1.85rem] p-7">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">{item.period}</p>
                  <h3 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.05em] text-[color:var(--heading)]">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-base font-semibold text-[color:var(--heading)]">{item.institution}</p>
                </div>
                <div className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg-soft)] px-4 py-2 text-sm font-semibold text-[color:var(--heading)]">
                  {item.score}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-[color:var(--text-muted)]">
                <FiMapPin />
                <span>{item.location}</span>
              </div>

              <div className="mt-6 grid gap-3">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--bg-soft)] px-4 py-3 text-sm leading-7 text-[color:var(--text-muted)]">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Education;
