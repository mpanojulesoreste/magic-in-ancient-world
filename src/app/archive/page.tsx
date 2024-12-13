'use client';

import React, { useState } from 'react';
import { Book, Image, Video, Link as LinkIcon, Filter } from 'lucide-react';

const ArchivePage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All', icon: Filter },
    { id: 'images', label: 'Images', icon: Image },
    { id: 'books', label: 'Books', icon: Book },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'links', label: 'External Resources', icon: LinkIcon },
  ];

  const archiveItems: ArchiveItem[] = [
    {
      type: 'images',
      title: 'Lararium from House of Vettii',
      description: 'Well-preserved household shrine showing typical layout and decorative elements',
      source: 'Pompeii Archaeological Park',
      imageUrl: '/api/placeholder/400/300',
      tags: ['shrine', 'archaeology']
    },
    {
      type: 'images',
      title: 'Roman Bulla Collection',
      description: 'Various protective amulets worn by Roman children',
      source: 'British Museum',
      imageUrl: '/api/placeholder/400/300',
      tags: ['artifacts', 'protection']
    },
    {
      type: 'books',
      title: 'Religion in the Roman Empire',
      author: 'James B. Rives',
      description: 'Comprehensive overview of religious practices in Roman society',
      imageUrl: '/api/placeholder/200/300',
      purchaseLink: 'https://bookstore.com/example',
      year: '2006'
    },
    {
      type: 'books',
      title: 'Magic in the Ancient World',
      author: 'Fritz Graf',
      description: 'Explores various magical practices in antiquity',
      imageUrl: '/api/placeholder/200/300',
      purchaseLink: 'https://bookstore.com/example',
      year: '1997'
    },
    {
      type: 'videos',
      title: 'Virtual Tour: Roman House',
      description: 'Digital reconstruction of a typical Roman house highlighting religious spaces',
      embedUrl: '/api/placeholder/560/315',
      source: 'Archaeological Institute',
      duration: '15:24'
    },
    {
      type: 'links',
      title: 'Digital Roman Forum',
      description: 'Interactive 3D models of Roman buildings and shrines',
      url: 'https://example.com/digital-forum',
      category: 'Virtual Resources'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? archiveItems 
    : archiveItems.filter(item => item.type === activeFilter);

  interface ArchiveItem {
    type: 'images' | 'books' | 'videos' | 'links';
    title: string;
    description: string;
    imageUrl?: string;
    source?: string;
    tags?: string[];
    author?: string;
    purchaseLink?: string;
    year?: string;
    embedUrl?: string;
    duration?: string;
    url?: string;
    category?: string;
  }

  const renderArchiveItem = (item: ArchiveItem) => {
    switch (item.type) {
      case 'images':
        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-colors">
            <img 
              src={item.imageUrl} 
              alt={item.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-amber-300 mb-2">{item.title}</h3>
              <p className="text-amber-100 mb-2">{item.description}</p>
              <p className="text-sm text-amber-200">Source: {item.source}</p>
              <div className="flex gap-2 mt-2">
                {item.tags && item.tags.map(tag => (
                  <span key={tag} className="text-xs bg-amber-500/20 text-amber-200 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'books':
        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-colors">
            <div className="flex gap-4 p-4">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-24 h-36 object-cover rounded"
              />
              <div>
                <h3 className="text-lg font-semibold text-amber-300 mb-1">{item.title}</h3>
                <p className="text-amber-200 text-sm mb-2">by {item.author} ({item.year})</p>
                <p className="text-amber-100 mb-4">{item.description}</p>
                <a 
                  href={item.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200"
                >
                  <Book size={16} />
                  <span>Find Book</span>
                </a>
              </div>
            </div>
          </div>
        );

      case 'videos':
        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-colors">
            <div className="aspect-video bg-black">
              <img 
                src={item.embedUrl} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-amber-300 mb-2">{item.title}</h3>
              <p className="text-amber-100 mb-2">{item.description}</p>
              <div className="flex items-center justify-between text-sm text-amber-200">
                <span>{item.source}</span>
                <span>{item.duration}</span>
              </div>
            </div>
          </div>
        );

      case 'links':
        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
            <h3 className="text-lg font-semibold text-amber-300 mb-2 flex items-center gap-2">
              <LinkIcon size={20} />
              {item.title}
            </h3>
            <p className="text-amber-100 mb-2">{item.description}</p>
            <p className="text-sm text-amber-200">{item.category}</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">
            Digital Archive
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Explore our collection of images, books, videos, and resources about Roman household magic
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {filters.map(filter => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-amber-500/30 text-amber-200'
                    : 'bg-white/10 text-amber-100 hover:bg-white/20'
                }`}
              >
                <Icon size={18} />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index}>
              {renderArchiveItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;