/**
 * Scroll to an element by id (with or without leading #) and set the URL hash.
 * Using buttons + this helper avoids the browser status bar showing full `href` on hover.
 */
export function scrollToSection(id) {
  const clean = String(id).replace(/^#/, '');
  const el = document.getElementById(clean);
  if (!el) return;
  window.history.pushState(null, '', `#${clean}`);
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
