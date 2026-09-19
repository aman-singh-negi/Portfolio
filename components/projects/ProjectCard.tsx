'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Link } from '../ui/Link';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    category: string;
    image: string;
    github: string;
    slug: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card hover className="h-full flex flex-col">
        <div className="relative aspect-video mb-4 overflow-hidden rounded-lg bg-[#999999]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="text-sm text-[#999999] mb-2 font-mono">{project.category}</div>
        
        <h3 className="text-xl font-bold text-[#111111] mb-2">{project.title}</h3>
        
        <p className="text-[#666666] mb-4 flex-grow">{project.description}</p>
        
        <div className="flex gap-4">
          <Link href={`/work/${project.slug}`} external={false}>
            Case Study →
          </Link>
          <Link href={project.github} external>
            GitHub
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}
