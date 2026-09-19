'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Link } from '../ui/Link';
import { links } from '@/data/links';

export function ActivityGrid() {
  const platforms = [
    {
      name: 'GitHub',
      description: 'View my repositories and contributions',
      link: links.github,
      stats: null
    },
    {
      name: 'LeetCode',
      description: 'Problem solving and algorithm practice',
      link: links.leetcode,
      stats: null
    },
    {
      name: 'Codeforces',
      description: 'Competitive programming profile',
      link: links.codeforces,
      stats: null
    },
    {
      name: 'CodeChef',
      description: '3-Star Coder (Rating: 1610)',
      link: links.codechef,
      stats: '1610'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {platforms.map((platform, index) => (
        <motion.div
          key={platform.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <Card hover>
            <h3 className="font-bold text-[#111111] mb-2">{platform.name}</h3>
            <p className="text-sm text-[#666666] mb-4">{platform.description}</p>
            {platform.stats && (
              <div className="text-2xl font-bold text-[#2563EB] mb-4">{platform.stats}</div>
            )}
            <Link href={platform.link} external>
              View Profile ↗
            </Link>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
