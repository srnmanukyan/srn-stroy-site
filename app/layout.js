import "./globals.css";
import { company } from "../data/company";

export const metadata = {
  title: `${company.name} — ${company.tagline}`,
  description: company.subtitle,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="site">{children}</body>
    </html>
  );
}
