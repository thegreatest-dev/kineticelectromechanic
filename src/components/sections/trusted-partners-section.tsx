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

const USE_MARQUEE = partnerLogos.length >= 6;

export function TrustedPartnersSection() {
  return (
    <section className="trusted-partners" aria-labelledby="trusted-partners-title">
      <p className="trusted-eyebrow">Trusted partnerships</p>
      <h2 id="trusted-partners-title">Trusted by Industry Leaders</h2>

      {USE_MARQUEE ? (
        /* Continuous marquee — duplicated track creates a seamless loop */
        <div className="marquee-viewport" aria-label="Partner logos" role="img">
          <div className="marquee-track">
            {[0, 1].map((pass) => (
              <ul className="marquee-list" key={pass} aria-hidden={pass === 1}>
                {partnerLogos.map((partner) => (
                  <li className="marquee-item" key={`${pass}-${partner.file}`}>
                    <img
                      src={`/logos/${encodeURIComponent(partner.file)}`}
                      alt={partner.name}
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ) : (
        /* Static grid with fade-in for fewer than 6 logos */
        <div className="partner-logo-grid partner-logo-grid--fade">
          {partnerLogos.map((partner) => (
            <div className="partner-logo" key={partner.file}>
              <img
                src={`/logos/${encodeURIComponent(partner.file)}`}
                alt={partner.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

      <p className="trusted-description">
        Our partnerships are built on trust, technical excellence, and a shared commitment
        to advancing Nigeria&apos;s energy sector through innovation and safety.
      </p>
    </section>
  );
}
