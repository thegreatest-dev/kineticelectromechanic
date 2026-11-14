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

      <p className="identity-intro">
        Kinetic Electromechanical is a global integrated engineering company that produces and
        delivers dependable systems. Our people are committed to providing reliable, sustainable
        and accessible engineering solutions for the communities we serve.
      </p>

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