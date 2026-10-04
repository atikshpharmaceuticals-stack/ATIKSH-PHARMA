/**
 * ATIKSH PHARMA - Dynamic Site Config Hydration Engine
 * Automatically reads the master configuration and applies it to DOM elements
 * matching [data-site-key] or specific IDs across public pages.
 */

document.addEventListener('DOMContentLoaded', function() {
  applySiteConfigToDOM();
});

function applySiteConfigToDOM() {
  if (typeof getSiteConfig !== 'function') return;
  const config = getSiteConfig();

  // 1. Elements with explicit data-site-key
  document.querySelectorAll('[data-site-key]').forEach(el => {
    const key = el.getAttribute('data-site-key');
    if (config[key] !== undefined) {
      if (el.tagName === 'IMG') {
        el.src = config[key];
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = config[key];
      } else {
        el.textContent = config[key];
      }
    }
  });

  // 2. Elements with data-site-html
  document.querySelectorAll('[data-site-html]').forEach(el => {
    const key = el.getAttribute('data-site-html');
    if (config[key] !== undefined) {
      el.innerHTML = config[key];
    }
  });

  // 3. Fallback targeted bindings for common layout components
  // Global phone links
  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    if (config.phone) {
      const cleanPhone = config.phone.replace(/[\s-]/g, '');
      a.href = `tel:${cleanPhone}`;
      if (a.hasAttribute('data-auto-phone')) a.textContent = config.phone;
    }
  });

  // Global email links
  document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
    if (config.email) {
      a.href = `mailto:${config.email}`;
      if (a.hasAttribute('data-auto-email')) a.textContent = config.email;
    }
  });

  // Header and footer brand texts if marked
  document.querySelectorAll('.site-company-name').forEach(el => {
    if (config.companyName) el.textContent = config.companyName;
  });

  document.querySelectorAll('.site-tagline').forEach(el => {
    if (config.tagline) el.textContent = config.tagline;
  });

  document.querySelectorAll('.site-address').forEach(el => {
    if (config.address) el.textContent = config.address;
  });

  document.querySelectorAll('.site-phone').forEach(el => {
    if (config.phone) el.textContent = config.phone;
  });

  document.querySelectorAll('.site-email').forEach(el => {
    if (config.email) el.textContent = config.email;
  });
}
