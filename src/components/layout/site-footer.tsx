const quickLinks = ["About Us", "Our Services", "Project Portfolio", "Careers", "News & Updates", "Contact Us"];
const coreServices = ["Ship Repair & Maintenance", "Dry Docking", "Fabrication & Engineering", "Ship Design & Construction", "Boat & Barge Construction"];
const specialistServices = ["Electroplating", "Galvanizing", "Berthing & Jetty Services", "Foundry Services", "Electrical Motor Rewinding", "Carpentry & Furniture Works"];

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
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#twitter" aria-label="Twitter">𝕏</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#instagram" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </section>
        <FooterLinks title="Quick Links" links={quickLinks} />
        <FooterLinks title="Services" links={coreServices} />
        <FooterLinks title="Services" links={specialistServices} />
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

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <section className="footer-column">
      <h2>{title}</h2>
      <ul>
        {links.map((link) => (
          <li key={link}><a href="#services">{link}</a></li>
        ))}
      </ul>
    </section>
  );
}
