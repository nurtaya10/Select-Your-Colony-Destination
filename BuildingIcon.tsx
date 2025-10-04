import { 
  Home, 
  Zap, 
  Droplet, 
  Sprout, 
  Factory, 
  FlaskConical, 
  Warehouse, 
  Radio, 
  Plane, 
  Shield, 
  Atom, 
  Wind,
  LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Zap,
  Droplet,
  Sprout,
  Factory,
  FlaskConical,
  Warehouse,
  Radio,
  Plane,
  Shield,
  Atom,
  Wind
};

interface BuildingIconProps {
  iconName: string;
  className?: string;
}

export function BuildingIcon({ iconName, className = "w-5 h-5" }: BuildingIconProps) {
  const IconComponent = iconMap[iconName];
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent className={className} />;
}