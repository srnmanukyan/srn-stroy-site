import {
  Route, Wrench, Layers, Ruler, Snowflake, ClipboardList, Truck,
  ShieldCheck, Users, Award, HardHat, Shovel,
} from "lucide-react";

const ICONS = {
  route: Route, wrench: Wrench, layers: Layers, ruler: Ruler, snowflake: Snowflake,
  clipboard: ClipboardList, truck: Truck, shield: ShieldCheck, users: Users,
  award: Award, hardhat: HardHat, shovel: Shovel,
};

export function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || Wrench;
  return <Cmp {...props} />;
}
