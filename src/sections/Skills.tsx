import { motion, useReducedMotion } from 'framer-motion';

type SkillCategory = {
  title: string;
  summary: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Systems',
    summary: 'Interfaces that are responsive, structured, and designed to feel deliberate.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Next.js'],
  },
  {
    title: 'Backend & Data',
    summary: 'Practical API and database work with a focus on clean architecture and useful product features.',
    skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'PostgreSQL'],
  },
  {
    title: 'AI / ML',
    summary: 'Strong interest in real-world machine learning and model-backed product workflows.',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'Computer Vision'],
  },
  {
    title: 'Programming Core',
    summary: 'Algorithmic thinking built through competitive programming and systems practice.',
    skills: ['Python', 'C++', 'Java', 'C', 'JavaScript'],
  },
];

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-shell">
      <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="space-y-5">
          <div className="section-kicker">Capabilities</div>
          <h2 className="section-title">A cleaner view of where I create the most value.</h2>
        </div>
        <p className="section-copy">
          Instead of animated progress bars, this section frames my strengths as practical capability areas:
          shipping interfaces, building product logic, and applying AI where it makes sense.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="editorial-card rounded-[1.9rem] p-7"
          >
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">{category.title}</p>
            <p className="mt-4 font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.04em] text-[color:var(--heading)]">
              {category.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg-soft)] px-3 py-1.5 text-sm font-semibold text-[color:var(--heading)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
