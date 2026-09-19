import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Image from 'next/image';
import { Link } from '@/components/ui/Link';
import { Section } from '@/components/ui/Section';
import { generateProjectMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return {};
  return generateProjectMetadata(project);
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const sections = [
    { id: 'overview', title: '01 — OVERVIEW', content: project.details.overview },
    { id: 'problem', title: '02 — PROBLEM', content: project.details.problem },
    { id: 'approach', title: '03 — APPROACH', content: project.details.approach },
    { id: 'architecture', title: '04 — ARCHITECTURE', content: project.details.architecture },
    { id: 'decisions', title: '05 — ENGINEERING DECISIONS', content: project.details.engineeringDecisions },
    { id: 'challenges', title: '06 — CHALLENGES', content: project.details.challenges },
    { id: 'result', title: '07 — RESULT', content: project.details.result },
    { id: 'technology', title: '08 — TECHNOLOGY', content: project.details.technology },
  ];

  return (
    <main className="pt-16">
      <Section>
        <div className="max-w-4xl mx-auto">
          <Link href="/work" className="text-sm text-[#999999] hover:text-[#2563EB] mb-8 inline-block">
            ← Back to work
          </Link>
          
          <div className="mb-8">
            <div className="text-sm text-[#999999] font-mono mb-2">{project.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">{project.title}</h1>
            <p className="text-lg text-[#666666] mb-4">{project.description}</p>
            <div className="text-sm text-[#999999] font-mono">{project.date}</div>
          </div>

          <div className="relative aspect-video mb-12 overflow-hidden rounded-xl bg-[#999999]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
            />
          </div>

          <div className="flex gap-4 mb-12">
            <Link href={project.github} external>
              GitHub ↗
            </Link>
          </div>
        </div>
      </Section>

      {sections.map((section) => (
        <Section key={section.id} className="bg-[#FFFFFF]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-mono text-[#999999] mb-6">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="space-y-2 text-[#666666]">
                {section.content.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#2563EB] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[#666666] leading-relaxed">{section.content}</p>
            )}
          </div>
        </Section>
      ))}

      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-mono text-[#999999] mb-6">09 — DEMO / SOURCE</h2>
          <div className="flex gap-4">
            <Link href={project.github} external>
              View Source ↗
            </Link>
            {project.demo && (
              <Link href={project.demo} external>
                Live Demo ↗
              </Link>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}
