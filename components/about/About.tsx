'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { education } from '@/data/education';

export function About() {
  const currentEdu = education[0];

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <p className="text-lg text-[#666666] leading-relaxed">
          I'm a fourth-year Computer Science student at {currentEdu.institution} (CGPA: {currentEdu.cgpa}) passionate about software engineering, AI, and building products that solve practical problems. I enjoy working across the stack — from interfaces to intelligent systems — and have experience with reinforcement learning, computer vision, and full-stack development. I'm particularly interested in distributed systems architecture and designing scalable solutions that can handle real-world production demands.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="pt-6 border-t border-[#E5E5E5]"
        >
          <h3 className="text-sm font-mono text-[#999999] mb-4">BEYOND CODE</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-[#FFFFFF] border border-[#E5E5E5] rounded-full text-sm text-[#666666]">
              Gaming
            </span>
            <span className="px-3 py-1 bg-[#FFFFFF] border border-[#E5E5E5] rounded-full text-sm text-[#666666]">
              Competitive Programming
            </span>
            <span className="px-3 py-1 bg-[#FFFFFF] border border-[#E5E5E5] rounded-full text-sm text-[#666666]">
              Side Projects
            </span>
            <span className="px-3 py-1 bg-[#FFFFFF] border border-[#E5E5E5] rounded-full text-sm text-[#666666]">
              Exploring Technology
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
