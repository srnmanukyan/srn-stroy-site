import ProjectDetailClient from "../../../components/ProjectDetailClient";
import { projects } from "../../../data/projects";
import { cities } from "../../../data/cities";
import { company } from "../../../data/company";

export async function generateStaticParams() {
  return projects.map((p) => ({ project: p.id }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.id === params.project);
  if (!project) return {};
  return {
    title: `${project.title} — ${company.name}`,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.id === params.project) || projects[0];
  const cityName = cities.find((c) => c.id === project.cityId)?.name || "";
  return <ProjectDetailClient project={project} cityName={cityName} />;
}
