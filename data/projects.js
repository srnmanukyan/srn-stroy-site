import projectsData from "./projects.json";

// Editable via the admin panel — this file just re-exports the JSON so every
// existing `import { projects } from "../data/projects"` keeps working.
export const projects = projectsData;
