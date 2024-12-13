'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center" />
      
      <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <Sparkles className="text-amber-300 w-12 h-12 mb-6 animate-pulse" />
        
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">
          Protecting the Ancient Household
        </h1>
        
        <p className="text-xl mb-12 text-amber-100 max-w-2xl">
          Journey through time to discover the magical practices and protective rituals 
          of Roman households
        </p>
        
        <div className="flex gap-6 flex-wrap justify-center">
          <button 
            onClick={() => router.push('/timeline')}
            className="group relative px-8 py-3 bg-opacity-20 bg-amber-500 backdrop-blur-sm rounded-lg overflow-hidden transition-all hover:bg-opacity-30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="relative text-amber-100 text-lg">View Timeline</span>
          </button>
          
          <button 
            onClick={() => router.push('/archive')}
            className="group relative px-8 py-3 bg-opacity-20 bg-amber-500 backdrop-blur-sm rounded-lg overflow-hidden transition-all hover:bg-opacity-30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="relative text-amber-100 text-lg">Browse Archive</span>
          </button>
          
          <button 
            onClick={() => router.push('/about')}
            className="group relative px-8 py-3 bg-opacity-20 bg-amber-500 backdrop-blur-sm rounded-lg overflow-hidden transition-all hover:bg-opacity-30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-20 transition-opacity" />
            <span className="relative text-amber-100 text-lg">About</span>
          </button>
        </div>
      </div>
    </div>
  );
}