"use client";

import Link from "next/link";
import { useRef } from "react";

const policyCards = [
  {
    id: "sustainability",
    title: "Sustainability",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: "health-safety-environment",
    title: "Health, Safety & Environment",
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: "quality",
    title: "Quality",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: "community",
    title: "Community",
    image: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=900&q=85"
  }
];

export default function PolicyPage() {
  const cardTrackRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: number) => {
    cardTrackRef.current?.scrollBy({
      behavior: "smooth",
      left: direction * (cardTrackRef.current.clientWidth * 0.8)
    });
  };

  return (
    <main className="policy-page">
      <div className="policy-breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">&gt;</span>
        <span>Our Policy</span>
      </div>

      <section className="policy-hero" aria-labelledby="policy-title">
        <div className="policy-hero-title">
          <h1 id="policy-title">Our Policy</h1>
        </div>
      </section>

      <div className="policy-intro">
        <p>
          Kinetic Electromechanical operates in diverse and complex environments, where safety,
          health, environmental and ethical responsibilities are central to our work.
        </p>
        <p>
          Our values guide our actions and relationships with stakeholders. We are committed to
          conducting ourselves responsibly and maintaining high standards across every engagement.
        </p>
      </div>

      <section className="policy-more" aria-labelledby="policy-more-title">
        <h2 id="policy-more-title">More</h2>
        <div className="policy-card-track" ref={cardTrackRef}>
          {policyCards.map((card) => (
            <article className="policy-card" id={card.id} key={card.title}>
              <div
                className="policy-card-image"
                role="img"
                aria-label={card.title}
                style={{ backgroundImage: `url("${card.image}")` }}
              />
              <div className="policy-card-content">
                <h3>{card.title}</h3>
                <Link href={`#${card.id}`}>Find out more <span aria-hidden="true">▸</span></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="policy-slider-controls">
          <button type="button" onClick={() => scrollCards(-1)} aria-label="Show previous policy cards">
            ←
          </button>
          <button type="button" onClick={() => scrollCards(1)} aria-label="Show next policy cards">
            →
          </button>
        </div>
      </section>
    </main>
  );
}
