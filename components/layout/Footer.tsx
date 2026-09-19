import React from 'react';
import { profile } from '@/data/profile';
import { links } from '@/data/links';

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-[#FFFFFF] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-[#111111] mb-2">{profile.name}</h3>
            <nav aria-label="Footer navigation">
              <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-[#666666]">
                <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors">
                  GitHub
                </a>
                <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors">
                  LinkedIn
                </a>
                <a href={links.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors">
                  LeetCode
                </a>
                <a href={links.codeforces} target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB] transition-colors">
                  Codeforces
                </a>
              </div>
            </nav>
          </div>
          
          <div className="text-sm text-[#666666] text-center md:text-right">
            <p>© 2026 {profile.name}</p>
            <p className="text-xs mt-1">Built with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
