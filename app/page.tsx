import { Hero } from '@/components/hero/Hero';
import { Transition } from '@/components/hero/Transition';
import { Section } from '@/components/ui/Section';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { BuildLog } from '@/components/build-log/BuildLog';
import { Engineering } from '@/components/engineering/Engineering';
import { ActivityGrid } from '@/components/activity/ActivityGrid';
import { AchievementGrid } from '@/components/achievements/AchievementGrid';
import { Education } from '@/components/education/Education';
import { About } from '@/components/about/About';
import { Resume } from '@/components/resume/Resume';
import { Contact } from '@/components/contact/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Transition />
      
      <Section id="work">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12">SELECTED WORK</h2>
        <ProjectGrid />
      </Section>
      
      <Section id="build-log" className="bg-[#FFFFFF]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12">BUILD LOG</h2>
        <BuildLog />
      </Section>
      
      <Section id="engineering">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12">ENGINEERING</h2>
        <Engineering />
      </Section>
      
      <Section id="activity" className="bg-[#FFFFFF]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12">DEVELOPER ACTIVITY</h2>
        <ActivityGrid />
      </Section>
      
      <Section id="achievements">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12">ACHIEVEMENTS & CERTIFICATIONS</h2>
        <AchievementGrid />
      </Section>
      
      <Section id="experience" className="bg-[#FFFFFF]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12">EDUCATION</h2>
        <Education />
      </Section>
      
      <Section id="about">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12">ABOUT</h2>
        <About />
      </Section>
      
      <Section id="resume" className="bg-[#FFFFFF]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12">RESUME</h2>
        <Resume />
      </Section>
      
      <Section id="contact">
        <Contact />
      </Section>
    </main>
  );
}
