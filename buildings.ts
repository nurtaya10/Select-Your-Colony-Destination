import { Home, Zap, Droplet, Sprout, Factory, FlaskConical, Warehouse, Radio, Plane, Shield, Atom, Wind } from "lucide-react";

export interface BuildingType {
  id: string;
  name: string;
  icon: React.ReactNode;
  cost: {
    power?: number;
    water?: number;
    food?: number;
  };
  produces: {
    oxygen?: number;
    power?: number;
    water?: number;
    food?: number;
    population?: number;
  };
  color: string; // Red, white, green, or black only
  description: string;
  category: 'Habitat' | 'Power' | 'Resources' | 'Production' | 'Infrastructure';
}

export const BUILDINGS: BuildingType[] = [
  // HABITAT
  {
    id: "habitat",
    name: "Habitat Module",
    icon: <Home className="w-5 h-5" />,
    cost: { power: 30, water: 15 },
    produces: { oxygen: 3, population: 5 },
    color: "bg-white text-black border-2 border-black",
    description: "Living quarters with life support systems",
    category: 'Habitat'
  },
  
  // POWER GENERATION
  {
    id: "solar",
    name: "Solar Array",
    icon: <Zap className="w-5 h-5" />,
    cost: { power: 10 },
    produces: { power: 15 },
    color: "bg-red-600 text-white",
    description: "Photovoltaic panels for solar energy",
    category: 'Power'
  },
  {
    id: "nuclear",
    name: "Nuclear Reactor",
    icon: <Atom className="w-5 h-5" />,
    cost: { power: 50, water: 20 },
    produces: { power: 50 },
    color: "bg-red-700 text-white",
    description: "RTG-based power generation - reliable 24/7",
    category: 'Power'
  },
  
  // RESOURCE EXTRACTION
  {
    id: "extractor",
    name: "Ice Extractor",
    icon: <Droplet className="w-5 h-5" />,
    cost: { power: 20 },
    produces: { water: 10 },
    color: "bg-green-600 text-white",
    description: "Extracts and melts subsurface ice",
    category: 'Resources'
  },
  {
    id: "moxie",
    name: "MOXIE Unit",
    icon: <Wind className="w-5 h-5" />,
    cost: { power: 25, water: 5 },
    produces: { oxygen: 8 },
    color: "bg-green-700 text-white",
    description: "Oxygen generator from atmospheric CO₂",
    category: 'Resources'
  },
  
  // FOOD PRODUCTION
  {
    id: "greenhouse",
    name: "Greenhouse",
    icon: <Sprout className="w-5 h-5" />,
    cost: { power: 15, water: 20 },
    produces: { food: 15, oxygen: 2 },
    color: "bg-green-800 text-white",
    description: "Hydroponic food cultivation facility",
    category: 'Production'
  },
  {
    id: "biolab",
    name: "Bioculture Lab",
    icon: <FlaskConical className="w-5 h-5" />,
    cost: { power: 20, water: 10 },
    produces: { food: 25, oxygen: 1 },
    color: "bg-green-900 text-white",
    description: "Advanced algae and protein synthesis",
    category: 'Production'
  },
  
  // MINING & INDUSTRY
  {
    id: "mine",
    name: "Mining Station",
    icon: <Factory className="w-5 h-5" />,
    cost: { power: 30, food: 10 },
    produces: { power: 5 }, // Extracts materials for future use
    color: "bg-black text-white",
    description: "Extracts valuable minerals and resources",
    category: 'Infrastructure'
  },
  
  // INFRASTRUCTURE
  {
    id: "storage",
    name: "Storage Depot",
    icon: <Warehouse className="w-5 h-5" />,
    cost: { power: 15 },
    produces: { power: -2 }, // Slight drain, but increases capacity (not implemented yet)
    color: "bg-white text-black border-2 border-red-600",
    description: "Increases resource storage capacity",
    category: 'Infrastructure'
  },
  {
    id: "comms",
    name: "Comm Array",
    icon: <Radio className="w-5 h-5" />,
    cost: { power: 25, water: 5 },
    produces: { power: -3 },
    color: "bg-white text-black border-2 border-green-600",
    description: "Communications with Earth - enables research",
    category: 'Infrastructure'
  },
  {
    id: "landing",
    name: "Landing Pad",
    icon: <Plane className="w-5 h-5" />,
    cost: { power: 40, water: 10 },
    produces: { population: 2 }, // Enables more colonists to arrive
    color: "bg-red-800 text-white",
    description: "Spaceport for supply ships and colonists",
    category: 'Infrastructure'
  },
  {
    id: "shield",
    name: "Shield Generator",
    icon: <Shield className="w-5 h-5" />,
    cost: { power: 35, water: 15, food: 10 },
    produces: { oxygen: 1, power: -5 }, // Reduces overall resource drain
    color: "bg-red-900 text-white",
    description: "Radiation and thermal protection dome",
    category: 'Infrastructure'
  }
];
