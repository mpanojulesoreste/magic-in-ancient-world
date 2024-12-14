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
      title: 'Fortuna on the wall of the Suburban Baths',
      description: 'This goddess appeared on the walls of IX.7.21,24, also of V.1.18 (no longer visible) and of II.4.3 (Archivo Fotografico 8566 neg 1404) (Jansen 1993.33 Note 5) and there has been considerable discussion about the role of the gods in the process of human excretion.',
      source: 'Pompeii Latrines and Down Pipes: A general discussion and photographic record of toilet facilities in pompeii',
      imageUrl: '../fortuna_on.png',
      tags: ['shrine', 'archaeology']
    },
    {
      type: 'images',
      title: 'Detail from a relief showing a Roman boy wearing a bulla',
      description: 'Detail of a childs tomb monument showing an ancient Roman boy wearing a en:bulla, the amulet thought to protect a freeborn boy from malevolent supernatural influences and marked him as sexually unavailable',
      source: 'Wikimedia Commons',
      imageUrl: '../child.jpg',
      tags: ['artifacts', 'protection']
    },
    {
      type: 'images',
      title: 'Painting of a shrine to Mercury from the Via dell’ Abbondanza',
      description: 'Plate 5. Painting of a shrine to Mercury from the Via dell’ Abbondanza, Pompeii (beside the entrance to the shop of M. Vecilius Verecundus, IX.7.7). Watercolor A. Sanarica.',
      source: 'Hariet I. Flower, The Dancing Lares and the Serpent in the Garden (2017) P. 246',
      imageUrl: '../shrine_to.png',
      tags: ['artifacts', 'protection']
    },
    {
      type: 'images',
      title: 'Necklace with Lenticular Bulla',
      description: 'Necklace with Lenticular Bulla, Ostia, Augustan age, gold',
      source: 'Wikimedia Commons',
      imageUrl: '../lenticular_bulla.jpg',
      tags: ['artifacts', 'protection']
    },
    {
      type: 'images',
      title: 'Painting of lares and snakes from Pompeii',
      description: 'Plate 6. Painting of lares and snakes from Pompeii (VII 2 or 3). Fourth style (ca. AD 55–79). 128 × 183 cm. Museo Archeologico Nazi- onale di Napoli, inv. 8905.',
      source: 'Hariet I. Flower, The Dancing Lares and the Serpent in the Garden (2017) P. 247',
      imageUrl: '../lares_and_snakes.png',
      tags: ['artifacts', 'protection']
    },
    {
      type: 'images',
      title: 'Lararium from the House of the Vetti',
      description: ' Lararium shrine in framing aedicule, with agathodemone serpant at altar below Genius of the Paterfamilias flanked by two lares.',
      source: 'Dr Joanne Berry, BBC',
      imageUrl: '../lararium.jpg',
      tags: ['shrine', 'archaeology']
    },
    {
      type: 'books',
      title: 'Religion in the Roman Empire',
      author: 'James B. Rives',
      description: 'Comprehensive overview of religious practices in Roman society',
      imageUrl: '../james_rives.jpeg',
      purchaseLink: 'https://a.co/d/eARxGt1',
      year: '2007'
    },
    {
      type: 'books',
      title: 'The Dancing Lares and the Serpent in the Garden: Religion attheRoman Street Corner',
      author: 'Hariet I. Flower',
      description: 'The first book to focus on the lares, Harriet Flower offers a strikingly original account of these gods.',
      imageUrl: '../hariet.jpeg',
      purchaseLink: 'https://a.co/d/0iA80Jm',
      year: '1997'
    },
    {
      type: 'books',
      title: 'Magic in the Ancient World',
      author: 'Fritz Graf',
      description: 'Explores various magical practices in Ancient Greeks and Romans',
      imageUrl: '../fritz_graf.jpeg',
      purchaseLink: 'https://a.co/d/9EIW8R6',
      year: '1997'
    },
    {
      type: 'videos',
      title: 'House Spirits | Protective Household Deities in Romanian Folklore',
      description: 'Unraveling the mystery of domestic spirits in Romanian folklore and trace the origins of the shadow, the ghost, and the snake to ancient cults, cosmic sacrifices, dead veneration, and ancestor worship traditions.',
      imageUrl: '../crowhag.png',
      embedUrl: 'https://www.youtube.com/watch?v=GaXn3yji3ZE',
      source: 'Crowhag',
      duration: '39:56'
    },
    {
      type: 'videos',
      title: 'Walk around in a 3D splendid House from the ancient Pompeii',
      description: 'By combining traditional archaeology with 3D technology, researchers at Lund University in Sweden have managed to reconstruct a house in Pompeii to its original state before the volcano eruption of Mount Vesuvius thousands of years ago. Unique video material has now been produced, showing their creation of a 3D model of an entire block of houses. ',
      imageUrl: '../lund.png',
      embedUrl: 'https://www.youtube.com/watch?v=ETd7pszxhnc',
      source: 'Lund University',
      duration: '2:44'
    },
    {
      type: 'videos',
      title: 'Household Gods in Ancient Rome',
      description: 'Household gods that the Romans venerated in their own homes. The Lares, Penates, and Genii of the household constituted the familial guardians and protectors, and their worship was an integral part of personal religion.  Images and Scholarly analysis.',
      imageUrl: '../lararium.jpg',
      embedUrl: 'https://www.youtube.com/watch?v=1ex_FLTDHjk',
      source: 'Hearth of Haemonia',
      duration: '22:37'
    },
    {
      type: 'links',
      title: 'Open Pompeii System',
      description: 'An immense wealth of data of the Archaeological Park of Pompeii. Available online data includes information, images and videos on each archaeological structure, house and building.',
      url: 'https://open.pompeiisites.org/',
      category: 'Virtual Resources'
    },
    {
      type: 'links',
      title: 'Virtual Pompeii',
      description: 'Virtual Pompeii (VRP) is a multidisciplinary, data-centered project focused on exploring the intersection of spatial configuration, artwork, movement, and social behavior in the ancient Roman city.',
      url: 'https://tesseract.uark.edu/virtual-pompeii/',
      category: 'Virtual Resources'
    },
    {
      type: 'links',
      title: 'The Swedish Pompeii Project',
      description: 'The Swedish Pompeii Project, initiated in 2000 by the Swedish Institute in Rome, combines traditional archaeological documentation with advanced 3D scanning technology to meticulously study and preserve Pompeii.',
      url: 'https://www.pompejiprojektet.se/',
      category: 'Virtual Resources'
    },
    {
      type: 'links',
      title: 'Pompeii Bibliography and Mapping Project',
      description: 'The Pompeii Bibliography and Mapping Project (PBMP) offers an interactive digital map of Pompeii entire urban landscape, allowing users to explore and search through detailed archaeological data.',
      url: 'https://digitalhumanities.umass.edu/pbmp/?p=1565',
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
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
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
                src={item.imageUrl} 
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
              <a
                href={item.embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-amber-300 hover:text-amber-200"
                >
                  <Video size={16} />
                  <span>Watch Video</span>
              </a>
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
            <a 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-200"
            >
              {item.url}
            </a>
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