import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft, Archive } from 'lucide-react';

interface TimelinePeriodProps {
  data: {
    period: string;
    points: string[];
  };
  isActive: boolean;
}

const TimelinePeriod: React.FC<TimelinePeriodProps> = ({ data, isActive }) => {
  return (
    <div className={`transition-all duration-500 ${
      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
    }`}>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
        <h2 className="text-3xl font-bold mb-4 text-amber-300">{data.period}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {data.points.map((point, index) => (
              <p key={index} className="text-amber-100">{point}</p>
            ))}
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center">
            <img 
              src="/api/placeholder/400/300" 
              alt={`Illustration for ${data.period}`}
              className="rounded-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineView = () => {
  const [currentPeriod, setCurrentPeriod] = useState(0);
  
  const timelineData = [
    {
      period: "Third Century BC",
      points: [
        "Romans believed in numerous gods, including the lares - guardian deities of homes and roads.",
        "Offerings included incense, wine, and flowers.",
        "The hearth was central to lar worship.",
        "Plautus suggests daily cultivation of lares."
      ]
    },
    {
      period: "Second Century BC",
      points: [
        "Cato the Elder outlines specific rituals for honoring the lar.",
        "The vilica maintained lar worship at the hearth.",
        "Concept of twin lares emerges in household context."
      ]
    },
    // Add other periods similarly
  ];

  const handleNext = () => {
    setCurrentPeriod((prev) => 
      prev === timelineData.length - 1 ? prev : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentPeriod((prev) => prev === 0 ? prev : prev - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      <div className="max-w-6xl mx-auto p-8">
        {/* Timeline Navigation */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={handlePrev}
            disabled={currentPeriod === 0}
            className="px-4 py-2 bg-amber-500/20 rounded-lg disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          
          <div className="text-amber-100">
            Period {currentPeriod + 1} of {timelineData.length}
          </div>
          
          <button 
            onClick={handleNext}
            disabled={currentPeriod === timelineData.length - 1}
            className="px-4 py-2 bg-amber-500/20 rounded-lg disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Timeline Content */}
        <TimelinePeriod 
          data={timelineData[currentPeriod]}
          isActive={true}
        />

        {/* Archive Button */}
        {currentPeriod === timelineData.length - 1 && (
          <div className="text-center mt-8">
            <button className="group px-8 py-3 bg-amber-500/20 hover:bg-amber-500/30 backdrop-blur-sm rounded-lg transition-all flex items-center gap-2 mx-auto">
              <Archive className="group-hover:rotate-12 transition-transform" />
              <span>Explore the Archive</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineView;