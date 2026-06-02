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
          <p className="hero-subtitle">CHENNAI&apos;S TRUSTED LED DISPLAY EXPERTS</p>
          <h1 className="hero-title">
            <span className="hero-title-line">
              <span className="text-red">Bright</span> Displays
            </span>
            <span className="hero-title-line">
              <span className="text-green">Powerful</span> Visuals
            </span>
            <span className="hero-title-line">
              <span className="text-blue">Built</span> for Business.
            </span>
          </h1>
          <p className="hero-description">
            Professional LED scrolling boards, video walls, indoor &amp; outdoor display solutions,
            installation, repair, and maintenance services backed by 15+ years of experience and
            500+ successful projects.
          </p>
          <div className="hero-btns">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollToSection('products-services')}
            >
              Explore Services
            </button>
          </div>
        </div>
        
        <div className="hero-stats fade-in">
          <div className="stat-card stat-red">
            <div className="stat-info">
              <p className="stat-label">INSTALLATIONS COMPLETED</p>
              <h2 className="stat-value">500+</h2>
            </div>
          </div>
          
          <div className="stat-grid-small">
            <div className="stat-card stat-green">
              <div className="stat-info">
                <p className="stat-label">EXPERIENCE</p>
                <h2 className="stat-value">15+ yrs</h2>
              </div>
            </div>
            <div className="stat-card stat-blue">
              <div className="stat-info">
                <p className="stat-label">HAPPY CLIENTS</p>
                <h2 className="stat-value">500+</h2>
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
