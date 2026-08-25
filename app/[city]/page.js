import HomeContent from "../../components/HomeContent";
import { cities } from "../../data/cities";
import { company } from "../../data/company";

export async function generateStaticParams() {
  return cities.filter((c) => !c.isMain).map((c) => ({ city: c.id }));
}

export async function generateMetadata({ params }) {
  const city = cities.find((c) => c.id === params.city);
  if (!city) return {};
  return {
    title: city.metaTitle || `${company.name} — ${city.name}`,
    description: city.metaDescription,
  };
}

export default function CityPage({ params }) {
  return <HomeContent citySlug={params.city} />;
}
