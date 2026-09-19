import { Section } from '@/components/ui/Section';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { Link } from '@/components/ui/Link';

export default function WorkPage() {
  return (
    <main className="pt-16">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">Work</h1>
          <p className="text-lg text-[#666666] mb-8">
            Selected projects showcasing engineering depth, problem-solving, and product thinking.
          </p>
          <Link href="/" className="text-sm text-[#999999] hover:text-[#2563EB]">
            ← Back to home
          </Link>
        </div>
      </Section>
      
      <Section className="bg-[#FFFFFF]">
        <ProjectGrid />
      </Section>
    </main>
  );
}
