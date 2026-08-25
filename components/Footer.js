import { Phone, Mail, Route } from "lucide-react";
import { company } from "../data/company";

// Points at the separate admin app (its own Timeweb deployment) — set this
// once that app has a real domain. Falls back to a placeholder for now.
const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || "https://admin.srn-stroy.ru/";

function telHref(phone) {
  return `tel:${(phone || "").replace(/[^\d+]/g, "")}`;
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="logo"><Route size={20} /><span>{company.name}</span></div>
          <p className="footer-tagline">{company.tagline}</p>
        </div>
        <div className="footer-contacts">
          <p><a href={telHref(company.phone)} className="footer-phone-link"><Phone size={14} /> {company.phone}</a></p>
          <p><Mail size={14} /> {company.email}</p>
        </div>
        <a href={ADMIN_URL} className="footer-admin-link">Вход для сотрудников</a>
      </div>
    </footer>
  );
}
