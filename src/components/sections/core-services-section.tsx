"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    name: "Air Conditioning Design & Installation",
    description: "Design, installation and maintenance of VRF, chiller and DX systems for residential, commercial and public facilities. Air-conditioning services include VRF systems, chillers, split and mini central systems, and services and maintenance.",
    image: "https://images.unsplash.com/photo-1631545806609-4b9c9b8f3c7c?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Electrical & High Voltage Installation",
    description: "Kinetic prides itself on being at the forefront of the design and installation of MV, LV, ELV and instrumentation systems. Our expert design, installation and service team evaluates, plans and executes projects tailored to each client’s needs. We focus on delivering value and reliable electrical equipment manufactured by leading companies.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Plumbing Systems Design & Installation",
    description: "Plumbing design and installation, including firefighting pump systems for safer buildings.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Facility Management",
    description: "Kinetic Electromechanic offers overall facility management for commercial, residential and industrial facilities. We work closely with our clients to achieve set goals and provide satisfaction, with well-trained staff and standby technicians available for emergencies while emphasizing quality, HSE and customer satisfaction.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85"
  },
  {
    name: "Mechanical Installation",
    description: "Kinetic purchases plumbing materials directly from leading manufacturers worldwide, reducing costs while ensuring the use of cutting-edge materials. Our expertise includes firefighting equipment and automatic and manual fire protection solutions. We also own the heavy equipment used in our projects, helping prevent extra fees and delays.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85"
  }
];

export function CoreServicesSection() {
  const [selectedService, setSelectedService] = useState(1);
  const service = services[selectedService];

  return (
    <section className="core-services" aria-labelledby="core-services-title">
      <div className="core-services-heading">
        <p>Our capabilities</p>
        <h2 id="core-services-title">Core engineering services</h2>
      </div>
      <div className="core-services-content">
        <nav className="service-list" aria-label="Core engineering services">
          {services.map((item, index) => (
            <button
              className={index === selectedService ? "active" : undefined}
              key={item.name}
              onClick={() => setSelectedService(index)}
              type="button"
            >
              {item.name}
            </button>
          ))}
        </nav>
        <article className="featured-service">
          <p className="featured-label">Featured</p>
          <div
            className="featured-service-image"
            role="img"
            aria-label={service.name}
            style={{ backgroundImage: `url("${service.image}")` }}
          />
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <Link className="service-link" href="/services">
            Learn more
            <img src="/icons/arrow1.png" alt="" aria-hidden="true" />
          </Link>
        </article>
      </div>
    </section>
  );
}
