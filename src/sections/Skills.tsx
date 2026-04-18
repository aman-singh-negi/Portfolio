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
    summary: 'Interfaces that are responsive, structured, and intentionally designed.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Next.js'],
  },
  {
    title: 'Backend and Data',
    summary: 'Practical API and database work with an emphasis on product usefulness and clean architecture.',
    skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'PostgreSQL'],
  },
  {
    title: 'AI and ML',
    summary: 'A strong interest in real-world machine learning, computer vision, and model-backed product workflows.',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'Computer Vision'],
  },
  {
    title: 'Programming Core',
    summary: 'Algorithmic thinking sharpened through competitive programming and systems-oriented practice.',
    skills: ['Python', 'C++', 'Java', 'C', 'JavaScript'],
  },
];

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section-shell">
      <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div className="space-y-6">
          <p className="display-eyebrow">Capabilities</p>
          <div className="section-kicker">Built for practical contribution</div>
          <h2 className="section-title">A cleaner view of where I create the most value.</h2>
        </div>
        <p className="section-copy">
          Instead of animated percentage bars, this section frames my strengths as capability areas:
          shipping interfaces, building product logic, and applying AI where it genuinely helps.
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
            <SpotlightCard className="editorial-card h-full rounded-[2.5rem] p-8 md:p-10">
              <p className="display-eyebrow">{category.title}</p>
              <p className="mt-5 font-['Space_Grotesk'] text-2xl font-bold leading-snug tracking-[-0.04em] text-foreground md:text-3xl">
                {category.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-white/30 px-4 py-2 text-sm font-bold text-foreground transition-all hover:-translate-y-1 hover:bg-foreground hover:text-background dark:bg-white/5"
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
