'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

export function Engineering() {
  const categories = [
    { name: 'LANGUAGES', items: skills.languages },
    { name: 'FRONTEND', items: skills.frontend },
    { name: 'BACKEND', items: skills.backend },
    { name: 'AI / ML', items: skills.machineLearning },
    { name: 'DATABASES', items: skills.databases },
    { name: 'TOOLS', items: skills.tools },
  ];

  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-lg text-[#666666] mb-12 max-w-2xl"
      >
        I enjoy building across the stack — from interfaces to intelligent systems.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <h3 className="text-sm font-mono text-[#999999] mb-3">{category.name}</h3>
            <div className="text-[#111111]">
              {category.items.join(' · ')}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="mt-16 pt-8 border-t border-[#E5E5E5]"
      >
        <h3 className="text-sm font-mono text-[#999999] mb-4">HOW I BUILD</h3>
        <div className="flex flex-col md:flex-row items-center gap-4 text-lg text-[#111111]">
          <span>Understand</span>
          <span className="text-[#666666]">↓</span>
          <span>Design</span>
          <span className="text-[#666666]">↓</span>
          <span>Build</span>
          <span className="text-[#666666]">↓</span>
          <span>Test</span>
          <span className="text-[#666666]">↓</span>
          <span>Ship</span>
        </div>
        <p className="text-[#666666] mt-4 max-w-2xl">
          I prefer understanding the problem first, then choosing the simplest architecture that can solve it well.
        </p>
      </motion.div>
    </div>
  );
}
