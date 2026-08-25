import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PageHero, ProjectCard } from "../../components/Shared";
import { projects } from "../../data/projects";
import { cities } from "../../data/cities";
import { demo_project_images as DEMO_IMAGES } from "../../data/demo_project_images";

export const metadata = {
  title: "Наши работы — СРН-Строй",
  description: "Дороги, дворы и подъездные пути, которые мы построили и отремонтировали.",
};

export default function ProjectsPage() {
  const cityName = (id) => cities.find((c) => c.id === id)?.name || id;
  return (
    <div className="site">
      <Header citySlug="moscow-mo" />
      <PageHero eyebrow="Портфолио" title="Наши работы" subtitle="Дороги, дворы и подъездные пути, которые мы построили и отремонтировали." />
      <div className="section section-light">
        <div className="container">
          <div className="project-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} cityName={cityName(p.cityId)} photos={DEMO_IMAGES[p.id]} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
