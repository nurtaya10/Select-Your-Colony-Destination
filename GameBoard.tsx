import { BUILDINGS, BuildingType } from "../data/buildings";

interface PlacedBuilding {
  id: string;
  row: number;
  col: number;
  buildingType: string;
}

interface GameBoardProps {
  buildings: PlacedBuilding[];
  selectedBuilding: string | null;
  onPlaceBuilding: (row: number, col: number) => void;
  planetSurface: string;
}

const GRID_SIZE = 10;

export function GameBoard({ buildings, selectedBuilding, onPlaceBuilding, planetSurface }: GameBoardProps) {
  const getBuildingAt = (row: number, col: number) => {
    return buildings.find(b => b.row === row && b.col === col);
  };

  const getBuildingType = (buildingTypeId: string): BuildingType | undefined => {
    return BUILDINGS.find(b => b.id === buildingTypeId);
  };

  return (
    <div className={`bg-gradient-to-br ${planetSurface} p-8 rounded-lg shadow-2xl border-4 border-white`}>
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }}>
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
          const row = Math.floor(index / GRID_SIZE);
          const col = index % GRID_SIZE;
          const building = getBuildingAt(row, col);
          const buildingType = building ? getBuildingType(building.buildingType) : null;

          return (
            <div
              key={index}
              onClick={() => !building && onPlaceBuilding(row, col)}
              className={`
                aspect-square rounded border-2 transition-all
                ${building 
                  ? 'border-white bg-opacity-100 shadow-lg' 
                  : 'border-white/30 bg-black/20 hover:bg-white/10 cursor-pointer hover:border-white hover:shadow-md'
                }
                ${selectedBuilding && !building ? 'hover:scale-105 hover:border-green-400' : ''}
                flex items-center justify-center relative overflow-hidden
              `}
            >
              {/* Terrain texture */}
              {!building && (
                <div className="absolute inset-0 opacity-30">
                  <div 
                    className="w-full h-full" 
                    style={{
                      backgroundImage: `radial-gradient(circle at ${(col * 13) % 100}% ${(row * 17) % 100}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`
                    }}
                  />
                </div>
              )}
              
              {/* Building */}
              {building && buildingType && (
                <div className={`${buildingType.color} w-full h-full flex items-center justify-center rounded shadow-xl transition-transform hover:scale-110`}>
                  {buildingType.icon}
                </div>
              )}

              {/* Hover preview for selected building */}
              {!building && selectedBuilding && (
                <div className="absolute inset-0 opacity-0 hover:opacity-40 transition-opacity">
                  {(() => {
                    const previewBuilding = BUILDINGS.find(b => b.id === selectedBuilding);
                    return previewBuilding ? (
                      <div className="w-full h-full flex items-center justify-center bg-green-600 rounded">
                        {previewBuilding.icon}
                      </div>
                    ) : null;
                  })()}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
