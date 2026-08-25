"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { PageHero } from "./Shared";
import { faq } from "../data/faq";

export default function FaqClient() {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="site">
      <Header citySlug="moscow-mo" />
      <PageHero eyebrow="Вопросы и ответы" title="Частые вопросы" subtitle="Если не нашли ответ — напишите нам, ответим лично." />
      <div className="section section-light">
        <div className="container narrow">
          {faq.map((item) => {
            const open = openId === item.id;
            return (
              <div key={item.id} className="faq-item">
                <button className="faq-question" onClick={() => setOpenId(open ? null : item.id)}>
                  <span>{item.q}</span>
                  <ChevronDown size={18} style={{ transform: open ? "rotate(180deg)" : "none" }} />
                </button>
                {open && <p className="faq-answer">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
