import React from 'react';
import LedTicker from '../LedTicker/LedTicker';
import { scrollToSection } from '../../utils/scrollToSection';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-stack">
        <div className="container hero-container">
        <div className="hero-content fade-in">
          <p className="hero-subtitle">CHENNAI&apos;S LED DISPLAY EXPERTS</p>
          <h1 className="hero-title">
            <span className="hero-title-line">
              <span className="text-red">Bright</span> ideas
            </span>
            <span className="hero-title-line">
              <span className="text-green">Bold</span> displays
            </span>
            <span className="hero-title-line">
              <span className="text-blue">Built</span> for you.
            </span>
          </h1>
          <p className="hero-description">
            New LED scrolling boards & video walls installed from scratch. 
            Expert repair service for existing displays. Indoor & outdoor.
          </p>
          <div className="hero-btns">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollToSection('products-services')}
            >
              Products &amp; Services
            </button>
          </div>
        </div>
        
        <div className="hero-stats fade-in">
          <div className="stat-card stat-red">
            <div className="stat-info">
              <p className="stat-label">INSTALLATIONS COMPLETED</p>
              <h2 className="stat-value">250+</h2>
            </div>
          </div>
          
          <div className="stat-grid-small">
            <div className="stat-card stat-green">
              <div className="stat-info">
                <p className="stat-label">EXPERIENCE</p>
                <h2 className="stat-value">5+ yrs</h2>
                <p className="stat-note">In Chennai</p>
              </div>
            </div>
            <div className="stat-card stat-blue">
              <div className="stat-info">
                <p className="stat-label">CLIENTS SERVED</p>
                <h2 className="stat-value">100+</h2>
                <p className="stat-note">Happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <LedTicker />
    </section>
  );
};

export default Hero;
