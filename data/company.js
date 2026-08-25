import companyData from "./company.json";

// Editable via the admin panel — this file just re-exports the JSON so every
// existing `import { company } from "../data/company"` keeps working.
export const company = companyData;
