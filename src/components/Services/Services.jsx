import React from 'react';
import './Services.css';

const Services = () => {
  const items = [
    {
      title: 'Scrolling Boards',
      paragraphs: [
        'Custom LED scrolling display boards for shops, showrooms, offices, restaurants, hospitals, schools, and businesses.',
        'Bright, energy-efficient, and fully customizable text displays designed for clear visibility day and night.',
      ],
      dotColor: 'red',
    },
    {
      title: 'Video Walls',
      paragraphs: [
        'High-quality LED video walls for live video, advertisements, 2D/3D visuals, animations, events, and commercial displays.',
        'Seamless indoor and outdoor installations with stunning clarity for businesses, events, stages, malls, and public spaces.',
      ],
      dotColor: 'green',
    },
    {
      title: 'Indoor & Outdoor LED Boards',
      paragraphs: [
        'Durable indoor and outdoor LED display solutions built for maximum brightness, performance, and long-lasting reliability.',
        'Perfect for branding, advertising, announcements, digital signage, and business promotions in any environment.',
      ],
      dotColor: 'blue',
    },
    {
      title: 'Repair & Service',
      paragraphs: [
        'Complete LED display board repair, maintenance, AMC support, and servicing for all brands and models.',
        'Fast troubleshooting, panel replacement, wiring fixes, software updates, and technical support backed by 15+ years of industry experience.',
      ],
      dotColor: 'black',
    },
  ];

  return (
    <section
      className="services"
      id="products-services"
      aria-labelledby="products-services-heading"
    >
      <div className="container">
        <h2 id="products-services-heading" className="services-section-title">
          Products &amp; Services
        </h2>
        <div className="services-grid">
          {items.map((item) => (
            <div key={item.title} className="service-card fade-in">
              <div className="service-card-inner">
                <span className={`dot ${item.dotColor}`} aria-hidden />
                <div className="service-copy">
                  <h3 className="service-title">{item.title}</h3>
                  {item.paragraphs.map((text) => (
                    <p key={text} className="service-desc">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
