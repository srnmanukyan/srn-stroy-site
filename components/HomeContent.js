import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { StatStrip, ServiceCard, ProjectCard } from "./Shared";
import { company } from "../data/company";
import { cities } from "../data/cities";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { stats } from "../data/stats";


export default function HomeContent({ citySlug }) {
  const city = cities.find((c) => c.id === citySlug) || cities[0];
  const cityProjects = city.isMain ? projects : projects.filter((p) => p.cityId === city.id);
  const featured = (cityProjects.length ? cityProjects : projects).slice(0, 3);

  return (
    <div className="site">
      <Header citySlug={city.id} />
      <section className="hero">
        <div className="hero-roadline" />
        <div className="container hero-inner">
          <span className="eyebrow eyebrow-light">{company.name} · {city.name}</span>
          <h1>{company.tagline}</h1>
          <p className="hero-sub">{city.isMain ? company.subtitle : city.intro}</p>
          <div className="hero-actions">
            <Link href="/kontakty/" className="btn btn-primary">Оставить заявку <ArrowRight size={16} /></Link>
            <Link href="/proekty/" className="btn btn-outline">Наши работы</Link>
          </div>
          <button className="hero-city-chip">
            <MapPin size={13} /> Все города — в шапке сайта
          </button>
        </div>
      </section>
      <div className="stripe-band" />
      <section className="section section-dark">
        <div className="container"><StatStrip stats={stats} /></div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="section-head-row">
            <div><span className="eyebrow">Услуги</span><h2>Что мы делаем</h2></div>
            <Link href="/uslugi/" className="btn btn-ghost">Показать все услуги <ArrowRight size={16} /></Link>
          </div>
          <div className="service-grid">
            {services.slice(0, 6).map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>
      <section className="section section-light alt">
        <div className="container">
          <div className="section-head-row">
            <div>
              <span className="eyebrow">Портфолио</span>
              <h2>{city.isMain ? "Выполненные работы" : `Работы в городе ${city.name}`}</h2>
            </div>
            <Link href="/proekty/" className="btn btn-ghost">Все работы <ArrowRight size={16} /></Link>
          </div>
          <div className="project-grid">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} cityName={cities.find((c) => c.id === p.cityId)?.name || ""} photos={p.photos} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section-dark">
        <div className="container">
          <span className="eyebrow eyebrow-light">География</span>
          <h2>Работаем в вашем городе</h2>
          <div className="city-grid">
            {cities.filter((c) => !c.isMain).slice(0, 16).map((c) => (
              <Link key={c.id} href={`/${c.id}/`} className="city-post">
                <span className="city-post-stripe" />
                <span className="city-post-name">{c.name}</span>
                <span className="city-post-dist">~{c.distance} км от МКАД</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
