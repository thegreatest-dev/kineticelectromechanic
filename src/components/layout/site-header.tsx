"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface SubLink {
  label: string;
  href: string;
}

interface MenuSectionData {
  title: string;
  links: SubLink[];
}

const companyMenu: MenuSectionData[] = [
  {
    title: "Our company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Identity & Profile", href: "/about/identity" }
    ]
  }
];

const servicesMenu: MenuSectionData[] = [
  {
    title: "Our services",
    links: [
      { label: "Air Conditioning Design & Installation", href: "/services" },
      { label: "Electrical & High Voltage Installation", href: "/services" },
      { label: "Plumbing Systems Design & Installation", href: "/services" },
      { label: "Facility Management", href: "/services" },
      { label: "Mechanical Installation", href: "/services" }
    ]
  }
];

const policyMenu: MenuSectionData[] = [
  {
    title: "Our policy",
    links: [
      { label: "Sustainability", href: "/policy#sustainability" },
      { label: "Health, Safety & Environment", href: "/policy#health-safety-environment" },
      { label: "Quality Assurance", href: "/policy#quality" },
      { label: "Community & Stakeholders", href: "/policy#community" }
    ]
  }
];

const careersMenu: MenuSectionData[] = [
  {
    title: "Careers",
    links: [
      { label: "Working with Us", href: "/contact" },
      { label: "Our People & Teams", href: "/about" },
      { label: "Professional Development", href: "/about/identity" }
    ]
  }
];

// Nav items for the mobile panel
const mobileNavItems = [
  { label: "Our Company", href: "/about", hasChildren: true },
  { label: "Services", href: "/services", hasChildren: true },
  { label: "Policy", href: "/policy", hasChildren: true },
  { label: "Portfolio", href: "/projects", hasChildren: false },
  { label: "Careers", href: "/contact", hasChildren: false },
  { label: "Contact Us", href: "/contact", hasChildren: false }
];

const mobileUtilityLinks = [
  { label: "Projects & Portfolio", href: "/projects", icon: "monitor" },
  { label: "Contact Us", href: "/contact", icon: "envelope" },
  { label: "Our Operations in Nigeria", href: "/about/identity", icon: "globe" }
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
      <Link className="brand" href="/" aria-label="Kinetic Electromechanical home">
        <img className="brand-logo" src="/logos/logo1.png" alt="Kinetic Electromechanical" />
      </Link>

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
            <Link href="/about" className="company-nav-link">Our Company</Link>
            <MegaMenu sections={companyMenu} />
          </div>
          <div className="company-nav-item">
            <Link href="/services" className="company-nav-link">Services</Link>
            <MegaMenu sections={servicesMenu} />
          </div>
          <div className="company-nav-item">
            <Link href="/policy" className="company-nav-link">Policy</Link>
            <MegaMenu sections={policyMenu} />
          </div>
          <Link href="/projects">Portfolio</Link>
          <div className="company-nav-item">
            <Link href="/contact" className="company-nav-link">Careers</Link>
            <MegaMenu sections={careersMenu} />
          </div>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="utility-nav">
          <Link className="client-link" href="/contact">
            Contact Us
          </Link>
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
                <Link href={item.href} className="mobile-panel-nav-link" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
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
            <Link key={link.label} href={link.href} className="mobile-panel-utility-link" onClick={() => setMenuOpen(false)}>
              <span className="mobile-panel-utility-icon" aria-hidden="true">
                {link.icon === "monitor" && <MonitorIcon />}
                {link.icon === "envelope" && <EnvelopeIcon />}
                {link.icon === "globe" && <GlobeIcon />}
              </span>
              {link.label}
            </Link>
          ))}
          <div className="mobile-panel-language">
            <span>Nigeria (EN)</span>
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

function MegaMenu({ sections }: { sections: MenuSectionData[] }) {
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
  links
}: {
  title: string;
  links: SubLink[];
}) {
  return (
    <section className="company-menu-section">
      <h2>{title}</h2>
      <MenuLinks links={links} />
    </section>
  );
}

function MenuLinks({ links }: { links: SubLink[] }) {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} role="menuitem">
            {link.label}
          </Link>
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
