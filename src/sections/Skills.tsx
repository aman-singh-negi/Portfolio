import { motion, useReducedMotion } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';

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
      <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="space-y-6">
          <div className="section-kicker">Capabilities</div>
          <h2 className="section-title">A cleaner view of where I create the most value.</h2>
        </div>
        <p className="section-copy">
          Instead of animated progress bars, this section frames my strengths as practical capability areas:
          shipping interfaces, building product logic, and applying AI where it makes sense.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <SpotlightCard className="editorial-card h-full rounded-[2.5rem] p-8 md:p-10 cursor-hover">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-muted-foreground">{category.title}</p>
              <p className="mt-5 font-sans text-2xl md:text-3xl font-bold tracking-[-0.03em] text-foreground leading-snug">
                {category.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-bold text-foreground hover:-translate-y-1 hover:bg-neon-violet hover:text-white hover:border-transparent transition-all shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
