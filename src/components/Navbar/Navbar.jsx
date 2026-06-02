import React from 'react';
import { scrollToSection } from '../../utils/scrollToSection';
import './Navbar.css';

const Navbar = ({ onRequestQuote = () => {} }) => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <button
          type="button"
          className="logo"
          aria-label="Venkateswara LED Displays — Home"
          onClick={() => scrollToSection('home')}
        >
          <span className="logo-word">Venkateswara</span>
          <span className="logo-led" aria-hidden>
            <span className="box red">L</span>
            <span className="box green">E</span>
            <span className="box blue">D</span>
          </span>
          <span className="logo-word">Displays</span>
        </button>

        <ul className="nav-links">
          <li>
            <button type="button" className="nav-link" onClick={() => scrollToSection('home')}>
              Home
            </button>
          </li>
          <li>
            <button type="button" className="nav-link" onClick={() => scrollToSection('products-services')}>
              Products &amp; Services
            </button>
          </li>
          <li>
            <button type="button" className="nav-link" onClick={() => scrollToSection('gallery')}>
              Gallery
            </button>
          </li>
          <li>
            <button type="button" className="nav-link" onClick={() => scrollToSection('reviews')}>
              Reviews
            </button>
          </li>
          <li>
            <button type="button" className="nav-link" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </li>
        </ul>

        <div className="nav-cta">
          <button
            type="button"
            className="btn btn-outline quote-btn"
            onClick={onRequestQuote}
          >
            Request a quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
