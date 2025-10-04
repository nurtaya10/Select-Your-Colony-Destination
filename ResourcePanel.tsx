import { Battery, Droplet, Wheat, Users, Wind } from "lucide-react";

interface ResourcePanelProps {
  resources: {
    oxygen: number;
    power: number;
    water: number;
    food: number;
    population: number;
  };
  maxPopulation: number;
}

export function ResourcePanel({ resources, maxPopulation }: ResourcePanelProps) {
  const getResourceStatus = (value: number) => {
    if (value <= 20) return 'text-red-600';
    if (value <= 50) return 'text-red-400';
    return 'text-green-600';
  };

  return (
    <div className="bg-white border-2 border-black rounded-lg p-6 shadow-lg">
      <div className="grid grid-cols-5 gap-6">
        <ResourceItem 
          icon={<Wind className="w-6 h-6" />}
          label="Oxygen"
          value={Math.floor(resources.oxygen)}
          color={getResourceStatus(resources.oxygen)}
        />
        <ResourceItem 
          icon={<Battery className="w-6 h-6" />}
          label="Power"
          value={Math.floor(resources.power)}
          color={getResourceStatus(resources.power)}
        />
        <ResourceItem 
          icon={<Droplet className="w-6 h-6" />}
          label="Water"
          value={Math.floor(resources.water)}
          color={getResourceStatus(resources.water)}
        />
        <ResourceItem 
          icon={<Wheat className="w-6 h-6" />}
          label="Food"
          value={Math.floor(resources.food)}
          color={getResourceStatus(resources.food)}
        />
        <ResourceItem 
          icon={<Users className="w-6 h-6" />}
          label="Population"
          value={resources.population}
          maxValue={maxPopulation}
          color="text-black"
        />
      </div>
    </div>
  );
}

function ResourceItem({ icon, label, value, maxValue, color }: { 
  icon: React.ReactNode; 
  label: string; 
  value: number;
  maxValue?: number;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={color}>{icon}</div>
      <div className="text-black/60 text-sm">{label}</div>
      <div className={color}>
        {value}
        {maxValue !== undefined && <span className="text-black/40">/{maxValue}</span>}
      </div>
    </div>
  );
}
