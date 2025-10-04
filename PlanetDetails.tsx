import { useState } from "react";
import { PlanetData } from "../data/planets";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

interface PlanetDetailsProps {
  planet: PlanetData;
  onSelectPlanet: (planet: PlanetData) => void;
}

export function PlanetDetails({ planet, onSelectPlanet }: PlanetDetailsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-600 text-white';
      case 'Medium': return 'bg-red-600 text-white';
      case 'Hard': return 'bg-red-800 text-white';
      case 'Extreme': return 'bg-black text-white';
      default: return 'bg-white text-black';
    }
  };

  return (
    <Card 
      className={`bg-gradient-to-br ${planet.surfaceColor} border-2 border-white/20 hover:border-white/60 transition-all relative overflow-hidden group`}
    >
      {/* Planet image as background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
        style={{ backgroundImage: `url(${planet.imageUrl})` }}
      />
      
      <div className="relative z-10 p-4 space-y-3">
        {/* Planet preview image */}
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white/40 group-hover:scale-110 transition-transform">
          <img 
            src={planet.imageUrl} 
            alt={planet.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center">
          <h3 className="text-white">{planet.name}</h3>
          <Badge className={`${getDifficultyColor(planet.difficulty)} mt-1`}>
            {planet.difficulty}
          </Badge>
        </div>

        <p className="text-white/70 text-xs text-center">{planet.description}</p>

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-black/40 p-2 rounded border border-white/20">
            <div className="text-white/60">Gravity</div>
            <div className="text-white">{planet.gravity}g</div>
          </div>
          <div className="bg-black/40 p-2 rounded border border-white/20">
            <div className="text-white/60">Temp</div>
            <div className="text-white">{planet.avgTemp}°C</div>
          </div>
        </div>

        <div className="bg-black/40 p-2 rounded border border-white/20">
          <div className="text-white/60 text-xs">Atmosphere</div>
          <div className="text-white text-xs">{planet.atmosphere}</div>
        </div>

        {/* Expandable details */}
        {isExpanded && (
          <div className="space-y-3 animate-in slide-in-from-top-2">
            <div className="bg-black/40 p-3 rounded border border-white/20">
              <div className="text-white/60 text-xs mb-2 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Scientific Facts
              </div>
              <ul className="space-y-1 text-white/80 text-xs">
                {planet.facts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-black/40 p-3 rounded border border-white/20">
              <div className="text-white/60 text-xs mb-2">Starting Resources</div>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div className="text-white">Oxygen: {planet.startResources.oxygen}</div>
                <div className="text-white">Power: {planet.startResources.power}</div>
                <div className="text-white">Water: {planet.startResources.water}</div>
                <div className="text-white">Food: {planet.startResources.food}</div>
              </div>
            </div>

            <div className="bg-black/40 p-3 rounded border border-white/20">
              <div className="text-white/60 text-xs mb-2">Challenge Modifiers</div>
              <div className="space-y-1 text-xs">
                <div className="text-white">Solar Efficiency: {Math.round(planet.resourceModifiers.powerEfficiency * 100)}%</div>
                <div className="text-white">Water Availability: {Math.round(planet.resourceModifiers.waterAvailability * 100)}%</div>
                <div className="text-white">Temp Challenge: {Math.round(planet.resourceModifiers.temperatureChallenge * 100)}%</div>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <Button 
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 bg-black/20 border-white/40 text-white hover:bg-white/20"
          >
            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            {isExpanded ? 'Less' : 'Details'}
          </Button>
          
          <Button 
            className="flex-1 bg-white text-black hover:bg-green-600 hover:text-white transition-colors text-xs"
            onClick={() => onSelectPlanet(planet)}
          >
            Colonize
          </Button>
        </div>
      </div>
    </Card>
  );
}