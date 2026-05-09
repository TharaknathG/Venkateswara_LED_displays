import React from 'react';
import './Footer.css';

/** Google Maps — Venkateswara LED Display, Medavakkam */
const MAPS_URL =
  'https://www.google.com/maps/place/Venkateswara+LED+Display/data=!4m2!3m1!1s0x0:0x468652e7ef449f8e';

const PHONE_TEL = 'tel:+919840430656';
const EMAIL_MAILTO = 'mailto:jbnarayanan@gmail.com';

function IconPhone() {
  return (
    <svg className="footer-pill-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="footer-pill-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg className="footer-pill-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-led" aria-hidden>
          <span className="logo-red">L</span>
          <span className="logo-green">E</span>
          <span className="logo-blue">D</span>
        </div>

        <p className="footer-tagline">
          Venkateswara LED Displays — Sales and Services, Chennai
        </p>

        <div className="footer-pills">
          <button
            type="button"
            className="footer-pill"
            aria-label="Call +91 98404 30656"
            onClick={() => {
              window.location.href = PHONE_TEL;
            }}
          >
            <IconPhone />
            <span>+91 98404 30656</span>
          </button>
          <button
            type="button"
            className="footer-pill footer-pill--email"
            aria-label="Email jbnarayanan@gmail.com"
            title="jbnarayanan@gmail.com"
            onClick={() => {
              window.location.href = EMAIL_MAILTO;
            }}
          >
            <IconMail />
            <span className="footer-pill-email-text">jbnarayanan@gmail.com</span>
          </button>
          <button
            type="button"
            className="footer-pill footer-pill--maps"
            aria-label="Open location in Google Maps"
            onClick={() => {
              window.open(MAPS_URL, '_blank', 'noopener,noreferrer');
            }}
          >
            <IconMapPin />
            <span>Google Maps</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
