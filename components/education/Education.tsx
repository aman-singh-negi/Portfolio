'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { education } from '@/data/education';

export function Education() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.4 }}
          className="border-l-2 border-[#E5E5E5] pl-6"
        >
          <h3 className="text-xl font-bold text-[#111111]">{edu.degree}</h3>
          <p className="text-[#666666]">{edu.institution}</p>
          <div className="flex gap-4 mt-2 text-sm text-[#999999] font-mono">
            <span>{edu.duration}</span>
            {edu.cgpa && <span>· CGPA: {edu.cgpa}</span>}
            {edu.percentage && <span>· {edu.percentage}</span>}
          </div>
          {edu.coursework.length > 0 && (
            <div className="mt-2 text-sm text-[#666666]">
              <span className="text-[#999999]">Relevant Coursework:</span> {edu.coursework.join(', ')}
            </div>
          )}
          {edu.activities && edu.activities.length > 0 && (
            <div className="mt-2 text-sm text-[#666666]">
              <span className="text-[#999999]">Activities:</span> {edu.activities.join(', ')}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
