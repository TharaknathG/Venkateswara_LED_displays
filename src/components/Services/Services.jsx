import React from 'react';
import './Services.css';

const Services = () => {
  const items = [
    {
      title: 'Scrolling Boards',
      description: 'Custom LED text tickers for all businesses.',
      dotColor: 'red',
    },
    {
      title: 'Video Walls',
      description: 'Modular HD display walls, indoor & outdoor.',
      dotColor: 'green',
    },
    {
      title: 'Outdoor Boards',
      description: 'Weatherproof high-brightness displays.',
      dotColor: 'blue',
    },
    {
      title: 'Repair & Service',
      description: 'All-brand repairs, AMC & spare parts.',
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
                  <p className="service-desc">{item.description}</p>
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
