'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Transition() {
  const words = ['PRODUCTS.', 'SYSTEMS.', 'EXPERIMENTS.'];

  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl text-[#666666] mb-4">I BUILD</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            {words.map((word, index) => (
              <motion.h3
                key={word}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-[#111111]"
              >
                {word}
              </motion.h3>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
