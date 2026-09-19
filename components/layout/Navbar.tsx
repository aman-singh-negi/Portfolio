'use client';

import React, { useState, useEffect } from 'react';
import { Link } from '../ui/Link';
import { profile } from '@/data/profile';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#engineering', label: 'Engineering' },
    { href: '#about', label: 'About' },
    { href: '#resume', label: 'Resume' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FFFFFF]/80 backdrop-blur-md border-b border-[#E5E5E5]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-[#111111]">
            {profile.name}
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-sm text-[#666666] hover:text-[#111111] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
              className="text-xs text-[#999999] border border-[#E5E5E5] px-2 py-1 rounded hover:border-[#D4D4D4] transition-colors"
            >
              <span className="hidden sm:inline">Ctrl K</span>
              <span className="sm:hidden">⌘ K</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#111111] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E5E5E5] bg-[#FFFFFF]/95 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-[#666666] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button 
                onClick={() => {
                  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-[#666666] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors"
              >
                Command Palette (⌘ K)
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
