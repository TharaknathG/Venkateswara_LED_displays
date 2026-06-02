/**
 * Free Google reviews widget (no credit card).
 *
 * Trustindex (recommended): https://www.trustindex.io/
 * 1. Create a free account
 * 2. Connect “Venkateswara LED Display” via Google Place
 * 3. Widget configurator → Save and get code
 * 4. Copy the loader.js URL (e.g. https://cdn.trustindex.io/loader.js?xxxxxxxx)
 * 5. Paste it in .env as VITE_TRUSTINDEX_LOADER_URL
 *
 * Elfsight (alternative): https://elfsight.com/google-reviews-widget/
 * Set VITE_ELFSIGHT_APP_ID to the ID from your embed code (elfsight-app-XXXX).
 */

export const REVIEWS_WIDGET_PROVIDER =
  import.meta.env.VITE_REVIEWS_WIDGET_PROVIDER || 'trustindex';

export const TRUSTINDEX_LOADER_URL =
  import.meta.env.VITE_TRUSTINDEX_LOADER_URL?.trim() || '';

export const TRUSTINDEX_WIDGET_ID =
  import.meta.env.VITE_TRUSTINDEX_WIDGET_ID?.trim() ||
  TRUSTINDEX_LOADER_URL.split('?')[1]?.split('&')[0] ||
  '';

export const ELFSIGHT_APP_ID =
  import.meta.env.VITE_ELFSIGHT_APP_ID?.trim() || '';

export function isReviewsWidgetConfigured() {
  if (REVIEWS_WIDGET_PROVIDER === 'elfsight') {
    return Boolean(ELFSIGHT_APP_ID);
  }
  return Boolean(TRUSTINDEX_LOADER_URL && TRUSTINDEX_WIDGET_ID);
}
