import citiesData from "./cities.json";

// Editable via the admin panel — this file just re-exports the JSON so every
// existing `import { cities } from "../data/cities"` keeps working.
export const cities = citiesData;
