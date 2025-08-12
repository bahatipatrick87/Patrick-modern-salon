import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Patrick Salon
        </Link>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
          <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
          <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
        </button>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" end activeClassName="active" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active" onClick={() => setIsOpen(false)}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" activeClassName="active" onClick={() => setIsOpen(false)}>
              Booking
            </NavLink>
          </li>
          <li>
            <NavLink to="/appointment" activeClassName="active" onClick={() => setIsOpen(false)}>
              Appointment
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
