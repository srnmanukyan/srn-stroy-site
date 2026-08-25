import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PageHero, ReviewCard } from "../../components/Shared";
import { reviews } from "../../data/reviews";

export const metadata = {
  title: "Отзывы — СРН-Строй",
  description: "Отзывы клиентов о работе СРН-Строй.",
};

export default function ReviewsPage() {
  return (
    <div className="site">
      <Header citySlug="moscow-mo" />
      <PageHero eyebrow="Отзывы" title="Что говорят клиенты" subtitle="Реальные отзывы клиентов о нашей работе." />
      <div className="section section-light">
        <div className="container">
          {reviews.length > 0 ? (
            <div className="review-grid">
              {reviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
          ) : (
            <p className="empty-note">Отзывы появятся здесь после добавления через админ-панель.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
