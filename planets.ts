// Real planetary data based on NASA research

export interface PlanetData {
  id: string;
  name: string;
  gravity: number; // Earth = 1.0
  avgTemp: number; // Celsius
  atmosphere: string;
  surfaceColor: string;
  imageUrl: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Extreme';
  startResources: {
    oxygen: number;
    power: number;
    water: number;
    food: number;
    population: number;
  };
  resourceModifiers: {
    powerEfficiency: number; // Solar power multiplier
    waterAvailability: number; // Water extraction multiplier
    temperatureChallenge: number; // Resource drain multiplier
  };
  description: string;
  facts: string[];
}

export const PLANETS: PlanetData[] = [
  {
    id: 'mars',
    name: 'Mars',
    gravity: 0.38,
    avgTemp: -63,
    atmosphere: 'Thin CO₂ (0.6% Earth pressure)',
    surfaceColor: 'from-red-900 via-red-800 to-red-950',
    imageUrl: 'https://images.unsplash.com/photo-1527826507412-72e447368aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJzJTIwcGxhbmV0JTIwc3VyZmFjZXxlbnwxfHx8fDE3NTk0ODk3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'Medium',
    startResources: {
      oxygen: 40,
      power: 100,
      water: 60,
      food: 50,
      population: 0
    },
    resourceModifiers: {
      powerEfficiency: 0.43, // Mars gets 43% of Earth's sunlight
      waterAvailability: 1.0,
      temperatureChallenge: 1.2
    },
    description: 'The Red Planet - humanity\'s best bet for colonization',
    facts: [
      'Day length: 24.6 hours',
      'Distance from Sun: 228M km',
      'Water ice at polar caps',
      'Dust storms can last months'
    ]
  },
  {
    id: 'moon',
    name: 'Moon',
    gravity: 0.166,
    avgTemp: -23,
    atmosphere: 'None (vacuum)',
    surfaceColor: 'from-gray-400 via-gray-500 to-gray-600',
    imageUrl: 'https://images.unsplash.com/photo-1657637760839-772d81f3e334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwc3VyZmFjZSUyMGx1bmFyfGVufDF8fHx8MTc1OTQyMTYzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'Easy',
    startResources: {
      oxygen: 60,
      power: 120,
      water: 40,
      food: 60,
      population: 0
    },
    resourceModifiers: {
      powerEfficiency: 1.0, // Same solar exposure as Earth orbit
      waterAvailability: 0.5, // Less water available
      temperatureChallenge: 1.0
    },
    description: 'Earth\'s satellite - close to home and easier to resupply',
    facts: [
      'Day length: 29.5 Earth days',
      'Distance from Earth: 384,400 km',
      'Water ice in polar craters',
      'No atmosphere for protection'
    ]
  },
  {
    id: 'venus',
    name: 'Venus',
    gravity: 0.9,
    avgTemp: 464,
    atmosphere: 'Dense CO₂ (92x Earth pressure)',
    surfaceColor: 'from-yellow-700 via-orange-600 to-red-700',
    imageUrl: 'https://images.unsplash.com/photo-1639393455114-84df73f758cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZW51cyUyMHBsYW5ldCUyMHN1cmZhY2V8ZW58MXx8fHwxNzU5NTA5NTk1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'Extreme',
    startResources: {
      oxygen: 20,
      power: 80,
      water: 20,
      food: 30,
      population: 0
    },
    resourceModifiers: {
      powerEfficiency: 1.9, // Closer to Sun
      waterAvailability: 0.1, // Almost no water
      temperatureChallenge: 3.0 // Extreme heat drain
    },
    description: 'The Inferno - extreme challenge for advanced players',
    facts: [
      'Day length: 243 Earth days',
      'Distance from Sun: 108M km',
      'Surface hot enough to melt lead',
      'Sulfuric acid clouds'
    ]
  },
  {
    id: 'europa',
    name: 'Europa',
    gravity: 0.134,
    avgTemp: -160,
    atmosphere: 'Trace oxygen (minimal)',
    surfaceColor: 'from-blue-950 via-cyan-950 to-slate-800',
    imageUrl: 'https://images.unsplash.com/photo-1709142223391-a7256c9c6eca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGElMjBqdXBpdGVyJTIwbW9vbnxlbnwxfHx8fDE3NTk1MDk1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'Hard',
    startResources: {
      oxygen: 30,
      power: 70,
      water: 100, // Lots of water ice
      food: 40,
      population: 0
    },
    resourceModifiers: {
      powerEfficiency: 0.037, // Very far from Sun (Jupiter orbit)
      waterAvailability: 2.0, // Abundant water ice
      temperatureChallenge: 2.0
    },
    description: 'Jupiter\'s ice moon - vast subsurface ocean beneath ice shell',
    facts: [
      'Day length: 3.5 Earth days',
      'Distance from Sun: 778M km',
      'Global subsurface ocean',
      'Possible alien life in ocean'
    ]
  },
  {
    id: 'titan',
    name: 'Titan',
    gravity: 0.14,
    avgTemp: -179,
    atmosphere: 'Dense nitrogen (1.5x Earth pressure)',
    surfaceColor: 'from-orange-800 via-amber-900 to-yellow-900',
    imageUrl: 'https://images.unsplash.com/photo-1710268470168-67cc9903b660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXRhbiUyMHNhdHVybiUyMG1vb258ZW58MXx8fHwxNzU5NTA5NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'Hard',
    startResources: {
      oxygen: 35,
      power: 60,
      water: 70,
      food: 45,
      population: 0
    },
    resourceModifiers: {
      powerEfficiency: 0.011, // Very far from Sun (Saturn orbit)
      waterAvailability: 1.5, // Hydrocarbon lakes and water ice
      temperatureChallenge: 2.2
    },
    description: 'Saturn\'s largest moon - thick atmosphere and methane lakes',
    facts: [
      'Day length: 16 Earth days',
      'Distance from Sun: 1.4B km',
      'Methane and ethane lakes',
      'Thick atmosphere like early Earth'
    ]
  },
  {
    id: 'enceladus',
    name: 'Enceladus',
    gravity: 0.0113,
    avgTemp: -201,
    atmosphere: 'Trace water vapor',
    surfaceColor: 'from-slate-100 via-white to-cyan-100',
    imageUrl: 'https://images.unsplash.com/photo-1564177049230-14e5dd52ce6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmNlbGFkdXMlMjBzYXR1cm4lMjBtb29ufGVufDF8fHx8MTc1OTUwOTYwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'Extreme',
    startResources: {
      oxygen: 25,
      power: 50,
      water: 90,
      food: 35,
      population: 0
    },
    resourceModifiers: {
      powerEfficiency: 0.011, // Saturn orbit
      waterAvailability: 2.5, // Abundant water geysers
      temperatureChallenge: 2.5
    },
    description: 'Saturn\'s ice moon - active water geysers and subsurface ocean',
    facts: [
      'Day length: 1.4 Earth days',
      'Distance from Sun: 1.4B km',
      'Active water geysers',
      'Subsurface liquid ocean'
    ]
  },
  {
    id: 'ganymede',
    name: 'Ganymede',
    gravity: 0.146,
    avgTemp: -181,
    atmosphere: 'Trace oxygen',
    surfaceColor: 'from-gray-600 via-slate-700 to-gray-800',
    imageUrl: 'https://images.unsplash.com/photo-1708257105520-214ad2246e44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW55bWVkZSUyMGp1cGl0ZXIlMjBtb29ufGVufDF8fHx8MTc1OTUwOTYxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'Hard',
    startResources: {
      oxygen: 35,
      power: 65,
      water: 85,
      food: 40,
      population: 0
    },
    resourceModifiers: {
      powerEfficiency: 0.037, // Jupiter orbit
      waterAvailability: 1.8, // Large amounts of water ice
      temperatureChallenge: 2.1
    },
    description: 'Largest moon in solar system - own magnetic field',
    facts: [
      'Day length: 7.2 Earth days',
      'Distance from Sun: 778M km',
      'Larger than Mercury',
      'Own magnetic field'
    ]
  },
  {
    id: 'ceres',
    name: 'Ceres',
    gravity: 0.029,
    avgTemp: -105,
    atmosphere: 'Trace water vapor',
    surfaceColor: 'from-stone-600 via-gray-700 to-slate-800',
    imageUrl: 'https://images.unsplash.com/photo-1710268470228-6d77e6d999b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJlcyUyMGFzdGVyb2lkJTIwcGxhbmV0fGVufDF8fHx8MTc1OTUwOTYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    difficulty: 'Medium',
    startResources: {
      oxygen: 45,
      power: 90,
      water: 75,
      food: 55,
      population: 0
    },
    resourceModifiers: {
      powerEfficiency: 0.15, // Asteroid belt
      waterAvailability: 1.2, // Water ice available
      temperatureChallenge: 1.5
    },
    description: 'Dwarf planet in asteroid belt - abundant mineral resources',
    facts: [
      'Day length: 9.1 hours',
      'Distance from Sun: 414M km',
      'Largest asteroid',
      'Rich in water ice and minerals'
    ]
  }
];
