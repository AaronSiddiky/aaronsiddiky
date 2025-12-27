"use client";
import React from 'react';

export default function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex justify-between items-center px-8 py-6 bg-[#f5f5f0] fixed top-0 left-0 right-0 z-50 border-b border-gray-300">
      <div className="flex-shrink-0">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-black text-base font-mono font-normal hover:opacity-70 transition-opacity duration-200 cursor-pointer"
        >
          aaron siddiky
        </button>
      </div>
      <nav className="flex items-center gap-6 flex-shrink-0 text-sm font-mono">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-black hover:opacity-70 transition-opacity duration-200 whitespace-nowrap cursor-pointer"
        >
          [about]
        </button>
        <button 
          onClick={() => scrollToSection('venture-memos')}
          className="text-black hover:opacity-70 transition-opacity duration-200 whitespace-nowrap cursor-pointer"
        >
          [ventures]
        </button>
        <button 
          onClick={() => scrollToSection('research')}
          className="text-black hover:opacity-70 transition-opacity duration-200 whitespace-nowrap cursor-pointer"
        >
          [research]
        </button>
        <button 
          onClick={() => scrollToSection('media')}
          className="text-black hover:opacity-70 transition-opacity duration-200 whitespace-nowrap cursor-pointer"
        >
          [media]
        </button>
        <button 
          onClick={() => scrollToSection('podcast')}
          className="text-black hover:opacity-70 transition-opacity duration-200 whitespace-nowrap cursor-pointer"
        >
          [podcast]
        </button>
      </nav>
    </header>
  );
} 