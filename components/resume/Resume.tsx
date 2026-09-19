'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <p className="text-lg text-[#666666] mb-8">
        A concise overview of my education, projects and experience.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="primary">
          <a href="/Aman_Resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </Button>
        <Button variant="secondary">
          <a href="/Aman_Resume.pdf" download>
            Download PDF
          </a>
        </Button>
      </div>
      
      <p className="text-sm text-[#999999] mt-6 font-mono">
        Last updated · September 2026
      </p>
    </motion.div>
  );
}
