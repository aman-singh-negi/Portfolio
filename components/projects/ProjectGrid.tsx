import React from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectGrid() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {featuredProjects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
