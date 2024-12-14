import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft, Archive } from 'lucide-react';

interface TimelinePeriodProps {
  data: {
    period: string;
    points: string[];
    imageUrl?: string;
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
            {data.points.map((point: string, index: number) => (
              <p key={index} className="text-amber-100">{point}</p>
            ))}
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center">
            <img 
              src={data.imageUrl} 
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
        "During the Third Century BC in Rome, the world was understood to be populated by a multitude of gods, including the Lares, who held a special place as guardians of the home and the roads that connected them. These benevolent deities were integral to the fabric of daily life, and Romans sought their favor and protection through regular offerings and acts of veneration. Typical offerings to the Lares consisted of incense, wine, and flowers, especially garlands, carefully placed upon the hearth, the heart of the Roman home and a symbol of family unity and prosperity.",  
        "The hearth served as the focal point for Lar worship, where families would gather to express their piety and seek the Lares’ blessings. The act of tending the hearth, keeping it clean and adorned, was in itself a form of devotion, reflecting the belief that maintaining a harmonious relationship with the Lares was essential for the well-being of the household.",
        "Plautus, a Roman playwright whose works provide valuable insights into the daily lives of Romans during this period, depicts both men and women actively engaging in the cultivation of the Lares. His plays suggest that this veneration was not merely a perfunctory ritual but rather a deeply felt and practiced aspect of Roman life.",
        "Beyond offerings, Romans also engaged in specific magical practices to ensure the Lares’ continued favor and protection. For example:",
        "- They believed in the power of words to influence supernatural forces and would often accompany their offerings with prayers and incantations. Pliny the Elder notes the widespread belief in the efficacy of charms and spells, citing examples of specific formulas used for healing and protection. ",
        "- The act of spitting was also considered a powerful magical gesture. Romans would spit to ward off evil spirits, break curses, and prevent misfortune. Pliny details various instances where spitting was employed as a protective measure, such as spitting three times on the ground to repel contagion or spitting into one's lap to appease the gods after expressing a presumptuous hope. ",
        "These magical practices, alongside the more traditional offerings and acts of veneration, demonstrate the pervasive belief in the power of the Lares and the importance of maintaining a positive relationship with them.",
        "Plate 14. House of the Piglet, Pompeii (IX.9.b–c). Overview of the small kitchen with its hearth. Flower, H. I. The Dancing Lares and the Serpent in the Garden, 2017, p.255."
      ], 
      imageUrl: "../House_of_the_Piglet.png"
    },
    {
      period: "Second Century BC",
      points: [
        "The Second Century BC saw a growing emphasis on codifying and standardizing Roman religious practices, as evidenced by Cato the Elder's meticulous instructions for honoring the Lar. In his agricultural writings, Cato highlights the vilica’s crucial role in maintaining the cult of the lar familiaris at the hearth. This included making offerings on the Kalends, Ides, and Nones of each month, as well as on festival days, demonstrating the connection between the Lar and the rhythm of Roman timekeeping. This structured approach to Lar worship underscores the importance Romans placed on correctly performing rituals to ensure the deity’s favor and protection.",
        "However, Plautus' play Rudens, introduces the intriguing concept of twin Lares within a household, suggesting a potential shift or variation in domestic Lar worship practices. This raises questions about how beliefs evolved and adapted over time, even within the seemingly structured framework described by Cato.",
        "Apart from formal rituals, Romans in the Second Century BC continued to engage in magical practices alongside their traditional religious observances. These practices often involved:",
        " - Appealing directly to the Lares for specific needs or desires. This included prayers and incantations spoken while making offerings at the hearth, seeking the Lares' intervention in matters of health, prosperity, and protection.",
        " - Employing protective charms and amulets. Pliny the Elder documents the use of verbal charms and amulets worn on the body to ward off the evil eye, a malevolent force believed to cause misfortune. This suggests that Romans sought multiple layers of protection, combining traditional religious practices with more personalized magical measures.",
        "Plate 23. Painted twin dancing lares framed by garlands of fruit and flowers, a small table with three receptacles at the top left, from the façade of an unexcavated house opposite the Maison de la Colline, wall Δ 4 no. 20, 85 × 50 cm, Delos. Archaeological Museum of Delos. Flower, H. I. The Dancing Lares and the Serpent in the Garden, 2017, p.264."
        
      ],
      imageUrl: "../dancing_lares.png"
    },
    {
        period: "First Century BC",
        points: [
          "The First Century BC reveals a complex and evolving picture of Roman beliefs surrounding the Lares, characterized by both continuity and change. While L. Pomponius' play, Lar Familiaris, attests to the enduring tradition of a single household Lar, evidence from Campania points to the growing prevalence of twin Lares in domestic settings, particularly in religious paintings. This duality of representation suggests a period of transition, where different understandings of the Lares coexisted.",
          "Perhaps the most significant development during this period was the increasing role of freedmen and slaves in overseeing the cult of the Lares, especially at crossroads shrines (compita). This shift reflects the expansion of domestic slavery in Roman society and the Lares' growing association with the daily lives of those who worked within the household. This also highlights the inclusive nature of Roman religion, where individuals of varying social statuses could actively participate in religious practices.",
          "Some of the magical practices associated with the Lares during this period included:",
          " - The performance of specific rituals to avert misfortune or achieve desired outcomes. Ovid, in his Fasti, mentions the practice of sweeping the threshold of the home on the Kalends of each month to prevent evil spirits from entering. This act, seemingly mundane, carried symbolic weight and reflects the belief in the Lares' power to safeguard the home.",
          "II.21. Nineteenth-century etching of a crossroads in Pompeii (VI.1), with fountain, altar, and a cistern painted with a ritual scene. Flower, H. I. The Dancing Lares and the Serpent in the Garden, 2017, p.168."
        ],
        imageUrl: "../crossroads.png"

    },
    {
        period: "First Century AD",
        points: [
          "The First Century AD in Pompeii offers a vivid snapshot of Roman beliefs and practices surrounding the Lares, richly illuminated by archaeological discoveries. Paintings and shrines, frequently found in or near kitchens, underscore the enduring connection between the Lares, the hearth, and food preparation. This placement emphasizes the Lares' continued role in ensuring the well-being and prosperity of the household, extending their protection to the sustenance and nourishment of its members.",
          "Pompeian art introduces a unique element: snakes, often depicted alongside the now ubiquitous twin Lares. These serpentine figures likely represent local deities of place or protective spirits, integrated into the Lar cult, signifying a blending of Roman religious traditions with local beliefs. The presence of snakes also suggests a connection between the Lares and the natural world, reinforcing their role as guardians of the physical environment surrounding the home.",
          "Further illustrating the complexity of the Lar cult, paintings frequently feature the genius, the protective spirit of the master of the house, pouring a libation to the twin Lares. This act establishes a hierarchy among household deities, positioning the Lares as the primary recipients of veneration. The inclusion of the genius, and occasionally the juno, the female protective spirit, personalizes the cult, linking it directly to the heads of the household and visually representing them as the overseers of the household’s religious life.",
          "Significantly, slaves are often shown participating in the Lar cult, underscoring the communal aspect of this religious practice. This shared participation reinforces the idea of the Roman household as a unified social and religious space, where individuals of different statuses were bound together through their shared veneration of the Lares.",
          "While specific magical practices remain elusive from the archaeological record, literary sources from this period, like Pliny the Elder and Ovid, suggest that Romans continued to employ charms, amulets, and ritual actions alongside their more formal religious observances. These practices likely involved:",
          " - Appealing to the Lares for protection from specific threats, such as illness, accidents, or the evil eye ",
          " - Using amulets and charms inscribed with magical formulas to ward off evil and attract good fortune. ",
          "- Performing specific actions, like sweeping the threshold or spitting, to purify spaces and repel malevolent influences.",
          "Plate 11. House of Julius Polybius, Pompeii (IX.13.1–3). View of the painting to the left of the small kitchen. After AD 62. The Dancing Lares and the Serpent in the Garden, Flower (2017). Page 252."

        ],
        imageUrl: "../House_of_Julius_Polybius.png"
    },
    {    period: "7 BC",
         points: [
            "In 7 BC, Emperor Augustus initiated a sweeping religious reform that redefined the role of the Lares in Roman society, particularly their presence at crossroads shrines (compita). Augustus, keen on cultivating a connection with all levels of Roman society, particularly the plebs, shrewdly renamed Lares Compitales as Lares Augusti. He further elevated their status by instituting new festivals specifically for the embellishment of compita.",
            "This reform demonstrably linked the Lares with the emperor's image, promoting Augustus as a pious and benevolent leader directly involved in the lives of even the most humble Roman citizens. This shrewd political maneuvering was met with widespread enthusiasm, particularly among freedmen and slaves, who actively participated in adorning compita and even extended the epithet “augustus/a” to other local deities. This embracing of the Lares Augusti reveals the success of Augustus's efforts to weave his image into the fabric of Roman religious life, creating a sense of shared identity between the emperor and his people.",
            "IV.16. Altar from the Vicus Sandalarius, lares augusti. 2 BC. Galleria delle Statue e delle Pitture degli Uffizi, Florence, Inv. Sculture n. 972. The Dancing Lares and the Serpent in the Garden, Flower (2017). Page 336. ",
         ],
        imageUrl: "../lares_augusti.png"


    },
    {
        period: "Late Fourth Century AD",
        points: ["By the Late Fourth Century AD, the religious landscape of the Roman world had undergone a profound shift, with Christianity ascending to a position of dominance. This shift is poignantly reflected in the Theodosian Code's explicit ban on traditional offerings to the Lares. This legal action demonstrates the growing influence of Christianity and its concerted efforts to suppress (pagan) religious practices, aiming to establish a new, monotheistic spiritual order. Significantly, the meticulous detail outlined in the ban reveals the persistence of Lar worship despite centuries of change and the emergence of new faiths. The Code specifically prohibits actions like offering incense, lighting candles, and hanging garlands of flowers, rituals that echo the beliefs and practices documented in our conversation history, illustrating the enduring appeal of the Lares and the deep connection they fostered between people, place, and community.",
            "Even as the Theodosian Code attempted to curtail traditional religious practices, the Lares remained a significant presence within Roman households. This continued reverence underscores the Lares' enduring appeal and their ability to transcend official prohibitions. Despite the absence of formal public rituals, Romans likely continued to engage in private acts of veneration within their homes. These practices likely included:",
            " - Subtly incorporating traditional Lar offerings like flowers or food into everyday household activities, imbuing these actions with a deeper significance.",
            " - Whispering prayers to the Lares for protection and prosperity, maintaining a personal connection with these deities despite the public ban.",
            " - Employing traditional amulets or charms associated with the Lares, discreetly worn or placed within the home to invoke their continued favor.",
            "Plate 4. House of the Red Walls, Pompeii (VIII.5.37), atrium shrine in its present condition. Flower, H. I. The Dancing Lares and the Serpent in the Garden, 2017, p. 245.",
        ],
        imageUrl: "../red_walls.png"
    },
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
            {/* Timeline Content */}
            <TimelinePeriod 
          data={timelineData[currentPeriod]}
          isActive={true}
        />
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


        {/* Archive Button */}
        {currentPeriod === timelineData.length - 1 && (
          <div className="text-center mt-8">
            <a href='/archive'><button className="group px-8 py-3 bg-amber-500/20 hover:bg-amber-500/30 backdrop-blur-sm rounded-lg transition-all flex items-center gap-2 mx-auto">
              <Archive className="group-hover:rotate-12 transition-transform" />
              <span>Explore the Archive</span>
            </button> </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineView;