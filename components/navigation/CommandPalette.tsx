'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import { links } from '@/data/links';

interface Command {
  id: string;
  type: 'navigation' | 'project' | 'external';
  label: string;
  action: () => void;
  keywords?: string[];
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const paletteRef = useRef<HTMLDivElement>(null);

  const commands: Command[] = [
    { id: 'home', type: 'navigation', label: 'View Home', action: () => window.location.href = '/' },
    { id: 'work', type: 'navigation', label: 'View Work', action: () => window.location.href = '/work' },
    { id: 'engineering', type: 'navigation', label: 'View Engineering', action: () => window.location.href = '#engineering' },
    { id: 'achievements', type: 'navigation', label: 'View Achievements', action: () => window.location.href = '#achievements' },
    { id: 'about', type: 'navigation', label: 'View About', action: () => window.location.href = '#about' },
    { id: 'resume', type: 'navigation', label: 'View Resume', action: () => window.location.href = '#resume' },
    { id: 'contact', type: 'navigation', label: 'View Contact', action: () => window.location.href = '#contact' },
    { id: 'github', type: 'external', label: 'GitHub', action: () => window.open(links.github, '_blank') },
    { id: 'linkedin', type: 'external', label: 'LinkedIn', action: () => window.open(links.linkedin, '_blank') },
    { id: 'leetcode', type: 'external', label: 'LeetCode', action: () => window.open(links.leetcode, '_blank') },
    { id: 'codeforces', type: 'external', label: 'Codeforces', action: () => window.open(links.codeforces, '_blank') },
    ...projects.map(p => ({
      id: p.slug,
      type: 'project' as const,
      label: p.title,
      action: () => window.location.href = `/work/${p.slug}`,
      keywords: [p.title, p.slug, ...p.technologies]
    }))
  ];

  const filteredCommands = commands.filter(cmd => {
    const searchLower = search.toLowerCase();
    return cmd.label.toLowerCase().includes(searchLower) ||
           cmd.keywords?.some(k => k.toLowerCase().includes(searchLower));
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        }
        if (e.key === 'Enter') {
          e.preventDefault();
          filteredCommands[selectedIndex]?.action();
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  useEffect(() => {
    if (isOpen) {
      searchRef.current?.focus();
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  const handleClickOutside = (e: MouseEvent) => {
    if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              ref={paletteRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl bg-[#FFFFFF] border border-[#E5E5E5] rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="flex items-center border-b border-[#E5E5E5] px-4">
                <span className="text-[#999999] mr-3">🔍</span>
                <input
                  ref={searchRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search portfolio..."
                  className="flex-1 bg-transparent py-4 outline-none text-[#111111] placeholder:text-[#999999]"
                />
                <kbd className="px-2 py-1 text-xs text-[#999999] bg-[#F5F5F5] rounded border border-[#E5E5E5]">ESC</kbd>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length === 0 ? (
                  <div className="py-8 text-center text-[#999999]">No results found</div>
                ) : (
                  filteredCommands.map((cmd, index) => (
                    <button
                      key={cmd.id}
                      onClick={() => {
                        cmd.action();
                        setIsOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                        index === selectedIndex ? 'bg-[#2563EB]/10 text-[#2563EB]' : 'hover:bg-[#F5F5F5]'
                      }`}
                    >
                      <span className="text-xs text-[#999999] font-mono w-20">
                        {cmd.type.toUpperCase()}
                      </span>
                      <span className="flex-1">{cmd.label}</span>
                      {cmd.type === 'external' && <span>↗</span>}
                    </button>
                  ))
                )}
              </div>
              
              <div className="border-t border-[#E5E5E5] px-4 py-2 text-xs text-[#999999] flex justify-between">
                <span>↑↓ to navigate</span>
                <span>↵ to select</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
