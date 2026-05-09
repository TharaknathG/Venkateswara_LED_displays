import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    {
      url: '/images/video-wall.png',
      title: 'HD Video Wall Installation',
      category: 'Video Walls'
    },
    {
      url: '/images/scrolling-board.png',
      title: 'Outdoor Scrolling Display',
      category: 'Scrolling Boards'
    }
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title fade-in">Featured Installations</h2>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item fade-in">
              <img src={img.url} alt={img.title} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="gallery-category">{img.category}</span>
                <h3 className="gallery-title">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
