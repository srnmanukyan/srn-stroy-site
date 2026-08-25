import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PageHero } from "../../components/Shared";

export const metadata = {
  title: "Отзывы — СРН-Строй",
  description: "Отзывы клиентов о работе СРН-Строй.",
};

export default function ReviewsPage() {
  return (
    <div className="site">
      <Header citySlug="moscow-mo" />
      <PageHero eyebrow="Отзывы" title="Что говорят клиенты" subtitle="Раздел с отзывами и формой появится сразу после подключения базы данных — на следующем шаге." />
      <div className="section section-light">
        <div className="container">
          <p className="empty-note">Скоро здесь появятся реальные отзывы клиентов с возможностью оставить свой.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
