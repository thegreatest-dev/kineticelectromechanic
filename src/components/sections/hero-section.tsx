"use client";

import Link from "next/link";
import { useState } from "react";

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-image" role="img" aria-label="Engineer inspecting an industrial energy facility">
        <div className="image-overlay" />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">Kinetic electromechanical</p>
        <h1 id="hero-title">
          <span className="hero-title-line">Engineering motion —</span>
          <span className="hero-title-line">powering a more</span>
          <span className="hero-title-line">dynamic future.</span>
        </h1>
        <p className="hero-description">
          We design dependable electromechanical systems that move industries
          forward and shape the infrastructure of tomorrow.
        </p>
        <Link className="hero-button" href="/projects">Explore our work</Link>
        <div className="hero-controls" aria-label="Hero carousel controls">
          <button
            type="button"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            onClick={() => setIsPlaying((playing) => !playing)}
          >
            <img
              src={isPlaying ? "/icons/pause.png" : "/icons/play.png"}
              alt=""
              aria-hidden="true"
            />
          </button>
          <button type="button" aria-label="Previous slide">
            <img className="arrow-previous" src="/icons/arrow.png" alt="" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next slide">
            <img src="/icons/arrow.png" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="hero-progress" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
