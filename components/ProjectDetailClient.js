"use client";
import { useState } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { PageHero } from "./Shared";
import { demo_project_images as DEMO_IMAGES } from "../data/demo_project_images";

function Lightbox({ photos, index, setIndex, onClose }) {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <img src={photos[index]} alt="" onClick={(e) => e.stopPropagation()} />
      <button className="lightbox-close" onClick={onClose}><X size={20} /></button>
      {photos.length > 1 && (
        <>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); setIndex((index - 1 + photos.length) % photos.length); }}><ChevronLeft size={22} /></button>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); setIndex((index + 1) % photos.length); }}><ChevronRight size={22} /></button>
        </>
      )}
    </div>
  );
}

export default function ProjectDetailClient({ project, cityName }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const photos = DEMO_IMAGES[project.id] || [];

  return (
    <div className="site">
      <Header citySlug="moscow-mo" />
      <PageHero eyebrow={`Объект · ${cityName}`} title={project.title} subtitle={project.description} />
      <div className="section section-light">
        <div className="container">
          <div className="project-detail-meta">
            {project.year && <span>Год: {project.year}</span>}
            {project.area && project.area !== "—" && <span>Объём: {project.area}</span>}
            <span>Статус: {project.status}</span>
          </div>
          {photos.length > 0 ? (
            <div className="photo-gallery">
              {photos.map((src, i) => (
                <button key={i} className="photo-thumb" onClick={() => setLightboxIndex(i)}>
                  <img src={src} alt={`${project.title} — фото ${i + 1}`} />
                </button>
              ))}
            </div>
          ) : (
            <p className="empty-note">Фото для этого объекта пока не добавлены.</p>
          )}
          <a href="/kontakty/" className="btn btn-primary">Обсудить похожий объект <ArrowRight size={16} /></a>
        </div>
      </div>
      {lightboxIndex !== null && (
        <Lightbox photos={photos} index={lightboxIndex} setIndex={setLightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
      <Footer />
    </div>
  );
}
