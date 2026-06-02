import React from 'react';
import { MAPS_URL } from '../../config/maps';
import { isReviewsWidgetConfigured } from '../../config/reviewsWidget';
import { useReviewsWidget } from '../../hooks/useReviewsWidget';
import './Reviews.css';

function WidgetSetupGuide() {
  return (
    <div className="reviews-setup fade-in">
      <p className="reviews-setup-lead">
        Connect a free Trustindex widget to show live Google ratings and reviews here — no credit
        card required.
      </p>
      <ol className="reviews-setup-steps">
        <li>
          Create a free account at{' '}
          <a href="https://www.trustindex.io/" target="_blank" rel="noopener noreferrer">
            trustindex.io
          </a>
        </li>
        <li>Connect your Google listing: <strong>Venkateswara LED Display</strong></li>
        <li>Widget configurator → choose a layout → <strong>Save and get code</strong></li>
        <li>
          Copy the <code>loader.js</code> script URL into your <code>.env</code> file:
          <pre className="reviews-setup-code">{`VITE_TRUSTINDEX_LOADER_URL=https://cdn.trustindex.io/loader.js?YOUR_ID`}</pre>
        </li>
        <li>Restart the dev server (<code>npm run dev</code>)</li>
      </ol>
      <p className="reviews-setup-note">
        Alternative: Elfsight free widget — set{' '}
        <code>VITE_REVIEWS_WIDGET_PROVIDER=elfsight</code> and{' '}
        <code>VITE_ELFSIGHT_APP_ID=your-app-id</code> in <code>.env</code>.
      </p>
    </div>
  );
}

const Reviews = () => {
  const { status, provider, elfsightAppId, trustindexHostRef } = useReviewsWidget();

  const openMaps = () => {
    window.open(MAPS_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <h2 className="section-title fade-in">Google Reviews</h2>
        <p className="reviews-intro fade-in">
          Real customer ratings and reviews from our Google Maps listing.
        </p>

        {!isReviewsWidgetConfigured() ? <WidgetSetupGuide /> : null}

        {status === 'loading' ? (
          <p className="reviews-message fade-in" role="status">
            Loading reviews widget…
          </p>
        ) : null}

        {status === 'error' ? (
          <div className="reviews-fallback fade-in">
            <p className="reviews-message">
              The review widget could not load. Check your embed URL in <code>.env</code>, or view
              reviews on Google Maps.
            </p>
            <button type="button" className="btn btn-outline reviews-maps-btn" onClick={openMaps}>
              View on Google Maps
            </button>
          </div>
        ) : null}

        {isReviewsWidgetConfigured() && status !== 'error' ? (
          <div className="reviews-widget-wrap fade-in">
            {provider === 'elfsight' ? (
              <div className={`elfsight-app-${elfsightAppId}`} />
            ) : (
              <div ref={trustindexHostRef} className="reviews-widget-host" />
            )}
          </div>
        ) : null}

        <div className="reviews-footer fade-in">
          <button type="button" className="btn btn-outline reviews-maps-btn" onClick={openMaps}>
            See all reviews on Google Maps
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
