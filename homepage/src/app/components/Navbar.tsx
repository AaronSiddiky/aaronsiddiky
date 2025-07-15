import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 h-20 bg-white text-slate-500 font-sans text-base font-medium">
      <div className="flex-1">
        <Link href="/" className="hover:underline transition-colors duration-200 font-medium text-slate-500">
          Aaron Siddiky
        </Link>
      </div>
      <div className="flex-1 flex justify-end gap-8">
        <a href="/about" className="hover:underline transition-colors duration-200">
          About
        </a>
      </div>
    </header>
  );
} 