/* ================================================================
   dashboard.js — Dashboard page logic
   ================================================================ */

function applyDashboardTranslations() {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (key.startsWith('dashboard.')) {
      el.textContent = t(key);
    }
  });
  document.querySelectorAll("[data-translate-title]").forEach(el => {
    const key = el.getAttribute("data-translate-title");
    if (key.startsWith('dashboard.')) {
      el.setAttribute("title", t(key));
    }
  });
}

// Make function global for i18n.js
window.applyPageTranslations = applyDashboardTranslations;

document.addEventListener('DOMContentLoaded', () => {
  // Set log day badge
  setTimeout(() => {
    const user = JSON.parse(localStorage.getItem('wt_user') || 'null');
    if (!user) return;
    const startDate = new Date(user.startDate || Date.now());
    const day = Math.min(Math.max(Math.floor((new Date() - startDate) / 86400000) + 1, 1), 100);
    const badge = document.getElementById('log-day-badge');
    if (badge) badge.textContent = day;
  }, 150);

  // Ensure initDashboard runs
  if (typeof initDashboard === 'function') initDashboard();
});