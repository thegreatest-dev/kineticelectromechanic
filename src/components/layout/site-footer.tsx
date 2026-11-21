import Link from "next/link";

interface FooterLinkItem {
  label: string;
  href: string;
}

const quickLinks: FooterLinkItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Identity", href: "/about/identity" },
  { label: "Our Services", href: "/services" },
  { label: "Our Policy", href: "/policy" },
  { label: "Project Portfolio", href: "/projects" },
  { label: "Contact Us", href: "/contact" }
];

const coreServices: FooterLinkItem[] = [
  { label: "Air Conditioning Design & Installation", href: "/services#air-conditioning" },
  { label: "Electrical & High Voltage Installation", href: "/services#electrical" },
  { label: "Plumbing Systems & Fire Fighting", href: "/services#plumbing" },
  { label: "Facility Management", href: "/services#facility-management" },
  { label: "Mechanical Installation", href: "/services#mechanical" }
];

const specialistServices: FooterLinkItem[] = [
  { label: "HVAC & VRF Systems", href: "/services#air-conditioning" },
  { label: "MV, LV & ELV Infrastructure", href: "/services#electrical" },
  { label: "Fire Protection & Pump Stations", href: "/services#plumbing" },
  { label: "Value Engineering & Audits", href: "/about/identity" },
  { label: "Commercial Facility Maintenance", href: "/services#facility-management" }
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <section className="footer-column footer-contact">
          <h2>Contact Us</h2>
          <address>
            <p><LocationIcon /><span>16B Estate Road, Bons Avenue, Rumuogba, Port Harcourt, Rivers State, Nigeria</span></p>
            <p><PhoneIcon /><span>Phone: <a href="tel:+2348035457405">+234 803 545 7405</a></span></p>
            <p>
              <EmailIcon />
              <span>
                Contact: <a href="mailto:info@kineticelectromechanic.com">info@kineticelectromechanic.com</a><br />
                Customer Service: <a href="mailto:customerservice@kineticelectromechanic.com">customerservice@kineticelectromechanic.com</a><br />
                Careers: <a href="mailto:careers@kineticelectromechanic.com">careers@kineticelectromechanic.com</a>
              </span>
            </p>
          </address>
          <div className="footer-socials" aria-label="Social media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </section>
        <FooterLinks title="Quick Links" links={quickLinks} />
        <FooterLinks title="Core Services" links={coreServices} />
        <FooterLinks title="Specialist Solutions" links={specialistServices} />
      </div>
      <div className="footer-bottom">
        <p>© 2026 Kinetic Electromechanical. All rights reserved.</p>
      </div>
    </footer>
  );
}

function LocationIcon() {
  return <svg className="footer-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" strokeWidth="2" /><circle cx="12" cy="10" r="2.5" strokeWidth="2" /></svg>;
}

function PhoneIcon() {
  return <svg className="footer-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 4h3l2 5-2 2c1.5 3 3 4.5 6 6l2-2 5 2v3c0 1-1 2-2 2C10 21 3 14 3 5c0-1 1-1 2-1Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function EmailIcon() {
  return <svg className="footer-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" /><path d="m4 7 8 6 8-6" strokeWidth="2" /></svg>;
}

function InstagramIcon() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="2" /><circle cx="12" cy="12" r="4" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

function FooterLinks({ title, links }: { title: string; links: FooterLinkItem[] }) {
  return (
    <section className="footer-column">
      <h2>{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
