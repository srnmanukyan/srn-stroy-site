"use client";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { PageHero } from "./Shared";
import { company } from "../data/company";

function telHref(phone) {
  return `tel:${(phone || "").replace(/[^\d+]/g, "")}`;
}

export default function ContactsClient() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [consent, setConsent] = useState(false);

  function submit() {
    if (!form.name || !form.phone || !consent) return;
    const body = encodeURIComponent(`Имя: ${form.name}\nТелефон: ${form.phone}\nКомментарий: ${form.message}`);
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Заявка с сайта")}&body=${body}`;
  }

  return (
    <div className="site">
      <Header citySlug="moscow-mo" />
      <PageHero eyebrow="Свяжитесь с нами" title="Контакты" />
      <div className="section section-light">
        <div className="container contacts-grid">
          <div className="contacts-info">
            <p><a href={telHref(company.phone)} className="contacts-phone-link"><Phone size={16} /> {company.phone}</a></p>
            <p><Mail size={16} /> {company.email}</p>
            <p><MapPin size={16} /> {company.address}</p>
          </div>
          <div className="contacts-form">
            <label className="field"><span>Имя</span><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></label>
            <label className="field"><span>Телефон</span><input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required /></label>
            <label className="field"><span>Комментарий</span><textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
            <div className="consent-box">
              <label className="consent-label">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
                <span>Согласен(на) с обработкой персональных данных</span>
              </label>
            </div>
            <button type="button" className="btn btn-primary" onClick={submit}>Отправить заявку</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
