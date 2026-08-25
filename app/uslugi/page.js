import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PageHero, ServiceCard } from "../../components/Shared";
import { services } from "../../data/services";

export const metadata = {
  title: "Услуги — СРН-Строй",
  description: "Полный цикл дорожных работ — от проекта до содержания готового объекта.",
};

export default function ServicesPage() {
  return (
    <div className="site">
      <Header citySlug="moscow-mo" />
      <PageHero eyebrow="Что мы делаем" title="Услуги" subtitle="Полный цикл дорожных работ — от проекта до содержания готового объекта." />
      <div className="section section-light">
        <div className="container">
          <div className="service-grid">
            {services.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
          <div className="cta-row">
            <Link href="/kontakty/" className="btn btn-primary">Обсудить объект <ArrowRight size={16} /></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
