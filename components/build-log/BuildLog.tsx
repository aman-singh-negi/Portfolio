'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { buildLog } from '@/data/build-log';
import { Link } from '../ui/Link';

export function BuildLog() {
  return (
    <div className="max-w-3xl mx-auto">
      {buildLog.map((entry, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="flex gap-4 py-4 border-b border-[#E5E5E5] last:border-0 hover:bg-[#FFFFFF]/50 transition-colors px-4 rounded-lg"
        >
          <div className="text-sm text-[#999999] font-mono whitespace-nowrap pt-1">
            {entry.date}
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold text-[#111111] mb-1">{entry.title}</h3>
            <p className="text-sm text-[#666666] mb-2">{entry.description}</p>
            {entry.link && (
              <Link href={entry.link} external className="text-sm">
                View →
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
