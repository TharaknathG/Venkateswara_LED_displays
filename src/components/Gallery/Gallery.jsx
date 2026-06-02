import React, { useEffect, useState } from 'react';
import './Gallery.css';

const photos = [
  {
    src: '/images/gallery-1.png',
    title: 'L&T Construction — Project Countdown Board',
    category: 'Custom Displays',
  },
  {
    src: '/images/gallery-2.png',
    title: 'Outdoor Real Estate LED Board',
    category: 'Outdoor Displays',
  },
  {
    src: '/images/gallery-3.png',
    title: 'Pearl Construction — Scrolling Board',
    category: 'Scrolling Boards',
  },
  {
    src: '/images/gallery-4.png',
    title: 'Kutty Dance Studio — LED Signage',
    category: 'Storefront Signage',
  },
  {
    src: '/images/gallery-5.png',
    title: 'Hotel Shri Veg — Scrolling Display',
    category: 'Scrolling Boards',
  },
  {
    src: '/images/gallery-6.png',
    title: 'Pearl Clinic — Outdoor LED Board',
    category: 'Outdoor Displays',
  },
];

function MediaOverlay({ category, title }) {
  return (
    <div className="gallery-overlay">
      <span className="gallery-category">{category}</span>
      <h3 className="gallery-title">{title}</h3>
    </div>
  );
}

function GalleryLightbox({ photo, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        className="gallery-lightbox-close"
        onClick={onClose}
        aria-label="Close image"
      >
        ×
      </button>
      <figure className="gallery-lightbox-figure">
        <img src={photo.src} alt={photo.title} className="gallery-lightbox-image" />
        <figcaption className="gallery-lightbox-caption">
          <span className="gallery-lightbox-category">{photo.category}</span>
          <span className="gallery-lightbox-title">{photo.title}</span>
        </figcaption>
      </figure>
    </div>
  );
}

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const activePhoto = activeIndex != null ? photos[activeIndex] : null;

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title fade-in">Featured Installations</h2>

        <div className="gallery-grid">
          {photos.map((item, index) => (
            <figure key={item.src} className="gallery-item fade-in">
              <button
                type="button"
                className="gallery-item-btn"
                onClick={() => setActiveIndex(index)}
                aria-label={`View larger: ${item.title}`}
              >
                <img src={item.src} alt="" className="gallery-media" loading="lazy" />
                <MediaOverlay category={item.category} title={item.title} />
              </button>
            </figure>
          ))}
        </div>
      </div>

      {activePhoto ? (
        <GalleryLightbox photo={activePhoto} onClose={() => setActiveIndex(null)} />
      ) : null}
    </section>
  );
};

export default Gallery;
