/* ================================================================
   navbar.js — Mobile sidebar with smooth slide animation
   
   FIXES vs previous version:
   - Overlay z-index is now BELOW sidebar (400 vs 450) — clicks
     inside the open sidebar are no longer blocked by the overlay
   - Removed duplicate close triggers (overlay click + document
     click were both firing, causing flicker / double-close)
   - Added body scroll-lock while sidebar is open on mobile
   - Escape key closes sidebar
   - Resize to desktop auto-closes sidebar
   ================================================================ */

(function () {
  'use strict';

  /* ── Apply saved theme immediately to prevent flash ── */
  (function applyTheme() {
    try {
      const s = JSON.parse(localStorage.getItem('wt_user_settings') || '{}');
      if (s.theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    } catch (e) {
      document.documentElement.removeAttribute('data-theme');
    }
  })();

  document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    /* ── Get or inject toggle button ── */
    let toggleBtn = document.querySelector('.sidebar-toggle');
    if (!toggleBtn) {
      toggleBtn = document.createElement('button');
      toggleBtn.className = 'sidebar-toggle';
      toggleBtn.setAttribute('aria-label', 'Toggle navigation');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '☰';
      document.body.insertBefore(toggleBtn, document.body.firstChild);
    }

    /* ── Get or inject overlay ──
       The overlay must be a SIBLING of .sidebar in the DOM,
       NOT inside it, so it covers the main content only.      */
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      /* Insert after sidebar so DOM order matches stacking */
      sidebar.insertAdjacentElement('afterend', overlay);
    }

    /* ================================================================
       State helpers
       ================================================================ */
    let isOpen = false;

    function openSidebar() {
      if (isOpen) return;
      isOpen = true;
      sidebar.classList.add('open');
      overlay.classList.add('show');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = '✕';
      /* Lock body scroll on mobile so background doesn't scroll */
      if (window.innerWidth <= 768) {
        document.body.style.overflow = 'hidden';
      }
    }

    function closeSidebar() {
      if (!isOpen) return;
      isOpen = false;
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '☰';
      document.body.style.overflow = '';
    }

    /* ================================================================
       Event listeners
       ================================================================ */

    /* Toggle button */
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isOpen ? closeSidebar() : openSidebar();
    });

    /* Overlay click — close sidebar
       Use pointer-events in CSS (none when hidden) so this only
       fires when the overlay is actually visible.               */
    overlay.addEventListener('click', closeSidebar);

    /* Nav item clicks — let link navigate, then close */
    sidebar.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        /* Small delay so the browser processes the href first */
        setTimeout(closeSidebar, 80);
      });
    });

    /* Escape key */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closeSidebar();
    });

    /* Resize — close if window grows past mobile breakpoint */
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && isOpen) closeSidebar();
    });

    /* ================================================================
       Active nav item
       ================================================================ */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    sidebar.querySelectorAll('.nav-item').forEach(item => {
      /* Remove any hardcoded active classes first */
      item.classList.remove('active');
      const href = item.getAttribute('href') || '';
      const pageName = href.split('/').pop();
      if (
        pageName === currentPage ||
        (currentPage === '' && pageName === 'index.html')
      ) {
        item.classList.add('active');
      }
    });

    /* ================================================================
       Load user display name / avatar initial
       ================================================================ */
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
    } catch (e) { /* ignore */ }

  });
})();