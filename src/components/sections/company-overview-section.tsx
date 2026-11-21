"use client";

import Link from "next/link";
import { CountUp } from "@/components/ui/count-up";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Highlight {
  category: string;
  title: string;
  featured?: boolean;
  date?: string;
  isoDate?: string;
  href: string;
}

const highlights: Highlight[] = [
  {
    category: "Engineering",
    title: "Advancing Commercial Building Efficiency with Next-Gen VRF HVAC Systems",
    featured: true,
    href: "/services"
  },
  {
    category: "Projects",
    title: "Delivery of High-Voltage Power Distribution for Key Infrastructure in Rivers State",
    date: "14 November 2026",
    isoDate: "2026-11-14",
    href: "/projects"
  },
  {
    category: "Safety & Systems",
    title: "Sustainable Building Services: Integrating Fire Protection & Smart Plumbing",
    date: "28 October 2026",
    isoDate: "2026-10-28",
    href: "/policy"
  },
  {
    category: "Value Engineering",
    title: "MEP Value Engineering: Maximizing Durability While Optimizing Capital Costs",
    date: "15 September 2026",
    isoDate: "2026-09-15",
    href: "/about/identity"
  }
];

export function CompanyOverviewSection() {
  const sectionReveal = useScrollReveal<HTMLElement>();
  return (
    <section ref={sectionReveal.ref} className={`company-overview ${sectionReveal.className}`} aria-labelledby="overview-title">
      <div className="highlight-grid">
        {highlights.map((highlight, index) => (
          <article
            className="highlight-card scroll-reveal is-visible"
            style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
            key={highlight.title}
          >
            <p>{highlight.category}</p>
            <Link href={highlight.href} className={highlight.featured ? "highlight-featured" : undefined}>
              {highlight.title}
            </Link>
            {highlight.date && highlight.isoDate && (
              <time dateTime={highlight.isoDate}>{highlight.date}</time>
            )}
          </article>
        ))}
      </div>

      <div className="overview-content">
        <div className="overview-intro">
          <h2 id="overview-title">
            Kinetic Electromechanical is a premier Nigerian building services engineering
            company delivering dependable MEP solutions.
          </h2>
          <p>
            Founded in 2007, we deliver the engineering systems modern facilities depend on:
            safe, cost-effective, durable, and executed to international standards across Nigeria.
          </p>
        </div>

        <div className="overview-stats">
          <div className="overview-stat">
            <CountUp value={17} suffix="+" />
            <p>years of engineering excellence since founding in 2007</p>
          </div>
          <div className="overview-stat overview-art" aria-label="Abstract engineering network illustration">
            <span className="globe-orbit" />
          </div>
          <div className="overview-stat">
            <CountUp value={150} prefix="> " suffix="+" />
            <p>iconic MEP projects delivered across commercial, residential & industrial sectors</p>
          </div>
          <div className="overview-stat">
            <CountUp value={100} suffix="%" />
            <p>commitment to HSE compliance and rigorous quality standards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
