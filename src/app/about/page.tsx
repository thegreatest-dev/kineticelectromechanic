import Link from "next/link";

const companyCards = [
  {
    title: "Our identity",
    description: "Kinetic Electromechanical is a global integrated engineering company that produces and markets energy solutions.",
    image: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&w=1340&q=85"
  },
  {
    title: "Our Ambition",
    description: "Our ambition is to deliver sustainable engineering solutions that support progress and a more resilient future.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1340&q=85"
  },
  {
    title: "Our strength",
    description: "Our people, innovation and integrated business model give us the strength to deliver dependable results.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1340&q=85"
  },
  {
    title: "Our expertise",
    description: "We have developed cutting-edge expertise across engineering, installation and facility management.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1340&q=85"
  }
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">&gt;</span>
        <span>Our Company</span>
      </div>

      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-overlay">
          <h1 id="about-title">Our Company</h1>
          <div className="about-actions">
            <Link href="#about-overview">Get to know us</Link>
            <Link href="/projects">Discover our projects</Link>
          </div>
        </div>
      </section>

      <section className="company-cards" id="about-overview" aria-label="About our company">
        {companyCards.map((card) => (
          <article className="company-card" key={card.title}>
            <div
              className="company-card-image"
              role="img"
              aria-label={card.title}
              style={{ backgroundImage: `url("${card.image}")` }}
            />
            <div className="company-card-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <Link href="/about/identity">Find out more <span aria-hidden="true">▸</span></Link>
            </div>
          </article>
        ))}
      </section>

      <section className="projects-feature" aria-labelledby="projects-feature-title">
        <div className="projects-feature-copy">
          <p className="projects-feature-eyebrow">Engineering solutions across Nigeria</p>
          <h2 id="projects-feature-title">Explore our projects</h2>
          <p className="projects-feature-description">
            See how our building services and facilities maintenance expertise supports projects
            and helps keep vital facilities performing.
          </p>
          <Link className="projects-feature-link" href="/projects">Discover our projects</Link>
        </div>
        <div
          className="projects-feature-image"
          role="img"
          aria-label="Building services engineering project"
        />
      </section>
    </main>
  );
}
