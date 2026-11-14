const highlights = [
  {
    category: "Company",
    title: "Kinetic Electromechanical Energy Outlook 2026",
    featured: true
  },
  {
    category: "Company",
    title: "Kinetic Electromechanical's Third Quarter 2026 Results",
    date: "29 October 2026"
  },
  {
    category: "Innovation",
    title: "The Energy Exchange - Which Innovations Will Shape the Future of Energy?",
    date: "02 November 2026"
  },
  {
    category: "Innovation",
    title: "Methane Emissions: Innovation Serving Enhanced Monitoring",
    date: "26 May 2026"
  }
];

export function CompanyOverviewSection() {
  return (
    <section className="company-overview" aria-labelledby="overview-title">
      <div className="highlight-grid">
        {highlights.map((highlight) => (
          <article className="highlight-card" key={highlight.title}>
            <p>{highlight.category}</p>
            <a href="#news" className={highlight.featured ? "highlight-featured" : undefined}>
              {highlight.title}
            </a>
            {highlight.date && <time dateTime="2026-10-29">{highlight.date}</time>}
          </article>
        ))}
      </div>

      <div className="overview-content">
        <div className="overview-intro">
          <h2 id="overview-title">
            Kinetic Electromechanical is a global integrated engineering company that
            produces and delivers dependable systems.
          </h2>
          <p>
            We provide the engineering the world needs: ever more affordable,
            sustainable, reliable and accessible to as many people as possible.
          </p>
        </div>

        <div className="overview-stats">
          <div className="overview-stat">
            <strong className="stat-green">40%</strong>
            <p>Our objective of reducing Scope 1+2 emissions from our operated activities by 2030</p>
          </div>
          <div className="overview-stat overview-art" aria-label="Abstract globe illustration">
            <span className="globe-orbit" />
          </div>
          <div className="overview-stat">
            <strong className="stat-blue">&gt; 100,000</strong>
            <p>employees in around 120 countries</p>
          </div>
          <div className="overview-stat">
            <strong className="stat-orange">100 years</strong>
            <p>of pioneering spirit</p>
          </div>
        </div>
      </div>
    </section>
  );
}
