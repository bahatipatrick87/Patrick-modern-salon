import React from "react";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Patrick Modern Salon</h1>
        <p>Luxury hair & beauty services for your perfect look</p>
        <button href="/booking" passHref>Book Now</button>
      </section>
    </div>
  );
}
