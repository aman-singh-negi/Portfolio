import { lazy, Suspense } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowDownRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const HeroObject3D = lazy(() => import('../components/HeroObject3D'));

const trustStats = [
  { value: '9.38', label: 'Current CGPA', detail: 'Academic consistency backed by execution.' },
  { value: '300+', label: 'LeetCode solves', detail: 'Deliberate algorithmic practice across core patterns.' },
  { value: '3', label: 'Core tracks', detail: 'AI, full-stack engineering, and competitive programming.' },
];

const signalRows = [
  'Shipping interfaces that feel high-end without losing clarity.',
  'Comfortable turning AI ideas into practical product workflows.',
  'Strong ownership from system design through UI finish.',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative max-w-3xl">
          <motion.p variants={itemVariants} className="display-eyebrow mb-5">
            Portfolio engineered as a statement piece
          </motion.p>
          <motion.div variants={itemVariants} className="mb-6">
            <span className="kicker">Designerly engineering. Product-grade storytelling.</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.07em] text-foreground sm:text-6xl lg:text-[6.25rem]">
            Building software that feels <span className="text-gradient">as sharp as it performs.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
            I&apos;m Aman Singh Negi, a developer focused on ambitious digital products where algorithmic strength, applied AI, and visual precision all need to coexist.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary group">
              Explore Projects
              <FiArrowDownRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="https://drive.google.com/open?id=1prx7wtQJdo9aTFeP0Wo6XmYVF8wigora&usp=drive_fs"
              className="btn-secondary group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <FiDownload size={18} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-6">
            <a href="https://github.com/aman-singh-negi" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
              <FiGithub size={18} className="transition-transform group-hover:scale-110" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/aman-singh-negi0/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
              <FiLinkedin size={18} className="transition-transform group-hover:scale-110" />
              LinkedIn
            </a>
            <a href="https://leetcode.com/amansinghnegi" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
              <SiLeetcode size={18} className="transition-transform group-hover:scale-110" />
              LeetCode
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-14 grid gap-4 sm:grid-cols-3">
            {trustStats.map((stat) => (
              <div key={stat.label} className="metric-tile group">
                <p className="font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.05em] text-foreground">{stat.value}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-muted-foreground">{stat.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.detail}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-[var(--accent)]/20 blur-[70px]" />
          <div className="absolute -right-4 bottom-14 h-48 w-48 rounded-full bg-[var(--accent-secondary)]/20 blur-[90px]" />

          <div className="premium-panel relative overflow-hidden rounded-[2.5rem] border border-border p-3">
            <div className="absolute left-5 top-5 z-10">
              <span className="kicker bg-[color:var(--bg-elevated)]/70 text-foreground">Interactive profile object</span>
            </div>

            <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.04))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] lg:h-[520px]">
              <Suspense
                fallback={
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="h-24 w-24 rounded-full border border-border animate-pulse" />
                  </div>
                }
              >
                <HeroObject3D />
              </Suspense>

              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[color:var(--background)]/90 to-transparent" />
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {signalRows.map((row, index) => (
              <motion.div
                key={row}
                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                animate={reduceMotion ? {} : { opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel flex items-center gap-4 rounded-[1.4rem] px-5 py-4"
              >
                <div className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_16px_rgba(255,107,53,0.45)] dark:bg-[var(--accent-secondary)] dark:shadow-[0_0_16px_rgba(103,232,249,0.45)]" />
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">{row}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
