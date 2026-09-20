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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return {};
  return generateProjectMetadata(project);
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

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
            <div className="text-sm text-[#999999] font-mono mb-4">{project.date}</div>
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

          <div className="mb-12">
            <h2 className="text-sm font-mono text-[#999999] mb-4">DETAILED DESCRIPTION</h2>
            <p className="text-[#666666] leading-relaxed text-lg">{project.detailedDescription}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-sm font-mono text-[#999999] mb-4">TECHNOLOGIES</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-[#F5F5F5] text-[#666666] text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Link href={project.github} external>
              GitHub ↗
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
