'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Link } from '../ui/Link';
import { achievements } from '@/data/achievements';
import { certifications } from '@/data/certifications';

export function AchievementGrid() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-sm font-mono text-[#999999] mb-6">ACHIEVEMENTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card hover>
                <div className="text-sm text-[#999999] mb-2">{achievement.date}</div>
                <h4 className="font-bold text-[#111111] mb-2">{achievement.title}</h4>
                <p className="text-sm text-[#666666] mb-4">{achievement.description}</p>
                {achievement.link && (
                  <Link href={achievement.link} external>
                    View ↗
                  </Link>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-mono text-[#999999] mb-6">CERTIFICATIONS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card hover>
                <div className="text-sm text-[#999999] mb-2">{cert.date}</div>
                <h4 className="font-bold text-[#111111] mb-1">{cert.title}</h4>
                <p className="text-sm text-[#666666] mb-2">{cert.issuer}</p>
                <Link href={cert.link} external>
                  View credential ↗
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
