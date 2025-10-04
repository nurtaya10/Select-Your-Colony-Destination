import { BUILDINGS, BuildingType } from "../data/buildings";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface BuildingMenuProps {
  selectedBuilding: string | null;
  onSelectBuilding: (id: string) => void;
  resources: {
    oxygen: number;
    power: number;
    water: number;
    food: number;
    population: number;
  };
}

export function BuildingMenu({ selectedBuilding, onSelectBuilding, resources }: BuildingMenuProps) {
  const canAfford = (building: BuildingType) => {
    return (
      (!building.cost.power || resources.power >= building.cost.power) &&
      (!building.cost.water || resources.water >= building.cost.water) &&
      (!building.cost.food || resources.food >= building.cost.food)
    );
  };

  const categories = ['All', 'Habitat', 'Power', 'Resources', 'Production', 'Infrastructure'];

  const filterBuildings = (category: string) => {
    if (category === 'All') return BUILDINGS;
    return BUILDINGS.filter(b => b.category === category);
  };

  return (
    <div className="bg-white border-2 border-black rounded-lg shadow-lg h-full flex flex-col">
      <div className="p-4 border-b-2 border-black">
        <h3 className="text-black">Buildings</h3>
      </div>

      <Tabs defaultValue="All" className="flex-1 flex flex-col">
        <TabsList className="mx-4 mt-4 grid grid-cols-3 bg-red-100">
          <TabsTrigger value="All" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">All</TabsTrigger>
          <TabsTrigger value="Power" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Power</TabsTrigger>
          <TabsTrigger value="Resources" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">Resources</TabsTrigger>
        </TabsList>
        <TabsList className="mx-4 mt-2 grid grid-cols-3 bg-red-100">
          <TabsTrigger value="Habitat" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Habitat</TabsTrigger>
          <TabsTrigger value="Production" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">Production</TabsTrigger>
          <TabsTrigger value="Infrastructure" className="data-[state=active]:bg-black data-[state=active]:text-white">Infra</TabsTrigger>
        </TabsList>

        {categories.map(category => (
          <TabsContent key={category} value={category} className="flex-1 mt-0">
            <ScrollArea className="h-[calc(100vh-400px)]">
              <div className="p-4 space-y-2">
                {filterBuildings(category).map((building) => {
                  const affordable = canAfford(building);
                  return (
                    <Button
                      key={building.id}
                      variant="outline"
                      className={`w-full justify-start h-auto p-3 border-2 transition-all
                        ${selectedBuilding === building.id 
                          ? 'border-red-600 bg-red-50' 
                          : 'border-black/20 hover:border-red-600'
                        }
                        ${!affordable ? 'opacity-50' : ''}
                      `}
                      onClick={() => affordable && onSelectBuilding(building.id)}
                      disabled={!affordable}
                    >
                      <div className="flex flex-col items-start gap-2 w-full">
                        <div className="flex items-center gap-3 w-full">
                          <div className={`${building.color} p-2 rounded`}>
                            {building.icon}
                          </div>
                          <div className="flex-1 text-left">
                            <div className="text-black">{building.name}</div>
                            <div className="text-xs text-black/60">{building.description}</div>
                          </div>
                        </div>
                        
                        {/* Costs */}
                        {(building.cost.power || building.cost.water || building.cost.food) && (
                          <div className="flex gap-1 flex-wrap">
                            <span className="text-xs text-black/60">Cost:</span>
                            {building.cost.power && (
                              <Badge variant="outline" className="text-xs border-red-600 text-red-600">
                                ⚡ {building.cost.power}
                              </Badge>
                            )}
                            {building.cost.water && (
                              <Badge variant="outline" className="text-xs border-green-600 text-green-600">
                                💧 {building.cost.water}
                              </Badge>
                            )}
                            {building.cost.food && (
                              <Badge variant="outline" className="text-xs border-green-600 text-green-600">
                                🌾 {building.cost.food}
                              </Badge>
                            )}
                          </div>
                        )}

                        {/* Production */}
                        <div className="flex gap-1 flex-wrap">
                          <span className="text-xs text-black/60">Produces:</span>
                          {building.produces.oxygen && building.produces.oxygen > 0 && (
                            <Badge className="text-xs bg-green-600 text-white">
                              O₂ +{building.produces.oxygen}
                            </Badge>
                          )}
                          {building.produces.power && building.produces.power > 0 && (
                            <Badge className="text-xs bg-red-600 text-white">
                              ⚡ +{building.produces.power}
                            </Badge>
                          )}
                          {building.produces.power && building.produces.power < 0 && (
                            <Badge className="text-xs bg-red-800 text-white">
                              ⚡ {building.produces.power}
                            </Badge>
                          )}
                          {building.produces.water && building.produces.water > 0 && (
                            <Badge className="text-xs bg-green-600 text-white">
                              💧 +{building.produces.water}
                            </Badge>
                          )}
                          {building.produces.food && building.produces.food > 0 && (
                            <Badge className="text-xs bg-green-600 text-white">
                              🌾 +{building.produces.food}
                            </Badge>
                          )}
                          {building.produces.population && building.produces.population > 0 && (
                            <Badge className="text-xs bg-black text-white">
                              👥 +{building.produces.population}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Button>
                  );
                })}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
