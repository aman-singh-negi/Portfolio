'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { links } from '@/data/links';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
        LET'S BUILD SOMETHING.
      </h2>
      <p className="text-lg text-[#666666] mb-8">
        Have an interesting problem, project, or opportunity?
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={copyEmail}
          className="px-6 py-3 bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg font-medium text-[#111111] hover:border-[#D4D4D4] hover:-translate-y-[-2px] transition-all duration-200 flex items-center gap-2"
        >
          {copied ? '✓ Copied' : profile.email}
        </button>
        
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg font-medium text-[#111111] hover:border-[#D4D4D4] hover:-translate-y-[-2px] transition-all duration-200"
        >
          LinkedIn
        </a>
        
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#FFFFFF] border border-[#E5E5E5] rounded-lg font-medium text-[#111111] hover:border-[#D4D4D4] hover:-translate-y-[-2px] transition-all duration-200"
        >
          GitHub
        </a>
      </div>

      <div className="mt-6">
        <a
          href={`tel:${profile.phone}`}
          className="text-sm text-[#666666] hover:text-[#2563EB] transition-colors"
        >
          {profile.phone}
        </a>
      </div>
    </motion.div>
  );
}
