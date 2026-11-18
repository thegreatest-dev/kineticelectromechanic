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

// Nav items for the mobile panel
const mobileNavItems = [
  { label: "Our Company", href: "/about", hasChildren: true },
  { label: "Services", href: "#services", hasChildren: true },
  { label: "Policy", href: "/policy", hasChildren: true },
  { label: "Portfolio", href: "#portfolio", hasChildren: false },
  { label: "Careers", href: "#careers", hasChildren: true },
  { label: "News", href: "#news", hasChildren: true },
];

const mobileUtilityLinks = [
  { label: "Clients websites", href: "#", icon: "monitor" },
  { label: "Contact", href: "#contact", icon: "envelope" },
  { label: "Our presence in the world", href: "#", icon: "globe" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
      <a className="brand" href="/" aria-label="Kinetic Electromechanical home">
        <img className="brand-logo" src="/logos/logo1.png" alt="Kinetic Electromechanical" />
      </a>

      <div className="mobile-header-actions">
        <button type="button" className="mobile-search" aria-label="Search">
          <span aria-hidden="true" />
        </button>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Desktop nav */}
      <div className="header-content">
        <nav className="main-nav" id="primary-navigation" aria-label="Main navigation">
          <div className="company-nav-item">
            <a href="/about" className="company-nav-link">Our Company</a>
            <MegaMenu sections={companyMenu} />
          </div>
          <div className="company-nav-item">
            <a href="#services" className="company-nav-link">Services</a>
            <MegaMenu sections={servicesMenu} />
          </div>
          <div className="company-nav-item">
            <a href="/policy" className="company-nav-link">Policy</a>
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

      {/* Mobile nav panel overlay */}
      <div
        id="mobile-nav-panel"
        className={`mobile-nav-panel${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {/* Panel top bar: search + close */}
        <div className="mobile-nav-panel-top">
          <button type="button" className="mobile-panel-search" aria-label="Search">
            <MobileSearchIcon />
          </button>
          <button
            type="button"
            className="mobile-panel-close"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          >
            <MobileCloseIcon />
          </button>
        </div>

        {/* Nav links */}
        <nav className="mobile-panel-nav" aria-label="Mobile navigation">
          <ul>
            {mobileNavItems.map((item) => (
              <li key={item.label} className="mobile-panel-nav-item">
                <a href={item.href} className="mobile-panel-nav-link" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
                {item.hasChildren && (
                  <span className="mobile-panel-chevron" aria-hidden="true">›</span>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Utility links */}
        <div className="mobile-panel-utility">
          {mobileUtilityLinks.map((link) => (
            <a key={link.label} href={link.href} className="mobile-panel-utility-link" onClick={() => setMenuOpen(false)}>
              <span className="mobile-panel-utility-icon" aria-hidden="true">
                {link.icon === "monitor" && <MonitorIcon />}
                {link.icon === "envelope" && <EnvelopeIcon />}
                {link.icon === "globe" && <GlobeIcon />}
              </span>
              {link.label}
            </a>
          ))}
          <div className="mobile-panel-language">
            <span>English</span>
            <span className="mobile-panel-chevron" aria-hidden="true">›</span>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="mobile-nav-backdrop"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
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
          <a href={link === "About Us" ? "/about/identity" : link === "Leadership" ? "/about" : link === "Sustainability" ? "/policy#sustainability" : link === "Health, Safety & Environment" ? "/policy#health-safety-environment" : link === "Quality" ? "/policy#quality" : link === "Community" ? "/policy#community" : link === "Ensuring Global Progress" ? "/policy#global-progress" : "#our-company"} role="menuitem">{link}</a>
        </li>
      ))}
    </ul>
  );
}

// SVG icons for mobile panel
function MobileSearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.75" />
      <line x1="12.5" y1="12.5" x2="17" y2="17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function MobileCloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1" y="2" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <line x1="5" y1="14" x2="11" y2="14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="8" y1="12" x2="8" y2="14" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="3.5" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <polyline points="1.5,4 8,9 14.5,4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="8" cy="8" rx="2.75" ry="6.5" stroke="currentColor" strokeWidth="1.4" />
      <line x1="1.5" y1="6" x2="14.5" y2="6" stroke="currentColor" strokeWidth="1.4" />
      <line x1="1.5" y1="10" x2="14.5" y2="10" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
