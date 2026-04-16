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
      <div className="mb-16 space-y-6">
        <div className="section-kicker">Education</div>
        <h2 className="section-title">Academic foundation with strong upward momentum.</h2>
        <p className="section-copy">
          My education has been shaped by rigorous coursework, competitive learning environments, and consistent
          hands-on project work.
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
            <div className="absolute left-0 top-10 hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-neon-cyan shadow-[0_0_12px_theme('colors.neon.cyan')] md:flex">
              <FiAward size={20} />
            </div>
            
            <SpotlightCard className="editorial-card rounded-[2.5rem] p-8 md:p-12 cursor-hover">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-neon-cyan">{item.period}</p>
                  <h3 className="mt-4 font-sans text-3xl md:text-4xl font-bold tracking-[-0.03em] text-foreground leading-snug">
                    {item.degree}
                  </h3>
                  <p className="mt-3 text-lg font-semibold text-muted-foreground">{item.institution}</p>
                </div>
                <div className="rounded-full border border-neon-violet/30 bg-muted/50 px-5 py-2.5 text-sm font-bold text-neon-violet shadow-[0_0_15px_rgba(139,92,246,0.15)] whitespace-nowrap">
                  {item.score}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-base text-muted-foreground font-medium">
                <FiMapPin className="text-neon-cyan" />
                <span>{item.location}</span>
              </div>

              <div className="mt-8 grid gap-4">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-[1.2rem] border border-border bg-muted/20 px-5 py-4 text-base leading-relaxed text-muted-foreground hover:bg-muted/40 transition-colors">
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
