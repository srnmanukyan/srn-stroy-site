import Link from "next/link";
import { MapPin, Check, Layers, ArrowRight, Star } from "lucide-react";
import { Icon } from "./Icon";

export function PageHero({ eyebrow, title, subtitle }) {
  return (
    <div className="page-hero">
      <div className="container">
        {eyebrow && <span className="eyebrow eyebrow-light">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}

export function StatStrip({ stats }) {
  return (
    <div className="stat-strip">
      {stats.map((s, i) => (
        <div key={i}>
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

export function ServiceCard({ service }) {
  return (
    <Link href={`/uslugi/${service.id}/`} className="service-card">
      <div className="service-icon"><Icon name={service.icon} size={20} /></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="service-more">Подробнее <ArrowRight size={14} /></span>
    </Link>
  );
}

export function ReviewCard({ review }) {
  const rating = Math.max(0, Math.min(5, Number(review.rating) || 5));
  return (
    <div className="review-card">
      <div className="review-stars" aria-label={`Оценка ${rating} из 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill={i < rating ? "currentColor" : "none"} />
        ))}
      </div>
      <p className="review-text">{review.text}</p>
      <div className="review-meta">
        <span className="review-author">{review.author}</span>
        {review.date && <span className="review-date">{review.date}</span>}
      </div>
    </div>
  );
}

export function ProjectCard({ project, cityName, photos }) {
  const cover = photos && photos.length > 0 ? photos[0] : project.image;
  return (
    <Link href={`/proekty/${project.id}/`} className="project-card">
      <div className="project-image">
        {cover ? (
          <img src={cover} alt={project.title} />
        ) : (
          <div className="project-placeholder"><Layers size={24} /><span>Фото объекта</span></div>
        )}
        <span className={`status-badge ${project.status === "В работе" ? "status-progress" : "status-done"}`}>
          {project.status === "В работе" ? "В работе" : (<><Check size={11} /> Завершён</>)}
        </span>
      </div>
      <div className="project-body">
        <span className="project-city"><MapPin size={12} /> {cityName}</span>
        <h3>{project.title}</h3>
        <div className="project-meta">
          {project.year && <span>{project.year}</span>}
          {project.area && project.area !== "—" && <span>{project.area}</span>}
        </div>
        {project.description && <p>{project.description}</p>}
      </div>
    </Link>
  );
}
