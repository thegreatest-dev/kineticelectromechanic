const partnerLogos = [
  { file: "government of rivers.jfif", name: "Government of Rivers" },
  { file: "akassa residential.jpg", name: "Akassa Residential" },
  { file: "agip.png", name: "Agip" },
  { file: "megastar.png", name: "Megastar" },
  { file: "indorama.svg", name: "Indorama" },
  { file: "nigerian national petroleum.jfif", name: "Nigerian National Petroleum" },
  { file: "ncdmb.jfif", name: "NCDMB" },
  { file: "ptdf.png", name: "PTDF" },
  { file: "rainbow town.jpg", name: "Rainbow Town" },
  { file: "silverbird.jfif", name: "Silverbird" },
  { file: "tinapa.png", name: "Tinapa" }
];

export function TrustedPartnersSection() {
  return (
    <section className="trusted-partners" aria-labelledby="trusted-partners-title">
      <p className="trusted-eyebrow">Trusted partnerships</p>
      <h2 id="trusted-partners-title">Trusted by Industry Leaders</h2>
      <div className="partner-logo-grid">
        {partnerLogos.map((partner) => (
          <div className="partner-logo" key={partner.file}>
            <img src={`/logos/${encodeURIComponent(partner.file)}`} alt={partner.name} />
          </div>
        ))}
      </div>
      <p className="trusted-description">
        Our partnerships are built on trust, technical excellence, and a shared commitment
        to advancing Nigeria&apos;s energy sector through innovation and safety.
      </p>
    </section>
  );
}
