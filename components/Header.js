"use client";
import Link from "next/link";
import { useState } from "react";
import { MapPin, Phone, Menu, X, ChevronDown, Route } from "lucide-react";
import { company } from "../data/company";
import { cities } from "../data/cities";

function telHref(phone) {
  return `tel:${(phone || "").replace(/[^\d+]/g, "")}`;
}

const LINKS = [
  ["/", "Главная"],
  ["/uslugi/", "Услуги"],
  ["/proekty/", "Работы"],
  ["/o-kompanii/", "О компании"],
  ["/otzyvy/", "Отзывы"],
  ["/faq/", "Вопросы"],
  ["/kontakty/", "Контакты"],
];

export default function Header({ citySlug }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cityPanelOpen, setCityPanelOpen] = useState(false);
  const [query, setQuery] = useState("");
  const currentCity = cities.find((c) => c.id === citySlug) || cities[0];
  const q = query.trim().toLowerCase();
  const filteredCities = q ? cities.filter((c) => c.name.toLowerCase().includes(q)) : cities;

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Route size={22} /><span>{company.name}</span>
        </Link>
        <nav className={`nav ${mobileOpen ? "open" : ""}`}>
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} className="nav-link" onClick={() => setMobileOpen(false)}>{label}</Link>
          ))}
          <button className="city-btn city-btn-mobile" onClick={() => setCityPanelOpen(true)}>
            <MapPin size={15} /> {currentCity.name} <ChevronDown size={14} />
          </button>
        </nav>
        <div className="header-actions">
          <a href={telHref(company.phone)} className="header-phone-link" aria-label={`Позвонить: ${company.phone}`}>
            <Phone size={16} /><span className="header-phone-number">{company.phone}</span>
          </a>
          <button className="city-btn" onClick={() => setCityPanelOpen(true)}>
            <MapPin size={15} /> {currentCity.name} <ChevronDown size={14} />
          </button>
          <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {cityPanelOpen && (
        <div className="city-panel-overlay" onClick={() => setCityPanelOpen(false)}>
          <div className="city-panel" onClick={(e) => e.stopPropagation()}>
            <div className="city-panel-head">
              <h3>Выберите город</h3>
              <button className="icon-btn" onClick={() => setCityPanelOpen(false)}><X size={20} /></button>
            </div>
            <p className="city-panel-hint">Главная страница подстроится под выбранный город.</p>
            <input className="city-search" type="text" placeholder="Начните вводить название города…" value={query} onChange={(e) => setQuery(e.target.value)} />
            <div className="city-grid">
              {filteredCities.map((c) => (
                <Link key={c.id} href={c.isMain ? "/" : `/${c.id}/`} className={`city-post ${citySlug === c.id ? "active" : ""}`} onClick={() => setCityPanelOpen(false)}>
                  <span className="city-post-stripe" />
                  <span className="city-post-name">{c.name}</span>
                  <span className="city-post-dist">{c.isMain ? "все районы" : `~${c.distance} км от МКАД`}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
