import React from "react";
import "./Services.css"; // Import the CSS styling

export default function Services() {
  const services = [
    { name: "Hair Styling", img: "/images/hair-styles.jpeg" },
    { name: "Facial Treatment", img: "/images/facial-treatment.webp" },
    { name: "Manicure & Pedicure", img: "/images/manicure-and-pedicure.jpg" }
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <div className="service-image-wrapper">
              <img src={service.img} alt={service.name} className="service-img" />
            </div>
            <h3 className="service-name">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
