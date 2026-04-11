/* ================================================================
   navbar.js — Clean, simple mobile navbar with slide animation
   ================================================================ */

(function () {
  'use strict';

  // Apply theme immediately
  function applyTheme() {
    try {
      const settings = JSON.parse(localStorage.getItem('wt_user_settings') || '{}');
      if (settings.theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    } catch (e) {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  applyTheme();

  document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    // Get or create toggle button
    let toggleBtn = document.querySelector('.sidebar-toggle');
    if (!toggleBtn) {
      toggleBtn = document.createElement('button');
      toggleBtn.className = 'sidebar-toggle';
      toggleBtn.setAttribute('aria-label', 'Toggle navigation');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '☰';
      document.body.insertBefore(toggleBtn, document.body.firstChild);
    }

    // Get or create overlay
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      document.body.appendChild(overlay);
    }

    // ── Functions ──
    const open = () => {
      sidebar.classList.add('open');
      overlay.classList.add('show');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = '✕';
    };

    const close = () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '☰';
    };

    const toggle = () => {
      if (sidebar.classList.contains('open')) {
        close();
      } else {
        open();
      }
    };

    // ── Event Listeners ──
    toggleBtn.addEventListener('click', toggle);

    // Close on overlay click
    overlay.addEventListener('click', close);

    // Nav items close sidebar after navigation (use small delay to let link work)
    sidebar.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', (e) => {
        // Let the link navigate naturally
        // Close sidebar after a short delay
        setTimeout(() => close(), 100);
      });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        close();
      }
    });

    // Close on outside click (only if click is not on nav items)
    document.addEventListener('click', (e) => {
      const isOpen = sidebar.classList.contains('open');
      const clickedNav = e.target.closest('.nav-item');
      const clickedOutside = !sidebar.contains(e.target) && !toggleBtn.contains(e.target);
      if (isOpen && clickedOutside && !clickedNav) {
        close();
      }
    });

    // Close on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && sidebar.classList.contains('open')) {
        close();
      }
    });

    // Set active nav item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    sidebar.querySelectorAll('.nav-item').forEach(item => {
      const href = item.getAttribute('href') || '';
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        item.classList.add('active');
      }
    });

    // Load user info
    try {
      const user = JSON.parse(localStorage.getItem('wt_user') || 'null');
      if (user) {
        document.querySelectorAll('.user-display-name').forEach(el => {
          el.textContent = user.name || 'User';
        });
        document.querySelectorAll('.user-avatar-init').forEach(el => {
          el.textContent = (user.name || 'U').charAt(0).toUpperCase();
        });
      }
    } catch (e) {}
  });
})();
