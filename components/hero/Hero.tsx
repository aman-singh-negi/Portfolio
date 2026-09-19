'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#111111] mb-6"
          >
            {profile.name}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2563EB] mb-6"
          >
            {profile.headline}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-[#666666] mb-8 max-w-2xl mx-auto"
          >
            Fourth-year Computer Science student building products across software engineering, AI, and the web.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" className="w-full sm:w-auto justify-center">
              <a href="#work">View My Work</a>
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto justify-center">
              <a href="#resume">Resume</a>
            </Button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-xs sm:text-sm text-[#999999] mt-8 font-mono"
          >
            B.Tech CSE · 4th Year · {profile.location}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
