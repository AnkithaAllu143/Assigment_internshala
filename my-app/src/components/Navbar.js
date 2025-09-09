import React from "react";
import "./../styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Leo9</div>
      <ul className="nav-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#knowledge">Knowledge</a></li>
      </ul>
      <button className="contact-btn">Contact</button>
    </nav>
  );
}
