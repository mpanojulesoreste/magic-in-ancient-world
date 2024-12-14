import React, { useState } from 'react';
import { Scroll, Book, Info } from 'lucide-react';


interface TimelineIntroProps {
    onStart: () => void;
  }
  
  const TimelineIntro: React.FC<TimelineIntroProps> = ({ onStart }) => {
    const [showIntro, setShowIntro] = useState(true);
  
    const keywords = [
    {
      term: "Lares",
      definition: "Roman deities thought to be protectors of specific places (commonly homes and roads)"
    },
    {
      term: "Compita",
      definition: "Crossroads shrines dedicated to the Lares Compitales, the protectors of crossroads, streets, and neighborhoods"
    },
    {
      term: "Genius",
      definition: "a Roman protective spirit, believed to be intimately connected to an individual's life and well-being"
    },
    {
      term: "Vilica",
      definition: "Female farm manager responsible for maintaining lar worship"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-amber-100">
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">
            Journey Through Roman Household Magic
          </h1>
          <p className="text-xl mb-8">
            Discover the evolution of protective magic and rituals in Roman households
            from the third century BC to the late fourth century AD.
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Book className="text-amber-300" />
              <h2 className="text-2xl font-semibold">Key Terms to Know</h2>
            </div>
            <div className="grid gap-4">
              {keywords.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-amber-300 mb-2">{item.term}</h3>
                  <p>{item.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={onStart}
            className="px-8 py-3 bg-amber-500/20 hover:bg-amber-500/30 backdrop-blur-sm rounded-lg transition-all"
          >
            Begin Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineIntro;