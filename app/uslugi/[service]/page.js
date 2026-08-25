import Link from "next/link";
import { Check, ArrowRight, ClipboardList } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { PageHero } from "../../../components/Shared";
import { services } from "../../../data/services";
import { company } from "../../../data/company";

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.id }));
}

export async function generateMetadata({ params }) {
  const service = services.find((s) => s.id === params.service);
  if (!service) return {};
  return {
    title: `${service.title} — ${company.name}`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.id === params.service) || services[0];
  const bulletList = (service.bullets || "").split("\n").map((s) => s.trim()).filter(Boolean);

  return (
    <div className="site">
      <Header citySlug="moscow-mo" />
      <PageHero eyebrow="Услуга" title={service.title} subtitle={service.longDescription || service.description} />
      <div className="section section-light">
        <div className="container service-detail-grid">
          <div>
            {bulletList.length > 0 && (
              <div className="bullet-block">
                <h3>Что входит</h3>
                <ul className="bullet-list">
                  {bulletList.map((b, i) => <li key={i}><Check size={16} /> {b}</li>)}
                </ul>
              </div>
            )}
            <Link href="/uslugi/" className="btn btn-outline-dark">Все услуги</Link>
          </div>
          <div>
            <div className="calc-card">
              <h3><ClipboardList size={17} /> Расчёт стоимости</h3>
              <p>{service.calcNote || "Точную стоимость рассчитаем после выезда специалиста на объект."}</p>
              <Link href="/kontakty/" className="btn btn-primary calc-cta">Запросить расчёт <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
