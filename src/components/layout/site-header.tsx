"use client";

import { useEffect, useState } from "react";

const navigation = ["Our Company", "Services", "Policy", "Portfolio", "Careers", "News"];

const companyMenu = [
  {
    title: "Our company",
    links: ["About Us", "Leadership"]
  }
];

const servicesMenu = [
  {
    title: "Our services",
    links: [
      "Air Conditioning Design & Installation",
      "Electrical & High Voltage Installation",
      "Plumbing Systems Design & Installation",
      "Facility Management",
      "Mechanical Installation"
    ]
  }
];

const policyMenu = [
  {
    title: "Our policy",
    links: [
      "Sustainability",
      "Health, Safety & Environment",
      "Quality",
      "Community",
      "Ensuring Global Progress"
    ]
  }
];

const careersMenu = [
  {
    title: "Careers",
    links: ["Find a job", "Our People", "Learning and development"]
  }
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <a className="brand" href="/" aria-label="Kinetic Electromechanical home">
        <img className="brand-logo" src="/logos/logo1.png" alt="Kinetic Electromechanical" />
      </a>

      <div className="header-content">
        <nav className="main-nav" aria-label="Main navigation">
          <div className="company-nav-item">
            <a href="/about" className="company-nav-link">Our Company</a>
            <MegaMenu sections={companyMenu} />
          </div>
          <div className="company-nav-item">
            <a href="#services" className="company-nav-link">Services</a>
            <MegaMenu sections={servicesMenu} />
          </div>
          <div className="company-nav-item">
            <a href="#policy" className="company-nav-link">Policy</a>
            <MegaMenu sections={policyMenu} />
          </div>
          <a href="#portfolio">Portfolio</a>
          <div className="company-nav-item">
            <a href="#careers" className="company-nav-link">Careers</a>
            <MegaMenu sections={careersMenu} />
          </div>
          <a href="#news">News</a>
        </nav>
        <div className="utility-nav">
          <a className="client-link" href="#contact">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

function MegaMenu({ sections }: { sections: typeof companyMenu }) {
  return (
    <div className="company-menu" role="menu">
      {sections.map((section) => (
        <div className="company-menu-column" key={section.title}>
          <MenuSection {...section} />
        </div>
      ))}
    </div>
  );
}

function MenuSection({
  title,
  links,
  extraTitle,
  groups,
  extraLinks
}: {
  title: string;
  links: string[];
  extraTitle?: string;
  extraLinks?: string[];
  groups?: { title: string; links: string[] }[];
}) {
  return (
    <section className="company-menu-section">
      <h2>{title}</h2>
      <MenuLinks links={links} />
      {extraTitle && <h2>{extraTitle}</h2>}
      {extraLinks && <MenuLinks links={extraLinks} />}
      {groups?.map((group) => (
        <div className="company-menu-group" key={group.title}>
          <h3>{group.title}</h3>
          <MenuLinks links={group.links} />
        </div>
      ))}
    </section>
  );
}

function MenuLinks({ links }: { links: string[] }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link}>
          <a href={link === "About Us" ? "/about/identity" : "#our-company"} role="menuitem">{link}</a>
        </li>
      ))}
    </ul>
  );
}
