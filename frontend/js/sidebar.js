/* ================================================================
   sidebar.js — Mobile sidebar toggle + theme persistence
   Include on every app page AFTER app.js and i18n.js
   ================================================================ */

(function () {
  'use strict';

  // ── Apply theme immediately (prevents flash) ──────────────────
  function applyThemeNow() {
    try {
      const s = JSON.parse(localStorage.getItem('wt_user_settings') || '{}');
      if (s.theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    } catch (_) {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  applyThemeNow();

  document.addEventListener('DOMContentLoaded', function () {

    applyThemeNow();

    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    // ── Inject toggle button ──────────────────────────────────
    let toggle = document.querySelector('.sidebar-toggle');
    if (!toggle) {
      toggle = document.createElement('button');
      toggle.className = 'sidebar-toggle';
      toggle.setAttribute('aria-label', 'Toggle sidebar');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.innerHTML = '☰';
      document.body.appendChild(toggle);
    }

    // ── Inject overlay ────────────────────────────────────────
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      document.body.appendChild(overlay);
    }

    function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('show');
      toggle.innerHTML = '✕';
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
      toggle.innerHTML = '☰';
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
    });

    overlay.addEventListener('click', closeSidebar);

    // Close sidebar when nav item clicked on mobile
    sidebar.querySelectorAll('.nav-item').forEach(function (item) {
      item.addEventListener('click', function () {
        if (window.innerWidth <= 768) closeSidebar();
      });
    });

    // Close on resize to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) closeSidebar();
    });

    // ── Active nav highlight ──────────────────────────────────
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-item').forEach(function (item) {
      var href = item.getAttribute('href') || '';
      var name = href.replace('.html', '');
      if (name && page === href) {
        item.classList.add('active');
      }
    });

    // ── Language buttons state ────────────────────────────────
    try {
      var currentLang = (typeof getCurrentLanguage === 'function') ? getCurrentLanguage() : 'bg';
      document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.classList.toggle('active', btn.textContent.trim().toLowerCase() === currentLang);
      });
    } catch (_) {}

    // ── Apply translations if available ──────────────────────
    try {
      if (typeof applyTranslations === 'function') applyTranslations();
    } catch (_) {}

    // ── Load user info into sidebar ───────────────────────────
    try {
      const user = JSON.parse(localStorage.getItem('wt_user') || 'null');
      if (user) {
        document.querySelectorAll('.user-display-name').forEach(function (el) {
          el.textContent = user.name || 'User';
        });
        document.querySelectorAll('.user-avatar-init').forEach(function (el) {
          el.textContent = (user.name || 'U').charAt(0).toUpperCase();
        });
      }
    } catch (_) {}

    // ── Logo subtitle translation ─────────────────────────────
    try {
      if (typeof getCurrentLanguage === 'function') {
        const lang = getCurrentLanguage();
        document.querySelectorAll('.logo-text small').forEach(function (el) {
          el.textContent = lang === 'en' ? '100-day challenge' : '100-дневно предизвикателство';
        });
        document.querySelectorAll('.nav-section-label').forEach(function (el) {
          if (el.textContent.trim() === 'Основно' || el.textContent.trim() === 'Main') {
            el.textContent = lang === 'en' ? 'Main' : 'Основно';
          }
        });
      }
    } catch (_) {}

  });

})();