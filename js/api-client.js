/**
 * ATIKSH PHARMA - Centralized Multi-Device Real-Time Sync Client (api-client.js)
 * Bridges browser localStorage with backend REST API so any action (adding products,
 * visitor inquiries, signups, customizer edits) works in real-time across ALL devices,
 * mobile phones, laptops, and hosted servers.
 */

const AtikshAPI = (function() {
  const BASE_URL = window.location.origin;

  async function request(endpoint, method = 'GET', data = null) {
    try {
      const opts = {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        cache: 'no-store'
      };
      if (data && (method === 'POST' || method === 'PUT')) {
        opts.body = JSON.stringify(data);
      }
      const res = await fetch(`${BASE_URL}${endpoint}`, opts);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return await res.json();
    } catch (err) {
      // Offline or network error fallback
      return null;
    }
  }

  return {
    // 1. PRODUCTS
    getProducts: async function() {
      const serverData = await request('/api/products', 'GET');
      if (Array.isArray(serverData)) {
        localStorage.setItem('atiksh_products', JSON.stringify(serverData));
        return serverData;
      }
      try {
        const local = localStorage.getItem('atiksh_products');
        return local !== null ? JSON.parse(local) : [];
      } catch (e) {
        return [];
      }
    },
    saveProducts: async function(products) {
      localStorage.setItem('atiksh_products', JSON.stringify(products));
      await request('/api/products', 'POST', products);
    },

    // 2. INQUIRIES
    getInquiries: async function() {
      const serverData = await request('/api/inquiries', 'GET');
      if (Array.isArray(serverData)) {
        localStorage.setItem('atiksh_inquiries', JSON.stringify(serverData));
        return serverData;
      }
      try {
        return JSON.parse(localStorage.getItem('atiksh_inquiries') || '[]');
      } catch (e) {
        return [];
      }
    },
    saveInquiries: async function(inquiries) {
      localStorage.setItem('atiksh_inquiries', JSON.stringify(inquiries));
      await request('/api/inquiries', 'POST', inquiries);
    },
    sendInquiry: async function(inquiry) {
      // Local immediate queue
      try {
        const local = JSON.parse(localStorage.getItem('atiksh_inquiries') || '[]');
        local.unshift(inquiry);
        localStorage.setItem('atiksh_inquiries', JSON.stringify(local));
      } catch (e) {}

      // Server post
      const res = await request('/api/inquiries', 'POST', inquiry);
      return res;
    },

    // 3. USERS
    getUsers: async function() {
      const serverData = await request('/api/users', 'GET');
      if (Array.isArray(serverData)) {
        localStorage.setItem('atiksh_registered_users', JSON.stringify(serverData));
        return serverData;
      }
      try {
        return JSON.parse(localStorage.getItem('atiksh_registered_users') || '[]');
      } catch (e) {
        return [];
      }
    },
    saveUsers: async function(users) {
      localStorage.setItem('atiksh_registered_users', JSON.stringify(users));
      await request('/api/users', 'POST', users);
    },
    registerUser: async function(user) {
      try {
        const local = JSON.parse(localStorage.getItem('atiksh_registered_users') || '[]');
        local.unshift(user);
        localStorage.setItem('atiksh_registered_users', JSON.stringify(local));
      } catch (e) {}
      return await request('/api/users', 'POST', user);
    },

    // 4. SITE CONFIGURATION (Texts, Headings, Images)
    getConfig: async function() {
      const serverConfig = await request('/api/config', 'GET');
      if (serverConfig && typeof serverConfig === 'object' && Object.keys(serverConfig).length > 0) {
        localStorage.setItem('atiksh_site_config', JSON.stringify(serverConfig));
        return serverConfig;
      }
      try {
        const local = localStorage.getItem('atiksh_site_config');
        return local ? JSON.parse(local) : null;
      } catch (e) {
        return null;
      }
    },
    saveConfig: async function(config) {
      localStorage.setItem('atiksh_site_config', JSON.stringify(config));
      await request('/api/config', 'POST', config);
    },

    // 5. ADMIN AUTH (Password)
    getAdminPassword: async function() {
      const res = await request('/api/admin/password', 'GET');
      if (res && res.password) {
        localStorage.setItem('atiksh_admin_password', res.password);
        return res.password;
      }
      return localStorage.getItem('atiksh_admin_password') || 'admin123';
    },
    saveAdminPassword: async function(newPassword) {
      localStorage.setItem('atiksh_admin_password', newPassword);
      await request('/api/admin/password', 'POST', { password: newPassword });
    }
  };
})();

// Attach globally
window.AtikshAPI = AtikshAPI;

// Initial Auto-Sync on page load across all clients
(async function initBackgroundCloudSync() {
  try {
    // 1. Sync Site Config
    const remoteConfig = await AtikshAPI.getConfig();
    if (remoteConfig && typeof applySiteConfigToDOM === 'function') {
      applySiteConfigToDOM();
    }

    // 2. Sync Products
    const remoteProds = await AtikshAPI.getProducts();
    if (remoteProds && typeof renderProductsCatalogGrid === 'function') {
      renderProductsCatalogGrid();
    }
    if (remoteProds && typeof renderHomeFeaturedProducts === 'function') {
      renderHomeFeaturedProducts();
    }
    if (remoteProds && typeof renderAdminProductsTable === 'function') {
      renderAdminProductsTable();
    }

    // 3. Sync Inquiries & Users if in Admin Panel
    if (typeof renderAdminInquiriesTable === 'function') {
      await AtikshAPI.getInquiries();
      renderAdminInquiriesTable();
    }
    if (typeof renderAdminUsersTable === 'function') {
      await AtikshAPI.getUsers();
      renderAdminUsersTable();
    }
  } catch (err) {
    console.debug('Background Cloud Sync:', err);
  }
})();
