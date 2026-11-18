import Link from "next/link";

export default function IdentityPage() {
  return (
    <main className="identity-page">
      <div className="identity-breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">&gt;</span>
        <Link href="/about">Our Company</Link>
        <span aria-hidden="true">&gt;</span>
        <span>Our Identity</span>
      </div>

      <section className="identity-hero" aria-labelledby="identity-title">
        <div className="identity-hero-title">
          <h1 id="identity-title">Our Identity</h1>
        </div>
      </section>

      <div className="identity-intro">
        <p>
          KINETIC ELECTROMECHANIC NIGERIA LIMITED is a Premier Building Services engineering and
          Maintenance Specialists Company in Nigeria. Founded in the year 2007, offers Engineering
          Solutions in Mechanical, Electrical and Plumbing (MEP) for projects and facilities
          maintenance services with head office in Port Harcourt.
        </p>
        <p>
          We lead in emergent roles engaging latest trend in building services and facility
          maintenance. We use best available cost effective technology to give durable, functional
          and best deliverables to our Clients. We are Clients preferred, professionals&apos; choice
          in areas of Electro-Mechanical works comprising HVAC, Plumbing &amp; Drainage, Fire
          Fighting &amp; Protection and Electrical systems, we have successfully delivered iconic
          Projects in Nigeria and played significant role on the sustainability and maintenance of
          the facilities.
        </p>
        <p>
          Our value engineering assessment assist in cost effective system design and analysis to
          stretch best value for money and creates benefits for our Client. We have high HSE policy
          compliance in all our services engagements.
        </p>
      </div>

      <section className="identity-ethics" aria-labelledby="ethics-title">
        <div className="identity-ethics-image" role="img" aria-label="Kinetic Electromechanical worker" />
        <div className="identity-ethics-content">
          <h2 id="ethics-title">Our Policy</h2>
          <p>
            We rely on our values to guide our actions and relationships with our stakeholders,
            taking a collective approach to achieve our ambition of being a world-class player in
            the energy transition.
          </p>
          <Link href="/about/identity">Find out more <span aria-hidden="true">▸</span></Link>
        </div>
      </section>
    </main>
  );
}