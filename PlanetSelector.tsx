import { PLANETS, PlanetData } from "../data/planets";
import { PlanetDetails } from "./PlanetDetails";
import nasaLogo from 'figma:asset/05320bcab35cc436461da5107ec26baba4599689.png';
import deitaLogo from 'figma:asset/7c79c02872a5311ec10033db6dc80bee21342f53.png';

interface PlanetSelectorProps {
  onSelectPlanet: (planet: PlanetData) => void;
}

export function PlanetSelector({ onSelectPlanet }: PlanetSelectorProps) {

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black p-8 flex items-center justify-center relative">
      {/* Corner logos and text */}
      <div className="absolute top-4 left-4 flex items-center gap-3 z-10">
        <img src={nasaLogo} alt="NASA" className="w-12 h-12" />
        <span className="text-white text-sm">NASA Space Apps Challenge</span>
      </div>
      
      <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
        <span className="text-white text-sm">DeIТa</span>
        <img src={deitaLogo} alt="DeITa" className="w-12 h-12" />
      </div>

      <div className="max-w-7xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-white">Select Your Colony Destination</h1>
          <p className="text-white/80">Choose wisely - each world presents unique challenges based on real NASA data</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PLANETS.map((planet) => (
            <PlanetDetails 
              key={planet.id}
              planet={planet}
              onSelectPlanet={onSelectPlanet}
            />
          ))}
        </div>

        <div className="text-center text-white/50 text-sm">
          <p>All planetary data based on NASA research and space agency findings</p>
        </div>
      </div>
    </div>
  );
}
