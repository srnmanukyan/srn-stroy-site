import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PageHero, StatStrip } from "../../components/Shared";
import { Icon } from "../../components/Icon";
import { company } from "../../data/company";
import { stats } from "../../data/stats";
import { advantages } from "../../data/advantages";
import { process_steps as processSteps } from "../../data/process_steps";

export const metadata = {
  title: `О компании — ${company.name}`,
  description: `Работаем с ${company.foundedYear} года на рынке дорожного строительства Москвы и области.`,
};

export default function AboutPage() {
  return (
    <div className="site">
      <Header citySlug="moscow-mo" />
      <PageHero eyebrow="О компании" title={company.name} subtitle={`Работаем с ${company.foundedYear} года на рынке дорожного строительства Москвы и области.`} />
      <div className="section section-light">
        <div className="container">
          <div className="advantage-grid">
            {advantages.map((a) => (
              <div key={a.id} className="advantage-card">
                <Icon name={a.icon} size={22} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section section-dark">
        <div className="container"><StatStrip stats={stats} /></div>
      </div>
      {processSteps.length > 0 && (
        <div className="section section-light">
          <div className="container">
            <span className="eyebrow">Как мы работаем</span>
            <h2>От заявки до сдачи объекта</h2>
            <div className="process-grid">
              {processSteps.map((s, i) => (
                <div key={s.id} className="process-step">
                  <span className="process-step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="section section-light">
        <div className="container narrow">
          <span className="eyebrow">Допуски</span>
          <h2>Сертификация</h2>
          <p className="sro-note">{company.sro}</p>
          <p className="sro-note" style={{ marginTop: "0.6rem" }}>{company.requisites}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
