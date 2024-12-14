import React from 'react';
import { BookOpen, Users, Library, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">
            About the Project
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Exploring the intersection of daily life, protective magic, and religious practices 
            in ancient Roman households
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-amber-300 w-8 h-8" />
              <h2 className="text-2xl font-semibold text-amber-300">Our Mission</h2>
            </div>
            <p className="text-amber-100 mb-4">
              This project aims to make ancient Roman household magic accessible and 
              understandable to modern audiences. I focus on how ordinary Romans used 
              protective magic in their daily lives, moving beyond the common perception 
              of ancient magic as solely the domain of professional practitioners.
            </p>
            <p className="text-amber-100 mb-12">
              Through interactive timelines and detailed archives, I demonstrate how 
              magical thinking and practice were deeply integrated into everyday Roman 
              life across all social classes.
            </p>

            <p className="text-amber-100 mb-4">
            Plate 11. House of Julius Polybius, Pompeii (IX.13.1–3). View of the
            painting to the left of the small kitchen. After AD 62. The Dancing 
            Lares and the Serpent in the Garden, Flower (2017). Page 252.
            </p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg overflow-hidden">
            <img 
              src="../House_of_Julius_Polybius.png" 
              alt="House of Julius Polybius, Pompeii (IX.13.1–3). View of the painting to the left of the small kitchen. After AD 62."
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Sources Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Library className="text-amber-300 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-amber-300">Our Sources</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-200 mb-4">Primary Sources</h3>
              <ul className="space-y-4 text-amber-100">
                <li className="flex items-start gap-2">
                  <BookOpen className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-amber-200">Natural History by Pliny the Elder (Book 28)</strong>
                    : Detailed accounts of Roman household protective practices and folk remedies
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-amber-200">Material Culture Evidence</strong>
                    : Including bullae and other protective amulets found in Roman households
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <BookOpen className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-amber-200">Archaeological Evidence</strong>
                    : From Pompeii and Herculaneum, particularly lararia (household shrines) 
                    and protective imagery
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-amber-200 mb-4">Secondary Sources</h3>
              <ul className="space-y-4 text-amber-100">
                <li className="flex items-start gap-2">
                  <BookOpen className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>
                    <strong className="text-amber-200">The Dancing Lares and the Serpent in the Garden - Religion at the Roman Street Corner</strong>
                    : By H. I. Flower (2017) - a comprehensive and richly illustrated book, the first to focus on the lares.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* What to Expect Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-amber-300 w-8 h-8" />
            <h2 className="text-2xl font-semibold text-amber-300">What to Expect</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-amber-100">
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-200 mb-2">Interactive Timeline</h3>
              <p>Explore the evolution of Roman household magic from the Third Century BC 
                to the Late Fourth Century AD.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-200 mb-2">Digital Archive</h3>
              <p>Access detailed information about protective rituals, artifacts, and 
                household shrines.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-200 mb-2">Visual Resources</h3>
              <p>View reconstructions and archaeological evidence of Roman household 
                magical practices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;