'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Home, Clock, Archive, ScrollText, Menu, X } from 'lucide-react';
import Link from 'next/link';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/timeline', label: 'Timeline', icon: Clock },
    { path: '/archive', label: 'Archive', icon: Archive },
    { path: '/about', label: 'About', icon: ScrollText },
  ];

  const isCurrentPath = (path: string) => pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 bg-purple-900/80 backdrop-blur-md z-50 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="text-amber-300 font-bold text-xl hover:text-amber-200 transition-colors"
            >
              Ancient Magic
            </Link>
            
            <div className="flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      isCurrentPath(item.path)
                        ? 'text-amber-300 bg-white/10'
                        : 'text-amber-100 hover:text-amber-300 hover:bg-white/5'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-purple-900/80 backdrop-blur-md z-50 border-b border-amber-500/20">
        <div className="px-4">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="text-amber-300 font-bold text-xl"
            >
              Roman Magic
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-100 hover:text-amber-300 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-purple-900/95 backdrop-blur-md border-b border-amber-500/20">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                      isCurrentPath(item.path)
                        ? 'text-amber-300 bg-white/10'
                        : 'text-amber-100 hover:text-amber-300 hover:bg-white/5'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under the navbar */}
      <div className="h-16" />
    </>
  );
};

export default NavigationBar;