/**
 * ATIKSH PHARMA - Dynamic Site Config & Real-Time Live Sync Engine
 * Automatically applies master configuration to DOM elements matching [data-site-key]
 * and synchronizes changes across tabs in real-time as they are made in the Admin Panel.
 */

let _lastAppliedConfigHash = '';

function applySiteConfigToDOM() {
  if (typeof getSiteConfig !== 'function') return;
  const config = getSiteConfig();

  // 1. Elements with explicit data-site-key
  document.querySelectorAll('[data-site-key]').forEach(el => {
    const key = el.getAttribute('data-site-key');
    if (config[key] !== undefined) {
      if (el.tagName === 'IMG') {
        if (el.src !== config[key]) el.src = config[key];
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.value !== config[key]) el.value = config[key];
      } else {
        if (el.textContent !== config[key]) el.textContent = config[key];
      }
    }
  });

  // 2. Elements with data-site-html
  document.querySelectorAll('[data-site-html]').forEach(el => {
    const key = el.getAttribute('data-site-html');
    if (config[key] !== undefined) {
      if (el.innerHTML !== config[key]) el.innerHTML = config[key];
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

  // Header and footer brand texts
  document.querySelectorAll('.site-company-name').forEach(el => {
    if (config.companyName && el.textContent !== config.companyName) el.textContent = config.companyName;
  });

  document.querySelectorAll('.site-tagline').forEach(el => {
    if (config.tagline && el.textContent !== config.tagline) el.textContent = config.tagline;
  });

  document.querySelectorAll('.site-address').forEach(el => {
    if (config.address && el.textContent !== config.address) el.textContent = config.address;
  });

  document.querySelectorAll('.site-phone').forEach(el => {
    if (config.phone && el.textContent !== config.phone) el.textContent = config.phone;
  });

  document.querySelectorAll('.site-email').forEach(el => {
    if (config.email && el.textContent !== config.email) el.textContent = config.email;
  });
}

// --------------------------------------------------------------------------
// Real-Time Cross-Tab & Live Synchronization Listeners
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  applySiteConfigToDOM();
});

// 1. Cross-Tab Storage Event (Immediate instant sync when admin saves)
window.addEventListener('storage', function(e) {
  if (e.key === 'atiksh_site_config') {
    applySiteConfigToDOM();
  }
  if (e.key === 'atiksh_products') {
    if (typeof initHomeFeaturedProducts === 'function') initHomeFeaturedProducts();
    if (typeof initProductsCatalog === 'function') initProductsCatalog();
  }
  if (e.key === 'atiksh_logged_in_user' || e.key === 'atiksh_registered_users') {
    if (typeof updatePublicAuthNav === 'function') updatePublicAuthNav();
  }
});

// 2. Tab Focus & Page Visibility
window.addEventListener('focus', function() {
  applySiteConfigToDOM();
  if (typeof initHomeFeaturedProducts === 'function') initHomeFeaturedProducts();
  if (typeof initProductsCatalog === 'function') initProductsCatalog();
});

document.addEventListener('visibilitychange', function() {
  if (!document.hidden) {
    applySiteConfigToDOM();
    if (typeof initHomeFeaturedProducts === 'function') initHomeFeaturedProducts();
    if (typeof initProductsCatalog === 'function') initProductsCatalog();
  }
});

// 3. Ultra-responsive 1-second dynamic poll to reflect changes live in the background
setInterval(function() {
  applySiteConfigToDOM();
}, 1000);

// Global export
window.applySiteConfigToDOM = applySiteConfigToDOM;
